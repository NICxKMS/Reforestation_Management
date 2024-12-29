import { forestDatabase, forestDataHelpers } from './forestData.js';
import { chatModule } from './chat/chatModule.js';

// Map Core Configuration and Setup
const map = L.map('map', {
    zoomControl: true, 
    zoomSnap: 0.1,
    zoomDelta: 0.5,
    wheelPxPerZoomLevel: 120,
    smoothWheelZoom: true,
    smoothSensitivity: 1
}).setView([0, 0], 3);

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        map.invalidateSize(true);
    }, 100);
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const forestLayer = L.tileLayer('https://earthengine.google.org/static/hansen_2013/gain_alpha/{z}/{x}/{y}.png', {
    opacity: 0.8,
    attribution: 'Hansen/UMD/Google/USGS/NASA'
}).addTo(map);

const treeCoverDensity = L.tileLayer('https://earthengine.google.org/static/hansen_2013/tree_alpha/{z}/{x}/{y}.png', {
    opacity: 0.7
}).addTo(map);

const baseLayers = {
    "OpenStreetMap": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
    "Satellite": L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}')
};

const overlays = {
    "Forest Cover": forestLayer,
    "Tree Density": treeCoverDensity
};

L.control.layers(baseLayers, overlays, {
    position: 'topleft',
    collapsed: true,
}).addTo(map);

const layerControl = document.querySelector('.leaflet-control-layers');
if (layerControl) {
    layerControl.style.marginTop = '60px';
}

// Create markers and circles for popular forests
const forestMarkers = L.featureGroup().addTo(map);

forestDatabase.forests.forEach(forest => {
    const marker = L.marker(forest.coords)
        .bindPopup(`<b>${forest.name}</b><br>Click to view details`)
        .on('click', () => showForestDetails(forest));

    const minRadius = 50000;
    const maxRadius = 2000000;
    const adjustedRadius = Math.min(Math.max(forest.radius, minRadius), maxRadius);
    
    const circle = L.circle(forest.coords, {
        color: '#2ecc71',
        fillColor: '#27ae60',
        fillOpacity: 0.2,
        radius: adjustedRadius,
        weight: 1.5
    });

    forestMarkers.addLayer(marker);
    forestMarkers.addLayer(circle);
});

map.fitBounds(forestMarkers.getBounds(), {
    padding: [50, 50],
    maxZoom: 5
});

// Forest Info and Additional Functionality
const AUTHOR = {
    name: "Nikhil Kumar",
    github: "https://github.com/NICxKMS"
};

// Ensure forest info div exists
document.addEventListener('DOMContentLoaded', () => {
    // Create forest info div if it doesn't exist
    if (!document.getElementById('forest-info')) {
        const infoDiv = document.createElement('div');
        infoDiv.id = 'forest-info';
        infoDiv.style.display = 'none';
        document.body.appendChild(infoDiv);
    }
    
    // Ensure chat trigger button exists
    if (!document.getElementById('chat-trigger')) {
        const chatTrigger = document.createElement('button');
        chatTrigger.id = 'chat-trigger';
        chatTrigger.className = 'chat-trigger';
        chatTrigger.innerHTML = '<span class="icon">💭</span>Chat about this forest';
        document.body.appendChild(chatTrigger);
    }
    
    setupTopBarBehavior();
    setupDraggablePanel();
});

function showForestDetails(forest) {
    const infoDiv = document.getElementById('forest-info');
    if (!infoDiv) return;
    
    const metrics = calculateLocalMetrics(forest);
    
    infoDiv.style.transform = 'translate(0, 0)';
    infoDiv.style.display = 'block';
    infoDiv.style.opacity = '1';
    
    // Update chat trigger button visibility and handler
    const chatTrigger = document.getElementById('chat-trigger');
    if (chatTrigger) {
        chatTrigger.style.display = 'flex';
        chatTrigger.onclick = () => startForestChat(forest.id);
    }
    
    // Rest of the forest info HTML (remove the chat-forest-btn)
    infoDiv.innerHTML = `
        <div id="forest-info-header">
            <div class="header-content">
                <h3>${forest.name}</h3>
                <span class="location">${forest.country}</span>
            </div>
            <button class="close-btn" onclick="closeForestInfo()">×</button>
        </div>

        <div class="forest-status-bar">
            <div class="status-item">
                <span class="label">Health</span>
                <div class="progress-bar">
                    <div class="fill" style="width: ${metrics.healthScore}%"></div>
                </div>
                <span class="value">${metrics.healthScore}%</span>
            </div>
            <div class="status-badge ${metrics.conservationStatus.toLowerCase()}">${metrics.conservationStatus}</div>
        </div>

        <div class="forest-tabs">
            <button class="tab-btn active" onclick="showTab('overview')">Overview</button>
            <button class="tab-btn" onclick="showTab('biodiversity')">Wildlife</button>
            <button class="tab-btn" onclick="showTab('trends')">Trends</button>
            <button class="tab-btn" onclick="showTab('conservation')">Conservation</button>
        </div>

        <div id="overview" class="tab-content active">
            <div class="info-grid">
                <div class="info-card">
                    <h4>Forest Type</h4>
                    <p>${forest.type}</p>
                </div>
                <div class="info-card">
                    <h4>Total Area</h4>
                    <p>${forest.area.total}</p>
                </div>
                <div class="info-card">
                    <h4>Current Area</h4>
                    <p>${forest.area.current}</p>
                </div>
                <div class="info-card">
                    <h4>Total Loss</h4>
                    <p>${forest.historicalData.totalLoss}</p>
                </div>
            </div>
        </div>

        <div id="biodiversity" class="tab-content">
            <div class="species-overview">
                <p class="species-count">${forest.biodiversity.species}</p>
            </div>
            <div class="species-lists">
                <div class="endangered-species">
                    <h4>Endangered Species</h4>
                    <ul class="species-grid">
                        ${forest.biodiversity.endangered.map(species => 
                            `<li class="species-item">${species}</li>`).join('')}
                    </ul>
                </div>
                <div class="key-species">
                    <h4>Key Species & Roles</h4>
                    <ul class="role-list">
                        ${forest.biodiversity.keySpecies.map(species => 
                            `<li>
                                <span class="species-name">${species.name}</span>
                                <span class="species-role">${species.role}</span>
                            </li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>

        <div id="trends" class="tab-content">
            <div class="trends-summary">
                <h4>Forest Change Overview</h4>
                <p>Total loss: ${forest.historicalData.totalLoss}</p>
                <button class="view-trends-btn" onclick="showDetailedTrends(${JSON.stringify(forest.historicalData.annualLoss)})">
                    View Detailed Trends
                </button>
            </div>
            <div class="threats-panel">
                ${forest.historicalData.primaryThreats.map(threat => `
                    <div class="threat-card ${threat.impact.toLowerCase()}">
                        <h5>${threat.threat}</h5>
                        <div class="threat-details">
                            <span class="impact">Impact: ${threat.impact}</span>
                            <span class="trend ${threat.trend.toLowerCase()}">${threat.trend}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div id="conservation" class="tab-content">
            <div class="conservation-status">
                <h4>Conservation Status</h4>
                <p class="status-label">${forest.conservation.status}</p>
            </div>
            <div class="conservation-projects">
                <h4>Active Projects</h4>
                <div class="project-cards">
                    ${forest.conservation.projects.map(project => `
                        <div class="project-card">
                            <h5>${project.name}</h5>
                            <span class="project-type">${project.type}</span>
                            <p class="project-impact">${project.impact}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            <div class="initiatives">
                <h4>Initiatives</h4>
                <div class="initiative-tags">
                    ${forest.conservation.initiatives.map(initiative => 
                        `<span class="initiative-tag">${initiative}</span>`).join('')}
                </div>
            </div>
        </div>

        <div class="actions-bar">
            <button class="action-btn" onclick="zoomToForest([${forest.coords}], ${forest.radius})">
                <span class="icon">🎯</span> Focus Forest
            </button>
        </div>
    `;
    
    createLossChart(forest.historicalData.annualLoss.slice(0, 10).reverse());

    // Update the trends button click handler
    const trendsBtn = infoDiv.querySelector('.view-trends-btn');
    if (trendsBtn) {
        trendsBtn.onclick = () => createLossChart(forest.historicalData.annualLoss);
    }
}

function createLossChart(data) {
    // Remove any existing chart modal
    const existingModal = document.querySelector('.chart-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const chartModal = document.createElement('div');
    chartModal.className = 'chart-modal';
    chartModal.innerHTML = `
        <div class="chart-container">
            <div class="chart-header">
                <h3>Forest Loss/Gain Trends</h3>
                <button class="close-chart-btn">&times;</button>
            </div>
            <div class="chart-controls">
                <select id="yearRange">
                    <option value="5">Last 5 Years</option>
                    <option value="10" selected>Last 10 Years</option>
                    <option value="all">All Years</option>
                </select>
                <div class="chart-type-toggle">
                    <button class="chart-type-btn active" data-type="bar">Bar</button>
                    <button class="chart-type-btn" data-type="line">Line</button>
                </div>
            </div>
            <div style="flex: 1; position: relative;">
                <canvas id="trendChart"></canvas>
            </div>
        </div>
    `;

    document.body.appendChild(chartModal);
    
    // Show modal with animation
    requestAnimationFrame(() => {
        chartModal.classList.add('visible');
    });

    let currentChart = null;
    const chartContainer = chartModal.querySelector('.chart-container');
    
    // Add event listeners for chart controls
    chartContainer.querySelector('#yearRange').addEventListener('change', (e) => {
        const years = parseInt(e.target.value);
        let filteredData = data;
        if (years !== 'all') {
            filteredData = data.slice(0, years).reverse();
        }
        updateChart(filteredData, currentChart.config.type);
    });

    chartContainer.querySelectorAll('.chart-type-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = e.target.dataset.type;
            chartContainer.querySelectorAll('.chart-type-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            updateChart(data, type);
        });
    });

    function updateChart(chartData, chartType) {
        if (currentChart) {
            currentChart.destroy();
        }

        const ctx = document.getElementById('trendChart').getContext('2d');
        currentChart = new Chart(ctx, {
            type: chartType,
            data: {
                labels: chartData.map(item => item.year),
                datasets: [{
                    label: 'Forest Loss',
                    data: chartData.map(item => parseInt(item.loss.replace(/[^0-9]/g, ''))),
                    backgroundColor: 'rgba(231, 76, 60, 0.6)',
                    borderColor: 'rgba(231, 76, 60, 1)',
                    borderWidth: 1,
                    fill: chartType === 'line' ? false : true
                },
                {
                    label: 'Forest Gain',
                    data: chartData.map(item => parseInt(item.gain.replace(/[^0-9]/g, ''))),
                    backgroundColor: 'rgba(46, 204, 113, 0.6)',
                    borderColor: 'rgba(46, 204, 113, 1)',
                    borderWidth: 1,
                    fill: chartType === 'line' ? false : true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Hectares'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Year'
                        }
                    }
                },
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear'
                    }
                }
            }
        });
    }

    // Initialize chart with default settings (bar chart, all years)
    setTimeout(() => {
        updateChart(data.reverse(), 'bar');
    }, 100);

    // Event listeners
    chartModal.querySelector('.close-chart-btn').addEventListener('click', () => {
        chartModal.classList.remove('visible');
        setTimeout(() => chartModal.remove(), 300);
    });

    // Close on background click
    chartModal.addEventListener('click', (e) => {
        if (e.target === chartModal) {
            chartModal.classList.remove('visible');
            setTimeout(() => chartModal.remove(), 300);
        }
    });
}

function initializeChart(ctx, data) {
    // ... existing chart initialization code ...
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(item => item.year),
            datasets: [{
                label: 'Forest Loss',
                data: data.map(item => parseInt(item.loss.replace(/[^0-9]/g, ''))),
                backgroundColor: 'rgba(231, 76, 60, 0.6)',
                borderColor: 'rgba(231, 76, 60, 1)',
                borderWidth: 1
            },
            {
                label: 'Forest Gain',
                data: data.map(item => parseInt(item.gain.replace(/[^0-9]/g, ''))),
                backgroundColor: 'rgba(46, 204, 113, 0.6)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return chart;
}

// Add close function
window.closeForestInfo = function(e) {
    if (e) e.stopPropagation(); // Prevent event from bubbling
    const infoDiv = document.getElementById('forest-info');
    const chatTrigger = document.getElementById('chat-trigger');
    
    if (chatTrigger) {
        chatTrigger.style.display = 'none';
        chatTrigger.onclick = null; // Remove the click handler
    }
    
    if (!infoDiv) return;
    
    infoDiv.style.opacity = '0';
    setTimeout(() => {
        infoDiv.style.display = 'none';
        infoDiv.style.opacity = '1';
        infoDiv.style.transform = 'translate(0, 0)';
    }, 200);
};

// Window functions needed for UI interaction
window.showTab = function(tabId) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
};

window.zoomToForest = function(coords, radius) {
    const bounds = L.latLng(coords).toBounds(radius);
    const zoomLevel = map.getBoundsZoom(bounds);
    
    map.flyTo(coords, zoomLevel - 0.5, {
        duration: 1.5,
        easeLinearity: 0.25,
        animate: true,
        padding: [50, 50]
    });
};

// Add top bar toggle functionality
window.toggleTopBar = function() {
    const topBar = document.querySelector('.top-bar');
    const map = document.getElementById('map');
    const isCollapsed = topBar.classList.toggle('collapsed');
    
    // Update map container position
    map.style.top = isCollapsed ? '30px' : '50px';
    map.invalidateSize();
};

// Update the auto-collapse behavior
function setupTopBarBehavior() {
    const topBar = document.querySelector('.top-bar');
    let isMouseNear = false;
    let collapseTimer;

    function scheduleCollapse() {
        clearTimeout(collapseTimer);
        if (!isMouseNear) {
            collapseTimer = setTimeout(() => {
                topBar.classList.add('collapsed');
            }, 3000); // Wait 3 seconds before collapsing
        }
    }

    // Initialize collapsed state
    setTimeout(() => {
        topBar.classList.add('collapsed');
    }, 5000); // Initial collapse after 5 seconds

    document.addEventListener('mousemove', (e) => {
        isMouseNear = e.clientY <= 100;
        if (isMouseNear) {
            topBar.classList.remove('collapsed');
            clearTimeout(collapseTimer);
        } else {
            scheduleCollapse();
        }
    });

    // Prevent collapse while interacting with top bar
    topBar.addEventListener('mouseenter', () => {
        clearTimeout(collapseTimer);
        isMouseNear = true;
        topBar.classList.remove('collapsed');
    });

    topBar.addEventListener('mouseleave', () => {
        isMouseNear = false;
        scheduleCollapse();
    });
}

// Simplified setupDraggablePanel:
function setupDraggablePanel() {
    const forestInfo = document.getElementById('forest-info');
    if (!forestInfo) return;

    const handlers = {
        start: function(e) {
            const isHeader = e.target.closest('#forest-info-header');
            const isButton = e.target.closest('button');
            if (!isHeader || isButton) return;

            e.preventDefault();
            const evt = e.type === 'touchstart' ? e.touches[0] : e;
            const rect = forestInfo.getBoundingClientRect();
            
            this.isDragging = true;
            this.startX = evt.clientX - rect.left;
            this.startY = evt.clientY - rect.top;
            forestInfo.classList.add('dragging');
        },
        move: function(e) {
            if (!this.isDragging) return;
            e.preventDefault();

            const evt = e.type === 'touchmove' ? e.touches[0] : e;
            const x = evt.clientX - this.startX;
            const y = evt.clientY - this.startY;

            const maxX = window.innerWidth - forestInfo.offsetWidth;
            const maxY = window.innerHeight - forestInfo.offsetHeight;
            
            requestAnimationFrame(() => {
                forestInfo.style.transform = `translate(${
                    Math.max(0, Math.min(x, maxX))}px, ${
                    Math.max(0, Math.min(y, maxY))}px)`;
            });
        },
        end: function() {
            if (!this.isDragging) return;
            this.isDragging = false;
            forestInfo.classList.remove('dragging');
        }
    };

    // Single event registration with binding
    forestInfo.addEventListener('mousedown', handlers.start.bind(handlers));
    forestInfo.addEventListener('touchstart', handlers.start.bind(handlers));
    window.addEventListener('mousemove', handlers.move.bind(handlers));
    window.addEventListener('touchmove', handlers.move.bind(handlers));
    window.addEventListener('mouseup', handlers.end.bind(handlers));
    window.addEventListener('touchend', handlers.end.bind(handlers));
}

function calculateLocalMetrics(forest) {
    // Calculate basic metrics for the forest
    const currentArea = parseInt(forest.area.current.replace(/[^0-9]/g, ''));
    const originalArea = parseInt(forest.area.original.replace(/[^0-9]/g, ''));
    const healthScore = Math.round((currentArea / originalArea) * 100);
    
    return {
        healthScore,
        conservationStatus: forestDataHelpers.getConservationStatus(forest),
        annualLossRate: forestDataHelpers.calculateAnnualLossRate(forest)
    };
}

// Initialize all features
document.addEventListener('DOMContentLoaded', () => {
    setupTopBarBehavior();
    setupDraggablePanel();
});

window.showDetailedTrends = function(data) {
    createLossChart(data);
};

// Initialize the chat functionality
window.startForestChat = function(forestId) {
    const forest = forestDatabase.forests.find(f => f.id === forestId);
    if (forest) {
        chatModule.cleanup();
        chatModule.initialize(forest);
    }
};

export {
    map,
    forestMarkers,
    showForestDetails,
    createLossChart
};

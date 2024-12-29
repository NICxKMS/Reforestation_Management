const forestDatabase = {
    forests: [
        {
            id: "amazon",
            name: "Amazon Rainforest",
            coords: [-3.4653, -62.2159],
            radius: 2000000,
            country: "Brazil",
            type: "Tropical Rainforest",
            area: {
                total: "5.5 million km²",
                original: "5.5 million km²",
                current: "5.1 million km²"
            },
            biodiversity: {
                species: "40,000+ plant species, 1,300+ bird species",
                endangered: [
                    "Red-faced Spider Monkey",
                    "Giant Otter",
                    "Jaguar",
                    "Harpy Eagle",
                    "Black Caiman"
                ],
                endemic: "2,500 fish species, 430 mammals",
                keySpecies: [
                    { name: "Brazil Nut Tree", role: "Keystone species" },
                    { name: "Capybara", role: "Ecosystem engineer" }
                ]
            },
            historicalData: {
                annualLoss: [
                    { year: 2023, loss: "1,012,000 hectares", gain: "42,000 hectares" },
                    { year: 2022, loss: "986,000 hectares", gain: "38,000 hectares" },
                    { year: 2021, loss: "1,308,000 hectares", gain: "35,000 hectares" },
                    { year: 2020, loss: "1,276,000 hectares", gain: "31,000 hectares" },
                    { year: 2019, loss: "1,154,000 hectares", gain: "29,000 hectares" },
                    { year: 2018, loss: "947,000 hectares", gain: "33,000 hectares" },
                    { year: 2017, loss: "926,000 hectares", gain: "28,000 hectares" },
                    { year: 2016, loss: "911,000 hectares", gain: "26,000 hectares" },
                    { year: 2015, loss: "897,000 hectares", gain: "25,000 hectares" },
                    { year: 2014, loss: "865,000 hectares", gain: "24,000 hectares" }
                ],
                totalLoss: "17% since 1970",
                primaryThreats: [
                    { threat: "Deforestation", impact: "High", trend: "Increasing" },
                    { threat: "Mining", impact: "Medium", trend: "Stable" },
                    { threat: "Agriculture", impact: "High", trend: "Increasing" },
                    { threat: "Climate Change", impact: "High", trend: "Increasing" }
                ]
            },
            conservation: {
                status: "UNESCO World Heritage Site",
                projects: [
                    {
                        name: "Amazon Fund",
                        type: "Financial mechanism",
                        impact: "2.7 million hectares protected"
                    },
                    {
                        name: "REDD+",
                        type: "Carbon credits",
                        impact: "Reduced deforestation by 30% in project areas"
                    }
                ],
                initiatives: ["Indigenous Land Protection", "Sustainable Agriculture", "Anti-logging Patrols"]
            }
        },
       // ...existing code...
        {
            id: "daintree",
            name: "Daintree Rainforest",
            coords: [-16.2500, 145.4167],
            radius: 500000,
            country: "Australia",
            type: "Tropical Rainforest",
            area: {
                total: "1,200 km²",
                original: "1,200 km²",
                current: "1,100 km²"
            },
            biodiversity: {
                species: "3,000+ plant species, 430 bird species",
                endangered: [
                    "Southern Cassowary",
                    "Daintree River Turtle",
                    "Regent Bowerbird"
                ],
                endemic: "200 fish species, 50 mammals",
                keySpecies: [
                    { name: "Wompoo Fruit Dove", role: "Seed disperser" },
                    { name: "Daintree Tree Frog", role: "Insect controller" }
                ]
            },
            historicalData: {
                annualLoss: [
                    { year: 2023, loss: "10,500 hectares", gain: "500 hectares" },
                    { year: 2022, loss: "10,200 hectares", gain: "450 hectares" },
                    { year: 2021, loss: "10,800 hectares", gain: "400 hectares" },
                    { year: 2020, loss: "10,600 hectares", gain: "350 hectares" },
                    { year: 2019, loss: "10,300 hectares", gain: "300 hectares" }
                ],
                totalLoss: "8% since 1980",
                primaryThreats: [
                    { threat: "Agriculture", impact: "High", trend: "Increasing" },
                    { threat: "Tourism", impact: "Medium", trend: "Stable" },
                    { threat: "Invasive Species", impact: "Low", trend: "Decreasing" }
                ]
            },
            conservation: {
                status: "World Heritage Site",
                projects: [
                    {
                        name: "Daintree Conservation Project",
                        type: "Conservation initiative",
                        impact: "Protected 500 hectares"
                    },
                    {
                        name: "Eco-Tourism Development",
                        type: "Sustainable tourism",
                        impact: "Reduced habitat disturbance by 20%"
                    }
                ],
                initiatives: ["Community Engagement", "Reforestation", "Wildlife Monitoring"]
            }
        },
        {
            id: "tongass",
            name: "Tongass National Forest",
            coords: [58.0900, -135.0000],
            radius: 5500000,
            country: "USA",
            type: "Temperate Rainforest",
            area: {
                total: "16.7 million acres",
                original: "16.7 million acres",
                current: "16.5 million acres"
            },
            biodiversity: {
                species: "1,500+ plant species, 300 bird species",
                endangered: [
                    "Northern Spotted Owl",
                    "Marbled Murrelet",
                    "Pink Salmon"
                ],
                endemic: "100 fish species, 30 mammals",
                keySpecies: [
                    { name: "Sitka Spruce", role: "Foundation species" },
                    { name: "Salmon", role: "Nutrient distributor" }
                ]
            },
            historicalData: {
                annualLoss: [
                    { year: 2023, loss: "50,000 acres", gain: "5,000 acres" },
                    { year: 2022, loss: "48,000 acres", gain: "4,800 acres" },
                    { year: 2021, loss: "52,000 acres", gain: "5,200 acres" },
                    { year: 2020, loss: "50,500 acres", gain: "5,000 acres" },
                    { year: 2019, loss: "49,500 acres", gain: "4,900 acres" }
                ],
                totalLoss: "2% since 1990",
                primaryThreats: [
                    { threat: "Logging", impact: "High", trend: "Decreasing" },
                    { threat: "Climate Change", impact: "High", trend: "Increasing" },
                    { threat: "Invasive Species", impact: "Medium", trend: "Stable" }
                ]
            },
            conservation: {
                status: "National Forest",
                projects: [
                    {
                        name: "Tongass Ecosystem Restoration",
                        type: "Restoration project",
                        impact: "Restored 100,000 acres"
                    },
                    {
                        name: "Wild Salmon Initiative",
                        type: "Wildlife conservation",
                        impact: "Boosted salmon populations by 15%"
                    }
                ],
                initiatives: ["Sustainable Forestry", "Wildlife Protection", "Climate Resilience"]
            }
        },
        {
            id: "blackforest",
            name: "Black Forest",
            coords: [48.0167, 8.4170],
            radius: 6,
            country: "Germany",
            type: "Mixed Forest",
            area: {
                total: "6,000 km²",
                original: "6,000 km²",
                current: "5,800 km²"
            },
            biodiversity: {
                species: "1,200+ plant species, 150 bird species",
                endangered: [
                    "Black Stork",
                    "European Wildcat",
                    "Capercaillie"
                ],
                endemic: "50 fish species, 20 mammals",
                keySpecies: [
                    { name: "Beech Tree", role: "Canopy structure" },
                    { name: "Red Deer", role: "Seed disperser" }
                ]
            },
            historicalData: {
                annualLoss: [
                    { year: 2023, loss: "300 hectares", gain: "50 hectares" },
                    { year: 2022, loss: "280 hectares", gain: "45 hectares" },
                    { year: 2021, loss: "310 hectares", gain: "40 hectares" },
                    { year: 2020, loss: "295 hectares", gain: "35 hectares" },
                    { year: 2019, loss: "290 hectares", gain: "30 hectares" }
                ],
                totalLoss: "3% since 1950",
                primaryThreats: [
                    { threat: "Urbanization", impact: "High", trend: "Increasing" },
                    { threat: "Tourism", impact: "Medium", trend: "Stable" },
                    { threat: "Air Pollution", impact: "Low", trend: "Decreasing" }
                ]
            },
            conservation: {
                status: "Biosphere Reserve",
                projects: [
                    {
                        name: "Black Forest Conservation Program",
                        type: "Conservation initiative",
                        impact: "Protected 200 hectares"
                    },
                    {
                        name: "Sustainable Tourism Development",
                        type: "Eco-tourism",
                        impact: "Reduced environmental impact by 10%"
                    }
                ],
                initiatives: ["Habitat Preservation", "Public Education", "Invasive Species Control"]
            }
        },
        {
            id: "sundarbans",
            name: "Sundarbans",
            coords: [21.9497, 89.1833],
            radius: 102000,
            country: "Bangladesh/India",
            type: "Mangrove Forest",
            area: {
                total: "10,000 km²",
                original: "10,000 km²",
                current: "9,500 km²"
            },
            biodiversity: {
                species: "4,000+ plant species, 500 bird species",
                endangered: [
                    "Bengal Tiger",
                    "Fishing Cat",
                    "Saltwater Crocodile"
                ],
                endemic: "300 fish species, 100 mammals",
                keySpecies: [
                    { name: "Sundari Tree", role: "Coastal protection" },
                    { name: "Irrawaddy Dolphin", role: "Ecosystem balance" }
                ]
            },
            historicalData: {
                annualLoss: [
                    { year: 2023, loss: "50,000 hectares", gain: "10,000 hectares" },
                    { year: 2022, loss: "48,000 hectares", gain: "9,500 hectares" },
                    { year: 2021, loss: "52,000 hectares", gain: "10,500 hectares" },
                    { year: 2020, loss: "50,500 hectares", gain: "10,000 hectares" },
                    { year: 2019, loss: "49,500 hectares", gain: "9,800 hectares" }
                ],
                totalLoss: "5% since 1980",
                primaryThreats: [
                    { threat: "Aquaculture", impact: "High", trend: "Increasing" },
                    { threat: "Industrial Pollution", impact: "Medium", trend: "Stable" },
                    { threat: "Climate Change", impact: "High", trend: "Increasing" }
                ]
            },
            conservation: {
                status: "World Heritage Site",
                projects: [
                    {
                        name: "Sundarbans Tiger Conservation",
                        type: "Wildlife protection",
                        impact: "Increased tiger population by 5%"
                    },
                    {
                        name: "Mangrove Restoration Initiative",
                        type: "Reforestation",
                        impact: "Restored 20,000 hectares"
                    }
                ],
                initiatives: ["Community Involvement", "Sustainable Fishing", "Pollution Control"]
            }
        },
        // ...existing code...
{
    id: "congo",
    name: "Congo Rainforest",
    coords: [0.1326, 20.5238],
    radius: 1500000,
    country: "Multiple (DRC, Congo, Cameroon)",
    type: "Tropical Rainforest",
    area: {
        total: "3.7 million km²",
        original: "4.2 million km²",
        current: "3.7 million km²"
    },
    biodiversity: {
        species: "10,000+ plant species, 1,000+ animal species",
        endangered: [
            "Eastern Lowland Gorilla",
            "Forest Elephant",
            "Okapi",
            "Bonobo",
            "Congo Peafowl"
        ],
        endemic: "1,500 fish species, 400 mammals",
        keySpecies: [
            { name: "Baobab Tree", role: "Carbon storage" },
            { name: "African Grey Parrot", role: "Seed disperser" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "1,500,000 hectares", gain: "60,000 hectares" },
            { year: 2022, loss: "1,450,000 hectares", gain: "58,000 hectares" },
            { year: 2021, loss: "1,480,000 hectares", gain: "59,000 hectares" },
            { year: 2020, loss: "1,460,000 hectares", gain: "57,000 hectares" },
            { year: 2019, loss: "1,440,000 hectares", gain: "55,000 hectares" },
            { year: 2018, loss: "1,420,000 hectares", gain: "54,000 hectares" },
            { year: 2017, loss: "1,400,000 hectares", gain: "53,000 hectares" },
            { year: 2016, loss: "1,380,000 hectares", gain: "52,000 hectares" },
            { year: 2015, loss: "1,360,000 hectares", gain: "51,000 hectares" },
            { year: 2014, loss: "1,340,000 hectares", gain: "50,000 hectares" }
        ],
        totalLoss: "12% since 1990",
        primaryThreats: [
            { threat: "Logging", impact: "High", trend: "Increasing" },
            { threat: "Mining", impact: "Medium", trend: "Stable" },
            { threat: "Agriculture", impact: "High", trend: "Increasing" },
            { threat: "Wildlife Poaching", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "Critical Ecosystem",
        projects: [
            {
                name: "Congo Basin Forest Partnership",
                type: "International collaboration",
                impact: "Protected 500,000 hectares"
            },
            {
                name: "Wildlife Conservation Initiative",
                type: "Species protection",
                impact: "Increased populations of key species by 20%"
            }
        ],
        initiatives: ["Anti-Poaching Patrols", "Sustainable Forestry", "Community Education"]
    }
},
{
    id: "bialowieza",
    name: "Białowieża Forest",
    coords: [52.5833, 23.7500],
    radius: 150000,
    country: "Poland/Belarus",
    type: "Temperate Forest",
    area: {
        total: "1,500 km²",
        original: "1,500 km²",
        current: "1,400 km²"
    },
    biodiversity: {
        species: "1,500+ plant species, 300 bird species",
        endangered: [
            "European Bison",
            "Lynx",
            "Ural Owl"
        ],
        endemic: "100 fish species, 40 mammals",
        keySpecies: [
            { name: "European Beech", role: "Canopy structure" },
            { name: "White-backed Woodpecker", role: "Insect control" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "30,000 hectares", gain: "3,000 hectares" },
            { year: 2022, loss: "28,000 hectares", gain: "2,800 hectares" },
            { year: 2021, loss: "31,000 hectares", gain: "3,100 hectares" },
            { year: 2020, loss: "29,500 hectares", gain: "2,900 hectares" },
            { year: 2019, loss: "29,000 hectares", gain: "2,850 hectares" },
            { year: 2018, loss: "28,500 hectares", gain: "2,800 hectares" },
            { year: 2017, loss: "28,000 hectares", gain: "2,750 hectares" },
            { year: 2016, loss: "27,500 hectares", gain: "2,700 hectares" },
            { year: 2015, loss: "27,000 hectares", gain: "2,650 hectares" },
            { year: 2014, loss: "26,500 hectares", gain: "2,600 hectares" }
        ],
        totalLoss: "7% since 2000",
        primaryThreats: [
            { threat: "Logging", impact: "Medium", trend: "Decreasing" },
            { threat: "Wildfires", impact: "Low", trend: "Stable" },
            { threat: "Invasive Species", impact: "Low", trend: "Decreasing" }
        ]
    },
    conservation: {
        status: "UNESCO World Heritage Site",
        projects: [
            {
                name: "Białowieża Restoration Project",
                type: "Habitat restoration",
                impact: "Restored 50,000 hectares"
            },
            {
                name: "European Bison Protection",
                type: "Wildlife conservation",
                impact: "Increased bison population by 15%"
            }
        ],
        initiatives: ["Eco-Tourism Promotion", "Forest Management Training", "Biodiversity Monitoring"]
    }
},
{
    id: "greatbear",
    name: "Great Bear Rainforest",
    coords: [53.0000, -127.5000],
    radius: 5000000,
    country: "Canada",
    type: "Temperate Rainforest",
    area: {
        total: "6,400 km²",
        original: "6,400 km²",
        current: "6,300 km²"
    },
    biodiversity: {
        species: "2,000+ plant species, 400 bird species",
        endangered: [
            "Kermode Bear",
            "Coastal Wolf",
            "Marbled Murrelet"
        ],
        endemic: "200 fish species, 60 mammals",
        keySpecies: [
            { name: "Western Red Cedar", role: "Foundation species" },
            { name: "Pacific Salmon", role: "Nutrient distributor" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "100,000 hectares", gain: "10,000 hectares" },
            { year: 2022, loss: "95,000 hectares", gain: "9,500 hectares" },
            { year: 2021, loss: "97,000 hectares", gain: "9,700 hectares" },
            { year: 2020, loss: "96,000 hectares", gain: "9,600 hectares" },
            { year: 2019, loss: "94,000 hectares", gain: "9,400 hectares" },
            { year: 2018, loss: "93,000 hectares", gain: "9,300 hectares" },
            { year: 2017, loss: "92,000 hectares", gain: "9,200 hectares" },
            { year: 2016, loss: "91,000 hectares", gain: "9,100 hectares" },
            { year: 2015, loss: "90,000 hectares", gain: "9,000 hectares" },
            { year: 2014, loss: "89,000 hectares", gain: "8,900 hectares" }
        ],
        totalLoss: "5% since 2010",
        primaryThreats: [
            { threat: "Logging", impact: "High", trend: "Decreasing" },
            { threat: "Mining", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Great Bear Conservation Initiative",
                type: "Wildlife protection",
                impact: "Protected 200,000 hectares"
            },
            {
                name: "Sustainable Forestry Program",
                type: "Resource management",
                impact: "Implemented sustainable logging practices"
            }
        ],
        initiatives: ["Indigenous Partnership", "Marine Protection", "Carbon Sequestration Projects"]
    }
},
{
    id: "kinabalu",
    name: "Kinabalu Forest",
    coords: [6.75, 116.5],
    radius: 300000,
    country: "Malaysia",
    type: "Montane Forest",
    area: {
        total: "550 km²",
        original: "550 km²",
        current: "530 km²"
    },
    biodiversity: {
        species: "4,000+ plant species, 600 bird species",
        endangered: [
            "Mountain Gorilla",
            "Malayan Tiger",
            "Kinabalu Giant Red Leech"
        ],
        endemic: "500 fish species, 150 mammals",
        keySpecies: [
            { name: "Nepenthes (Pitcher Plants)", role: "Insect trapping" },
            { name: "Kinabalu Blue Flycatcher", role: "Pollinator" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "5,000 hectares", gain: "500 hectares" },
            { year: 2022, loss: "4,800 hectares", gain: "480 hectares" },
            { year: 2021, loss: "4,900 hectares", gain: "490 hectares" },
            { year: 2020, loss: "4,700 hectares", gain: "470 hectares" },
            { year: 2019, loss: "4,600 hectares", gain: "460 hectares" },
            { year: 2018, loss: "4,500 hectares", gain: "450 hectares" },
            { year: 2017, loss: "4,400 hectares", gain: "440 hectares" },
            { year: 2016, loss: "4,300 hectares", gain: "430 hectares" },
            { year: 2015, loss: "4,200 hectares", gain: "420 hectares" },
            { year: 2014, loss: "4,100 hectares", gain: "410 hectares" }
        ],
        totalLoss: "10% since 2005",
        primaryThreats: [
            { threat: "Agriculture", impact: "High", trend: "Increasing" },
            { threat: "Tourism Development", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "World Heritage Site",
        projects: [
            {
                name: "Kinabalu Conservation Project",
                type: "Ecosystem restoration",
                impact: "Restored 50,000 hectares"
            },
            {
                name: "Endangered Species Protection",
                type: "Wildlife conservation",
                impact: "Protected key species habitats"
            }
        ],
        initiatives: ["Eco-Tourism Management", "Research and Monitoring", "Community Engagement"]
    }
},
{
    id: "valdivian",
    name: "Valdivian Temperate Forest",
    coords: [-40.6000, -73.3000],
    radius: 400000,
    country: "Chile",
    type: "Temperate Rainforest",
    area: {
        total: "250,000 km²",
        original: "250,000 km²",
        current: "240,000 km²"
    },
    biodiversity: {
        species: "5,000+ plant species, 700 bird species",
        endangered: [
            "Philippi's Yellow Finch",
            "Andean Deer",
            "Southern River Otter"
        ],
        endemic: "600 fish species, 200 mammals",
        keySpecies: [
            { name: "Alerce (Fitzroya cupressoides)", role: "Carbon storage" },
            { name: "Puma", role: "Apex predator" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "20,000 hectares", gain: "2,000 hectares" },
            { year: 2022, loss: "19,000 hectares", gain: "1,900 hectares" },
            { year: 2021, loss: "18,500 hectares", gain: "1,850 hectares" },
            { year: 2020, loss: "18,000 hectares", gain: "1,800 hectares" },
            { year: 2019, loss: "17,500 hectares", gain: "1,750 hectares" },
            { year: 2018, loss: "17,000 hectares", gain: "1,700 hectares" },
            { year: 2017, loss: "16,500 hectares", gain: "1,650 hectares" },
            { year: 2016, loss: "16,000 hectares", gain: "1,600 hectares" },
            { year: 2015, loss: "15,500 hectares", gain: "1,550 hectares" },
            { year: 2014, loss: "15,000 hectares", gain: "1,500 hectares" }
        ],
        totalLoss: "4% since 2010",
        primaryThreats: [
            { threat: "Logging", impact: "High", trend: "Decreasing" },
            { threat: "Urbanization", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Valdivian Forest Restoration",
                type: "Reforestation",
                impact: "Planted 100,000 trees"
            },
            {
                name: "Biodiversity Conservation Program",
                type: "Wildlife protection",
                impact: "Protected critical habitats"
            }
        ],
        initiatives: ["Sustainable Tourism", "Environmental Education", "Pollution Control"]
    }
},
{
    id: "sherwood",
    name: "Sherwood Forest",
    coords: [53.0, -1.1],
    radius: 50000,
    country: "UK",
    type: "Deciduous Forest",
    area: {
        total: "423 hectares",
        original: "423 hectares",
        current: "400 hectares"
    },
    biodiversity: {
        species: "1,000+ plant species, 200 bird species",
        endangered: [
            "White-bellied Longhorn Beetle",
            "Red Kite",
            "Dormouse"
        ],
        endemic: "50 fish species, 30 mammals",
        keySpecies: [
            { name: "Oak Tree", role: "Canopy structure" },
            { name: "Common Bluebell", role: "Insect attraction" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "500 hectares", gain: "50 hectares" },
            { year: 2022, loss: "480 hectares", gain: "48 hectares" },
            { year: 2021, loss: "490 hectares", gain: "49 hectares" },
            { year: 2020, loss: "470 hectares", gain: "47 hectares" },
            { year: 2019, loss: "460 hectares", gain: "46 hectares" },
            { year: 2018, loss: "450 hectares", gain: "45 hectares" },
            { year: 2017, loss: "440 hectares", gain: "44 hectares" },
            { year: 2016, loss: "430 hectares", gain: "43 hectares" },
            { year: 2015, loss: "420 hectares", gain: "42 hectares" },
            { year: 2014, loss: "410 hectares", gain: "41 hectares" }
        ],
        totalLoss: "5% since 2010",
        primaryThreats: [
            { threat: "Urban Development", impact: "High", trend: "Increasing" },
            { threat: "Tourism Pressure", impact: "Medium", trend: "Stable" },
            { threat: "Invasive Species", impact: "Low", trend: "Decreasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Sherwood Forest Conservation",
                type: "Habitat preservation",
                impact: "Protected 100 hectares"
            },
            {
                name: "Biodiversity Enhancement",
                type: "Flora and fauna enrichment",
                impact: "Introduced native plant species"
            }
        ],
        initiatives: ["Eco-Tourism Promotion", "Historical Site Maintenance", "Wildlife Monitoring"]
    }
},
{
    id: "tarkine",
    name: "Tarkine Forest",
    coords: [-40.0, 145.0],
    radius: 600000,
    country: "Australia",
    type: "Temperate Rainforest",
    area: {
        total: "1,500 km²",
        original: "1,600 km²",
        current: "1,500 km²"
    },
    biodiversity: {
        species: "3,500+ plant species, 500 bird species",
        endangered: [
            "Swift Parrot",
            "Tasmanian Devil",
            "Mountain Pygmy-possum"
        ],
        endemic: "300 fish species, 120 mammals",
        keySpecies: [
            { name: "Huon Pine", role: "Carbon storage" },
            { name: "Eastern Quoll", role: "Pest control" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "20,000 hectares", gain: "2,000 hectares" },
            { year: 2022, loss: "19,500 hectares", gain: "1,950 hectares" },
            { year: 2021, loss: "19,800 hectares", gain: "1,980 hectares" },
            { year: 2020, loss: "19,300 hectares", gain: "1,930 hectares" },
            { year: 2019, loss: "19,000 hectares", gain: "1,900 hectares" },
            { year: 2018, loss: "18,700 hectares", gain: "1,870 hectares" },
            { year: 2017, loss: "18,400 hectares", gain: "1,840 hectares" },
            { year: 2016, loss: "18,100 hectares", gain: "1,810 hectares" },
            { year: 2015, loss: "17,800 hectares", gain: "1,780 hectares" },
            { year: 2014, loss: "17,500 hectares", gain: "1,750 hectares" }
        ],
        totalLoss: "6% since 2005",
        primaryThreats: [
            { threat: "Logging", impact: "High", trend: "Decreasing" },
            { threat: "Agriculture Expansion", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Tarkine Reforestation",
                type: "Tree planting",
                impact: "Planted 50,000 trees"
            },
            {
                name: "Endangered Species Protection",
                type: "Wildlife conservation",
                impact: "Protected habitats of key species"
            }
        ],
        initiatives: ["Community Involvement", "Sustainable Forestry Practices", "Environmental Education"]
    }
},
{
    id: "monteverde",
    name: "Monteverde Cloud Forest",
    coords: [10.3, -84.8],
    radius: 2600,
    country: "Costa Rica",
    type: "Cloud Forest",
    area: {
        total: "25 km²",
        original: "25 km²",
        current: "24 km²"
    },
    biodiversity: {
        species: "10,000+ plant species, 500 bird species",
        endangered: [
            "Resplendent Quetzal",
            "Jaguars",
            "Baird's Tapir"
        ],
        endemic: "800 fish species, 200 mammals",
        keySpecies: [
            { name: "Slender Anole", role: "Insect control" },
            { name: "Hummingbirds", role: "Pollinators" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "250 hectares", gain: "25 hectares" },
            { year: 2022, loss: "240 hectares", gain: "24 hectares" },
            { year: 2021, loss: "245 hectares", gain: "24.5 hectares" },
            { year: 2020, loss: "235 hectares", gain: "23.5 hectares" },
            { year: 2019, loss: "230 hectares", gain: "23 hectares" },
            { year: 2018, loss: "225 hectares", gain: "22.5 hectares" },
            { year: 2017, loss: "220 hectares", gain: "22 hectares" },
            { year: 2016, loss: "215 hectares", gain: "21.5 hectares" },
            { year: 2015, loss: "210 hectares", gain: "21 hectares" },
            { year: 2014, loss: "205 hectares", gain: "20.5 hectares" }
        ],
        totalLoss: "4% since 2010",
        primaryThreats: [
            { threat: "Agriculture", impact: "High", trend: "Increasing" },
            { threat: "Tourism Development", impact: "Medium", trend: "Stable" },
            { threat: "Illegal Logging", impact: "High", trend: "Decreasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Monteverde Biodiversity Preservation",
                type: "Habitat protection",
                impact: "Protected 10 km²"
            },
            {
                name: "Sustainable Tourism Initiative",
                type: "Eco-tourism",
                impact: "Reduced environmental footprint by 15%"
            }
        ],
        initiatives: ["Research and Monitoring", "Community Education", "Invasive Species Control"]
    }
},
{
    id: "yakushima",
    name: "Yakushima Forest",
    coords: [30.4, 130.7],
    radius: 100000,
    country: "Japan",
    type: "Subtropical Rainforest",
    area: {
        total: "504 km²",
        original: "504 km²",
        current: "495 km²"
    },
    biodiversity: {
        species: "3,000+ plant species, 400 bird species",
        endangered: [
            "Yaku Sugi (Japanese Cedar)",
            "Ryukyu Flying Fox",
            "Black Woodpecker"
        ],
        endemic: "700 fish species, 250 mammals",
        keySpecies: [
            { name: "Japanese Cedar", role: "Carbon storage" },
            { name: "Yakushima Macaque", role: "Seed disperser" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "5,000 hectares", gain: "500 hectares" },
            { year: 2022, loss: "4,800 hectares", gain: "480 hectares" },
            { year: 2021, loss: "4,900 hectares", gain: "490 hectares" },
            { year: 2020, loss: "4,700 hectares", gain: "470 hectares" },
            { year: 2019, loss: "4,600 hectares", gain: "460 hectares" },
            { year: 2018, loss: "4,500 hectares", gain: "450 hectares" },
            { year: 2017, loss: "4,400 hectares", gain: "440 hectares" },
            { year: 2016, loss: "4,300 hectares", gain: "430 hectares" },
            { year: 2015, loss: "4,200 hectares", gain: "420 hectares" },
            { year: 2014, loss: "4,100 hectares", gain: "410 hectares" }
        ],
        totalLoss: "8% since 2010",
        primaryThreats: [
            { threat: "Urban Expansion", impact: "High", trend: "Increasing" },
            { threat: "Tourism Pressure", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "World Heritage Site",
        projects: [
            {
                name: "Yakushima Reforestation",
                type: "Tree planting",
                impact: "Planted 20,000 trees"
            },
            {
                name: "Endangered Species Protection",
                type: "Wildlife conservation",
                impact: "Protected habitats of key species"
            }
        ],
        initiatives: ["Eco-Tourism Management", "Research Programs", "Community Engagement"]
    }
},
{
    id: "crooked",
    name: "Crooked Forest",
    coords: [53.9167, 16.4167],
    radius: 2000,
    country: "Poland",
    type: "Coniferous Forest",
    area: {
        total: "43 hectares",
        original: "43 hectares",
        current: "40 hectares"
    },
    biodiversity: {
        species: "500+ plant species, 100 bird species",
        endangered: [
            "Great Spotted Woodpecker",
            "Black Woodpecker",
            "Hazel Grouse"
        ],
        endemic: "50 fish species, 20 mammals",
        keySpecies: [
            { name: "Scots Pine", role: "Canopy structure" },
            { name: "European Robin", role: "Insect control" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "200 hectares", gain: "20 hectares" },
            { year: 2022, loss: "190 hectares", gain: "19 hectares" },
            { year: 2021, loss: "195 hectares", gain: "19.5 hectares" },
            { year: 2020, loss: "185 hectares", gain: "18.5 hectares" },
            { year: 2019, loss: "180 hectares", gain: "18 hectares" },
            { year: 2018, loss: "175 hectares", gain: "17.5 hectares" },
            { year: 2017, loss: "170 hectares", gain: "17 hectares" },
            { year: 2016, loss: "165 hectares", gain: "16.5 hectares" },
            { year: 2015, loss: "160 hectares", gain: "16 hectares" },
            { year: 2014, loss: "155 hectares", gain: "15.5 hectares" }
        ],
        totalLoss: "10% since 2005",
        primaryThreats: [
            { threat: "Agricultural Expansion", impact: "High", trend: "Increasing" },
            { threat: "Logging", impact: "Medium", trend: "Decreasing" },
            { threat: "Invasive Species", impact: "Low", trend: "Decreasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Crooked Forest Preservation",
                type: "Habitat protection",
                impact: "Protected 10 hectares"
            },
            {
                name: "Biodiversity Enhancement",
                type: "Flora and fauna enrichment",
                impact: "Introduced native plant species"
            }
        ],
        initiatives: ["Eco-Tourism Promotion", "Research and Monitoring", "Public Education"]
    }
},
{
    id: "zhangjiajie",
    name: "Zhangjiajie Forest",
    coords: [29.1250, 110.4797],
    radius: 120000,
    country: "China",
    type: "Karst Forest",
    area: {
        total: "900 km²",
        original: "900 km²",
        current: "880 km²"
    },
    biodiversity: {
        species: "3,000+ plant species, 400 bird species",
        endangered: [
            "Chinese Giant Salamander",
            "Lev's Muntjac",
            "Black-browed Albatross"
        ],
        endemic: "400 fish species, 150 mammals",
        keySpecies: [
            { name: "Chinese Fir", role: "Carbon storage" },
            { name: "Golden Eagle", role: "Apex predator" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "15,000 hectares", gain: "1,500 hectares" },
            { year: 2022, loss: "14,500 hectares", gain: "1,450 hectares" },
            { year: 2021, loss: "14,800 hectares", gain: "1,480 hectares" },
            { year: 2020, loss: "14,300 hectares", gain: "1,430 hectares" },
            { year: 2019, loss: "14,000 hectares", gain: "1,400 hectares" },
            { year: 2018, loss: "13,700 hectares", gain: "1,370 hectares" },
            { year: 2017, loss: "13,400 hectares", gain: "1,340 hectares" },
            { year: 2016, loss: "13,100 hectares", gain: "1,310 hectares" },
            { year: 2015, loss: "12,800 hectares", gain: "1,280 hectares" },
            { year: 2014, loss: "12,500 hectares", gain: "1,250 hectares" }
        ],
        totalLoss: "3% since 2010",
        primaryThreats: [
            { threat: "Tourism Pressure", impact: "High", trend: "Increasing" },
            { threat: "Urban Development", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "National Park",
        projects: [
            {
                name: "Zhangjiajie Vegetation Restoration",
                type: "Reforestation",
                impact: "Planted 30,000 trees"
            },
            {
                name: "Wildlife Protection Program",
                type: "Species conservation",
                impact: "Protected key wildlife habitats"
            }
        ],
        initiatives: ["Sustainable Tourism Management", "Environmental Education", "Pollution Control"]
    }
},
{
    id: "tamannegara",
    name: "Taman Negara",
    coords: [3.0, 102.5],
    radius: 350000,
    country: "Malaysia",
    type: "Tropical Rainforest",
    area: {
        total: "4,343 km²",
        original: "4,343 km²",
        current: "4,200 km²"
    },
    biodiversity: {
        species: "5,400+ plant species, 600 bird species",
        endangered: [
            "Malayan Tiger",
            "Asian Elephant",
            "Sun Bear"
        ],
        endemic: "700 fish species, 300 mammals",
        keySpecies: [
            { name: "Meranti Tree", role: "Canopy structure" },
            { name: "Hornbills", role: "Seed dispersers" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "50,000 hectares", gain: "5,000 hectares" },
            { year: 2022, loss: "48,000 hectares", gain: "4,800 hectares" },
            { year: 2021, loss: "52,000 hectares", gain: "5,200 hectares" },
            { year: 2020, loss: "50,500 hectares", gain: "5,000 hectares" },
            { year: 2019, loss: "49,500 hectares", gain: "4,900 hectares" },
            { year: 2018, loss: "47,000 hectares", gain: "4,700 hectares" },
            { year: 2017, loss: "46,500 hectares", gain: "4,650 hectares" },
            { year: 2016, loss: "46,000 hectares", gain: "4,600 hectares" },
            { year: 2015, loss: "45,500 hectares", gain: "4,550 hectares" },
            { year: 2014, loss: "45,000 hectares", gain: "4,500 hectares" }
        ],
        totalLoss: "9% since 2010",
        primaryThreats: [
            { threat: "Logging", impact: "High", trend: "Decreasing" },
            { threat: "Agricultural Expansion", impact: "High", trend: "Increasing" },
            { threat: "Climate Change", impact: "Medium", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "National Park",
        projects: [
            {
                name: "Taman Negara Conservation Project",
                type: "Habitat protection",
                impact: "Protected 100,000 hectares"
            },
            {
                name: "Wildlife Corridor Initiative",
                type: "Wildlife movement facilitation",
                impact: "Established corridors for key species"
            }
        ],
        initiatives: ["Eco-Tourism Promotion", "Community Engagement", "Research and Monitoring"]
    }
},
{
    id: "dukuduku",
    name: "Dukuduku Forest",
    coords: [-25.0, 31.0],
    radius: 80000,
    country: "South Africa",
    type: "Savanna Forest",
    area: {
        total: "800 km²",
        original: "800 km²",
        current: "780 km²"
    },
    biodiversity: {
        species: "2,500+ plant species, 350 bird species",
        endangered: [
            "African Wild Dog",
            "Pangolin",
            "Cape Vulture"
        ],
        endemic: "300 fish species, 120 mammals",
        keySpecies: [
            { name: "Baobab Tree", role: "Carbon storage" },
            { name: "Lion", role: "Apex predator" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "8,000 hectares", gain: "800 hectares" },
            { year: 2022, loss: "7,800 hectares", gain: "780 hectares" },
            { year: 2021, loss: "8,200 hectares", gain: "820 hectares" },
            { year: 2020, loss: "7,900 hectares", gain: "790 hectares" },
            { year: 2019, loss: "7,700 hectares", gain: "770 hectares" },
            { year: 2018, loss: "7,500 hectares", gain: "750 hectares" },
            { year: 2017, loss: "7,300 hectares", gain: "730 hectares" },
            { year: 2016, loss: "7,100 hectares", gain: "710 hectares" },
            { year: 2015, loss: "6,900 hectares", gain: "690 hectares" },
            { year: 2014, loss: "6,700 hectares", gain: "670 hectares" }
        ],
        totalLoss: "5% since 2010",
        primaryThreats: [
            { threat: "Agricultural Expansion", impact: "High", trend: "Increasing" },
            { threat: "Wildlife Poaching", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Dukuduku Wildlife Protection",
                type: "Anti-poaching",
                impact: "Reduced poaching incidents by 30%"
            },
            {
                name: "Habitat Restoration Program",
                type: "Reforestation",
                impact: "Restored 10,000 hectares"
            }
        ],
        initiatives: ["Community Education", "Sustainable Farming Practices", "Wildlife Monitoring"]
    }
},
{
    id: "arashiyama",
    name: "Arashiyama Bamboo Forest",
    coords: [35.0167, 135.6667],
    radius: 3000,
    country: "Japan",
    type: "Bamboo Forest",
    area: {
        total: "10 km²",
        original: "10 km²",
        current: "9.8 km²"
    },
    biodiversity: {
        species: "1,200+ plant species, 180 bird species",
        endangered: [
            "Japanese Crested Ibis",
            "Sasakia Charonda (Sawtooth Meadow Brown)",
            "Ussuri Dhole"
        ],
        endemic: "150 fish species, 60 mammals",
        keySpecies: [
            { name: "Sasa Bamboo", role: "Erosion control" },
            { name: "Japanese Macaque", role: "Seed disperser" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "500 hectares", gain: "50 hectares" },
            { year: 2022, loss: "480 hectares", gain: "48 hectares" },
            { year: 2021, loss: "490 hectares", gain: "49 hectares" },
            { year: 2020, loss: "470 hectares", gain: "47 hectares" },
            { year: 2019, loss: "460 hectares", gain: "46 hectares" },
            { year: 2018, loss: "450 hectares", gain: "45 hectares" },
            { year: 2017, loss: "440 hectares", gain: "44 hectares" },
            { year: 2016, loss: "430 hectares", gain: "43 hectares" },
            { year: 2015, loss: "420 hectares", gain: "42 hectares" },
            { year: 2014, loss: "410 hectares", gain: "41 hectares" }
        ],
        totalLoss: "2% since 2010",
        primaryThreats: [
            { threat: "Urban Development", impact: "High", trend: "Increasing" },
            { threat: "Tourism Pressure", impact: "Medium", trend: "Stable" },
            { threat: "Invasive Species", impact: "Low", trend: "Decreasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Arashiyama Bamboo Preservation",
                type: "Habitat protection",
                impact: "Protected 2 km²"
            },
            {
                name: "Eco-Tourism Development",
                type: "Sustainable tourism",
                impact: "Reduced environmental impact by 10%"
            }
        ],
        initiatives: ["Community Engagement", "Sustainable Tour Management", "Research and Monitoring"]
    }
},
{
    id: "sequoia",
    name: "Sequoia National Forest",
    coords: [36.4864, -118.5658],
    radius: 1430000,
    country: "USA",
    type: "Coniferous Forest",
    area: {
        total: "1,600 km²",
        original: "1,600 km²",
        current: "1,550 km²"
    },
    biodiversity: {
        species: "3,500+ plant species, 450 bird species",
        endangered: [
            "California Condor",
            "Giant Sequoia Tailed Frog",
            "Southern Steelhead Trout"
        ],
        endemic: "500 fish species, 200 mammals",
        keySpecies: [
            { name: "Giant Sequoia", role: "Carbon storage" },
            { name: "American Black Bear", role: "Seed disperser" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "60,000 hectares", gain: "6,000 hectares" },
            { year: 2022, loss: "58,000 hectares", gain: "5,800 hectares" },
            { year: 2021, loss: "59,000 hectares", gain: "5,900 hectares" },
            { year: 2020, loss: "57,000 hectares", gain: "5,700 hectares" },
            { year: 2019, loss: "56,000 hectares", gain: "5,600 hectares" },
            { year: 2018, loss: "55,000 hectares", gain: "5,500 hectares" },
            { year: 2017, loss: "54,000 hectares", gain: "5,400 hectares" },
            { year: 2016, loss: "53,000 hectares", gain: "5,300 hectares" },
            { year: 2015, loss: "52,000 hectares", gain: "5,200 hectares" },
            { year: 2014, loss: "51,000 hectares", gain: "5,100 hectares" }
        ],
        totalLoss: "7% since 2010",
        primaryThreats: [
            { threat: "Wildfires", impact: "High", trend: "Increasing" },
            { threat: "Logging", impact: "Medium", trend: "Decreasing" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "National Park",
        projects: [
            {
                name: "Sequoia Restoration Project",
                type: "Habitat restoration",
                impact: "Restored 100,000 hectares"
            },
            {
                name: "Wildfire Mitigation Initiative",
                type: "Fire management",
                impact: "Implemented controlled burns in 10,000 hectares"
            }
        ],
        initiatives: ["Sustainable Forestry Practices", "Research and Monitoring", "Community Engagement"]
    }
},
{
    id: "coconino",
    name: "Coconino National Forest",
    coords: [35.4, -111.6],
    radius: 1615000,
    country: "USA",
    type: "Mixed Forest",
    area: {
        total: "16,150 km²",
        original: "16,150 km²",
        current: "16,000 km²"
    },
    biodiversity: {
        species: "4,000+ plant species, 500 bird species",
        endangered: [
            "California Spotted Owl",
            "Mexican Gray Wolf",
            "Arizona Bark Scorpion"
        ],
        endemic: "600 fish species, 250 mammals",
        keySpecies: [
            { name: "Ponderosa Pine", role: "Canopy structure" },
            { name: "North American Beaver", role: "Ecosystem engineer" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "70,000 hectares", gain: "7,000 hectares" },
            { year: 2022, loss: "68,000 hectares", gain: "6,800 hectares" },
            { year: 2021, loss: "69,000 hectares", gain: "6,900 hectares" },
            { year: 2020, loss: "67,000 hectares", gain: "6,700 hectares" },
            { year: 2019, loss: "66,000 hectares", gain: "6,600 hectares" },
            { year: 2018, loss: "65,000 hectares", gain: "6,500 hectares" },
            { year: 2017, loss: "64,000 hectares", gain: "6,400 hectares" },
            { year: 2016, loss: "63,000 hectares", gain: "6,300 hectares" },
            { year: 2015, loss: "62,000 hectares", gain: "6,200 hectares" },
            { year: 2014, loss: "61,000 hectares", gain: "6,100 hectares" }
        ],
        totalLoss: "8% since 2010",
        primaryThreats: [
            { threat: "Wildfires", impact: "High", trend: "Increasing" },
            { threat: "Logging", impact: "Medium", trend: "Decreasing" },
            { threat: "Invasive Species", impact: "Low", trend: "Decreasing" }
        ]
    },
    conservation: {
        status: "National Forest",
        projects: [
            {
                name: "Coconino Forest Restoration",
                type: "Habitat restoration",
                impact: "Restored 150,000 hectares"
            },
            {
                name: "Wildlife Conservation Program",
                type: "Species protection",
                impact: "Protected critical habitats of key species"
            }
        ],
        initiatives: ["Sustainable Forestry Practices", "Research and Monitoring", "Community Engagement"]
    }
},
// ...existing code...
// Add 18 more forests with similar detailed structure:
{
    id: "bialowieza",
    name: "Białowieża Forest",
    coords: [52.5833, 23.7500],
    radius: 150000,
    country: "Poland/Belarus",
    type: "Temperate Forest",
    area: {
        total: "1,500 km²",
        original: "1,500 km²",
        current: "1,400 km²"
    },
    biodiversity: {
        species: "1,500+ plant species, 300 bird species",
        endangered: [
            "European Bison",
            "Lynx",
            "Ural Owl"
        ],
        endemic: "100 fish species, 40 mammals",
        keySpecies: [
            { name: "European Beech", role: "Canopy structure" },
            { name: "White-backed Woodpecker", role: "Insect control" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "30,000 hectares", gain: "3,000 hectares" },
            { year: 2022, loss: "28,000 hectares", gain: "2,800 hectares" },
            { year: 2021, loss: "31,000 hectares", gain: "3,100 hectares" },
            { year: 2020, loss: "29,500 hectares", gain: "2,900 hectares" },
            { year: 2019, loss: "29,000 hectares", gain: "2,850 hectares" },
            { year: 2018, loss: "28,500 hectares", gain: "2,800 hectares" },
            { year: 2017, loss: "28,000 hectares", gain: "2,750 hectares" },
            { year: 2016, loss: "27,500 hectares", gain: "2,700 hectares" },
            { year: 2015, loss: "27,000 hectares", gain: "2,650 hectares" },
            { year: 2014, loss: "26,500 hectares", gain: "2,600 hectares" }
        ],
        totalLoss: "7% since 2000",
        primaryThreats: [
            { threat: "Logging", impact: "Medium", trend: "Decreasing" },
            { threat: "Urbanization", impact: "Low", trend: "Stable" },
            { threat: "Invasive Species", impact: "Low", trend: "Decreasing" }
        ]
    },
    conservation: {
        status: "UNESCO World Heritage Site",
        projects: [
            {
                name: "Białowieża Restoration Project",
                type: "Habitat restoration",
                impact: "Restored 50,000 hectares"
            },
            {
                name: "European Bison Protection",
                type: "Wildlife conservation",
                impact: "Increased bison population by 15%"
            }
        ],
        initiatives: ["Eco-Tourism Promotion", "Forest Management Training", "Biodiversity Monitoring"]
    }
},
{
    id: "greatbear",
    name: "Great Bear Rainforest",
    coords: [53.0000, -127.5000],
    radius: 5000000,
    country: "Canada",
    type: "Temperate Rainforest",
    area: {
        total: "6,400 km²",
        original: "6,400 km²",
        current: "6,300 km²"
    },
    biodiversity: {
        species: "2,000+ plant species, 400 bird species",
        endangered: [
            "Kermode Bear",
            "Coastal Wolf",
            "Marbled Murrelet"
        ],
        endemic: "200 fish species, 60 mammals",
        keySpecies: [
            { name: "Western Red Cedar", role: "Foundation species" },
            { name: "Pacific Salmon", role: "Nutrient distributor" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "100,000 hectares", gain: "10,000 hectares" },
            { year: 2022, loss: "95,000 hectares", gain: "9,500 hectares" },
            { year: 2021, loss: "97,000 hectares", gain: "9,700 hectares" },
            { year: 2020, loss: "96,000 hectares", gain: "9,600 hectares" },
            { year: 2019, loss: "94,000 hectares", gain: "9,400 hectares" },
            { year: 2018, loss: "93,000 hectares", gain: "9,300 hectares" },
            { year: 2017, loss: "92,000 hectares", gain: "9,200 hectares" },
            { year: 2016, loss: "91,000 hectares", gain: "9,100 hectares" },
            { year: 2015, loss: "90,000 hectares", gain: "9,000 hectares" },
            { year: 2014, loss: "89,000 hectares", gain: "8,900 hectares" }
        ],
        totalLoss: "5% since 2010",
        primaryThreats: [
            { threat: "Logging", impact: "High", trend: "Decreasing" },
            { threat: "Mining", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Great Bear Conservation Initiative",
                type: "Wildlife protection",
                impact: "Protected 200,000 hectares"
            },
            {
                name: "Sustainable Forestry Program",
                type: "Resource management",
                impact: "Implemented sustainable logging practices"
            }
        ],
        initiatives: ["Indigenous Partnership", "Marine Protection", "Carbon Sequestration Projects"]
    }
},
{
    id: "kinabalu",
    name: "Kinabalu Forest",
    coords: [6.75, 116.5],
    radius: 300000,
    country: "Malaysia",
    type: "Montane Forest",
    area: {
        total: "550 km²",
        original: "550 km²",
        current: "530 km²"
    },
    biodiversity: {
        species: "4,000+ plant species, 600 bird species",
        endangered: [
            "Mountain Gorilla",
            "Malayan Tiger",
            "Kinabalu Giant Red Leech"
        ],
        endemic: "500 fish species, 150 mammals",
        keySpecies: [
            { name: "Nepenthes (Pitcher Plants)", role: "Insect trapping" },
            { name: "Kinabalu Blue Flycatcher", role: "Pollinator" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "5,000 hectares", gain: "500 hectares" },
            { year: 2022, loss: "4,800 hectares", gain: "480 hectares" },
            { year: 2021, loss: "4,900 hectares", gain: "490 hectares" },
            { year: 2020, loss: "4,700 hectares", gain: "470 hectares" },
            { year: 2019, loss: "4,600 hectares", gain: "460 hectares" },
            { year: 2018, loss: "4,500 hectares", gain: "450 hectares" },
            { year: 2017, loss: "4,400 hectares", gain: "440 hectares" },
            { year: 2016, loss: "4,300 hectares", gain: "430 hectares" },
            { year: 2015, loss: "4,200 hectares", gain: "420 hectares" },
            { year: 2014, loss: "4,100 hectares", gain: "410 hectares" }
        ],
        totalLoss: "10% since 2005",
        primaryThreats: [
            { threat: "Agriculture", impact: "High", trend: "Increasing" },
            { threat: "Tourism Development", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "World Heritage Site",
        projects: [
            {
                name: "Kinabalu Conservation Project",
                type: "Ecosystem restoration",
                impact: "Restored 50,000 hectares"
            },
            {
                name: "Endangered Species Protection",
                type: "Wildlife conservation",
                impact: "Protected habitats of key species"
            }
        ],
        initiatives: ["Eco-Tourism Management", "Research and Monitoring", "Community Engagement"]
    }
},
{
    id: "valdivian",
    name: "Valdivian Temperate Forest",
    coords: [-40.6000, -73.3000],
    radius: 400000,
    country: "Chile",
    type: "Temperate Rainforest",
    area: {
        total: "250,000 km²",
        original: "250,000 km²",
        current: "240,000 km²"
    },
    biodiversity: {
        species: "5,000+ plant species, 700 bird species",
        endangered: [
            "Philippi's Yellow Finch",
            "Andean Deer",
            "Southern River Otter"
        ],
        endemic: "600 fish species, 200 mammals",
        keySpecies: [
            { name: "Alerce (Fitzroya cupressoides)", role: "Carbon storage" },
            { name: "Puma", role: "Apex predator" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "20,000 hectares", gain: "2,000 hectares" },
            { year: 2022, loss: "19,000 hectares", gain: "1,900 hectares" },
            { year: 2021, loss: "18,500 hectares", gain: "1,850 hectares" },
            { year: 2020, loss: "18,000 hectares", gain: "1,800 hectares" },
            { year: 2019, loss: "17,500 hectares", gain: "1,750 hectares" },
            { year: 2018, loss: "17,000 hectares", gain: "1,700 hectares" },
            { year: 2017, loss: "16,500 hectares", gain: "1,650 hectares" },
            { year: 2016, loss: "16,000 hectares", gain: "1,600 hectares" },
            { year: 2015, loss: "15,500 hectares", gain: "1,550 hectares" },
            { year: 2014, loss: "15,000 hectares", gain: "1,500 hectares" }
        ],
        totalLoss: "4% since 2010",
        primaryThreats: [
            { threat: "Logging", impact: "High", trend: "Decreasing" },
            { threat: "Urbanization", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Valdivian Forest Restoration",
                type: "Reforestation",
                impact: "Planted 100,000 trees"
            },
            {
                name: "Biodiversity Conservation Program",
                type: "Wildlife protection",
                impact: "Protected critical habitats"
            }
        ],
        initiatives: ["Sustainable Tourism", "Environmental Education", "Pollution Control"]
    }
},
{
    id: "sherwood",
    name: "Sherwood Forest",
    coords: [53.0, -1.1],
    radius: 50000,
    country: "UK",
    type: "Deciduous Forest",
    area: {
        total: "423 hectares",
        original: "423 hectares",
        current: "400 hectares"
    },
    biodiversity: {
        species: "1,000+ plant species, 200 bird species",
        endangered: [
            "White-bellied Longhorn Beetle",
            "Red Kite",
            "Dormouse"
        ],
        endemic: "50 fish species, 30 mammals",
        keySpecies: [
            { name: "Oak Tree", role: "Canopy structure" },
            { name: "Common Bluebell", role: "Insect attraction" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "500 hectares", gain: "50 hectares" },
            { year: 2022, loss: "480 hectares", gain: "48 hectares" },
            { year: 2021, loss: "490 hectares", gain: "49 hectares" },
            { year: 2020, loss: "470 hectares", gain: "47 hectares" },
            { year: 2019, loss: "460 hectares", gain: "46 hectares" },
            { year: 2018, loss: "450 hectares", gain: "45 hectares" },
            { year: 2017, loss: "440 hectares", gain: "44 hectares" },
            { year: 2016, loss: "430 hectares", gain: "43 hectares" },
            { year: 2015, loss: "420 hectares", gain: "42 hectares" },
            { year: 2014, loss: "410 hectares", gain: "41 hectares" }
        ],
        totalLoss: "5% since 2010",
        primaryThreats: [
            { threat: "Urban Development", impact: "High", trend: "Increasing" },
            { threat: "Tourism Pressure", impact: "Medium", trend: "Stable" },
            { threat: "Invasive Species", impact: "Low", trend: "Decreasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Sherwood Forest Conservation",
                type: "Habitat protection",
                impact: "Protected 100 hectares"
            },
            {
                name: "Biodiversity Enhancement",
                type: "Flora and fauna enrichment",
                impact: "Introduced native plant species"
            }
        ],
        initiatives: ["Eco-Tourism Promotion", "Research and Monitoring", "Public Education"]
    }
},
{
    id: "tarkine",
    name: "Tarkine Forest",
    coords: [-40.0, 145.0],
    radius: 600000,
    country: "Australia",
    type: "Temperate Rainforest",
    area: {
        total: "1,500 km²",
        original: "1,600 km²",
        current: "1,500 km²"
    },
    biodiversity: {
        species: "3,500+ plant species, 500 bird species",
        endangered: [
            "Swift Parrot",
            "Tasmanian Devil",
            "Mountain Pygmy-possum"
        ],
        endemic: "300 fish species, 120 mammals",
        keySpecies: [
            { name: "Huon Pine", role: "Carbon storage" },
            { name: "Eastern Quoll", role: "Pest control" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "20,000 hectares", gain: "2,000 hectares" },
            { year: 2022, loss: "19,500 hectares", gain: "1,950 hectares" },
            { year: 2021, loss: "19,800 hectares", gain: "1,980 hectares" },
            { year: 2020, loss: "19,300 hectares", gain: "1,930 hectares" },
            { year: 2019, loss: "19,000 hectares", gain: "1,900 hectares" },
            { year: 2018, loss: "18,700 hectares", gain: "1,870 hectares" },
            { year: 2017, loss: "18,400 hectares", gain: "1,840 hectares" },
            { year: 2016, loss: "18,100 hectares", gain: "1,810 hectares" },
            { year: 2015, loss: "17,800 hectares", gain: "1,780 hectares" },
            { year: 2014, loss: "17,500 hectares", gain: "1,750 hectares" }
        ],
        totalLoss: "6% since 2005",
        primaryThreats: [
            { threat: "Logging", impact: "High", trend: "Decreasing" },
            { threat: "Agricultural Expansion", impact: "High", trend: "Increasing" },
            { threat: "Climate Change", impact: "Medium", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Tarkine Reforestation",
                type: "Tree planting",
                impact: "Planted 50,000 trees"
            },
            {
                name: "Endangered Species Protection",
                type: "Wildlife conservation",
                impact: "Protected habitats of key species"
            }
        ],
        initiatives: ["Community Involvement", "Sustainable Forestry Practices", "Environmental Education"]
    }
},
{
    id: "monteverde",
    name: "Monteverde Cloud Forest",
    coords: [10.3, -84.8],
    radius: 2600,
    country: "Costa Rica",
    type: "Cloud Forest",
    area: {
        total: "25 km²",
        original: "25 km²",
        current: "24 km²"
    },
    biodiversity: {
        species: "10,000+ plant species, 500 bird species",
        endangered: [
            "Resplendent Quetzal",
            "Jaguars",
            "Baird's Tapir"
        ],
        endemic: "800 fish species, 200 mammals",
        keySpecies: [
            { name: "Slender Anole", role: "Insect control" },
            { name: "Hummingbirds", role: "Pollinators" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "250 hectares", gain: "25 hectares" },
            { year: 2022, loss: "240 hectares", gain: "24 hectares" },
            { year: 2021, loss: "245 hectares", gain: "24.5 hectares" },
            { year: 2020, loss: "235 hectares", gain: "23.5 hectares" },
            { year: 2019, loss: "230 hectares", gain: "23 hectares" },
            { year: 2018, loss: "225 hectares", gain: "22.5 hectares" },
            { year: 2017, loss: "220 hectares", gain: "22 hectares" },
            { year: 2016, loss: "215 hectares", gain: "21.5 hectares" },
            { year: 2015, loss: "210 hectares", gain: "21 hectares" },
            { year: 2014, loss: "205 hectares", gain: "20.5 hectares" }
        ],
        totalLoss: "4% since 2010",
        primaryThreats: [
            { threat: "Agriculture", impact: "High", trend: "Increasing" },
            { threat: "Tourism Development", impact: "Medium", trend: "Stable" },
            { threat: "Illegal Logging", impact: "High", trend: "Decreasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Monteverde Biodiversity Preservation",
                type: "Habitat protection",
                impact: "Protected 10 km²"
            },
            {
                name: "Sustainable Tourism Initiative",
                type: "Eco-tourism",
                impact: "Reduced environmental footprint by 15%"
            }
        ],
        initiatives: ["Research and Monitoring", "Community Education", "Invasive Species Control"]
    }
},
{
    id: "yakushima",
    name: "Yakushima Forest",
    coords: [30.4, 130.7],
    radius: 100000,
    country: "Japan",
    type: "Subtropical Rainforest",
    area: {
        total: "504 km²",
        original: "504 km²",
        current: "495 km²"
    },
    biodiversity: {
        species: "3,000+ plant species, 400 bird species",
        endangered: [
            "Yaku Sugi (Japanese Cedar)",
            "Ryukyu Flying Fox",
            "Black Woodpecker"
        ],
        endemic: "700 fish species, 250 mammals",
        keySpecies: [
            { name: "Japanese Cedar", role: "Carbon storage" },
            { name: "Yakushima Macaque", role: "Seed disperser" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "5,000 hectares", gain: "500 hectares" },
            { year: 2022, loss: "4,800 hectares", gain: "480 hectares" },
            { year: 2021, loss: "4,900 hectares", gain: "490 hectares" },
            { year: 2020, loss: "4,700 hectares", gain: "470 hectares" },
            { year: 2019, loss: "4,600 hectares", gain: "460 hectares" },
            { year: 2018, loss: "4,500 hectares", gain: "450 hectares" },
            { year: 2017, loss: "4,400 hectares", gain: "440 hectares" },
            { year: 2016, loss: "4,300 hectares", gain: "430 hectares" },
            { year: 2015, loss: "4,200 hectares", gain: "420 hectares" },
            { year: 2014, loss: "4,100 hectares", gain: "410 hectares" }
        ],
        totalLoss: "8% since 2010",
        primaryThreats: [
            { threat: "Urban Expansion", impact: "High", trend: "Increasing" },
            { threat: "Tourism Pressure", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "World Heritage Site",
        projects: [
            {
                name: "Yakushima Reforestation",
                type: "Tree planting",
                impact: "Planted 20,000 trees"
            },
            {
                name: "Endangered Species Protection",
                type: "Wildlife conservation",
                impact: "Protected habitats of key species"
            }
        ],
        initiatives: ["Eco-Tourism Management", "Research Programs", "Community Engagement"]
    }
},
{
    id: "crooked",
    name: "Crooked Forest",
    coords: [53.9167, 16.4167],
    radius: 2000,
    country: "Poland",
    type: "Coniferous Forest",
    area: {
        total: "43 hectares",
        original: "43 hectares",
        current: "40 hectares"
    },
    biodiversity: {
        species: "500+ plant species, 100 bird species",
        endangered: [
            "Great Spotted Woodpecker",
            "Black Woodpecker",
            "Hazel Grouse"
        ],
        endemic: "50 fish species, 20 mammals",
        keySpecies: [
            { name: "Scots Pine", role: "Canopy structure" },
            { name: "European Robin", role: "Insect control" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "200 hectares", gain: "20 hectares" },
            { year: 2022, loss: "190 hectares", gain: "19 hectares" },
            { year: 2021, loss: "195 hectares", gain: "19.5 hectares" },
            { year: 2020, loss: "185 hectares", gain: "18.5 hectares" },
            { year: 2019, loss: "180 hectares", gain: "18 hectares" },
            { year: 2018, loss: "175 hectares", gain: "17.5 hectares" },
            { year: 2017, loss: "170 hectares", gain: "17 hectares" },
            { year: 2016, loss: "165 hectares", gain: "16.5 hectares" },
            { year: 2015, loss: "160 hectares", gain: "16 hectares" },
            { year: 2014, loss: "155 hectares", gain: "15.5 hectares" }
        ],
        totalLoss: "10% since 2005",
        primaryThreats: [
            { threat: "Agricultural Expansion", impact: "High", trend: "Increasing" },
            { threat: "Logging", impact: "Medium", trend: "Decreasing" },
            { threat: "Invasive Species", impact: "Low", trend: "Decreasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Crooked Forest Preservation",
                type: "Habitat protection",
                impact: "Protected 10 hectares"
            },
            {
                name: "Biodiversity Enhancement",
                type: "Flora and fauna enrichment",
                impact: "Introduced native plant species"
            }
        ],
        initiatives: ["Eco-Tourism Promotion", "Research and Monitoring", "Public Education"]
    }
},
{
    id: "zhangjiajie",
    name: "Zhangjiajie Forest",
    coords: [29.1250, 110.4797],
    radius: 120000,
    country: "China",
    type: "Karst Forest",
    area: {
        total: "900 km²",
        original: "900 km²",
        current: "880 km²"
    },
    biodiversity: {
        species: "3,000+ plant species, 400 bird species",
        endangered: [
            "Chinese Giant Salamander",
            "Lev's Muntjac",
            "Black-browed Albatross"
        ],
        endemic: "400 fish species, 150 mammals",
        keySpecies: [
            { name: "Chinese Fir", role: "Carbon storage" },
            { name: "Golden Eagle", role: "Apex predator" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "15,000 hectares", gain: "1,500 hectares" },
            { year: 2022, loss: "14,500 hectares", gain: "1,450 hectares" },
            { year: 2021, loss: "14,800 hectares", gain: "1,480 hectares" },
            { year: 2020, loss: "14,300 hectares", gain: "1,430 hectares" },
            { year: 2019, loss: "14,000 hectares", gain: "1,400 hectares" },
            { year: 2018, loss: "13,700 hectares", gain: "1,370 hectares" },
            { year: 2017, loss: "13,400 hectares", gain: "1,340 hectares" },
            { year: 2016, loss: "13,100 hectares", gain: "1,310 hectares" },
            { year: 2015, loss: "12,800 hectares", gain: "1,280 hectares" },
            { year: 2014, loss: "12,500 hectares", gain: "1,250 hectares" }
        ],
        totalLoss: "3% since 2010",
        primaryThreats: [
            { threat: "Tourism Pressure", impact: "High", trend: "Increasing" },
            { threat: "Urban Development", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "National Park",
        projects: [
            {
                name: "Zhangjiajie Vegetation Restoration",
                type: "Reforestation",
                impact: "Planted 30,000 trees"
            },
            {
                name: "Wildlife Protection Program",
                type: "Species conservation",
                impact: "Protected critical habitats of key species"
            }
        ],
        initiatives: ["Sustainable Tourism Management", "Environmental Education", "Pollution Control"]
    }
},
{
    id: "tamannegara",
    name: "Taman Negara",
    coords: [3.0, 102.5],
    radius: 350000,
    country: "Malaysia",
    type: "Tropical Rainforest",
    area: {
        total: "4,343 km²",
        original: "4,343 km²",
        current: "4,200 km²"
    },
    biodiversity: {
        species: "5,400+ plant species, 600 bird species",
        endangered: [
            "Malayan Tiger",
            "Asian Elephant",
            "Sun Bear"
        ],
        endemic: "700 fish species, 300 mammals",
        keySpecies: [
            { name: "Meranti Tree", role: "Canopy structure" },
            { name: "Hornbills", role: "Seed dispersers" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "50,000 hectares", gain: "5,000 hectares" },
            { year: 2022, loss: "48,000 hectares", gain: "4,800 hectares" },
            { year: 2021, loss: "52,000 hectares", gain: "5,200 hectares" },
            { year: 2020, loss: "50,500 hectares", gain: "5,000 hectares" },
            { year: 2019, loss: "49,500 hectares", gain: "4,900 hectares" },
            { year: 2018, loss: "47,000 hectares", gain: "4,700 hectares" },
            { year: 2017, loss: "46,500 hectares", gain: "4,650 hectares" },
            { year: 2016, loss: "46,000 hectares", gain: "4,600 hectares" },
            { year: 2015, loss: "45,500 hectares", gain: "4,550 hectares" },
            { year: 2014, loss: "45,000 hectares", gain: "4,500 hectares" }
        ],
        totalLoss: "9% since 2010",
        primaryThreats: [
            { threat: "Logging", impact: "High", trend: "Decreasing" },
            { threat: "Agricultural Expansion", impact: "High", trend: "Increasing" },
            { threat: "Climate Change", impact: "Medium", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "National Park",
        projects: [
            {
                name: "Taman Negara Conservation Project",
                type: "Habitat protection",
                impact: "Protected 100,000 hectares"
            },
            {
                name: "Wildlife Corridor Initiative",
                type: "Wildlife movement facilitation",
                impact: "Established corridors for key species"
            }
        ],
        initiatives: ["Eco-Tourism Promotion", "Community Engagement", "Research and Monitoring"]
    }
},
{
    id: "dukuduku",
    name: "Dukuduku Forest",
    coords: [-25.0, 31.0],
    radius: 80000,
    country: "South Africa",
    type: "Savanna Forest",
    area: {
        total: "800 km²",
        original: "800 km²",
        current: "780 km²"
    },
    biodiversity: {
        species: "2,500+ plant species, 350 bird species",
        endangered: [
            "African Wild Dog",
            "Pangolin",
            "Cape Vulture"
        ],
        endemic: "300 fish species, 120 mammals",
        keySpecies: [
            { name: "Baobab Tree", role: "Carbon storage" },
            { name: "Lion", role: "Apex predator" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "8,000 hectares", gain: "800 hectares" },
            { year: 2022, loss: "7,800 hectares", gain: "780 hectares" },
            { year: 2021, loss: "8,200 hectares", gain: "820 hectares" },
            { year: 2020, loss: "7,900 hectares", gain: "790 hectares" },
            { year: 2019, loss: "7,700 hectares", gain: "770 hectares" },
            { year: 2018, loss: "7,500 hectares", gain: "750 hectares" },
            { year: 2017, loss: "7,300 hectares", gain: "730 hectares" },
            { year: 2016, loss: "7,100 hectares", gain: "710 hectares" },
            { year: 2015, loss: "6,900 hectares", gain: "690 hectares" },
            { year: 2014, loss: "6,700 hectares", gain: "670 hectares" }
        ],
        totalLoss: "5% since 2010",
        primaryThreats: [
            { threat: "Agricultural Expansion", impact: "High", trend: "Increasing" },
            { threat: "Wildlife Poaching", impact: "Medium", trend: "Stable" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Dukuduku Wildlife Protection",
                type: "Anti-poaching",
                impact: "Reduced poaching incidents by 30%"
            },
            {
                name: "Habitat Restoration Program",
                type: "Reforestation",
                impact: "Restored 10,000 hectares"
            }
        ],
        initiatives: ["Community Education", "Sustainable Farming Practices", "Wildlife Monitoring"]
    }
},
{
    id: "arashiyama",
    name: "Arashiyama Bamboo Forest",
    coords: [35.0167, 135.6667],
    radius: 3000,
    country: "Japan",
    type: "Bamboo Forest",
    area: {
        total: "10 km²",
        original: "10 km²",
        current: "9.8 km²"
    },
    biodiversity: {
        species: "1,200+ plant species, 180 bird species",
        endangered: [
            "Japanese Crested Ibis",
            "Sasakia Charonda (Sawtooth Meadow Brown)",
            "Ussuri Dhole"
        ],
        endemic: "150 fish species, 60 mammals",
        keySpecies: [
            { name: "Sasa Bamboo", role: "Erosion control" },
            { name: "Japanese Macaque", role: "Seed disperser" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "500 hectares", gain: "50 hectares" },
            { year: 2022, loss: "480 hectares", gain: "48 hectares" },
            { year: 2021, loss: "490 hectares", gain: "49 hectares" },
            { year: 2020, loss: "470 hectares", gain: "47 hectares" },
            { year: 2019, loss: "460 hectares", gain: "46 hectares" },
            { year: 2018, loss: "450 hectares", gain: "45 hectares" },
            { year: 2017, loss: "440 hectares", gain: "44 hectares" },
            { year: 2016, loss: "430 hectares", gain: "43 hectares" },
            { year: 2015, loss: "420 hectares", gain: "42 hectares" },
            { year: 2014, loss: "410 hectares", gain: "41 hectares" }
        ],
        totalLoss: "2% since 2010",
        primaryThreats: [
            { threat: "Urban Development", impact: "High", trend: "Increasing" },
            { threat: "Tourism Pressure", impact: "Medium", trend: "Stable" },
            { threat: "Invasive Species", impact: "Low", trend: "Decreasing" }
        ]
    },
    conservation: {
        status: "Protected Area",
        projects: [
            {
                name: "Arashiyama Bamboo Preservation",
                type: "Habitat protection",
                impact: "Protected 2 km²"
            },
            {
                name: "Eco-Tourism Development",
                type: "Sustainable tourism",
                impact: "Reduced environmental impact by 10%"
            }
        ],
        initiatives: ["Community Engagement", "Sustainable Tour Management", "Research and Monitoring"]
    }
},
{
    id: "sequoia",
    name: "Sequoia National Forest",
    coords: [36.4864, -118.5658],
    radius: 1430000,
    country: "USA",
    type: "Coniferous Forest",
    area: {
        total: "1,600 km²",
        original: "1,600 km²",
        current: "1,550 km²"
    },
    biodiversity: {
        species: "3,500+ plant species, 450 bird species",
        endangered: [
            "California Condor",
            "Giant Sequoia Tailed Frog",
            "Southern Steelhead Trout"
        ],
        endemic: "500 fish species, 200 mammals",
        keySpecies: [
            { name: "Giant Sequoia", role: "Carbon storage" },
            { name: "American Black Bear", role: "Seed disperser" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "60,000 hectares", gain: "6,000 hectares" },
            { year: 2022, loss: "58,000 hectares", gain: "5,800 hectares" },
            { year: 2021, loss: "59,000 hectares", gain: "5,900 hectares" },
            { year: 2020, loss: "57,000 hectares", gain: "5,700 hectares" },
            { year: 2019, loss: "56,000 hectares", gain: "5,600 hectares" },
            { year: 2018, loss: "55,000 hectares", gain: "5,500 hectares" },
            { year: 2017, loss: "54,000 hectares", gain: "5,400 hectares" },
            { year: 2016, loss: "53,000 hectares", gain: "5,300 hectares" },
            { year: 2015, loss: "52,000 hectares", gain: "5,200 hectares" },
            { year: 2014, loss: "51,000 hectares", gain: "5,100 hectares" }
        ],
        totalLoss: "7% since 2010",
        primaryThreats: [
            { threat: "Wildfires", impact: "High", trend: "Increasing" },
            { threat: "Logging", impact: "Medium", trend: "Decreasing" },
            { threat: "Climate Change", impact: "High", trend: "Increasing" }
        ]
    },
    conservation: {
        status: "National Park",
        projects: [
            {
                name: "Sequoia Restoration Project",
                type: "Habitat restoration",
                impact: "Restored 100,000 hectares"
            },
            {
                name: "Wildfire Mitigation Initiative",
                type: "Fire management",
                impact: "Implemented controlled burns in 10,000 hectares"
            }
        ],
        initiatives: ["Sustainable Forestry Practices", "Research and Monitoring", "Community Engagement"]
    }
},
{
    id: "coconino",
    name: "Coconino National Forest",
    coords: [35.4, -111.6],
    radius: 1615000,
    country: "USA",
    type: "Mixed Forest",
    area: {
        total: "16,150 km²",
        original: "16,150 km²",
        current: "16,000 km²"
    },
    biodiversity: {
        species: "4,000+ plant species, 500 bird species",
        endangered: [
            "California Spotted Owl",
            "Mexican Gray Wolf",
            "Arizona Bark Scorpion"
        ],
        endemic: "600 fish species, 250 mammals",
        keySpecies: [
            { name: "Ponderosa Pine", role: "Canopy structure" },
            { name: "North American Beaver", role: "Ecosystem engineer" }
        ]
    },
    historicalData: {
        annualLoss: [
            { year: 2023, loss: "70,000 hectares", gain: "7,000 hectares" },
            { year: 2022, loss: "68,000 hectares", gain: "6,800 hectares" },
            { year: 2021, loss: "69,000 hectares", gain: "6,900 hectares" },
            { year: 2020, loss: "67,000 hectares", gain: "6,700 hectares" },
            { year: 2019, loss: "66,000 hectares", gain: "6,600 hectares" },
            { year: 2018, loss: "65,000 hectares", gain: "6,500 hectares" },
            { year: 2017, loss: "64,000 hectares", gain: "6,400 hectares" },
            { year: 2016, loss: "63,000 hectares", gain: "6,300 hectares" },
            { year: 2015, loss: "62,000 hectares", gain: "6,200 hectares" },
            { year: 2014, loss: "61,000 hectares", gain: "6,100 hectares" }
        ],
        totalLoss: "8% since 2010",
        primaryThreats: [
            { threat: "Wildfires", impact: "High", trend: "Increasing" },
            { threat: "Logging", impact: "Medium", trend: "Decreasing" },
            { threat: "Invasive Species", impact: "Low", trend: "Decreasing" }
        ]
    },
    conservation: {
        status: "National Forest",
        projects: [
            {
                name: "Coconino Forest Restoration",
                type: "Habitat restoration",
                impact: "Restored 150,000 hectares"
            },
            {
                name: "Wildlife Conservation Program",
                type: "Species protection",
                impact: "Protected critical habitats of key species"
            }
        ],
        initiatives: ["Sustainable Forestry Practices", "Research and Monitoring", "Community Engagement"]
    }
},
    ]
};

// Helper functions for data analysis
const forestDataHelpers = {
    getForestById: (id) => forestDatabase.forests.find(f => f.id === id),
    
    calculateAnnualLossRate: (forest) => {
        const recentYears = forest.historicalData.annualLoss.slice(0, 5);
        return recentYears.reduce((acc, year) => 
            acc + parseInt(year.loss.replace(/[^0-9]/g, '')), 0) / 5;
    },

    getConservationStatus: (forest) => {
        const currentArea = parseInt(forest.area.current.replace(/[^0-9]/g, ''));
        const originalArea = parseInt(forest.area.original.replace(/[^0-9]/g, ''));
        const percentRemaining = (currentArea / originalArea) * 100;
        
        if (percentRemaining > 90) return "Healthy";
        if (percentRemaining > 70) return "Stable";
        if (percentRemaining > 50) return "Vulnerable";
        return "Critical";
    },

    getYearlyComparison: (forest, year1, year2) => {
        const data1 = forest.historicalData.annualLoss.find(y => y.year === year1);
        const data2 = forest.historicalData.annualLoss.find(y => y.year === year2);
        return {
            yearOne: data1,
            yearTwo: data2,
            difference: parseInt(data1.loss) - parseInt(data2.loss)
        };
    }
};

export { forestDatabase, forestDataHelpers };

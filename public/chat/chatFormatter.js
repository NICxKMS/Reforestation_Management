/**
 * Formats streamed content with enhanced markdown and ChatGPT-style formatting
 * @param {string} text - Raw text input
 * @returns {string} Formatted HTML output
 */
function formatStreamedContent(text) {
    // Pre-processing
    text = text.trim();
    
    // Add smart typography formatting
    text = text
        .replace(/(^|\s)"([^"]*?)"/g, '$1"$2"')         // Smart quotes
        .replace(/(^|\s)'([^']*?)'/g, '$1\'$2\'')         // Smart single quotes
        .replace(/\.\.\./g, '…')                        // Ellipsis
        .replace(/--/g, '—')                            // Em dash
        .replace(/(\d+)-(\d+)/g, '$1–$2')              // En dash between numbers
        .replace(/\(c\)/gi, '©')                        // Copyright
        .replace(/\(r\)/gi, '®')                        // Registered trademark
        .replace(/\(tm\)/gi, '™');                      // Trademark

    // Support task lists
    text = text.replace(/^(\s*)-\s*\[([ x])\]\s*(.+?)$/gm, (_, space, checked, content) => 
        `${space}<div class="task-list-item">
            <input type="checkbox" ${checked === 'x' ? 'checked' : ''} disabled>
            <span>${content}</span>
        </div>`);

    // Support keyboard shortcuts
    text = text.replace(/<kbd>(.*?)<\/kbd>/g, '<kbd>$1</kbd>');
    text = text.replace(/\[\[kbd]](.*?)\[\[\/kbd]]/g, '<kbd>$1</kbd>');

    // Format math expressions (inline and block)
    text = text.replace(/\$\$(.*?)\$\$/g, '<div class="math-block">$1</div>');
    text = text.replace(/\$(.*?)\$/g, '<span class="math-inline">$1</span>');

    // Support footnotes
    const footnotes = new Map();
    text = text.replace(/\[\^(\d+)\]: (.*?)(?=\n\n|\n\[\^|$)/g, (_, num, content) => {
        footnotes.set(num, content.trim());
        return '';
    });
    
    text = text.replace(/\[\^(\d+)\]/g, (_, num) => {
        if (footnotes.has(num)) {
            return `<sup class="footnote" title="${footnotes.get(num)}">[${num}]</sup>`;
        }
        return '';
    });

    // Format code blocks first to prevent interference with other formatting
    text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => 
        `<pre><code class="language-${lang || 'plaintext'}">${
            code.trim()
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
        }</code></pre>`
    );

    // Format inline code
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Format headers
    text = text.replace(/^#{6}\s+(.*)$/gm, '<h6>$1</h6>');
    text = text.replace(/^#{5}\s+(.*)$/gm, '<h5>$1</h5>');
    text = text.replace(/^#{4}\s+(.*)$/gm, '<h4>$1</h4>');
    text = text.replace(/^#{3}\s+(.*)$/gm, '<h3>$1</h3>');
    text = text.replace(/^#{2}\s+(.*)$/gm, '<h2>$1</h2>');
    text = text.replace(/^#{1}\s+(.*)$/gm, '<h1>$1</h1>');

    // Format text styles
    text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    text = text.replace(/\_\_\_(.*?)\_\_\_/g, '<strong><em>$1</em></strong>');
    text = text.replace(/\_\_(.*?)\_\_/g, '<strong>$1</strong>');
    text = text.replace(/\_(.*?)\_/g, '<em>$1</em>');
    text = text.replace(/\~\~(.*?)\~\~/g, '<del>$1</del>');
    text = text.replace(/\=\=(.*?)\=\=/g, '<mark>$1</mark>');

    // Format superscript and subscript
    text = text.replace(/\^(.*?)\^/g, '<sup>$1</sup>');
    text = text.replace(/\~(.*?)\~/g, '<sub>$1</sub>');

    // Format links
    text = text.replace(/\[(.*?)\]\((.*?)\s+"(.*?)"\)/g, 
        '<a href="$2" title="$3" target="_blank" rel="noopener noreferrer">$1</a>');
    text = text.replace(/\[(.*?)\]\((.*?)\)/g, 
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    // Format images
    text = text.replace(/!\[(.*?)\]\((.*?)\s+"(.*?)"\)/g, 
        '<img src="$2" alt="$1" title="$3">');
    text = text.replace(/!\[(.*?)\]\((.*?)\)/g, 
        '<img src="$2" alt="$1">');

    // Format lists
    // Unordered lists with proper nesting
    text = text.replace(/(?:^|\n)(?:[ ]*[•\-\+]\s+.*(?:\n|$))+/gm, match => {
        const items = match.trim().split('\n');
        const processedItems = items.map(item => {
            const indentLevel = (item.match(/^[ ]*/)[0].length / 2);
            const content = item.replace(/^[ ]*[•\-\+]\s+/, '');
            return `${'  '.repeat(indentLevel)}<li>${content}</li>`;
        });
        return '<ul>\n' + processedItems.join('\n') + '\n</ul>';
    });

    // Ordered lists with proper nesting
    text = text.replace(/(?:^|\n)(?:[ ]*\d+\.\s+.*(?:\n|$))+/gm, match => {
        const items = match.trim().split('\n');
        const processedItems = items.map(item => {
            const indentLevel = (item.match(/^[ ]*/)[0].length / 2);
            const content = item.replace(/^[ ]*\d+\.\s+/, '');
            return `${'  '.repeat(indentLevel)}<li>${content}</li>`;
        });
        return '<ol>\n' + processedItems.join('\n') + '\n</ol>';
    });

    // Format ordered lists with sub-lists
    text = text.replace(/(?:^|\n)(?:(?:\d+\.|\-|\•)\s+(?:[^\n]+)(?:\n(?:\s+(?:\-|\•)\s+[^\n]+|\s*(?:\d+\.)\s+[^\n]+)*)*)+/gm, match => {
        const lines = match.split('\n');
        let html = '';
        let currentList = [];
        let indent = 0;
        let isOrdered = false;

        const processListItems = (items, ordered) => {
            return `<${ordered ? 'ol' : 'ul'}>\n${
                items.map(item => `  <li>${item}</li>`).join('\n')
            }\n</${ordered ? 'ol' : 'ul'}>`;
        };

        lines.forEach(line => {
            const lineIndent = (line.match(/^\s*/) || [''])[0].length;
            const content = line.replace(/^\s*(?:\d+\.|\-|\•)\s+/, '');
            
            if (lineIndent > indent) {
                // Sub-list starts
                html += processListItems(currentList, isOrdered);
                currentList = [content];
                indent = lineIndent;
                isOrdered = line.match(/^\s*\d+\./) !== null;
            } else if (lineIndent < indent) {
                // Sub-list ends
                html += processListItems(currentList, isOrdered);
                currentList = [content];
                indent = lineIndent;
                isOrdered = line.match(/^\s*\d+\./) !== null;
            } else {
                currentList.push(content);
            }
        });

        if (currentList.length) {
            html += processListItems(currentList, isOrdered);
        }

        return html;
    });

    // Format blockquotes with proper nesting
    text = text.replace(/(?:^|\n)(?:>{1,}\s+.*(?:\n|$))+/gm, match => {
        const lines = match.trim().split('\n');
        const processedLines = lines.map(line => {
            const level = (line.match(/^>+/)[0].length);
            const content = line.replace(/^>+\s+/, '');
            return `${'<blockquote>'.repeat(level)}${content}${'</blockquote>'.repeat(level)}`;
        });
        return processedLines.join('\n');
    });

    // Format tables
    text = text.replace(/(?:^|\n)(?:\|.+\|(?:\n|$))+/gm, match => {
        const rows = match.trim().split('\n');
        const headerRow = rows[0];
        const alignmentRow = rows[1];
        const dataRows = rows.slice(2);

        // Process alignment row
        const alignments = alignmentRow.split('|').slice(1, -1).map(cell => {
            cell = cell.trim();
            if (cell.startsWith(':') && cell.endsWith(':')) return 'center';
            if (cell.endsWith(':')) return 'right';
            return 'left';
        });

        // Process header
        const header = headerRow.split('|')
            .slice(1, -1)
            .map((cell, i) => `<th style="text-align: ${alignments[i]}">${cell.trim()}</th>`)
            .join('');

        // Process data rows
        const body = dataRows.map(row => {
            const cells = row.split('|')
                .slice(1, -1)
                .map((cell, i) => `<td style="text-align: ${alignments[i]}">${cell.trim()}</td>`)
                .join('');
            return `<tr>${cells}</tr>`;
        }).join('\n');

        return `<table>\n<thead>\n<tr>${header}</tr>\n</thead>\n<tbody>\n${body}\n</tbody>\n</table>`;
    });

    // Format callouts/admonitions
    const calloutTypes = {
        'NOTE': 'info',
        'INFO': 'info',
        'TIP': 'tip',
        'WARNING': 'warning',
        'CAUTION': 'warning',
        'IMPORTANT': 'important',
        'SUCCESS': 'success',
        'ERROR': 'error'
    };

    Object.entries(calloutTypes).forEach(([keyword, className]) => {
        const pattern = new RegExp(`!\\[${keyword}\\]([^\\n]+)(?:\\n(?:(?!!\\[).*\\n)*)?`, 'g');
        text = text.replace(pattern, (_, content) => 
            `<div class="callout callout-${className}">${content.trim()}</div>`
        );
    });

    // Format horizontal rules
    text = text.replace(/^[\-]{3,}$|^[\*]{3,}$|^[\_]{3,}$/gm, '<hr>');

    // Add collapsible details/summary sections
    text = text.replace(/:::(\w+)\s+(.*?):::/gs, '<details class="$1"><summary>$2</summary>');
    text = text.replace(/:::/g, '</details>');

    // Format paragraphs
    const paragraphs = text.split(/\n{2,}/);
    text = paragraphs.map(p => {
        if (!p.trim()) return '';
        if (p.startsWith('<')) return p; // Skip already formatted HTML
        return `<p>${p.replace(/\n/g, '<br>')}</p>`;
    }).join('\n');

    return text;
}

class ChatGPTStreamFormatter {
    constructor(outputElement) {
        this.outputElement = outputElement;
        this.decoder = new TextDecoder();
        this.buffer = '';
        this.accumulatedResponse = '';
        this.lastUpdateTime = 0;
        this.updateInterval = 16; // ~60fps
    }

    processChunk(chunk) {
        const lines = chunk.split('\n');
        
        for (const line of lines) {
            if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data === '[DONE]') {
                    this.updateDisplay(true);
                    continue;
                }
                
                try {
                    const parsed = JSON.parse(data);
                    if (parsed.content) {
                        this.accumulatedResponse += parsed.content;
                        this.throttledUpdateDisplay();
                    }
                } catch (e) {
                    console.warn('Skipping invalid JSON chunk:', e);
                }
            }
        }
    }

    throttledUpdateDisplay() {
        const now = Date.now();
        if (now - this.lastUpdateTime >= this.updateInterval) {
            this.updateDisplay();
            this.lastUpdateTime = now;
        }
    }

    updateDisplay(force = false) {
        if (!force && Date.now() - this.lastUpdateTime < this.updateInterval) {
            return;
        }

        try {
            // Format the accumulated response
            const formattedContent = formatStreamedContent(this.accumulatedResponse);
            
            // Log final response if force is true (meaning it's the last chunk)
            if (force) {
                console.log('Final Chat Response:', {
                    raw: this.accumulatedResponse,
                    formatted: formattedContent,
                    timestamp: new Date().toISOString()
                });
            }

            // Sanitize and update the display
            if (typeof DOMPurify !== 'undefined') {
                this.outputElement.innerHTML = DOMPurify.sanitize(formattedContent, {
                    ADD_TAGS: [
                        'sup', 'sub', 'mark', 'table', 'thead', 'tbody', 
                        'tr', 'th', 'td', 'details', 'summary', 'kbd', 
                        'input', 'div', 'span'
                    ],
                    ADD_ATTR: [
                        'target', 'rel', 'style', 'class', 'type',
                        'checked', 'disabled', 'title'
                    ],
                    FORBID_TAGS: ['script', 'style', 'iframe'],
                    FORBID_ATTR: ['onerror', 'onload', 'onclick']
                });
            } else {
                this.outputElement.innerHTML = formattedContent;
            }

            // Apply syntax highlighting to code blocks if hljs is available
            if (typeof hljs !== 'undefined') {
                this.outputElement.querySelectorAll('pre code').forEach(block => {
                    hljs.highlightElement(block);
                });
            }

            this.lastUpdateTime = Date.now();
        } catch (error) {
            console.error('Error formatting chat response:', error);
            this.outputElement.innerHTML = this.accumulatedResponse;
        }
    }
}

// Export both the formatter class and the utility function
export { ChatGPTStreamFormatter, formatStreamedContent };
# CONFERENCE-TOPICS.HTML - REDESIGN PREDLOG

## 📋 TRENUTNO STANJE

**Stranica**: Conference-Topics.html
**Status**: Funkcionalna ali teška za navigaciju
**Prioritet**: VISOK

### Postojeća struktura:
- Naslov stranice
- Dugačka lista tema organizovana u 7 kategorija
- 50+ specifičnih tema u bullet point formatu
- Nema filtriranje, pretraživanje ili interaktivnost

### Glavni problemi:
- Sve teme na jednoj dugoj stranici
- Nema mogućnosti filtriranja po kategoriji
- Nema search funkcionalnosti
- Teško pronaći specifične teme
- Nema vizuelne hijerarhije

---

## 🎯 REDESIGN CILJEVI

### Primarni ciljevi:
1. **Implementirati tabbed interface** - Svaka kategorija u zasebnoj tab-i
2. **Dodati search funkcionalnost** - Real-time pretraživanje tema
3. **Dodati filter opcije** - Po kategoriji i ključnim rečima
4. **Poboljšati vizuelnu hijerarhiju** - Ikone i bolje formatiranje
5. **Dodati interaktivnost** - Hover efekti i animacije

### Sekundarni ciljevi:
1. Dodati broj radova po temi (ako je dostupno)
2. Linkovi na detaljnije informacije
3. Mogućnost bookmarking tema
4. Export funkcionalnost

---

## 🎨 VIZUELNI REDESIGN

### Header sekcija - POBOLJŠANA
```html
<!-- Enhanced Header -->
<section class="topics-header-modern" id="topics-header">
    <div class="container">
        <div class="header-content">
            <span class="section-eyebrow">Conference Focus Areas</span>
            <h1 class="page-title">2026 Conference Topics</h1>
            <p class="page-subtitle">
                Explore cutting-edge research areas spanning business, management, 
                and economics engineering in the age of sustainability and digital transformation.
            </p>
        </div>
        
        <!-- Search and Filter Bar -->
        <div class="topics-controls">
            <div class="search-container">
                <svg class="search-icon"><!-- Search icon --></svg>
                <input 
                    type="text" 
                    id="topicSearch" 
                    placeholder="Search topics, keywords, or themes..."
                    class="search-input"
                >
                <button class="search-clear" id="clearSearch">
                    <svg><!-- X icon --></svg>
                </button>
            </div>
            
            <div class="filter-container">
                <select id="categoryFilter" class="filter-select">
                    <option value="">All Categories</option>
                    <option value="business">Business & Management</option>
                    <option value="economics">Economics & Finance</option>
                    <option value="engineering">Engineering & Construction</option>
                    <option value="digital">Digital Transformation</option>
                    <option value="sustainability">Sustainability & Energy</option>
                    <option value="design">Design & Innovation</option>
                    <option value="healthcare">Healthcare & Hospitality</option>
                </select>
            </div>
            
            <div class="view-toggle">
                <button class="view-btn active" data-view="tabs">
                    <svg><!-- Grid icon --></svg>
                    Categories
                </button>
                <button class="view-btn" data-view="list">
                    <svg><!-- List icon --></svg>
                    All Topics
                </button>
            </div>
        </div>
    </div>
</section>
```

### Tabbed Interface - NOVA IMPLEMENTACIJA
```html
<!-- Modern Tabbed Topics -->
<section class="topics-section-modern" id="topics-content">
    <div class="container">
        <!-- Tab Navigation -->
        <div class="topics-tabs">
            <button class="tab-btn active" data-category="business">
                <div class="tab-icon">
                    <svg><!-- Business icon --></svg>
                </div>
                <div class="tab-content">
                    <span class="tab-title">Business & Management</span>
                    <span class="tab-count">8 topics</span>
                </div>
            </button>
            
            <button class="tab-btn" data-category="economics">
                <div class="tab-icon">
                    <svg><!-- Economics icon --></svg>
                </div>
                <div class="tab-content">
                    <span class="tab-title">Economics & Finance</span>
                    <span class="tab-count">5 topics</span>
                </div>
            </button>
            
            <button class="tab-btn" data-category="engineering">
                <div class="tab-icon">
                    <svg><!-- Engineering icon --></svg>
                </div>
                <div class="tab-content">
                    <span class="tab-title">Engineering & Construction</span>
                    <span class="tab-count">7 topics</span>
                </div>
            </button>
            
            <button class="tab-btn" data-category="digital">
                <div class="tab-icon">
                    <svg><!-- Digital icon --></svg>
                </div>
                <div class="tab-content">
                    <span class="tab-title">Digital Transformation</span>
                    <span class="tab-count">8 topics</span>
                </div>
            </button>
            
            <button class="tab-btn" data-category="sustainability">
                <div class="tab-icon">
                    <svg><!-- Sustainability icon --></svg>
                </div>
                <div class="tab-content">
                    <span class="tab-title">Sustainability & Energy</span>
                    <span class="tab-count">7 topics</span>
                </div>
            </button>
            
            <button class="tab-btn" data-category="design">
                <div class="tab-icon">
                    <svg><!-- Design icon --></svg>
                </div>
                <div class="tab-content">
                    <span class="tab-title">Design & Innovation</span>
                    <span class="tab-count">6 topics</span>
                </div>
            </button>
            
            <button class="tab-btn" data-category="healthcare">
                <div class="tab-icon">
                    <svg><!-- Healthcare icon --></svg>
                </div>
                <div class="tab-content">
                    <span class="tab-title">Healthcare & Hospitality</span>
                    <span class="tab-count">5 topics</span>
                </div>
            </button>
        </div>
        
        <!-- Tab Content -->
        <div class="topics-content">
            <!-- Business & Management Tab -->
            <div class="tab-panel active" id="business-panel">
                <div class="category-header">
                    <h2 class="category-title">Business, Management & Human Resources</h2>
                    <p class="category-description">
                        Explore strategic approaches to sustainable business models, 
                        corporate governance, and human capital development.
                    </p>
                </div>
                
                <div class="topics-grid">
                    <div class="topic-card" data-keywords="strategy sustainability business">
                        <div class="topic-icon">
                            <svg><!-- Strategy icon --></svg>
                        </div>
                        <div class="topic-content">
                            <h3 class="topic-title">Strategic and Sustainable Business Models</h3>
                            <p class="topic-description">
                                Innovative approaches to creating value while maintaining 
                                environmental and social responsibility.
                            </p>
                            <div class="topic-tags">
                                <span class="tag">Strategy</span>
                                <span class="tag">Sustainability</span>
                                <span class="tag">Innovation</span>
                            </div>
                        </div>
                        <div class="topic-actions">
                            <button class="bookmark-btn" title="Bookmark this topic">
                                <svg><!-- Bookmark icon --></svg>
                            </button>
                            <a href="Submissions.html" class="submit-btn" title="Submit paper">
                                <svg><!-- Upload icon --></svg>
                            </a>
                        </div>
                    </div>
                    
                    <div class="topic-card" data-keywords="governance leadership ethics">
                        <div class="topic-icon">
                            <svg><!-- Leadership icon --></svg>
                        </div>
                        <div class="topic-content">
                            <h3 class="topic-title">Corporate Governance and Ethical Leadership</h3>
                            <p class="topic-description">
                                Best practices in organizational leadership and 
                                ethical decision-making frameworks.
                            </p>
                            <div class="topic-tags">
                                <span class="tag">Governance</span>
                                <span class="tag">Ethics</span>
                                <span class="tag">Leadership</span>
                            </div>
                        </div>
                        <div class="topic-actions">
                            <button class="bookmark-btn" title="Bookmark this topic">
                                <svg><!-- Bookmark icon --></svg>
                            </button>
                            <a href="Submissions.html" class="submit-btn" title="Submit paper">
                                <svg><!-- Upload icon --></svg>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Continue with other topics -->
                </div>
            </div>
            
            <!-- Other tab panels... -->
        </div>
    </div>
</section>
```

### All Topics List View - ALTERNATIVNI PRIKAZ
```html
<!-- Alternative List View -->
<div class="topics-list-view" id="list-view" style="display: none;">
    <div class="list-header">
        <div class="results-info">
            <span id="resultsCount">46</span> topics found
        </div>
        <div class="sort-options">
            <select id="sortBy">
                <option value="category">Sort by Category</option>
                <option value="alphabetical">Sort Alphabetically</option>
                <option value="popularity">Sort by Popularity</option>
            </select>
        </div>
    </div>
    
    <div class="topics-list">
        <div class="topic-item" data-category="business" data-keywords="strategy sustainability">
            <div class="topic-category-badge">Business & Management</div>
            <h3 class="topic-title">Strategic and Sustainable Business Models</h3>
            <p class="topic-excerpt">
                Innovative approaches to creating value while maintaining environmental responsibility...
            </p>
            <div class="topic-meta">
                <span class="topic-tags">
                    <span class="tag">Strategy</span>
                    <span class="tag">Sustainability</span>
                </span>
                <div class="topic-actions">
                    <button class="bookmark-btn">Bookmark</button>
                    <a href="Submissions.html" class="submit-link">Submit Paper</a>
                </div>
            </div>
        </div>
        
        <!-- Repeat for all topics -->
    </div>
</div>
```

---

## 🔧 TEHNIČKA IMPLEMENTACIJA

### CSS Stilovi
```css
/* Topics Header */
.topics-header-modern {
    padding: 4rem 0 2rem;
    background: linear-gradient(135deg, var(--bme-primary), var(--bme-secondary));
    color: white;
}

.header-content {
    text-align: center;
    margin-bottom: 3rem;
}

.section-eyebrow {
    display: inline-block;
    background: rgba(23, 237, 209, 0.2);
    color: var(--bme-accent);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

.page-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    margin-bottom: 1rem;
}

.page-subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
}

/* Search and Filter Controls */
.topics-controls {
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 1rem;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.search-container {
    position: relative;
    display: flex;
    align-items: center;
}

.search-input {
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    color: var(--bme-primary);
}

.search-icon {
    position: absolute;
    left: 1rem;
    width: 20px;
    height: 20px;
    color: var(--bme-primary);
    opacity: 0.6;
}

.search-clear {
    position: absolute;
    right: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s ease;
}

.filter-select {
    padding: 1rem;
    border: none;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.9);
    color: var(--bme-primary);
    font-size: 1rem;
    min-width: 200px;
}

.view-toggle {
    display: flex;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    overflow: hidden;
}

.view-btn {
    padding: 1rem;
    border: none;
    background: transparent;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
}

.view-btn.active {
    background: var(--bme-accent);
    color: var(--bme-primary);
}

/* Tabbed Interface */
.topics-section-modern {
    padding: 3rem 0;
}

.topics-tabs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
}

.tab-btn {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border: 2px solid rgba(23, 237, 209, 0.2);
    border-radius: 15px;
    background: transparent;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: left;
}

.tab-btn:hover {
    border-color: var(--bme-accent);
    background: rgba(23, 237, 209, 0.1);
}

.tab-btn.active {
    border-color: var(--bme-accent);
    background: var(--bme-accent);
    color: var(--bme-primary);
}

.tab-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
}

.tab-title {
    font-weight: 600;
    font-size: 1rem;
    display: block;
}

.tab-count {
    font-size: 0.9rem;
    opacity: 0.7;
}

/* Topic Cards */
.topics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.topic-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.topic-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--bme-accent), var(--bme-secondary));
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.topic-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--bme-accent);
    transform: translateY(-5px);
}

.topic-card:hover::before {
    transform: scaleX(1);
}

.topic-icon {
    width: 50px;
    height: 50px;
    background: var(--bme-accent);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
}

.topic-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.topic-description {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.topic-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.tag {
    background: rgba(23, 237, 209, 0.2);
    color: var(--bme-accent);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
}

.topic-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bookmark-btn {
    background: none;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.bookmark-btn:hover {
    border-color: var(--bme-accent);
    color: var(--bme-accent);
}

.submit-btn {
    background: var(--bme-accent);
    color: var(--bme-primary);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
}

.submit-btn:hover {
    background: var(--bme-secondary);
    transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .topics-controls {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .topics-tabs {
        grid-template-columns: 1fr;
    }
    
    .topics-grid {
        grid-template-columns: 1fr;
    }
    
    .tab-btn {
        padding: 1rem;
    }
}
```

### JavaScript Funkcionalnosti
```javascript
// Topics page functionality
class TopicsManager {
    constructor() {
        this.currentView = 'tabs';
        this.currentCategory = 'business';
        this.searchTerm = '';
        this.selectedFilter = '';
        this.bookmarkedTopics = JSON.parse(localStorage.getItem('bookmarkedTopics') || '[]');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.loadBookmarks();
        this.showCategory(this.currentCategory);
    }
    
    bindEvents() {
        // Search functionality
        const searchInput = document.getElementById('topicSearch');
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.filterTopics();
        });
        
        // Clear search
        document.getElementById('clearSearch').addEventListener('click', () => {
            searchInput.value = '';
            this.searchTerm = '';
            this.filterTopics();
        });
        
        // Category filter
        document.getElementById('categoryFilter').addEventListener('change', (e) => {
            this.selectedFilter = e.target.value;
            this.filterTopics();
        });
        
        // View toggle
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchView(e.target.dataset.view);
            });
        });
        
        // Tab navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.currentTarget.dataset.category;
                this.showCategory(category);
            });
        });
        
        // Bookmark functionality
        document.addEventListener('click', (e) => {
            if (e.target.closest('.bookmark-btn')) {
                const topicCard = e.target.closest('.topic-card');
                const topicTitle = topicCard.querySelector('.topic-title').textContent;
                this.toggleBookmark(topicTitle, topicCard);
            }
        });
        
        // Sort functionality
        const sortSelect = document.getElementById('sortBy');
        if (sortSelect) {
            sortSelect.addEventListener('change', (e) => {
                this.sortTopics(e.target.value);
            });
        }
    }
    
    showCategory(category) {
        // Update active tab
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        // Update active panel
        document.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        document.getElementById(`${category}-panel`).classList.add('active');
        
        this.currentCategory = category;
        
        // Animate panel transition
        this.animatePanelTransition();
    }
    
    switchView(view) {
        // Update active view button
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-view="${view}"]`).classList.add('active');
        
        // Show/hide views
        const tabsView = document.getElementById('topics-content');
        const listView = document.getElementById('list-view');
        
        if (view === 'tabs') {
            tabsView.style.display = 'block';
            listView.style.display = 'none';
        } else {
            tabsView.style.display = 'none';
            listView.style.display = 'block';
            this.updateListView();
        }
        
        this.currentView = view;
    }
    
    filterTopics() {
        const topics = document.querySelectorAll('.topic-card');
        let visibleCount = 0;
        
        topics.forEach(topic => {
            const title = topic.querySelector('.topic-title').textContent.toLowerCase();
            const keywords = topic.dataset.keywords.toLowerCase();
            const category = topic.closest('.tab-panel').id.replace('-panel', '');
            
            const matchesSearch = !this.searchTerm || 
                title.includes(this.searchTerm) || 
                keywords.includes(this.searchTerm);
            
            const matchesFilter = !this.selectedFilter || 
                category === this.selectedFilter;
            
            if (matchesSearch && matchesFilter) {
                topic.style.display = 'block';
                visibleCount++;
                // Add highlight to search terms
                this.highlightSearchTerm(topic);
            } else {
                topic.style.display = 'none';
            }
        });
        
        // Update results count
        const resultsCount = document.getElementById('resultsCount');
        if (resultsCount) {
            resultsCount.textContent = visibleCount;
        }
        
        // Show no results message if needed
        this.showNoResultsMessage(visibleCount === 0);
    }
    
    highlightSearchTerm(topicCard) {
        if (!this.searchTerm) return;
        
        const title = topicCard.querySelector('.topic-title');
        const description = topicCard.querySelector('.topic-description');
        
        [title, description].forEach(element => {
            const text = element.textContent;
            const highlightedText = text.replace(
                new RegExp(this.searchTerm, 'gi'),
                `<mark>$&</mark>`
            );
            element.innerHTML = highlightedText;
        });
    }
    
    toggleBookmark(topicTitle, topicCard) {
        const index = this.bookmarkedTopics.indexOf(topicTitle);
        const bookmarkBtn = topicCard.querySelector('.bookmark-btn');
        
        if (index === -1) {
            // Add bookmark
            this.bookmarkedTopics.push(topicTitle);
            bookmarkBtn.classList.add('bookmarked');
            bookmarkBtn.title = 'Remove bookmark';
            this.showToast('Topic bookmarked!');
        } else {
            // Remove bookmark
            this.bookmarkedTopics.splice(index, 1);
            bookmarkBtn.classList.remove('bookmarked');
            bookmarkBtn.title = 'Bookmark this topic';
            this.showToast('Bookmark removed!');
        }
        
        localStorage.setItem('bookmarkedTopics', JSON.stringify(this.bookmarkedTopics));
    }
    
    loadBookmarks() {
        document.querySelectorAll('.topic-card').forEach(card => {
            const title = card.querySelector('.topic-title').textContent;
            const bookmarkBtn = card.querySelector('.bookmark-btn');
            
            if (this.bookmarkedTopics.includes(title)) {
                bookmarkBtn.classList.add('bookmarked');
                bookmarkBtn.title = 'Remove bookmark';
            }
        });
    }
    
    animatePanelTransition() {
        const activePanel = document.querySelector('.tab-panel.active');
        activePanel.style.opacity = '0';
        activePanel.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            activePanel.style.transition = 'all 0.3s ease';
            activePanel.style.opacity = '1';
            activePanel.style.transform = 'translateY(0)';
        }, 50);
    }
    
    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
    
    showNoResultsMessage(show) {
        let noResults = document.getElementById('no-results');
        
        if (show && !noResults) {
            noResults = document.createElement('div');
            noResults.id = 'no-results';
            noResults.className = 'no-results';
            noResults.innerHTML = `
                <div class="no-results-content">
                    <svg class="no-results-icon"><!-- Search icon --></svg>
                    <h3>No topics found</h3>
                    <p>Try adjusting your search terms or filters</p>
                    <button onclick="topicsManager.clearAllFilters()" class="btn-outline">
                        Clear All Filters
                    </button>
                </div>
            `;
            document.querySelector('.topics-content').appendChild(noResults);
        } else if (!show && noResults) {
            noResults.remove();
        }
    }
    
    clearAllFilters() {
        document.getElementById('topicSearch').value = '';
        document.getElementById('categoryFilter').value = '';
        this.searchTerm = '';
        this.selectedFilter = '';
        this.filterTopics();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.topicsManager = new TopicsManager();
});
```

---

## 📱 MOBILE OPTIMIZACIJA

### Responsive Design
- Stack tabs vertically na mobile
- Touch-friendly search i filter kontrole
- Swipe gestures za navigaciju između kategorija
- Optimizovane topic cards za mobile

### Performance
- Lazy loading za topic cards
- Virtual scrolling za velike liste
- Debounced search input
- Optimizovane animacije

---

## 🎯 CONVERSION OPTIMIZACIJA

### CTA Optimizacija
- "Submit Paper" dugmići na svakoj topic card-i
- Bookmark funkcionalnost za later reference
- Direct links na submission formu
- Progress tracking za bookmarked topics

### Analytics Tracking
```javascript
// Track topic interactions
function trackTopicInteraction(action, topicTitle, category) {
    gtag('event', 'topic_interaction', {
        'action': action,
        'topic_title': topicTitle,
        'category': category,
        'page_location': window.location.href
    });
}
```

---

## ✅ IMPLEMENTACIJA CHECKLIST

### Faza 1 - Osnove (Nedelja 1)
- [ ] Implementirati tabbed interface
- [ ] Dodati search funkcionalnost
- [ ] Kreirati topic cards dizajn
- [ ] Dodati osnovne animacije

### Faza 2 - Funkcionalnosti (Nedelja 2)
- [ ] Implementirati filter opcije
- [ ] Dodati bookmark funkcionalnost
- [ ] Kreirati list view alternativu
- [ ] Optimizovati za mobile

### Faza 3 - Poboljšanja (Nedelja 3+)
- [ ] Dodati advanced search opcije
- [ ] Implementirati sort funkcionalnosti
- [ ] Dodati export opcije
- [ ] Performance optimizacija

---

## 📊 SUCCESS METRICS

### Ciljevi:
- **Search usage**: 60% korisnika koristi search
- **Category engagement**: Povećati za 40%
- **Time on page**: Povećati za 50%
- **Submission conversion**: Povećati za 25%
- **Mobile engagement**: Povećati za 45%

---

*Redesign predlog kreiran: Decembar 2024*
*Status: Za implementaciju*
*Prioritet: VISOK*
# COMMITTEES.HTML - REDESIGN PREDLOG

## 📋 TRENUTNO STANJE

**Stranica**: Committees.html
**Status**: Funkcionalna ali nedovršena
**Prioritet**: SREDNJI

### Postojeća struktura:
- Conference Chair sekcija (sa slikom)
- International Program Committee (20+ članova)
- Program Committee Chair
- Organizational Committee (9 članova)
- Chair of Organizational Committee
- Reviewing Committee (30+ članova)
- **SKRIVENA**: Scientific Committee sekcija

### Glavni problemi:
- Samo Conference Chair ima fotografiju
- Nema linkova na institucije ili profile
- Nema kontakt informacija (email adrese)
- Nema mogućnosti pretraživanja ili filtriranja
- Scientific Committee je skriven
- Nema opisa uloga komiteta

---

## 🎯 REDESIGN CILJEVI

### Primarni ciljevi:
1. **Dodati fotografije** - Za sve članove komiteta
2. **Implementirati search i filter** - Po imenu, instituciji, zemlji
3. **Dodati kontakt informacije** - Email adrese i profile
4. **Prikazati skriveni sadržaj** - Scientific Committee
5. **Poboljšati vizuelnu hijerarhiju** - Member cards i organizaciju

### Sekundarni ciljevi:
1. Dodati opise uloga komiteta
2. Implementirati tabbed interface
3. Dodati LinkedIn i institutional linkove
4. Kreirati interactive organizational chart

---

## 🎨 VIZUELNI REDESIGN

### Header sekcija - POBOLJŠANA
```html
<!-- Enhanced Header -->
<section class="committees-header-modern" id="committees-header">
    <div class="container">
        <div class="header-content">
            <span class="section-eyebrow">Conference Organization</span>
            <h1 class="page-title">Committees</h1>
            <p class="page-subtitle">
                Meet the distinguished academics and professionals organizing 
                FUTURE-BME 2026 conference.
            </p>
        </div>
        
        <!-- Search and Filter Controls -->
        <div class="committees-controls">
            <div class="search-container">
                <svg class="search-icon"><!-- Search icon --></svg>
                <input 
                    type="text" 
                    id="memberSearch" 
                    placeholder="Search by name, institution, or country..."
                    class="search-input"
                >
            </div>
            
            <div class="filter-container">
                <select id="committeeFilter" class="filter-select">
                    <option value="">All Committees</option>
                    <option value="conference-chair">Conference Chair</option>
                    <option value="program">Program Committee</option>
                    <option value="organizational">Organizational Committee</option>
                    <option value="reviewing">Reviewing Committee</option>
                    <option value="scientific">Scientific Committee</option>
                </select>
                
                <select id="countryFilter" class="filter-select">
                    <option value="">All Countries</option>
                    <option value="serbia">Serbia</option>
                    <option value="poland">Poland</option>
                    <option value="montenegro">Montenegro</option>
                    <option value="slovenia">Slovenia</option>
                    <option value="austria">Austria</option>
                    <option value="hungary">Hungary</option>
                    <option value="other">Other</option>
                </select>
            </div>
        </div>
    </div>
</section>
```

### Committee Tabs - NOVA IMPLEMENTACIJA
```html
<!-- Committee Navigation Tabs -->
<section class="committees-section-modern" id="committees-content">
    <div class="container">
        <div class="committees-tabs">
            <button class="committee-tab active" data-committee="conference-chair">
                <div class="tab-icon">
                    <svg><!-- Crown icon --></svg>
                </div>
                <div class="tab-content">
                    <span class="tab-title">Conference Chair</span>
                    <span class="tab-count">1 member</span>
                </div>
            </button>
            
            <button class="committee-tab" data-committee="program">
                <div class="tab-icon">
                    <svg><!-- Program icon --></svg>
                </div>
                <div class="tab-content">
                    <span class="tab-title">Program Committee</span>
                    <span class="tab-count">20+ members</span>
                </div>
            </button>
            
            <button class="committee-tab" data-committee="organizational">
                <div class="tab-icon">
                    <svg><!-- Organization icon --></svg>
                </div>
                <div class="tab-content">
                    <span class="tab-title">Organizational</span>
                    <span class="tab-count">9 members</span>
                </div>
            </button>
            
            <button class="committee-tab" data-committee="reviewing">
                <div class="tab-icon">
                    <svg><!-- Review icon --></svg>
                </div>
                <div class="tab-content">
                    <span class="tab-title">Reviewing</span>
                    <span class="tab-count">30+ members</span>
                </div>
            </button>
            
            <button class="committee-tab" data-committee="scientific">
                <div class="tab-icon">
                    <svg><!-- Science icon --></svg>
                </div>
                <div class="tab-content">
                    <span class="tab-title">Scientific</span>
                    <span class="tab-count">15+ members</span>
                </div>
            </button>
        </div>
        
        <!-- Committee Content Panels -->
        <div class="committees-content">
            <!-- Conference Chair Panel -->
            <div class="committee-panel active" id="conference-chair-panel">
                <div class="committee-header">
                    <h2 class="committee-title">Conference Chair</h2>
                    <p class="committee-description">
                        The Conference Chair provides overall leadership and strategic 
                        direction for the FUTURE-BME 2026 conference.
                    </p>
                </div>
                
                <div class="members-grid chair-grid">
                    <div class="member-card featured-member">
                        <div class="member-image">
                            <img src="images/A.Ivanisevic.jpg" alt="Prof. Andrea Ivanisevic" loading="lazy">
                            <div class="member-status online"></div>
                        </div>
                        <div class="member-content">
                            <h3 class="member-name">Prof. Andrea Ivanišević</h3>
                            <p class="member-title">Conference Chair</p>
                            <p class="member-institution">
                                Faculty of Technical Sciences<br>
                                University of Novi Sad, Serbia
                            </p>
                            <div class="member-expertise">
                                <span class="expertise-tag">Industrial Engineering</span>
                                <span class="expertise-tag">Management</span>
                                <span class="expertise-tag">Sustainability</span>
                            </div>
                        </div>
                        <div class="member-actions">
                            <a href="mailto:andrea.ivanisevic@uns.ac.rs" class="action-btn email-btn" title="Send Email">
                                <svg><!-- Email icon --></svg>
                            </a>
                            <a href="#" class="action-btn linkedin-btn" title="LinkedIn Profile">
                                <svg><!-- LinkedIn icon --></svg>
                            </a>
                            <a href="https://www.ftn.uns.ac.rs" class="action-btn institution-btn" title="Institution">
                                <svg><!-- Institution icon --></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Program Committee Panel -->
            <div class="committee-panel" id="program-panel">
                <div class="committee-header">
                    <h2 class="committee-title">International Program Committee</h2>
                    <p class="committee-description">
                        The Program Committee is responsible for reviewing abstracts, 
                        organizing sessions, and ensuring the scientific quality of the conference.
                    </p>
                    <div class="committee-stats">
                        <div class="stat-item">
                            <span class="stat-number">20+</span>
                            <span class="stat-label">Members</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">12</span>
                            <span class="stat-label">Countries</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number">15+</span>
                            <span class="stat-label">Universities</span>
                        </div>
                    </div>
                </div>
                
                <div class="members-grid">
                    <div class="member-card" data-country="serbia" data-institution="university-novi-sad">
                        <div class="member-image">
                            <img src="images/members/placeholder-member.jpg" alt="Andrea Ivanišević" loading="lazy">
                            <div class="country-flag">
                                <img src="images/flags/serbia.svg" alt="Serbia">
                            </div>
                        </div>
                        <div class="member-content">
                            <h3 class="member-name">Andrea Ivanišević</h3>
                            <p class="member-title">President</p>
                            <p class="member-institution">University of Novi Sad, Serbia</p>
                            <div class="member-expertise">
                                <span class="expertise-tag">Management</span>
                                <span class="expertise-tag">Engineering</span>
                            </div>
                        </div>
                        <div class="member-actions">
                            <a href="mailto:andrea@uns.ac.rs" class="action-btn email-btn">
                                <svg><!-- Email icon --></svg>
                            </a>
                            <a href="#" class="action-btn linkedin-btn">
                                <svg><!-- LinkedIn icon --></svg>
                            </a>
                        </div>
                    </div>
                    
                    <div class="member-card" data-country="poland" data-institution="bialystok-university">
                        <div class="member-image">
                            <img src="images/members/placeholder-member.jpg" alt="Ewa Glińska" loading="lazy">
                            <div class="country-flag">
                                <img src="images/flags/poland.svg" alt="Poland">
                            </div>
                        </div>
                        <div class="member-content">
                            <h3 class="member-name">Ewa Glińska</h3>
                            <p class="member-title">Associate Professor</p>
                            <p class="member-institution">Bialystok University of Technology, Poland</p>
                            <div class="member-expertise">
                                <span class="expertise-tag">Innovation</span>
                                <span class="expertise-tag">Sustainability</span>
                            </div>
                        </div>
                        <div class="member-actions">
                            <a href="mailto:ewa@pb.edu.pl" class="action-btn email-btn">
                                <svg><!-- Email icon --></svg>
                            </a>
                            <a href="#" class="action-btn linkedin-btn">
                                <svg><!-- LinkedIn icon --></svg>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Continue with other members -->
                </div>
            </div>
            
            <!-- Other committee panels... -->
        </div>
    </div>
</section>
```

### Organizational Chart - NOVA SEKCIJA
```html
<!-- Interactive Organizational Chart -->
<section class="org-chart-section" id="org-chart">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Organizational Structure</h2>
            <p class="section-subtitle">
                Visual representation of the conference organization hierarchy
            </p>
        </div>
        
        <div class="org-chart">
            <div class="org-level level-1">
                <div class="org-node chair-node">
                    <div class="node-image">
                        <img src="images/A.Ivanisevic.jpg" alt="Conference Chair">
                    </div>
                    <div class="node-content">
                        <h4>Conference Chair</h4>
                        <p>Prof. Andrea Ivanišević</p>
                    </div>
                </div>
            </div>
            
            <div class="org-level level-2">
                <div class="org-node">
                    <div class="node-content">
                        <h4>Program Committee</h4>
                        <p>20+ International Members</p>
                    </div>
                </div>
                
                <div class="org-node">
                    <div class="node-content">
                        <h4>Organizational Committee</h4>
                        <p>9 Local Members</p>
                    </div>
                </div>
                
                <div class="org-node">
                    <div class="node-content">
                        <h4>Scientific Committee</h4>
                        <p>15+ Expert Members</p>
                    </div>
                </div>
            </div>
            
            <div class="org-level level-3">
                <div class="org-node">
                    <div class="node-content">
                        <h4>Reviewing Committee</h4>
                        <p>30+ Peer Reviewers</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## 🔧 TEHNIČKA IMPLEMENTACIJA

### CSS Stilovi
```css
/* Committees Header */
.committees-header-modern {
    padding: 4rem 0 2rem;
    background: linear-gradient(135deg, var(--bme-primary), var(--bme-secondary));
    color: white;
}

.committees-controls {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 2rem;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.filter-container {
    display: flex;
    gap: 1rem;
}

/* Committee Tabs */
.committees-tabs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
}

.committee-tab {
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

.committee-tab:hover {
    border-color: var(--bme-accent);
    background: rgba(23, 237, 209, 0.1);
}

.committee-tab.active {
    border-color: var(--bme-accent);
    background: var(--bme-accent);
    color: var(--bme-primary);
}

/* Member Cards */
.members-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.chair-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
}

.member-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.member-card::before {
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

.member-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--bme-accent);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.member-card:hover::before {
    transform: scaleX(1);
}

.featured-member {
    background: rgba(23, 237, 209, 0.1);
    border-color: var(--bme-accent);
}

.featured-member::before {
    transform: scaleX(1);
}

/* Member Image */
.member-image {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--bme-accent);
}

.member-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.member-status {
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid white;
}

.member-status.online {
    background: #4CAF50;
}

.country-flag {
    position: absolute;
    top: -5px;
    right: -5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid white;
    background: white;
}

.country-flag img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Member Content */
.member-content {
    text-align: center;
    margin-bottom: 1.5rem;
}

.member-name {
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
}

.member-title {
    color: var(--bme-accent);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.member-institution {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    line-height: 1.4;
    margin-bottom: 1rem;
}

.member-expertise {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.expertise-tag {
    background: rgba(23, 237, 209, 0.2);
    color: var(--bme-accent);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
}

/* Member Actions */
.member-actions {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
}

.action-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.email-btn {
    background: #EA4335;
    color: white;
    border-color: #EA4335;
}

.linkedin-btn {
    background: #0077B5;
    color: white;
    border-color: #0077B5;
}

.institution-btn {
    background: var(--bme-accent);
    color: var(--bme-primary);
    border-color: var(--bme-accent);
}

.action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

/* Committee Stats */
.committee-stats {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin-top: 2rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
}

.stat-item {
    text-align: center;
}

.stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: var(--bme-accent);
    line-height: 1;
}

.stat-label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 0.5rem;
}

/* Organizational Chart */
.org-chart-section {
    padding: 5rem 0;
    background: rgba(255, 255, 255, 0.02);
}

.org-chart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
}

.org-level {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.org-node {
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(23, 237, 209, 0.3);
    border-radius: 15px;
    padding: 1.5rem;
    text-align: center;
    min-width: 200px;
    transition: all 0.3s ease;
}

.org-node:hover {
    border-color: var(--bme-accent);
    background: rgba(23, 237, 209, 0.1);
    transform: translateY(-5px);
}

.chair-node {
    border-color: var(--bme-accent);
    background: rgba(23, 237, 209, 0.1);
}

.node-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1rem;
    border: 2px solid var(--bme-accent);
}

.node-content h4 {
    color: white;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

.node-content p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .committees-controls {
        grid-template-columns: 1fr;
        gap: 1rem;
    }
    
    .filter-container {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .committees-tabs {
        grid-template-columns: 1fr;
    }
    
    .members-grid {
        grid-template-columns: 1fr;
    }
    
    .committee-stats {
        flex-direction: column;
        gap: 1rem;
    }
    
    .org-level {
        flex-direction: column;
        align-items: center;
    }
}
```

### JavaScript Funkcionalnosti
```javascript
// Committees page functionality
class CommitteesManager {
    constructor() {
        this.currentCommittee = 'conference-chair';
        this.searchTerm = '';
        this.selectedCommittee = '';
        this.selectedCountry = '';
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.showCommittee(this.currentCommittee);
        this.loadMemberImages();
    }
    
    bindEvents() {
        // Search functionality
        const searchInput = document.getElementById('memberSearch');
        searchInput.addEventListener('input', (e) => {
            this.searchTerm = e.target.value.toLowerCase();
            this.filterMembers();
        });
        
        // Committee filter
        document.getElementById('committeeFilter').addEventListener('change', (e) => {
            this.selectedCommittee = e.target.value;
            if (this.selectedCommittee) {
                this.showCommittee(this.selectedCommittee);
            }
            this.filterMembers();
        });
        
        // Country filter
        document.getElementById('countryFilter').addEventListener('change', (e) => {
            this.selectedCountry = e.target.value;
            this.filterMembers();
        });
        
        // Tab navigation
        document.querySelectorAll('.committee-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const committee = e.currentTarget.dataset.committee;
                this.showCommittee(committee);
            });
        });
        
        // Member card interactions
        document.addEventListener('click', (e) => {
            if (e.target.closest('.member-card')) {
                const memberCard = e.target.closest('.member-card');
                this.showMemberDetails(memberCard);
            }
        });
    }
    
    showCommittee(committee) {
        // Update active tab
        document.querySelectorAll('.committee-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`[data-committee="${committee}"]`).classList.add('active');
        
        // Update active panel
        document.querySelectorAll('.committee-panel').forEach(panel => {
            panel.classList.remove('active');
        });
        document.getElementById(`${committee}-panel`).classList.add('active');
        
        this.currentCommittee = committee;
        
        // Animate panel transition
        this.animatePanelTransition();
        
        // Track committee view
        this.trackCommitteeView(committee);
    }
    
    filterMembers() {
        const members = document.querySelectorAll('.member-card');
        let visibleCount = 0;
        
        members.forEach(member => {
            const name = member.querySelector('.member-name').textContent.toLowerCase();
            const institution = member.querySelector('.member-institution').textContent.toLowerCase();
            const country = member.dataset.country || '';
            
            const matchesSearch = !this.searchTerm || 
                name.includes(this.searchTerm) || 
                institution.includes(this.searchTerm);
            
            const matchesCountry = !this.selectedCountry || 
                country === this.selectedCountry;
            
            if (matchesSearch && matchesCountry) {
                member.style.display = 'block';
                visibleCount++;
                this.highlightSearchTerm(member);
            } else {
                member.style.display = 'none';
            }
        });
        
        this.showNoResultsMessage(visibleCount === 0);
    }
    
    highlightSearchTerm(memberCard) {
        if (!this.searchTerm) return;
        
        const name = memberCard.querySelector('.member-name');
        const institution = memberCard.querySelector('.member-institution');
        
        [name, institution].forEach(element => {
            const text = element.textContent;
            const highlightedText = text.replace(
                new RegExp(this.searchTerm, 'gi'),
                `<mark>$&</mark>`
            );
            element.innerHTML = highlightedText;
        });
    }
    
    loadMemberImages() {
        // Load placeholder images for members without photos
        const memberImages = document.querySelectorAll('.member-image img');
        
        memberImages.forEach(img => {
            if (img.src.includes('placeholder-member.jpg')) {
                // Generate avatar based on member name
                const memberName = img.alt;
                const avatarUrl = this.generateAvatar(memberName);
                img.src = avatarUrl;
            }
        });
    }
    
    generateAvatar(name) {
        // Generate avatar using initials and color
        const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
        const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'];
        const colorIndex = name.length % colors.length;
        const color = colors[colorIndex];
        
        // Return URL to avatar service or generate SVG
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${color.substring(1)}&color=fff&size=200`;
    }
    
    showMemberDetails(memberCard) {
        const memberName = memberCard.querySelector('.member-name').textContent;
        const memberTitle = memberCard.querySelector('.member-title').textContent;
        const memberInstitution = memberCard.querySelector('.member-institution').textContent;
        
        // Create modal with member details
        const modal = document.createElement('div');
        modal.className = 'member-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${memberName}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p><strong>Position:</strong> ${memberTitle}</p>
                    <p><strong>Institution:</strong> ${memberInstitution}</p>
                    <p><strong>Research Areas:</strong> Industrial Engineering, Management, Sustainability</p>
                    <div class="modal-actions">
                        <a href="mailto:${memberName.toLowerCase().replace(' ', '.')}@example.com" class="btn-primary">
                            Send Email
                        </a>
                        <a href="#" class="btn-outline">
                            View Profile
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal functionality
        modal.querySelector('.modal-close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
    
    animatePanelTransition() {
        const activePanel = document.querySelector('.committee-panel.active');
        activePanel.style.opacity = '0';
        activePanel.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            activePanel.style.transition = 'all 0.3s ease';
            activePanel.style.opacity = '1';
            activePanel.style.transform = 'translateY(0)';
        }, 50);
    }
    
    showNoResultsMessage(show) {
        let noResults = document.getElementById('no-results-members');
        
        if (show && !noResults) {
            noResults = document.createElement('div');
            noResults.id = 'no-results-members';
            noResults.className = 'no-results';
            noResults.innerHTML = `
                <div class="no-results-content">
                    <svg class="no-results-icon"><!-- Search icon --></svg>
                    <h3>No members found</h3>
                    <p>Try adjusting your search terms or filters</p>
                    <button onclick="committeesManager.clearAllFilters()" class="btn-outline">
                        Clear All Filters
                    </button>
                </div>
            `;
            document.querySelector('.committee-panel.active .members-grid').appendChild(noResults);
        } else if (!show && noResults) {
            noResults.remove();
        }
    }
    
    clearAllFilters() {
        document.getElementById('memberSearch').value = '';
        document.getElementById('committeeFilter').value = '';
        document.getElementById('countryFilter').value = '';
        this.searchTerm = '';
        this.selectedCommittee = '';
        this.selectedCountry = '';
        this.filterMembers();
    }
    
    trackCommitteeView(committee) {
        gtag('event', 'committee_view', {
            'committee_name': committee,
            'page_location': window.location.href
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.committeesManager = new CommitteesManager();
});
```

---

## 📱 MOBILE OPTIMIZACIJA

### Responsive Design
- Stack committee tabs vertically na mobile
- Optimizovane member cards za touch
- Swipe gestures za navigaciju između komiteta
- Compressed member information za mobile

### Performance
- Lazy loading za member images
- Avatar generation za missing photos
- Optimizovane animacije
- Efficient filtering algorithms

---

## 🎯 CONVERSION OPTIMIZACIJA

### Contact Optimization
- Direct email links za sve članove
- LinkedIn profile links
- Institution website links
- "Contact Committee" CTA buttons

### Analytics Tracking
```javascript
// Track member interactions
function trackMemberInteraction(action, memberName, committee) {
    gtag('event', 'member_interaction', {
        'action': action,
        'member_name': memberName,
        'committee': committee,
        'page_location': window.location.href
    });
}
```

---

## ✅ IMPLEMENTACIJA CHECKLIST

### Faza 1 - Osnove (Nedelja 1)
- [ ] Prikazati Scientific Committee (ukloniti hidden)
- [ ] Implementirati tabbed interface
- [ ] Kreirati member cards dizajn
- [ ] Dodati search funkcionalnost

### Faza 2 - Funkcionalnosti (Nedelja 2)
- [ ] Dodati fotografije za sve članove
- [ ] Implementirati filter opcije
- [ ] Dodati kontakt informacije
- [ ] Kreirati organizational chart

### Faza 3 - Poboljšanja (Nedelja 3+)
- [ ] Dodati member detail modals
- [ ] Implementirati LinkedIn integration
- [ ] Dodati expertise tags
- [ ] Performance optimizacija

---

## 📊 SUCCESS METRICS

### Ciljevi:
- **Member engagement**: Povećati za 35%
- **Contact rate**: Povećati za 50%
- **Search usage**: 40% korisnika koristi search
- **Time on page**: Povećati za 30%
- **Mobile engagement**: Povećati za 40%

---

*Redesign predlog kreiran: Decembar 2024*
*Status: Za implementaciju*
*Prioritet: SREDNJI*
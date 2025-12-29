# INDEX.HTML - REDESIGN PREDLOG

## 📋 TRENUTNO STANJE

**Stranica**: index.html (Glavna stranica)
**Status**: Funkcionalna ali sa skrivenim sadržajem
**Prioritet**: KRITIČAN

### Postojeća struktura:
- Hero sekcija sa naslovom konferencije
- CTA dugme "REGISTER HERE"
- Journal publikacija sekcija
- **SKRIVENE SEKCIJE**: Keynote speakers, važni datumi, countdown timer
- Footer sa kontakt informacijama

---

## 🎯 REDESIGN CILJEVI

### Primarni ciljevi:
1. **Prikazati skriveni sadržaj** - Keynote speakers i važni datumi
2. **Poboljšati hero sekciju** - Dodati vizuelni impact
3. **Optimizovati CTA-e** - Više poziva na akciju
4. **Dodati interaktivnost** - Animacije i hover efekti
5. **Poboljšati mobile experience** - Touch-friendly interface

### Sekundarni ciljevi:
1. Dodati statistiku konferencije
2. Implementirati testimonijale
3. Poboljšati SEO optimizaciju
4. Dodati social proof elemente

---

## 🎨 VIZUELNI REDESIGN

### Hero sekcija - NOVA VERZIJA
```html
<!-- Enhanced Hero Section -->
<section class="hero-section-modern" id="hero">
    <div class="hero-background">
        <!-- Animated gradient background -->
        <div class="gradient-overlay"></div>
        <!-- Particle animation -->
        <div class="particles-container"></div>
    </div>
    
    <div class="hero-content">
        <div class="hero-badge">
            <span class="badge-text">2nd International Conference</span>
            <span class="badge-year">2026</span>
        </div>
        
        <h1 class="hero-title">
            <span class="title-main">FUTURE-BME</span>
            <span class="title-year">2026</span>
        </h1>
        
        <h2 class="hero-subtitle">
            Forging the Future: Business, Management and Economics Engineering 
            in the Age of <span class="highlight">Sustainability</span> and 
            <span class="highlight">Digital Transformation</span>
        </h2>
        
        <div class="hero-details">
            <div class="detail-item">
                <svg class="icon"><!-- Calendar icon --></svg>
                <span>September 29-30, 2026</span>
            </div>
            <div class="detail-item">
                <svg class="icon"><!-- Location icon --></svg>
                <span>Novi Sad, Serbia</span>
            </div>
        </div>
        
        <div class="hero-cta-group">
            <a href="Registration.html" class="cta-primary">
                Register Now
                <svg class="cta-icon"><!-- Arrow icon --></svg>
            </a>
            <a href="Submissions.html" class="cta-secondary">
                Submit Paper
                <svg class="cta-icon"><!-- Upload icon --></svg>
            </a>
            <a href="#program" class="cta-tertiary">
                View Program
                <svg class="cta-icon"><!-- Eye icon --></svg>
            </a>
        </div>
    </div>
    
    <!-- Countdown Timer - PRIKAZATI -->
    <div class="countdown-modern" id="countdown">
        <div class="countdown-title">Conference Starts In</div>
        <div class="countdown-grid">
            <div class="countdown-item">
                <span class="countdown-number" id="days">000</span>
                <span class="countdown-label">Days</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number" id="hours">00</span>
                <span class="countdown-label">Hours</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number" id="minutes">00</span>
                <span class="countdown-label">Minutes</span>
            </div>
        </div>
    </div>
</section>
```

### Statistika sekcija - NOVA
```html
<!-- Conference Statistics -->
<section class="stats-section" id="stats">
    <div class="container">
        <div class="stats-grid">
            <div class="stat-item">
                <div class="stat-number" data-count="500">0</div>
                <div class="stat-label">Expected Participants</div>
            </div>
            <div class="stat-item">
                <div class="stat-number" data-count="30">0</div>
                <div class="stat-label">Countries</div>
            </div>
            <div class="stat-item">
                <div class="stat-number" data-count="150">0</div>
                <div class="stat-label">Research Papers</div>
            </div>
            <div class="stat-item">
                <div class="stat-number" data-count="5">0</div>
                <div class="stat-label">Keynote Speakers</div>
            </div>
        </div>
    </div>
</section>
```

### Keynote Speakers - POBOLJŠANA VERZIJA
```html
<!-- Enhanced Keynote Speakers -->
<section class="speakers-section-modern" id="speakers">
    <div class="container">
        <div class="section-header">
            <span class="section-eyebrow">Meet Our Experts</span>
            <h2 class="section-title">Keynote Speakers</h2>
            <p class="section-subtitle">
                Leading voices in business, management, and economics engineering
            </p>
        </div>
        
        <div class="speakers-grid">
            <div class="speaker-card">
                <div class="speaker-image">
                    <img src="images/Ewa_2.jpg" alt="Prof. Ewa Glińska" loading="lazy">
                    <div class="speaker-overlay">
                        <div class="speaker-social">
                            <a href="#" class="social-link">
                                <svg><!-- LinkedIn icon --></svg>
                            </a>
                            <a href="#" class="social-link">
                                <svg><!-- Email icon --></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="speaker-content">
                    <h3 class="speaker-name">Assoc. Prof. Ewa Glińska</h3>
                    <p class="speaker-title">Faculty of Engineering Management</p>
                    <p class="speaker-institution">Bialystok University of Technology, Poland</p>
                    <div class="speaker-topic">
                        <span class="topic-label">Topic:</span>
                        <span class="topic-text">Sustainable Business Innovation</span>
                    </div>
                </div>
            </div>
            
            <!-- Repeat for other speakers -->
        </div>
        
        <div class="speakers-cta">
            <a href="Keynote-speakers.html" class="btn-outline">
                View All Speakers
                <svg class="btn-icon"><!-- Arrow icon --></svg>
            </a>
        </div>
    </div>
</section>
```

### Timeline sekcija - POBOLJŠANA
```html
<!-- Enhanced Timeline -->
<section class="timeline-section-modern" id="timeline">
    <div class="container">
        <div class="section-header">
            <span class="section-eyebrow">Mark Your Calendar</span>
            <h2 class="section-title">Important Dates</h2>
        </div>
        
        <div class="timeline-modern">
            <div class="timeline-line"></div>
            
            <div class="timeline-item" data-date="2026-05-01">
                <div class="timeline-marker">
                    <div class="marker-dot"></div>
                    <div class="marker-pulse"></div>
                </div>
                <div class="timeline-content">
                    <div class="timeline-date">May 1, 2026</div>
                    <div class="timeline-title">Early Bird Deadline</div>
                    <div class="timeline-description">
                        Last chance for discounted registration fees
                    </div>
                    <div class="timeline-status status-upcoming">Upcoming</div>
                </div>
            </div>
            
            <div class="timeline-item" data-date="2026-05-15">
                <div class="timeline-marker">
                    <div class="marker-dot"></div>
                    <div class="marker-pulse"></div>
                </div>
                <div class="timeline-content">
                    <div class="timeline-date">May 15, 2026</div>
                    <div class="timeline-title">Abstract Submission</div>
                    <div class="timeline-description">
                        Submit your research abstracts
                    </div>
                    <div class="timeline-cta">
                        <a href="Submissions.html" class="timeline-link">Submit Now</a>
                    </div>
                </div>
            </div>
            
            <!-- Continue with other dates -->
            
            <div class="timeline-item timeline-final" data-date="2026-09-29">
                <div class="timeline-marker final-marker">
                    <div class="marker-dot"></div>
                    <div class="marker-glow"></div>
                </div>
                <div class="timeline-content">
                    <div class="timeline-badge">Conference</div>
                    <div class="timeline-date">September 29-30, 2026</div>
                    <div class="timeline-title">FUTURE-BME 2026</div>
                    <div class="timeline-location">
                        <svg class="location-icon"><!-- Location icon --></svg>
                        Novi Sad, Serbia
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## 🔧 TEHNIČKA IMPLEMENTACIJA

### CSS Poboljšanja
```css
/* Modern Hero Section */
.hero-section-modern {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, 
        var(--bme-primary) 0%, 
        var(--bme-secondary) 50%, 
        var(--bme-primary) 100%);
}

.gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, 
        rgba(23, 237, 209, 0.1) 0%, 
        rgba(110, 79, 227, 0.1) 100%);
    animation: gradientShift 8s ease-in-out infinite;
}

@keyframes gradientShift {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
}

.hero-content {
    text-align: center;
    z-index: 2;
    max-width: 1000px;
    padding: 2rem;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    padding: 0.5rem 1.5rem;
    margin-bottom: 2rem;
    font-size: 0.9rem;
    color: var(--bme-accent);
}

.hero-title {
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 800;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #fff, var(--bme-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: clamp(1.2rem, 3vw, 1.8rem);
    line-height: 1.4;
    margin-bottom: 3rem;
    color: rgba(255, 255, 255, 0.9);
}

.highlight {
    color: var(--bme-accent);
    font-weight: 600;
}

.hero-cta-group {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 4rem;
}

.cta-primary {
    background: var(--bme-accent);
    color: var(--bme-primary);
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(23, 237, 209, 0.3);
}

.cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(23, 237, 209, 0.4);
}

.cta-secondary {
    background: transparent;
    color: white;
    border: 2px solid var(--bme-accent);
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
}

.cta-secondary:hover {
    background: var(--bme-accent);
    color: var(--bme-primary);
    transform: translateY(-2px);
}

/* Countdown Timer */
.countdown-modern {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
}

.countdown-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 1rem;
}

.countdown-item {
    text-align: center;
}

.countdown-number {
    display: block;
    font-size: 3rem;
    font-weight: 800;
    color: var(--bme-accent);
    line-height: 1;
}

.countdown-label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Statistics Section */
.stats-section {
    padding: 5rem 0;
    background: rgba(255, 255, 255, 0.05);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    text-align: center;
}

.stat-number {
    font-size: 4rem;
    font-weight: 800;
    color: var(--bme-accent);
    display: block;
    line-height: 1;
}

.stat-label {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 0.5rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero-cta-group {
        flex-direction: column;
        align-items: center;
    }
    
    .countdown-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
    
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
}
```

### JavaScript Funkcionalnosti
```javascript
// Enhanced countdown timer
function initCountdown() {
    const targetDate = new Date('2026-09-29T09:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById('days').textContent = days.toString().padStart(3, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        
        if (distance < 0) {
            document.getElementById('countdown').innerHTML = '<div class="countdown-ended">Conference is Live!</div>';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
}

// Animated statistics
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                animateNumber(entry.target, target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateNumber(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 50);
}

// Particle animation
function initParticles() {
    const container = document.querySelector('.particles-container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    animateStats();
    initParticles();
});
```

---

## 📱 MOBILE OPTIMIZACIJA

### Touch-friendly elementi
- Veći CTA dugmići (minimum 44px visine)
- Optimizovani spacing za touch
- Swipe gestures za carousel
- Optimizovane animacije za mobile

### Performance optimizacije
- Lazy loading za slike
- Optimizovane animacije
- Reduced motion support
- Compressed assets

---

## 🎯 CONVERSION OPTIMIZACIJA

### A/B Test elementi
1. **CTA button colors** - Test različitih boja
2. **CTA button text** - Test različitih tekstova
3. **Hero layout** - Test različitih layout-a
4. **Countdown position** - Test različitih pozicija

### Analytics tracking
```javascript
// Track CTA clicks
document.querySelectorAll('.cta-primary, .cta-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        gtag('event', 'cta_click', {
            'cta_type': e.target.classList.contains('cta-primary') ? 'primary' : 'secondary',
            'cta_text': e.target.textContent.trim(),
            'page_location': window.location.href
        });
    });
});
```

---

## ✅ IMPLEMENTACIJA CHECKLIST

### Faza 1 - Kritično (Nedelja 1)
- [ ] Ukloniti hidden klase sa keynote speakers sekcije
- [ ] Ukloniti hidden klase sa countdown timer-a
- [ ] Ukloniti hidden klase sa timeline sekcije
- [ ] Implementirati novi hero dizajn
- [ ] Dodati statistiku sekciju

### Faza 2 - Važno (Nedelja 2)
- [ ] Poboljšati keynote speakers sekciju
- [ ] Implementirati modernu timeline
- [ ] Dodati animacije i hover efekte
- [ ] Optimizovati za mobile

### Faza 3 - Poboljšanja (Nedelja 3+)
- [ ] Dodati particle animacije
- [ ] Implementirati A/B testing
- [ ] Dodati analytics tracking
- [ ] Performance optimizacija

---

## 📊 SUCCESS METRICS

### Ciljevi za poboljšanje:
- **Bounce rate**: Smanjiti za 25%
- **Time on page**: Povećati za 40%
- **CTA click rate**: Povećati za 35%
- **Mobile engagement**: Povećati za 50%
- **Registration conversion**: Povećati za 30%

### Tracking metrike:
- Page views i unique visitors
- Scroll depth
- CTA click rates
- Time spent on page
- Mobile vs desktop engagement

---

*Redesign predlog kreiran: Decembar 2024*
*Status: Za implementaciju*
*Prioritet: KRITIČAN*
# EVENT-INFO.HTML - REDESIGN PREDLOG

## 📋 TRENUTNO STANJE

**Stranica**: Event-info.html
**Status**: Funkcionalna ali sa skrivenim sadržajem
**Prioritet**: VISOK

### Postojeća struktura:
- Venue sekcija (2 lokacije)
- Fruške Terme Resort informacije
- Accommodation sekcija
- **SKRIVENE SEKCIJE**: Wine House, Galerija, Video, Mape
- Program sekcija (placeholder tekst)

### Glavni problemi:
- Većina sadržaja je skrivena (hidden klasa)
- Nema detaljnog programa konferencije
- Nema informacija o transportu
- Nema vremenske informacije
- Nema informacija o parkiranju i hrani

---

## 🎯 REDESIGN CILJEVI

### Primarni ciljevi:
1. **Prikazati skriveni sadržaj** - Wine House, galerija, video, mape
2. **Dodati detaljni program** - Sa vremenima i lokacijama
3. **Implementirati interactive mape** - Google Maps integration
4. **Dodati transport informacije** - Kako doći do lokacije
5. **Kreirati comprehensive venue guide** - Sve potrebne informacije

### Sekundarni ciljevi:
1. Dodati weather forecast
2. Implementirati booking integration
3. Dodati accessibility informacije
4. Kreirati mobile-friendly venue guide

---

## 🎨 VIZUELNI REDESIGN

### Header sekcija - POBOLJŠANA
```html
<!-- Enhanced Header -->
<section class="event-info-header-modern" id="event-header">
    <div class="container">
        <div class="header-content">
            <span class="section-eyebrow">Conference Details</span>
            <h1 class="page-title">Event Information</h1>
            <p class="page-subtitle">
                Everything you need to know about FUTURE-BME 2026 venues, 
                accommodation, and logistics in Novi Sad, Serbia.
            </p>
        </div>
        
        <!-- Quick Info Cards -->
        <div class="quick-info-grid">
            <div class="info-card">
                <div class="info-icon">
                    <svg><!-- Calendar icon --></svg>
                </div>
                <div class="info-content">
                    <h3>Conference Dates</h3>
                    <p>September 29-30, 2026</p>
                </div>
            </div>
            
            <div class="info-card">
                <div class="info-icon">
                    <svg><!-- Location icon --></svg>
                </div>
                <div class="info-content">
                    <h3>Main Venue</h3>
                    <p>Fruške Terme Resort</p>
                </div>
            </div>
            
            <div class="info-card">
                <div class="info-icon">
                    <svg><!-- Users icon --></svg>
                </div>
                <div class="info-content">
                    <h3>Expected Attendees</h3>
                    <p>500+ Participants</p>
                </div>
            </div>
            
            <div class="info-card">
                <div class="info-icon">
                    <svg><!-- Globe icon --></svg>
                </div>
                <div class="info-content">
                    <h3>International</h3>
                    <p>30+ Countries</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Program Schedule - NOVA SEKCIJA
```html
<!-- Detailed Program Schedule -->
<section class="program-section-modern" id="program">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Conference Program</h2>
            <p class="section-subtitle">
                Two-day intensive program featuring keynote speeches, 
                research presentations, and networking opportunities.
            </p>
        </div>
        
        <!-- Program Navigation -->
        <div class="program-nav">
            <button class="program-day-btn active" data-day="day1">
                <span class="day-number">Day 1</span>
                <span class="day-date">September 29, 2026</span>
                <span class="day-location">Science & Technology Park</span>
            </button>
            <button class="program-day-btn" data-day="day2">
                <span class="day-number">Day 2</span>
                <span class="day-date">September 30, 2026</span>
                <span class="day-location">Fruške Terme Resort</span>
            </button>
        </div>
        
        <!-- Day 1 Program -->
        <div class="program-day active" id="day1-program">
            <div class="program-timeline">
                <div class="timeline-item">
                    <div class="timeline-time">08:30 - 09:00</div>
                    <div class="timeline-content">
                        <h4 class="timeline-title">Registration & Welcome Coffee</h4>
                        <p class="timeline-description">
                            Check-in, badge collection, and networking with fellow participants
                        </p>
                        <div class="timeline-location">
                            <svg class="location-icon"><!-- Location icon --></svg>
                            Science & Technology Park - Main Lobby
                        </div>
                    </div>
                </div>
                
                <div class="timeline-item keynote">
                    <div class="timeline-time">09:00 - 09:45</div>
                    <div class="timeline-content">
                        <h4 class="timeline-title">Opening Keynote</h4>
                        <p class="timeline-speaker">Prof. Andrea Ivanišević</p>
                        <p class="timeline-description">
                            "Future of Business Engineering: Sustainability Meets Digital Innovation"
                        </p>
                        <div class="timeline-location">
                            <svg class="location-icon"><!-- Location icon --></svg>
                            Main Auditorium
                        </div>
                    </div>
                </div>
                
                <div class="timeline-item">
                    <div class="timeline-time">09:45 - 10:00</div>
                    <div class="timeline-content">
                        <h4 class="timeline-title">Coffee Break</h4>
                        <div class="timeline-location">
                            <svg class="location-icon"><!-- Location icon --></svg>
                            Exhibition Area
                        </div>
                    </div>
                </div>
                
                <div class="timeline-item session">
                    <div class="timeline-time">10:00 - 11:30</div>
                    <div class="timeline-content">
                        <h4 class="timeline-title">Session 1: Digital Transformation</h4>
                        <p class="timeline-description">
                            Research presentations on AI, Industry 4.0, and digital business models
                        </p>
                        <div class="session-papers">
                            <div class="paper-item">
                                <span class="paper-time">10:00</span>
                                <span class="paper-title">AI-Driven Supply Chain Optimization</span>
                            </div>
                            <div class="paper-item">
                                <span class="paper-time">10:20</span>
                                <span class="paper-title">Industry 4.0 Implementation Strategies</span>
                            </div>
                            <div class="paper-item">
                                <span class="paper-time">10:40</span>
                                <span class="paper-title">Digital Business Model Innovation</span>
                            </div>
                        </div>
                        <div class="timeline-location">
                            <svg class="location-icon"><!-- Location icon --></svg>
                            Conference Room A
                        </div>
                    </div>
                </div>
                
                <!-- Continue with other timeline items -->
            </div>
        </div>
        
        <!-- Day 2 Program -->
        <div class="program-day" id="day2-program">
            <!-- Similar structure for Day 2 -->
        </div>
    </div>
</section>
```

### Venues Section - POBOLJŠANA
```html
<!-- Enhanced Venues Section -->
<section class="venues-section-modern" id="venues">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Conference Venues</h2>
            <p class="section-subtitle">
                Two carefully selected venues providing the perfect environment 
                for learning, networking, and collaboration.
            </p>
        </div>
        
        <div class="venues-grid">
            <!-- Science & Technology Park -->
            <div class="venue-card">
                <div class="venue-image">
                    <img src="images/venues/science-park.jpg" alt="Science & Technology Park" loading="lazy">
                    <div class="venue-badge">Day 1</div>
                </div>
                <div class="venue-content">
                    <h3 class="venue-name">Science & Technology Park Novi Sad</h3>
                    <p class="venue-description">
                        Modern innovation hub hosting the student competition and 
                        opening day activities.
                    </p>
                    <div class="venue-features">
                        <div class="feature-item">
                            <svg class="feature-icon"><!-- Users icon --></svg>
                            <span>300+ Capacity</span>
                        </div>
                        <div class="feature-item">
                            <svg class="feature-icon"><!-- Wifi icon --></svg>
                            <span>High-Speed WiFi</span>
                        </div>
                        <div class="feature-item">
                            <svg class="feature-icon"><!-- Parking icon --></svg>
                            <span>Free Parking</span>
                        </div>
                        <div class="feature-item">
                            <svg class="feature-icon"><!-- Accessibility icon --></svg>
                            <span>Wheelchair Accessible</span>
                        </div>
                    </div>
                    <div class="venue-actions">
                        <button class="btn-primary" onclick="showVenueMap('science-park')">
                            View on Map
                        </button>
                        <button class="btn-outline" onclick="showVenueGallery('science-park')">
                            Photo Gallery
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Fruške Terme Resort -->
            <div class="venue-card featured">
                <div class="venue-image">
                    <img src="images/venues/fruske-terme.jpg" alt="Fruške Terme Resort" loading="lazy">
                    <div class="venue-badge main">Main Venue</div>
                </div>
                <div class="venue-content">
                    <h3 class="venue-name">Fruške Terme Resort & Residences</h3>
                    <p class="venue-description">
                        Luxury resort in Fruška Gora National Park, providing 
                        the perfect setting for the main conference day.
                    </p>
                    <div class="venue-features">
                        <div class="feature-item">
                            <svg class="feature-icon"><!-- Users icon --></svg>
                            <span>500+ Capacity</span>
                        </div>
                        <div class="feature-item">
                            <svg class="feature-icon"><!-- Hotel icon --></svg>
                            <span>On-site Accommodation</span>
                        </div>
                        <div class="feature-item">
                            <svg class="feature-icon"><!-- Restaurant icon --></svg>
                            <span>Fine Dining</span>
                        </div>
                        <div class="feature-item">
                            <svg class="feature-icon"><!-- Spa icon --></svg>
                            <span>Wellness Center</span>
                        </div>
                    </div>
                    <div class="venue-actions">
                        <button class="btn-primary" onclick="showVenueMap('fruske-terme')">
                            View on Map
                        </button>
                        <button class="btn-outline" onclick="showVenueGallery('fruske-terme')">
                            Photo Gallery
                        </button>
                        <a href="https://www.frusketerme.com/" class="btn-outline" target="_blank">
                            Visit Website
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Interactive Map - NOVA IMPLEMENTACIJA
```html
<!-- Interactive Map Section -->
<section class="map-section-modern" id="interactive-map">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Location & Directions</h2>
            <p class="section-subtitle">
                Find your way to the conference venues with detailed maps and directions.
            </p>
        </div>
        
        <div class="map-container">
            <div class="map-controls">
                <button class="map-btn active" data-venue="fruske-terme">
                    Fruške Terme Resort
                </button>
                <button class="map-btn" data-venue="science-park">
                    Science & Technology Park
                </button>
                <button class="map-btn" data-venue="wine-house">
                    Wine House Kovačević
                </button>
            </div>
            
            <div class="map-wrapper">
                <div id="google-map" class="google-map"></div>
                <div class="map-overlay">
                    <div class="venue-info-card" id="venue-info">
                        <h4 class="venue-info-title">Fruške Terme Resort</h4>
                        <p class="venue-info-address">
                            Fruška Gora National Park, Serbia
                        </p>
                        <div class="venue-info-actions">
                            <a href="#" class="info-btn" id="directions-btn">
                                <svg><!-- Directions icon --></svg>
                                Get Directions
                            </a>
                            <a href="tel:+381123456789" class="info-btn">
                                <svg><!-- Phone icon --></svg>
                                Call Venue
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Transportation Guide - NOVA SEKCIJA
```html
<!-- Transportation Guide -->
<section class="transport-section-modern" id="transportation">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Getting There</h2>
            <p class="section-subtitle">
                Multiple transportation options to reach the conference venues.
            </p>
        </div>
        
        <div class="transport-grid">
            <div class="transport-option">
                <div class="transport-icon">
                    <svg><!-- Plane icon --></svg>
                </div>
                <h3 class="transport-title">By Air</h3>
                <div class="transport-content">
                    <p><strong>Belgrade Nikola Tesla Airport (BEG)</strong></p>
                    <p>Distance: 80km from Novi Sad</p>
                    <p>Travel time: 1 hour by car/bus</p>
                    <div class="transport-options">
                        <div class="option-item">
                            <span class="option-name">Airport Shuttle</span>
                            <span class="option-price">€15</span>
                        </div>
                        <div class="option-item">
                            <span class="option-name">Taxi</span>
                            <span class="option-price">€60-80</span>
                        </div>
                        <div class="option-item">
                            <span class="option-name">Rental Car</span>
                            <span class="option-price">€25/day</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="transport-option">
                <div class="transport-icon">
                    <svg><!-- Train icon --></svg>
                </div>
                <h3 class="transport-title">By Train</h3>
                <div class="transport-content">
                    <p><strong>Novi Sad Railway Station</strong></p>
                    <p>Direct connections from Belgrade</p>
                    <p>Travel time: 1.5 hours from Belgrade</p>
                    <div class="transport-options">
                        <div class="option-item">
                            <span class="option-name">Regular Train</span>
                            <span class="option-price">€3-5</span>
                        </div>
                        <div class="option-item">
                            <span class="option-name">Express Train</span>
                            <span class="option-price">€8-12</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="transport-option">
                <div class="transport-icon">
                    <svg><!-- Bus icon --></svg>
                </div>
                <h3 class="transport-title">By Bus</h3>
                <div class="transport-content">
                    <p><strong>Novi Sad Bus Station</strong></p>
                    <p>Regular connections from major cities</p>
                    <p>Travel time: 1.5 hours from Belgrade</p>
                    <div class="transport-options">
                        <div class="option-item">
                            <span class="option-name">Regular Bus</span>
                            <span class="option-price">€4-6</span>
                        </div>
                        <div class="option-item">
                            <span class="option-name">Express Bus</span>
                            <span class="option-price">€8-10</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="transport-option">
                <div class="transport-icon">
                    <svg><!-- Car icon --></svg>
                </div>
                <h3 class="transport-title">By Car</h3>
                <div class="transport-content">
                    <p><strong>Highway E75</strong></p>
                    <p>Direct highway connection</p>
                    <p>Free parking at both venues</p>
                    <div class="transport-options">
                        <div class="option-item">
                            <span class="option-name">From Belgrade</span>
                            <span class="option-price">1 hour</span>
                        </div>
                        <div class="option-item">
                            <span class="option-name">From Zagreb</span>
                            <span class="option-price">3 hours</span>
                        </div>
                        <div class="option-item">
                            <span class="option-name">From Budapest</span>
                            <span class="option-price">3.5 hours</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Conference Shuttle Service -->
        <div class="shuttle-service">
            <div class="shuttle-header">
                <h3>Conference Shuttle Service</h3>
                <p>Complimentary shuttle between venues and accommodation</p>
            </div>
            <div class="shuttle-schedule">
                <div class="shuttle-route">
                    <h4>Day 1 - September 29</h4>
                    <div class="route-times">
                        <span class="route-time">08:00 - Hotels → Science Park</span>
                        <span class="route-time">18:00 - Science Park → Hotels</span>
                    </div>
                </div>
                <div class="shuttle-route">
                    <h4>Day 2 - September 30</h4>
                    <div class="route-times">
                        <span class="route-time">08:00 - Hotels → Fruške Terme</span>
                        <span class="route-time">19:00 - Fruške Terme → Hotels</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```

### Wine House & Activities - PRIKAZATI SKRIVENI SADRŽAJ
```html
<!-- Wine House & Cultural Activities -->
<section class="activities-section-modern" id="activities">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Cultural Activities</h2>
            <p class="section-subtitle">
                Explore the rich cultural heritage of Fruška Gora region 
                during your conference visit.
            </p>
        </div>
        
        <div class="activities-grid">
            <div class="activity-card featured">
                <div class="activity-image">
                    <img src="images/wine-house-kovacevic.jpg" alt="Wine House Kovačević" loading="lazy">
                    <div class="activity-badge">Included</div>
                </div>
                <div class="activity-content">
                    <h3 class="activity-title">Wine House Kovačević</h3>
                    <p class="activity-description">
                        Experience traditional Serbian winemaking at this family-owned 
                        winery with over 100 years of tradition.
                    </p>
                    <div class="activity-details">
                        <div class="detail-item">
                            <svg class="detail-icon"><!-- Clock icon --></svg>
                            <span>2 hours guided tour</span>
                        </div>
                        <div class="detail-item">
                            <svg class="detail-icon"><!-- Wine icon --></svg>
                            <span>Wine tasting included</span>
                        </div>
                        <div class="detail-item">
                            <svg class="detail-icon"><!-- Location icon --></svg>
                            <span>Irig, Fruška Gora</span>
                        </div>
                    </div>
                    <div class="activity-actions">
                        <button class="btn-primary">
                            View Details
                        </button>
                        <button class="btn-outline" onclick="showActivityMap('wine-house')">
                            Show on Map
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="activity-card">
                <div class="activity-image">
                    <img src="images/fruska-gora-monastery.jpg" alt="Fruška Gora Monasteries" loading="lazy">
                </div>
                <div class="activity-content">
                    <h3 class="activity-title">Fruška Gora Monasteries</h3>
                    <p class="activity-description">
                        Visit historic Orthodox monasteries dating back to the 15th century.
                    </p>
                    <div class="activity-actions">
                        <button class="btn-outline">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="activity-card">
                <div class="activity-image">
                    <img src="images/novi-sad-city.jpg" alt="Novi Sad City Tour" loading="lazy">
                </div>
                <div class="activity-content">
                    <h3 class="activity-title">Novi Sad City Tour</h3>
                    <p class="activity-description">
                        Explore the European Capital of Culture 2022 with guided city tours.
                    </p>
                    <div class="activity-actions">
                        <button class="btn-outline">
                            Book Tour
                        </button>
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
/* Event Info Header */
.event-info-header-modern {
    padding: 4rem 0 2rem;
    background: linear-gradient(135deg, var(--bme-primary), var(--bme-secondary));
    color: white;
}

.quick-info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
}

.info-card {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 1.5rem;
    transition: all 0.3s ease;
}

.info-card:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
}

.info-icon {
    width: 50px;
    height: 50px;
    background: var(--bme-accent);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

/* Program Section */
.program-nav {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
    justify-content: center;
}

.program-day-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1.5rem 2rem;
    border: 2px solid rgba(23, 237, 209, 0.3);
    border-radius: 15px;
    background: transparent;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    min-width: 200px;
}

.program-day-btn:hover {
    border-color: var(--bme-accent);
    background: rgba(23, 237, 209, 0.1);
}

.program-day-btn.active {
    border-color: var(--bme-accent);
    background: var(--bme-accent);
    color: var(--bme-primary);
}

.day-number {
    font-size: 1.5rem;
    font-weight: 800;
}

.day-date {
    font-size: 1rem;
    font-weight: 600;
}

.day-location {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Program Timeline */
.program-timeline {
    position: relative;
    padding-left: 2rem;
}

.program-timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--bme-accent), var(--bme-secondary));
}

.timeline-item {
    position: relative;
    margin-bottom: 2rem;
    padding-left: 2rem;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -1rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    background: var(--bme-accent);
    border-radius: 50%;
    border: 3px solid var(--bme-primary);
}

.timeline-item.keynote::before {
    background: #FFD700;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

.timeline-time {
    font-weight: 700;
    color: var(--bme-accent);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.timeline-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
}

.timeline-speaker {
    color: var(--bme-accent);
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.timeline-description {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1rem;
}

.timeline-location {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

/* Session Papers */
.session-papers {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem 0;
}

.paper-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.paper-item:last-child {
    border-bottom: none;
}

.paper-time {
    font-weight: 600;
    color: var(--bme-accent);
    min-width: 50px;
}

.paper-title {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
}

/* Venues Section */
.venues-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
}

.venue-card {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.venue-card:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--bme-accent);
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.venue-card.featured {
    border-color: var(--bme-accent);
    background: rgba(23, 237, 209, 0.05);
}

.venue-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.venue-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.venue-card:hover .venue-image img {
    transform: scale(1.05);
}

.venue-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--bme-accent);
    color: var(--bme-primary);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
}

.venue-badge.main {
    background: #FFD700;
    color: #000;
}

.venue-content {
    padding: 2rem;
}

.venue-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
}

.venue-description {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.venue-features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.feature-icon {
    width: 20px;
    height: 20px;
    color: var(--bme-accent);
}

.venue-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

/* Map Section */
.map-container {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.map-controls {
    display: flex;
    background: rgba(255, 255, 255, 0.05);
    padding: 1rem;
    gap: 1rem;
    flex-wrap: wrap;
}

.map-btn {
    padding: 0.8rem 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 25px;
    background: transparent;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
}

.map-btn:hover {
    border-color: var(--bme-accent);
    background: rgba(23, 237, 209, 0.1);
}

.map-btn.active {
    border-color: var(--bme-accent);
    background: var(--bme-accent);
    color: var(--bme-primary);
}

.map-wrapper {
    position: relative;
    height: 500px;
}

.google-map {
    width: 100%;
    height: 100%;
}

.map-overlay {
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 10;
}

.venue-info-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 1.5rem;
    color: var(--bme-primary);
    min-width: 250px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

/* Transportation Section */
.transport-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.transport-option {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
}

.transport-option:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--bme-accent);
    transform: translateY(-5px);
}

.transport-icon {
    width: 60px;
    height: 60px;
    background: var(--bme-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
}

.transport-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
}

.transport-content p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.5rem;
}

.transport-options {
    margin-top: 1rem;
}

.option-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.option-item:last-child {
    border-bottom: none;
}

.option-name {
    color: rgba(255, 255, 255, 0.8);
}

.option-price {
    color: var(--bme-accent);
    font-weight: 600;
}

/* Shuttle Service */
.shuttle-service {
    background: rgba(23, 237, 209, 0.1);
    border: 1px solid var(--bme-accent);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
}

.shuttle-header h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.shuttle-header p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 2rem;
}

.shuttle-schedule {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.shuttle-route h4 {
    color: var(--bme-accent);
    margin-bottom: 1rem;
}

.route-times {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.route-time {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.8rem;
    border-radius: 10px;
    color: white;
    font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
    .quick-info-grid {
        grid-template-columns: 1fr;
    }
    
    .program-nav {
        flex-direction: column;
        align-items: center;
    }
    
    .venues-grid {
        grid-template-columns: 1fr;
    }
    
    .venue-features {
        grid-template-columns: 1fr;
    }
    
    .transport-grid {
        grid-template-columns: 1fr;
    }
    
    .map-controls {
        flex-direction: column;
    }
    
    .shuttle-schedule {
        grid-template-columns: 1fr;
    }
}
```

### JavaScript Funkcionalnosti
```javascript
// Event Info page functionality
class EventInfoManager {
    constructor() {
        this.currentDay = 'day1';
        this.currentVenue = 'fruske-terme';
        this.map = null;
        this.markers = [];
        
        this.venues = {
            'fruske-terme': {
                name: 'Fruške Terme Resort',
                lat: 45.1396,
                lng: 19.7125,
                address: 'Fruška Gora National Park, Serbia',
                phone: '+381123456789'
            },
            'science-park': {
                name: 'Science & Technology Park',
                lat: 45.2671,
                lng: 19.8335,
                address: 'Novi Sad, Serbia',
                phone: '+381987654321'
            },
            'wine-house': {
                name: 'Wine House Kovačević',
                lat: 45.1167,
                lng: 19.8667,
                address: 'Kralja Petra 221, Irig 22406, Serbia',
                phone: '+381111222333'
            }
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.initMap();
        this.showProgram(this.currentDay);
        this.loadWeatherForecast();
    }
    
    bindEvents() {
        // Program day navigation
        document.querySelectorAll('.program-day-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const day = e.currentTarget.dataset.day;
                this.showProgram(day);
            });
        });
        
        // Map venue buttons
        document.querySelectorAll('.map-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const venue = e.currentTarget.dataset.venue;
                this.showVenueOnMap(venue);
            });
        });
        
        // Venue actions
        document.addEventListener('click', (e) => {
            if (e.target.matches('[onclick*="showVenueMap"]')) {
                const venue = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
                this.showVenueOnMap(venue);
                document.getElementById('interactive-map').scrollIntoView({ behavior: 'smooth' });
            }
            
            if (e.target.matches('[onclick*="showVenueGallery"]')) {
                const venue = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
                this.showVenueGallery(venue);
            }
            
            if (e.target.matches('[onclick*="showActivityMap"]')) {
                const activity = e.target.getAttribute('onclick').match(/'([^']+)'/)[1];
                this.showVenueOnMap(activity);
                document.getElementById('interactive-map').scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        // Directions button
        document.addEventListener('click', (e) => {
            if (e.target.closest('#directions-btn')) {
                this.getDirections();
            }
        });
    }
    
    showProgram(day) {
        // Update active day button
        document.querySelectorAll('.program-day-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-day="${day}"]`).classList.add('active');
        
        // Update active program
        document.querySelectorAll('.program-day').forEach(program => {
            program.classList.remove('active');
        });
        document.getElementById(`${day}-program`).classList.add('active');
        
        this.currentDay = day;
        
        // Animate timeline items
        this.animateTimelineItems();
        
        // Track program view
        this.trackProgramView(day);
    }
    
    initMap() {
        // Initialize Google Map
        const mapOptions = {
            zoom: 10,
            center: this.venues[this.currentVenue],
            styles: [
                // Dark theme map styles
                {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [{"color": "#1e3a5f"}]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{"color": "#17edd1"}]
                }
                // Add more custom styles
            ]
        };
        
        this.map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        
        // Add markers for all venues
        Object.keys(this.venues).forEach(venueKey => {
            const venue = this.venues[venueKey];
            const marker = new google.maps.Marker({
                position: { lat: venue.lat, lng: venue.lng },
                map: this.map,
                title: venue.name,
                icon: {
                    url: 'images/icons/venue-marker.svg',
                    scaledSize: new google.maps.Size(40, 40)
                }
            });
            
            marker.addListener('click', () => {
                this.showVenueInfo(venueKey);
            });
            
            this.markers.push({ key: venueKey, marker: marker });
        });
        
        this.showVenueOnMap(this.currentVenue);
    }
    
    showVenueOnMap(venueKey) {
        const venue = this.venues[venueKey];
        if (!venue) return;
        
        // Update active map button
        document.querySelectorAll('.map-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-venue="${venueKey}"]`).classList.add('active');
        
        // Center map on venue
        this.map.setCenter({ lat: venue.lat, lng: venue.lng });
        this.map.setZoom(15);
        
        // Update venue info card
        this.showVenueInfo(venueKey);
        
        this.currentVenue = venueKey;
    }
    
    showVenueInfo(venueKey) {
        const venue = this.venues[venueKey];
        const infoCard = document.getElementById('venue-info');
        
        infoCard.querySelector('.venue-info-title').textContent = venue.name;
        infoCard.querySelector('.venue-info-address').textContent = venue.address;
        
        // Update phone link
        const phoneBtn = infoCard.querySelector('a[href^="tel:"]');
        phoneBtn.href = `tel:${venue.phone}`;
        
        // Update directions button
        const directionsBtn = document.getElementById('directions-btn');
        directionsBtn.onclick = () => this.getDirections(venueKey);
    }
    
    getDirections(venueKey = this.currentVenue) {
        const venue = this.venues[venueKey];
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${venue.lat},${venue.lng}`;
        window.open(directionsUrl, '_blank');
        
        // Track directions request
        gtag('event', 'directions_request', {
            'venue': venueKey,
            'venue_name': venue.name
        });
    }
    
    showVenueGallery(venueKey) {
        // Create gallery modal
        const modal = document.createElement('div');
        modal.className = 'gallery-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${this.venues[venueKey].name} Gallery</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="gallery-grid">
                    <img src="images/venues/${venueKey}-1.jpg" alt="Venue photo 1" loading="lazy">
                    <img src="images/venues/${venueKey}-2.jpg" alt="Venue photo 2" loading="lazy">
                    <img src="images/venues/${venueKey}-3.jpg" alt="Venue photo 3" loading="lazy">
                    <img src="images/venues/${venueKey}-4.jpg" alt="Venue photo 4" loading="lazy">
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
        
        // Track gallery view
        gtag('event', 'gallery_view', {
            'venue': venueKey,
            'venue_name': this.venues[venueKey].name
        });
    }
    
    animateTimelineItems() {
        const timelineItems = document.querySelectorAll('.program-day.active .timeline-item');
        
        timelineItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 100);
        });
    }
    
    loadWeatherForecast() {
        // Mock weather data - in real implementation, use weather API
        const weatherData = {
            'september-29': {
                temp: '22°C',
                condition: 'Partly Cloudy',
                icon: 'partly-cloudy'
            },
            'september-30': {
                temp: '24°C',
                condition: 'Sunny',
                icon: 'sunny'
            }
        };
        
        // Add weather info to program days
        document.querySelectorAll('.program-day-btn').forEach(btn => {
            const day = btn.dataset.day;
            const weatherKey = day === 'day1' ? 'september-29' : 'september-30';
            const weather = weatherData[weatherKey];
            
            if (weather) {
                const weatherElement = document.createElement('div');
                weatherElement.className = 'day-weather';
                weatherElement.innerHTML = `
                    <span class="weather-temp">${weather.temp}</span>
                    <span class="weather-condition">${weather.condition}</span>
                `;
                btn.appendChild(weatherElement);
            }
        });
    }
    
    trackProgramView(day) {
        gtag('event', 'program_view', {
            'program_day': day,
            'page_location': window.location.href
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.eventInfoManager = new EventInfoManager();
});

// Global functions for onclick handlers
function showVenueMap(venue) {
    window.eventInfoManager.showVenueOnMap(venue);
}

function showVenueGallery(venue) {
    window.eventInfoManager.showVenueGallery(venue);
}

function showActivityMap(activity) {
    window.eventInfoManager.showVenueOnMap(activity);
}
```

---

## 📱 MOBILE OPTIMIZACIJA

### Responsive Design
- Stack venue cards vertically na mobile
- Optimizovane program timeline za touch
- Mobile-friendly map controls
- Compressed transportation options

### Performance
- Lazy loading za venue images
- Optimizovane Google Maps loading
- Efficient timeline animations
- Compressed video content

---

## 🎯 CONVERSION OPTIMIZACIJA

### Booking Integration
- Direct links na hotel booking
- Shuttle service registration
- Activity booking buttons
- Contact venue directly

### Analytics Tracking
```javascript
// Track venue interactions
function trackVenueInteraction(action, venue) {
    gtag('event', 'venue_interaction', {
        'action': action,
        'venue': venue,
        'page_location': window.location.href
    });
}
```

---

## ✅ IMPLEMENTACIJA CHECKLIST

### Faza 1 - Kritično (Nedelja 1)
- [ ] Prikazati skriveni sadržaj (Wine House, galerija, video, mape)
- [ ] Kreirati detaljni program schedule
- [ ] Implementirati Google Maps integration
- [ ] Dodati transport informacije

### Faza 2 - Važno (Nedelja 2)
- [ ] Dodati venue galleries
- [ ] Implementirati shuttle service info
- [ ] Kreirati activities sekciju
- [ ] Dodati weather forecast

### Faza 3 - Poboljšanja (Nedelja 3+)
- [ ] Dodati booking integration
- [ ] Implementirati real-time updates
- [ ] Dodati accessibility informacije
- [ ] Performance optimizacija

---

## 📊 SUCCESS METRICS

### Ciljevi:
- **Program engagement**: Povećati za 60%
- **Venue interaction**: Povećati za 45%
- **Directions requests**: Povećati za 70%
- **Accommodation bookings**: Povećati za 35%
- **Time on page**: Povećati za 50%

---

*Redesign predlog kreiran: Decembar 2024*
*Status: Za implementaciju*
*Prioritet: VISOK*
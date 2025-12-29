# DETALJANA ANALIZA WEBSITE STRUKTURE - FUTURE-BME 2026 KONFERENCIJA

## IZVRŠNI PREGLED

Analizirani su svi HTML fajlovi glavnog sajta konferencije FUTURE-BME 2026. Sajt je izgrađen korišćenjem Nicepage template sistema sa custom CSS i JavaScript enhancements. Struktura je konzistentna sa jasnom navigacijom i standardizovanim dizajnom.

---

## 1. INDEX.HTML - GLAVNA STRANICA

### 1.1 STRUKTURA SADRŽAJA

**Header sekcija:**
- Logo konferencije (BMElogo.png) sa linkovima
- Navigacijski meni sa 9 glavnih stavki + dropdown za "Past Conferences"
- ISSN brojevi (Print: 3042-2728, Online: 3042-2868)
- Responsive hamburger meni za mobilne uređaje

**Glavne sekcije:**

1. **Hero sekcija** - Naslov konferencije
   - Tekst: "2nd International Conference on Business, Management, and Economics Engineering Future-BME 2026"
   - Podnaslov: "Forging the Future: Business, Management and Economics Engineering in the Age of Sustainability and Digital Transformation"

2. **Call-to-Action sekcija**
   - Animirani dugme "REGISTER HERE" sa pulse efektom
   - Direktan link na Registration.html

3. **Journal publikacija sekcija**
   - Informacija o IJIEM (International Journal of Industrial Engineering and Management)
   - Scopus indeksiranje
   - Poziv za kvalitetne radove

4. **Važni datumi sekcija** (SKRIVENA - u CSS hidden klasi)
   - Zig-zag timeline sa ključnim datumima:
     * 01 May 2026 - Early bird payment deadline
     * 15 May 2026 - Abstract submission deadline
     * 15 Aug 2026 - Full papers submission
     * 30 Aug 2026 - Paper acceptance notification

5. **Keynote speakers sekcija** (SKRIVENA)
   - Carousel sa 5 govornika
   - Slike i biografije

6. **Footer sekcija**
   - Institucijski logo
   - Kontakt informacije
   - ISSN brojevi
   - Copyright informacija

### 1.2 TIPOVI INFORMACIJA

- **Konferencijske informacije**: Naziv, tema, datumi
- **Pozivi na akciju**: Registracija, submission
- **Akademske informacije**: Journal publikacije, Scopus indeksiranje
- **Kontakt podaci**: Email, institucija
- **Vremenski okvir**: Važni datumi

### 1.3 DIZAJN ELEMENTI

- **Boje**: Custom color palette (custom-color-1 do custom-color-9)
- **Tipografija**: Roboto i Open Sans fontovi
- **Animacije**: Pulse efekt na CTA dugmetu, countdown timer
- **Responsive**: Prilagođeno za XL, LG, MD, SM, XS rezolucije
- **Interaktivnost**: Dropdown meni, carousel, timeline

### 1.4 PROBLEMI U UX-u

1. **Skriveni sadržaj**: Nekoliko važnih sekcija je skriveno (hidden klasa)
   - Keynote speakers nisu vidljivi
   - Countdown timer nije vidljiv
   
2. **Nedostaje informacija**: 
   - Nema programa konferencije
   - Nema detaljnog raspporeda
   
3. **CTA optimizacija**: Samo jedan "Register" dugme - mogućnost za više CTA-a

4. **Mobilna optimizacija**: Hamburger meni je dobar, ali može biti bolja organizacija

### 1.5 MOGUĆNOSTI ZA POBOLJŠANJE

1. **Prikazati skrivene sekcije** - Keynote speakers i važni datumi su ključni
2. **Dodati hero video** - Umesto samo slike, video sa konferencije
3. **Poboljšati CTA**: Dodati "Submit Paper" i "View Program" dugmete
4. **Dodati statistiku**: Broj učesnika, zemalja, radova
5. **Poboljšati SEO**: Dodati structured data za Event schema
6. **Dodati testimonijale**: Od prethodne konferencije (2024)

---

## 2. CONFERENCE-TOPICS.HTML - TEME KONFERENCIJE

### 2.1 STRUKTURA SADRŽAJA

**Header**: Identičan kao na index.html

**Glavne sekcije:**

1. **Naslov stranice**
   - "Future-BME 2026 Conference Topics"

2. **Sadržaj - Teme konferencije**
   - Organizovano u 6 glavnih kategorija:

   **A) Business, Management & Human Resources**
   - Strategic and Sustainable Business Models
   - Corporate Governance and Ethical Leadership
   - Circular Economy and Green Supply Chain Management
   - Human Capital Development and Future Skills
   - Sustainable Project Management and Change Leadership
   - Reshoring and Nearshoring Strategies
   - Operational and Supply Chain Transformation
   - Sustainable Business Models in Agricultural Sector

   **B) Economics, Finance & Policy**
   - Climate Economics and Sustainable Development
   - Green Finance, ESG Investments, Economic Resilience
   - Behavioral Economics and Decision-Making
   - Digital Banking, Fintech, Cryptocurrencies
   - Regulatory Frameworks and Public-Private Partnerships

   **C) Engineering, Construction & Economic Engineering**
   - Smart and Sustainable Infrastructure
   - Urban Planning and Resilient Cities
   - Economic Engineering and Cost Optimization
   - Risk, Safety, and Resilience in Construction
   - Circular Design and Resource Efficiency
   - Sustainable Urban Mobility and Green Logistics
   - Architectural Engineering and Cultural Heritage

   **D) Digital Transformation, Data & AI**
   - AI-Driven Decision-Making and Predictive Analytics
   - Data Governance, Privacy, Cybersecurity
   - Industry 5.0 and Human-Centric Manufacturing
   - Automation, Robotics, Smart Production Systems
   - Digital Economy and E-commerce Operations
   - Cybersecurity in Manufacturing
   - Agile and Flexible Manufacturing Systems
   - Digital Agriculture for Business Efficiency

   **E) Sustainability, Energy & Environmental Practice**
   - Renewable Energy Systems and Energy Efficiency
   - Carbon Neutrality and Net Zero Strategies
   - Environmental Management and Green Technologies
   - Sustainable Occupational Health & Safety
   - Environmental Policy and Corporate Responsibility
   - Sustainable Product Development
   - Circular Design in Product & Process Engineering

   **F) Design, Innovation & Entrepreneurship**
   - Design Thinking and Innovation Management
   - Sustainable and Human-Centered Design
   - AI and Data-Driven Design
   - Start-up Ecosystems and Scale-up Strategies
   - Creative Industries, Branding, Digital Marketing
   - Strategic Management of Agritech Innovation

   **G) Healthcare & Hospitality Management**
   - Sustainable Practices in Hospitality and Tourism
   - Digitalization and Smart Systems in Healthcare
   - Health Economics and Policy Innovations
   - Technology, Wellbeing, and Workforce Resilience
   - Sustainable Food Systems and Nutrition

3. **Footer**: Identičan kao na index.html

### 2.2 TIPOVI INFORMACIJA

- **Tematske kategorije**: 7 glavnih oblasti
- **Podteme**: 50+ specifičnih tema
- **Fokus**: Interdisciplinarni pristup
- **Ključne reči**: Sustainability, Digital Transformation, Innovation

### 2.3 DIZAJN ELEMENTI

- **Tipografija**: Bold za glavne kategorije, regular za podteme
- **Struktura**: Bullet points sa bullet ikonama
- **Boje**: Tamna pozadina sa svetlim tekstom
- **Čitljivost**: Dobar kontrast, jasna hijerarhija

### 2.4 PROBLEMI U UX-u

1. **Duga stranica**: Sve teme na jednoj stranici - teško za navigaciju
2. **Nema filtriranja**: Nema mogućnosti da se filtriraju teme
3. **Nema pretraživanja**: Nema search funkcionalnosti
4. **Nema linkova**: Teme nisu linkovi na detaljnije informacije
5. **Nema kategorija**: Nema mogućnosti da se vidi samo određena kategorija

### 2.5 MOGUĆNOSTI ZA POBOLJŠANJE

1. **Dodati tabbed interface** - Svaka kategorija u zasebnoj tab-i
2. **Dodati search** - Mogućnost pretraživanja tema
3. **Dodati filter** - Po kategoriji, ključnim rečima
4. **Dodati ikone** - Za svaku kategoriju
5. **Dodati collapse/expand** - Za svaku kategoriju
6. **Dodati linkove** - Na detaljnije informacije
7. **Dodati broj radova** - Po svakoj temi (ako je dostupno)


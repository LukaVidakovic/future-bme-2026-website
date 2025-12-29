# SUBMISSIONS.HTML - REDESIGN PREDLOG

## 📋 TRENUTNO STANJE

**Stranica**: Submissions.html
**Status**: Funkcionalna ali nedovršena
**Prioritet**: KRITIČAN

### Postojeća struktura:
- Naslov stranice
- Registration and peer review process sekcija
- IJIEM publikacija informacije
- Propozicije za radove sekcija
- Osnovne instrukcije za submission

### Glavni problemi:
- Nema detaljnog step-by-step vodiča
- Nema FAQ sekcije
- Nema jasnih deadline-a
- Nema informacija o review procesu
- Nema checklist-e za autore

---

## 🎯 REDESIGN CILJEVI

### Primarni ciljevi:
1. **Kreirati submission wizard** - Multi-step guided process
2. **Dodati detaljne deadline-e** - Sa countdown timer-ima
3. **Implementirati FAQ sekciju** - Često postavljana pitanja
4. **Dodati submission checklist** - Pre-submission validacija
5. **Poboljšati file upload UX** - Drag & drop interface

### Sekundarni ciljevi:
1. Dodati progress tracking
2. Implementirati email notifications
3. Kreirati author guidelines
4. Dodati template preview

---

## 🎨 VIZUELNI REDESIGN

### Header sekcija - POBOLJŠANA
```html
<!-- Enhanced Header -->
<section class="submissions-header-modern" id="submissions-header">
    <div class="container">
        <div class="header-content">
            <span class="section-eyebrow">Call for Papers</span>
            <h1 class="page-title">Paper Submissions</h1>
            <p class="page-subtitle">
                Submit your research for FUTURE-BME 2026 and contribute to 
                advancing knowledge in business, management, and economics engineering.
            </p>
        </div>
        
        <!-- Submission Stats -->
        <div class="submission-stats">
            <div class="stat-card">
                <div class="stat-number" id="days-remaining">127</div>
                <div class="stat-label">Days Until Deadline</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">150+</div>
                <div class="stat-label">Expected Papers</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">8</div>
                <div class="stat-label">Max Pages</div>
            </div>
            <div class="stat-card">
                <div class="stat-number">30+</div>
                <div class="stat-label">Review Countries</div>
            </div>
        </div>
    </div>
</section>
```

### Submission Process - NOVA IMPLEMENTACIJA
```html
<!-- Submission Process Steps -->
<section class="process-section-modern" id="submission-process">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Submission Process</h2>
            <p class="section-subtitle">
                Follow these simple steps to submit your research paper
            </p>
        </div>
        
        <div class="process-steps">
            <div class="step-item">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h3 class="step-title">Submit Abstract</h3>
                    <p class="step-description">
                        Submit your 300-word abstract by May 15, 2026
                    </p>
                    <div class="step-deadline">
                        <svg class="deadline-icon"><!-- Clock icon --></svg>
                        <span>Deadline: May 15, 2026</span>
                    </div>
                    <a href="#abstract-submission" class="step-cta">
                        Submit Abstract
                    </a>
                </div>
            </div>
            
            <div class="step-item">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h3 class="step-title">Await Review</h3>
                    <p class="step-description">
                        Our international committee reviews your abstract
                    </p>
                    <div class="step-timeline">
                        <span>Review period: 2-3 weeks</span>
                    </div>
                </div>
            </div>
            
            <div class="step-item">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h3 class="step-title">Submit Full Paper</h3>
                    <p class="step-description">
                        If accepted, submit your full paper by August 15, 2026
                    </p>
                    <div class="step-deadline">
                        <svg class="deadline-icon"><!-- Clock icon --></svg>
                        <span>Deadline: August 15, 2026</span>
                    </div>
                    <a href="#paper-submission" class="step-cta">
                        Submit Paper
                    </a>
                </div>
            </div>
            
            <div class="step-item">
                <div class="step-number">4</div>
                <div class="step-content">
                    <h3 class="step-title">Final Review</h3>
                    <p class="step-description">
                        Double-blind peer review by expert reviewers
                    </p>
                    <div class="step-timeline">
                        <span>Review period: 2 weeks</span>
                    </div>
                </div>
            </div>
            
            <div class="step-item">
                <div class="step-number">5</div>
                <div class="step-content">
                    <h3 class="step-title">Publication</h3>
                    <p class="step-description">
                        Accepted papers published in conference proceedings
                    </p>
                    <div class="step-benefit">
                        <span>IJIEM journal consideration</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
```
### Submission Wizard - NOVA FUNKCIONALNOST
```html
<!-- Interactive Submission Wizard -->
<section class="wizard-section-modern" id="submission-wizard">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Submit Your Paper</h2>
            <p class="section-subtitle">
                Use our guided submission wizard for a smooth experience
            </p>
        </div>
        
        <!-- Wizard Progress -->
        <div class="wizard-progress">
            <div class="progress-step active" data-step="1">
                <div class="step-circle">1</div>
                <span class="step-label">Paper Type</span>
            </div>
            <div class="progress-step" data-step="2">
                <div class="step-circle">2</div>
                <span class="step-label">Author Info</span>
            </div>
            <div class="progress-step" data-step="3">
                <div class="step-circle">3</div>
                <span class="step-label">Abstract</span>
            </div>
            <div class="progress-step" data-step="4">
                <div class="step-circle">4</div>
                <span class="step-label">Upload</span>
            </div>
            <div class="progress-step" data-step="5">
                <div class="step-circle">5</div>
                <span class="step-label">Review</span>
            </div>
        </div>
        
        <!-- Wizard Content -->
        <div class="wizard-content">
            <!-- Step 1: Paper Type -->
            <div class="wizard-step active" id="step-1">
                <h3 class="step-title">Select Paper Type</h3>
                <div class="paper-types">
                    <div class="paper-type-card">
                        <input type="radio" id="original-paper" name="paper-type" value="original">
                        <label for="original-paper" class="paper-type-label">
                            <div class="type-icon">
                                <svg><!-- Research icon --></svg>
                            </div>
                            <h4>Original Scientific Paper</h4>
                            <p>Present new research findings and methodologies</p>
                            <div class="type-requirements">
                                <span>6-8 pages</span>
                                <span>Double-blind review</span>
                            </div>
                        </label>
                    </div>
                    
                    <div class="paper-type-card">
                        <input type="radio" id="review-paper" name="paper-type" value="review">
                        <label for="review-paper" class="paper-type-label">
                            <div class="type-icon">
                                <svg><!-- Review icon --></svg>
                            </div>
                            <h4>Review Paper</h4>
                            <p>Comprehensive analysis of existing research</p>
                            <div class="type-requirements">
                                <span>8-10 pages</span>
                                <span>Extensive bibliography</span>
                            </div>
                        </label>
                    </div>
                    
                    <div class="paper-type-card">
                        <input type="radio" id="case-study" name="paper-type" value="case">
                        <label for="case-study" class="paper-type-label">
                            <div class="type-icon">
                                <svg><!-- Case icon --></svg>
                            </div>
                            <h4>Case Study</h4>
                            <p>Real-world application and analysis</p>
                            <div class="type-requirements">
                                <span>5-7 pages</span>
                                <span>Practical insights</span>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            
            <!-- Step 2: Author Information -->
            <div class="wizard-step" id="step-2">
                <h3 class="step-title">Author Information</h3>
                <div class="author-form">
                    <div class="form-group">
                        <label for="corresponding-author">Corresponding Author *</label>
                        <input type="text" id="corresponding-author" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="author-email">Email Address *</label>
                        <input type="email" id="author-email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="author-affiliation">Affiliation *</label>
                        <input type="text" id="author-affiliation" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="co-authors">Co-authors</label>
                        <div class="co-authors-list" id="co-authors-list">
                            <!-- Dynamic co-author inputs -->
                        </div>
                        <button type="button" class="add-author-btn" onclick="addCoAuthor()">
                            <svg><!-- Plus icon --></svg>
                            Add Co-author
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Step 3: Abstract -->
            <div class="wizard-step" id="step-3">
                <h3 class="step-title">Paper Abstract</h3>
                <div class="abstract-form">
                    <div class="form-group">
                        <label for="paper-title">Paper Title *</label>
                        <input type="text" id="paper-title" maxlength="150" required>
                        <div class="char-counter">0/150 characters</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="paper-abstract">Abstract *</label>
                        <textarea id="paper-abstract" maxlength="300" rows="8" required 
                                  placeholder="Provide a concise summary of your research..."></textarea>
                        <div class="char-counter">0/300 words</div>
                    </div>
                    
                    <div class="form-group">
                        <label for="keywords">Keywords *</label>
                        <input type="text" id="keywords" placeholder="Enter 3-5 keywords separated by commas">
                        <div class="keywords-help">
                            Example: sustainability, digital transformation, business model
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="research-area">Research Area *</label>
                        <select id="research-area" required>
                            <option value="">Select research area</option>
                            <option value="business-management">Business & Management</option>
                            <option value="economics-finance">Economics & Finance</option>
                            <option value="engineering">Engineering & Construction</option>
                            <option value="digital-transformation">Digital Transformation</option>
                            <option value="sustainability">Sustainability & Energy</option>
                            <option value="design-innovation">Design & Innovation</option>
                            <option value="healthcare">Healthcare & Hospitality</option>
                        </select>
                    </div>
                </div>
            </div>
            
            <!-- Step 4: File Upload -->
            <div class="wizard-step" id="step-4">
                <h3 class="step-title">Upload Documents</h3>
                <div class="upload-section">
                    <!-- Paper Upload -->
                    <div class="upload-area" id="paper-upload">
                        <div class="upload-dropzone">
                            <svg class="upload-icon"><!-- Upload icon --></svg>
                            <h4>Upload Your Paper</h4>
                            <p>Drag and drop your paper here, or click to browse</p>
                            <div class="upload-requirements">
                                <span>PDF format only</span>
                                <span>Max 10MB</span>
                                <span>Use provided template</span>
                            </div>
                            <input type="file" id="paper-file" accept=".pdf" hidden>
                        </div>
                        <div class="upload-progress" style="display: none;">
                            <div class="progress-bar">
                                <div class="progress-fill"></div>
                            </div>
                            <span class="progress-text">Uploading... 0%</span>
                        </div>
                    </div>
                    
                    <!-- Additional Documents -->
                    <div class="additional-uploads">
                        <h4>Additional Documents (Optional)</h4>
                        
                        <div class="upload-item">
                            <label for="cover-letter">Cover Letter</label>
                            <div class="file-input-wrapper">
                                <input type="file" id="cover-letter" accept=".pdf,.doc,.docx">
                                <span class="file-input-text">Choose file</span>
                            </div>
                        </div>
                        
                        <div class="upload-item">
                            <label for="supplementary">Supplementary Materials</label>
                            <div class="file-input-wrapper">
                                <input type="file" id="supplementary" accept=".pdf,.zip" multiple>
                                <span class="file-input-text">Choose files</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Template Download -->
                    <div class="template-section">
                        <h4>Paper Template</h4>
                        <p>Use our official template to ensure proper formatting</p>
                        <div class="template-downloads">
                            <a href="files/Template_Future_BME_2026.docx" class="template-btn">
                                <svg><!-- Word icon --></svg>
                                Download Word Template
                            </a>
                            <a href="files/Template_Future_BME_2026.pdf" class="template-btn">
                                <svg><!-- PDF icon --></svg>
                                View PDF Sample
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Step 5: Review & Submit -->
            <div class="wizard-step" id="step-5">
                <h3 class="step-title">Review & Submit</h3>
                <div class="review-section">
                    <div class="submission-summary">
                        <h4>Submission Summary</h4>
                        <div class="summary-item">
                            <span class="summary-label">Paper Type:</span>
                            <span class="summary-value" id="summary-type">-</span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Corresponding Author:</span>
                            <span class="summary-value" id="summary-author">-</span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Title:</span>
                            <span class="summary-value" id="summary-title">-</span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Research Area:</span>
                            <span class="summary-value" id="summary-area">-</span>
                        </div>
                        <div class="summary-item">
                            <span class="summary-label">Files:</span>
                            <span class="summary-value" id="summary-files">-</span>
                        </div>
                    </div>
                    
                    <!-- Submission Checklist -->
                    <div class="submission-checklist">
                        <h4>Pre-submission Checklist</h4>
                        <div class="checklist-items">
                            <label class="checklist-item">
                                <input type="checkbox" required>
                                <span class="checkmark"></span>
                                Paper follows the provided template format
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" required>
                                <span class="checkmark"></span>
                                Abstract is within 300 words limit
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" required>
                                <span class="checkmark"></span>
                                All author information is complete and accurate
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" required>
                                <span class="checkmark"></span>
                                Paper is original and not published elsewhere
                            </label>
                            <label class="checklist-item">
                                <input type="checkbox" required>
                                <span class="checkmark"></span>
                                I agree to the conference terms and conditions
                            </label>
                        </div>
                    </div>
                    
                    <!-- Terms and Conditions -->
                    <div class="terms-section">
                        <label class="terms-checkbox">
                            <input type="checkbox" id="terms-agreement" required>
                            <span class="checkmark"></span>
                            I agree to the <a href="Ethics-and-Policy.html" target="_blank">publication ethics and policies</a>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Wizard Navigation -->
        <div class="wizard-navigation">
            <button type="button" class="wizard-btn btn-secondary" id="prev-btn" onclick="previousStep()" disabled>
                <svg><!-- Arrow left --></svg>
                Previous
            </button>
            <button type="button" class="wizard-btn btn-primary" id="next-btn" onclick="nextStep()">
                Next
                <svg><!-- Arrow right --></svg>
            </button>
            <button type="submit" class="wizard-btn btn-success" id="submit-btn" onclick="submitPaper()" style="display: none;">
                <svg><!-- Check icon --></svg>
                Submit Paper
            </button>
        </div>
    </div>
</section>
```

### FAQ Section - NOVA SEKCIJA
```html
<!-- Frequently Asked Questions -->
<section class="faq-section-modern" id="faq">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Frequently Asked Questions</h2>
            <p class="section-subtitle">
                Find answers to common questions about the submission process
            </p>
        </div>
        
        <div class="faq-grid">
            <div class="faq-category">
                <h3 class="category-title">Submission Process</h3>
                <div class="faq-items">
                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span>What is the submission deadline?</span>
                            <svg class="faq-icon"><!-- Chevron down --></svg>
                        </button>
                        <div class="faq-answer">
                            <p>Abstract submission deadline is May 15, 2026, and full paper submission deadline is August 15, 2026. We recommend submitting early to avoid last-minute technical issues.</p>
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span>Can I submit multiple papers?</span>
                            <svg class="faq-icon"><!-- Chevron down --></svg>
                        </button>
                        <div class="faq-answer">
                            <p>Yes, you can submit multiple papers, but each paper requires a separate registration fee. Each paper will be reviewed independently.</p>
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span>What file formats are accepted?</span>
                            <svg class="faq-icon"><!-- Chevron down --></svg>
                        </button>
                        <div class="faq-answer">
                            <p>We only accept PDF files for paper submissions. Please ensure your PDF is created from the provided Word template and includes all fonts and images.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="faq-category">
                <h3 class="category-title">Review Process</h3>
                <div class="faq-items">
                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span>How does the review process work?</span>
                            <svg class="faq-icon"><!-- Chevron down --></svg>
                        </button>
                        <div class="faq-answer">
                            <p>We use a double-blind peer review process. Each paper is reviewed by at least two experts in the field. Authors and reviewers remain anonymous to each other.</p>
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span>How long does the review take?</span>
                            <svg class="faq-icon"><!-- Chevron down --></svg>
                        </button>
                        <div class="faq-answer">
                            <p>Abstract review takes 2-3 weeks, and full paper review takes approximately 2 weeks. You will receive notification via email once the review is complete.</p>
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span>What happens if my paper is rejected?</span>
                            <svg class="faq-icon"><!-- Chevron down --></svg>
                        </button>
                        <div class="faq-answer">
                            <p>You will receive detailed feedback from reviewers. You may revise and resubmit your paper if time permits, or consider it for future conferences.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="faq-category">
                <h3 class="category-title">Publication</h3>
                <div class="faq-items">
                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span>Will my paper be published?</span>
                            <svg class="faq-icon"><!-- Chevron down --></svg>
                        </button>
                        <div class="faq-answer">
                            <p>All accepted papers will be published in the conference proceedings with ISSN numbers. Selected high-quality papers may be invited for submission to IJIEM journal.</p>
                        </div>
                    </div>
                    
                    <div class="faq-item">
                        <button class="faq-question" onclick="toggleFAQ(this)">
                            <span>What about copyright?</span>
                            <svg class="faq-icon"><!-- Chevron down --></svg>
                        </button>
                        <div class="faq-answer">
                            <p>Authors retain copyright of their work. By submitting, you grant the conference organizers permission to publish your paper in the proceedings.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Contact for Questions -->
        <div class="faq-contact">
            <h4>Still have questions?</h4>
            <p>Contact our submission support team</p>
            <div class="contact-options">
                <a href="mailto:submissions@future-bme.ftn.uns.ac.rs" class="contact-btn">
                    <svg><!-- Email icon --></svg>
                    Email Support
                </a>
                <a href="#" class="contact-btn" onclick="openLiveChat()">
                    <svg><!-- Chat icon --></svg>
                    Live Chat
                </a>
            </div>
        </div>
    </div>
</section>
```

---

## 🔧 TEHNIČKA IMPLEMENTACIJA

### CSS Stilovi
```css
/* Submissions Header */
.submissions-header-modern {
    padding: 4rem 0 2rem;
    background: linear-gradient(135deg, var(--bme-primary), var(--bme-secondary));
    color: white;
}

.submission-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
}

.stat-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
}

.stat-card:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
}

.stat-number {
    font-size: 3rem;
    font-weight: 800;
    color: var(--bme-accent);
    display: block;
    line-height: 1;
}

.stat-label {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 0.5rem;
}

/* Process Steps */
.process-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    position: relative;
}

.step-item {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
}

.step-item:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--bme-accent);
    transform: translateY(-10px);
}

.step-number {
    width: 60px;
    height: 60px;
    background: var(--bme-accent);
    color: var(--bme-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0 auto 1.5rem;
}

.step-title {
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
}

.step-description {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.step-deadline {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: var(--bme-accent);
    font-weight: 600;
    margin-bottom: 1rem;
}

.step-cta {
    background: var(--bme-accent);
    color: var(--bme-primary);
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    transition: all 0.3s ease;
}

.step-cta:hover {
    background: var(--bme-secondary);
    transform: translateY(-2px);
}

/* Submission Wizard */
.wizard-progress {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
    position: relative;
}

.wizard-progress::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(255, 255, 255, 0.2);
    z-index: 1;
}

.progress-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    z-index: 2;
}

.step-circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    transition: all 0.3s ease;
}

.progress-step.active .step-circle {
    background: var(--bme-accent);
    color: var(--bme-primary);
}

.progress-step.completed .step-circle {
    background: #4CAF50;
    color: white;
}

.step-label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
}

.progress-step.active .step-label {
    color: var(--bme-accent);
    font-weight: 600;
}

/* Wizard Content */
.wizard-content {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 3rem;
    margin-bottom: 2rem;
    min-height: 500px;
}

.wizard-step {
    display: none;
}

.wizard-step.active {
    display: block;
    animation: fadeInUp 0.3s ease;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.step-title {
    font-size: 2rem;
    font-weight: 700;
    color: white;
    margin-bottom: 2rem;
    text-align: center;
}

/* Paper Type Selection */
.paper-types {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.paper-type-card {
    position: relative;
}

.paper-type-card input[type="radio"] {
    display: none;
}

.paper-type-label {
    display: block;
    background: rgba(255, 255, 255, 0.05);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.paper-type-label:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: var(--bme-accent);
}

.paper-type-card input[type="radio"]:checked + .paper-type-label {
    border-color: var(--bme-accent);
    background: rgba(23, 237, 209, 0.1);
}

.type-icon {
    width: 60px;
    height: 60px;
    background: var(--bme-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
}

.paper-type-label h4 {
    font-size: 1.3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
}

.paper-type-label p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.type-requirements {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.type-requirements span {
    background: rgba(23, 237, 209, 0.2);
    color: var(--bme-accent);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: 500;
}

/* Form Styling */
.form-group {
    margin-bottom: 2rem;
}

.form-group label {
    display: block;
    color: white;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--bme-accent);
    background: rgba(255, 255, 255, 0.15);
}

.char-counter {
    text-align: right;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-top: 0.5rem;
}

.keywords-help {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    margin-top: 0.5rem;
    font-style: italic;
}

/* File Upload */
.upload-dropzone {
    border: 2px dashed rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    padding: 3rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
}

.upload-dropzone:hover {
    border-color: var(--bme-accent);
    background: rgba(23, 237, 209, 0.05);
}

.upload-dropzone.dragover {
    border-color: var(--bme-accent);
    background: rgba(23, 237, 209, 0.1);
}

.upload-icon {
    width: 60px;
    height: 60px;
    color: var(--bme-accent);
    margin: 0 auto 1rem;
}

.upload-dropzone h4 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

.upload-dropzone p {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1rem;
}

.upload-requirements {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.upload-requirements span {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.8);
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
}

/* Progress Bar */
.upload-progress {
    margin-top: 1rem;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    background: var(--bme-accent);
    width: 0%;
    transition: width 0.3s ease;
}

.progress-text {
    display: block;
    text-align: center;
    color: white;
    margin-top: 0.5rem;
    font-weight: 600;
}

/* FAQ Section */
.faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.faq-category {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
}

.category-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--bme-accent);
    margin-bottom: 1.5rem;
    text-align: center;
}

.faq-item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 1rem;
}

.faq-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
}

.faq-question {
    width: 100%;
    background: none;
    border: none;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    text-align: left;
    padding: 1rem 0;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: color 0.3s ease;
}

.faq-question:hover {
    color: var(--bme-accent);
}

.faq-icon {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
}

.faq-question.active .faq-icon {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.faq-answer.active {
    max-height: 200px;
}

.faq-answer p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    padding-bottom: 1rem;
}

/* Wizard Navigation */
.wizard-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.wizard-btn {
    padding: 1rem 2rem;
    border: none;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    font-size: 1rem;
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
}

.btn-primary {
    background: var(--bme-accent);
    color: var(--bme-primary);
}

.btn-primary:hover {
    background: var(--bme-secondary);
    transform: translateY(-2px);
}

.btn-success {
    background: #4CAF50;
    color: white;
}

.btn-success:hover {
    background: #45a049;
    transform: translateY(-2px);
}

.wizard-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 768px) {
    .submission-stats {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .process-steps {
        grid-template-columns: 1fr;
    }
    
    .wizard-progress {
        flex-wrap: wrap;
        gap: 1rem;
    }
    
    .wizard-progress::before {
        display: none;
    }
    
    .paper-types {
        grid-template-columns: 1fr;
    }
    
    .faq-grid {
        grid-template-columns: 1fr;
    }
    
    .wizard-navigation {
        flex-direction: column;
    }
    
    .wizard-btn {
        width: 100%;
        justify-content: center;
    }
}
```

### JavaScript Funkcionalnosti
```javascript
// Submission wizard functionality
class SubmissionWizard {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.formData = {};
        this.uploadedFiles = {};
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.updateProgress();
        this.initFileUpload();
        this.startDeadlineCountdown();
    }
    
    bindEvents() {
        // Form input changes
        document.addEventListener('input', (e) => {
            if (e.target.matches('input, textarea, select')) {
                this.saveFormData(e.target);
                this.updateCharCounter(e.target);
            }
        });
        
        // Paper type selection
        document.addEventListener('change', (e) => {
            if (e.target.name === 'paper-type') {
                this.formData.paperType = e.target.value;
            }
        });
        
        // File upload
        document.getElementById('paper-file').addEventListener('change', (e) => {
            this.handleFileUpload(e.target.files[0], 'paper');
        });
        
        // Drag and drop
        const dropzone = document.querySelector('.upload-dropzone');
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('dragover');
        });
        
        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('dragover');
        });
        
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                this.handleFileUpload(files[0], 'paper');
            }
        });
        
        dropzone.addEventListener('click', () => {
            document.getElementById('paper-file').click();
        });
    }
    
    nextStep() {
        if (this.validateCurrentStep()) {
            if (this.currentStep < this.totalSteps) {
                this.currentStep++;
                this.showStep(this.currentStep);
                this.updateProgress();
                this.updateNavigation();
                
                if (this.currentStep === 5) {
                    this.updateSummary();
                }
            }
        }
    }
    
    previousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.showStep(this.currentStep);
            this.updateProgress();
            this.updateNavigation();
        }
    }
    
    showStep(step) {
        // Hide all steps
        document.querySelectorAll('.wizard-step').forEach(stepEl => {
            stepEl.classList.remove('active');
        });
        
        // Show current step
        document.getElementById(`step-${step}`).classList.add('active');
        
        // Scroll to top of wizard
        document.getElementById('submission-wizard').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    
    updateProgress() {
        document.querySelectorAll('.progress-step').forEach((step, index) => {
            const stepNumber = index + 1;
            
            if (stepNumber < this.currentStep) {
                step.classList.add('completed');
                step.classList.remove('active');
            } else if (stepNumber === this.currentStep) {
                step.classList.add('active');
                step.classList.remove('completed');
            } else {
                step.classList.remove('active', 'completed');
            }
        });
    }
    
    updateNavigation() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        
        prevBtn.disabled = this.currentStep === 1;
        
        if (this.currentStep === this.totalSteps) {
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'flex';
        } else {
            nextBtn.style.display = 'flex';
            submitBtn.style.display = 'none';
        }
    }
    
    validateCurrentStep() {
        switch (this.currentStep) {
            case 1:
                return this.validatePaperType();
            case 2:
                return this.validateAuthorInfo();
            case 3:
                return this.validateAbstract();
            case 4:
                return this.validateFileUpload();
            case 5:
                return this.validateChecklist();
            default:
                return true;
        }
    }
    
    validatePaperType() {
        const paperType = document.querySelector('input[name="paper-type"]:checked');
        if (!paperType) {
            this.showError('Please select a paper type');
            return false;
        }
        return true;
    }
    
    validateAuthorInfo() {
        const requiredFields = ['corresponding-author', 'author-email', 'author-affiliation'];
        
        for (const fieldId of requiredFields) {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                this.showError(`Please fill in the ${field.previousElementSibling.textContent}`);
                field.focus();
                return false;
            }
        }
        
        // Validate email
        const email = document.getElementById('author-email').value;
        if (!this.isValidEmail(email)) {
            this.showError('Please enter a valid email address');
            return false;
        }
        
        return true;
    }
    
    validateAbstract() {
        const requiredFields = ['paper-title', 'paper-abstract', 'keywords', 'research-area'];
        
        for (const fieldId of requiredFields) {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                this.showError(`Please fill in the ${field.previousElementSibling.textContent}`);
                field.focus();
                return false;
            }
        }
        
        // Validate abstract length
        const abstract = document.getElementById('paper-abstract').value;
        const wordCount = abstract.trim().split(/\s+/).length;
        if (wordCount > 300) {
            this.showError('Abstract must be 300 words or less');
            return false;
        }
        
        return true;
    }
    
    validateFileUpload() {
        if (!this.uploadedFiles.paper) {
            this.showError('Please upload your paper');
            return false;
        }
        return true;
    }
    
    validateChecklist() {
        const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
        const termsCheckbox = document.getElementById('terms-agreement');
        
        for (const checkbox of checkboxes) {
            if (!checkbox.checked) {
                this.showError('Please complete all checklist items');
                return false;
            }
        }
        
        if (!termsCheckbox.checked) {
            this.showError('Please agree to the terms and conditions');
            return false;
        }
        
        return true;
    }
    
    handleFileUpload(file, type) {
        if (!file) return;
        
        // Validate file type
        if (type === 'paper' && file.type !== 'application/pdf') {
            this.showError('Please upload a PDF file');
            return;
        }
        
        // Validate file size (10MB limit)
        if (file.size > 10 * 1024 * 1024) {
            this.showError('File size must be less than 10MB');
            return;
        }
        
        // Show upload progress
        this.showUploadProgress(file, type);
        
        // Simulate upload (replace with actual upload logic)
        this.simulateUpload(file, type);
    }
    
    showUploadProgress(file, type) {
        const progressContainer = document.querySelector('.upload-progress');
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        
        progressContainer.style.display = 'block';
        progressText.textContent = `Uploading ${file.name}... 0%`;
    }
    
    simulateUpload(file, type) {
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                this.uploadComplete(file, type);
            }
            
            progressFill.style.width = `${progress}%`;
            progressText.textContent = `Uploading ${file.name}... ${Math.round(progress)}%`;
        }, 200);
    }
    
    uploadComplete(file, type) {
        this.uploadedFiles[type] = file;
        
        const progressText = document.querySelector('.progress-text');
        progressText.textContent = `✓ ${file.name} uploaded successfully`;
        progressText.style.color = '#4CAF50';
        
        // Hide progress after 2 seconds
        setTimeout(() => {
            document.querySelector('.upload-progress').style.display = 'none';
        }, 2000);
    }
    
    updateSummary() {
        // Update summary with form data
        document.getElementById('summary-type').textContent = 
            this.formData.paperType || '-';
        document.getElementById('summary-author').textContent = 
            document.getElementById('corresponding-author').value || '-';
        document.getElementById('summary-title').textContent = 
            document.getElementById('paper-title').value || '-';
        document.getElementById('summary-area').textContent = 
            document.getElementById('research-area').selectedOptions[0]?.text || '-';
        
        const fileCount = Object.keys(this.uploadedFiles).length;
        document.getElementById('summary-files').textContent = 
            fileCount > 0 ? `${fileCount} file(s) uploaded` : 'No files uploaded';
    }
    
    saveFormData(input) {
        this.formData[input.id] = input.value;
    }
    
    updateCharCounter(input) {
        const counter = input.parentElement.querySelector('.char-counter');
        if (!counter) return;
        
        if (input.type === 'textarea') {
            const wordCount = input.value.trim().split(/\s+/).filter(word => word.length > 0).length;
            const maxWords = parseInt(input.getAttribute('maxlength')) || 300;
            counter.textContent = `${wordCount}/${maxWords} words`;
            
            if (wordCount > maxWords) {
                counter.style.color = '#ff4444';
            } else {
                counter.style.color = 'rgba(255, 255, 255, 0.6)';
            }
        } else {
            const charCount = input.value.length;
            const maxChars = parseInt(input.getAttribute('maxlength')) || 150;
            counter.textContent = `${charCount}/${maxChars} characters`;
            
            if (charCount > maxChars) {
                counter.style.color = '#ff4444';
            } else {
                counter.style.color = 'rgba(255, 255, 255, 0.6)';
            }
        }
    }
    
    startDeadlineCountdown() {
        const targetDate = new Date('2026-05-15T23:59:59').getTime();
        const daysElement = document.getElementById('days-remaining');
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            
            if (daysElement) {
                daysElement.textContent = days > 0 ? days : 0;
            }
        }
        
        updateCountdown();
        setInterval(updateCountdown, 86400000); // Update daily
    }
    
    submitPaper() {
        if (!this.validateChecklist()) return;
        
        // Show loading state
        const submitBtn = document.getElementById('submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<svg class="spinner"><!-- Loading icon --></svg> Submitting...';
        submitBtn.disabled = true;
        
        // Simulate submission (replace with actual submission logic)
        setTimeout(() => {
            this.showSuccessMessage();
            this.trackSubmission();
        }, 2000);
    }
    
    showSuccessMessage() {
        const modal = document.createElement('div');
        modal.className = 'success-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="success-icon">
                    <svg><!-- Check icon --></svg>
                </div>
                <h3>Submission Successful!</h3>
                <p>Your paper has been submitted successfully. You will receive a confirmation email shortly.</p>
                <div class="submission-id">
                    <strong>Submission ID: BME2026-${Math.random().toString(36).substr(2, 9).toUpperCase()}</strong>
                </div>
                <button class="btn-primary" onclick="this.parentElement.parentElement.remove()">
                    Close
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    showError(message) {
        const toast = document.createElement('div');
        toast.className = 'error-toast';
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
        }, 4000);
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    trackSubmission() {
        gtag('event', 'paper_submission', {
            'paper_type': this.formData.paperType,
            'research_area': document.getElementById('research-area').value,
            'page_location': window.location.href
        });
    }
}

// FAQ functionality
function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const isActive = button.classList.contains('active');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
    });
    
    // Toggle current FAQ
    if (!isActive) {
        button.classList.add('active');
        answer.classList.add('active');
    }
}

// Co-author management
function addCoAuthor() {
    const coAuthorsList = document.getElementById('co-authors-list');
    const coAuthorCount = coAuthorsList.children.length;
    
    const coAuthorDiv = document.createElement('div');
    coAuthorDiv.className = 'co-author-item';
    coAuthorDiv.innerHTML = `
        <div class="co-author-fields">
            <input type="text" placeholder="Co-author name" class="co-author-name">
            <input type="email" placeholder="Email" class="co-author-email">
            <input type="text" placeholder="Affiliation" class="co-author-affiliation">
            <button type="button" class="remove-author-btn" onclick="removeCoAuthor(this)">
                <svg><!-- X icon --></svg>
            </button>
        </div>
    `;
    
    coAuthorsList.appendChild(coAuthorDiv);
}

function removeCoAuthor(button) {
    button.closest('.co-author-item').remove();
}

// Global functions for wizard navigation
function nextStep() {
    window.submissionWizard.nextStep();
}

function previousStep() {
    window.submissionWizard.previousStep();
}

function submitPaper() {
    window.submissionWizard.submitPaper();
}

function openLiveChat() {
    // Implement live chat functionality
    console.log('Opening live chat...');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.submissionWizard = new SubmissionWizard();
});
```

---

## 📱 MOBILE OPTIMIZACIJA

### Responsive Design
- Stack wizard steps vertically na mobile
- Touch-friendly file upload interface
- Optimizovane form inputs za mobile
- Compressed FAQ layout

### Performance
- Lazy loading za wizard steps
- Optimizovane file upload progress
- Efficient form validation
- Compressed animations

---

## 🎯 CONVERSION OPTIMIZACIJA

### Submission Funnel
- Multi-step wizard reduces abandonment
- Progress tracking motivates completion
- Real-time validation prevents errors
- Success confirmation builds trust

### Analytics Tracking
```javascript
// Track submission funnel
function trackSubmissionStep(step, action) {
    gtag('event', 'submission_funnel', {
        'step': step,
        'action': action,
        'page_location': window.location.href
    });
}
```

---

## ✅ IMPLEMENTACIJA CHECKLIST

### Faza 1 - Kritično (Nedelja 1)
- [ ] Kreirati submission wizard interface
- [ ] Implementirati file upload funkcionalnost
- [ ] Dodati deadline countdown timer
- [ ] Kreirati FAQ sekciju

### Faza 2 - Važno (Nedelja 2)
- [ ] Dodati form validation
- [ ] Implementirati progress tracking
- [ ] Kreirati submission checklist
- [ ] Dodati email notifications

### Faza 3 - Poboljšanja (Nedelja 3+)
- [ ] Dodati live chat support
- [ ] Implementirati draft saving
- [ ] Dodati submission analytics
- [ ] Performance optimizacija

---

## 📊 SUCCESS METRICS

### Ciljevi:
- **Submission completion rate**: Povećati za 40%
- **Form abandonment**: Smanjiti za 50%
- **Support requests**: Smanjiti za 30%
- **User satisfaction**: Povećati za 45%
- **Time to submit**: Smanjiti za 35%

---

*Redesign predlog kreiran: Decembar 2024*
*Status: Za implementaciju*
*Prioritet: KRITIČAN*
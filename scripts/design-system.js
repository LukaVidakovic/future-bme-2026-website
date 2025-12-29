/**
 * FUTURE-BME 2026 - Design System JavaScript
 * Version: 1.0.0
 *
 * JavaScript utilities for the design system including scroll animations,
 * intersection observers, and interactive components.
 */

class DesignSystem {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupParallaxEffects();
        this.setupSmoothScrolling();
        this.setupLazyLoading();
        this.setupCountdownTimer();
        this.setupStatCounters();
        this.setupModalSystem();
        this.setupDropdowns();
        this.setupTooltips();
        this.setupFormValidation();
        this.setupThemeToggle();
        this.setupPerformanceOptimizations();
    }

    /**
     * Scroll Animations - Intersection Observer for scroll-triggered animations
     */
    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale, .scroll-animate-stagger"
        );

        if (animatedElements.length === 0) return;

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    // Unobserve after animation to improve performance
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach((element) => {
            observer.observe(element);
        });
    }

    /**
     * Parallax Effects - Smooth parallax scrolling for hero sections
     */
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll("[data-parallax]");

        if (parallaxElements.length === 0) return;

        let ticking = false;

        const updateParallax = () => {
            const scrolled = window.pageYOffset;

            parallaxElements.forEach((element) => {
                const rate = scrolled * (element.dataset.parallax || 0.5);
                element.style.transform = `translateY(${rate}px)`;
            });

            ticking = false;
        };

        const requestParallaxUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        };

        // Only enable parallax on non-mobile devices
        if (window.innerWidth > 768) {
            window.addEventListener("scroll", requestParallaxUpdate, {
                passive: true,
            });
        }
    }

    /**
     * Smooth Scrolling - Enhanced smooth scrolling for anchor links
     */
    setupSmoothScrolling() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach((link) => {
            link.addEventListener("click", (e) => {
                const targetId = link.getAttribute("href");
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    e.preventDefault();

                    const headerOffset = 80; // Account for fixed header
                    const elementPosition =
                        targetElement.getBoundingClientRect().top;
                    const offsetPosition =
                        elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }
            });
        });
    }

    /**
     * Lazy Loading - Intersection Observer for images and content
     */
    setupLazyLoading() {
        const lazyImages = document.querySelectorAll("img[data-src]");
        const lazyContent = document.querySelectorAll("[data-lazy]");

        if (lazyImages.length === 0 && lazyContent.length === 0) return;

        const lazyLoadObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target;

                    if (element.tagName === "IMG") {
                        element.src = element.dataset.src;
                        element.classList.add("loaded");
                        element.removeAttribute("data-src");
                    } else {
                        element.classList.add("loaded");
                    }

                    lazyLoadObserver.unobserve(element);
                }
            });
        });

        [...lazyImages, ...lazyContent].forEach((element) => {
            lazyLoadObserver.observe(element);
        });
    }

    /**
     * Countdown Timer - Conference countdown functionality
     */
    setupCountdownTimer() {
        const countdownElement = document.getElementById("countdown");
        if (!countdownElement) return;

        const targetDate = new Date("2026-09-29T09:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                countdownElement.innerHTML =
                    '<div class="countdown-ended">Conference is Live!</div>';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );

            const daysElement = document.getElementById("days");
            const hoursElement = document.getElementById("hours");
            const minutesElement = document.getElementById("minutes");

            if (daysElement)
                daysElement.textContent = days.toString().padStart(3, "0");
            if (hoursElement)
                hoursElement.textContent = hours.toString().padStart(2, "0");
            if (minutesElement)
                minutesElement.textContent = minutes
                    .toString()
                    .padStart(2, "0");
        };

        updateCountdown();
        setInterval(updateCountdown, 60000); // Update every minute
    }

    /**
     * Stat Counters - Animated number counting
     */
    setupStatCounters() {
        const statNumbers = document.querySelectorAll(
            ".stat-number[data-count]"
        );

        if (statNumbers.length === 0) return;

        const animateNumber = (element, target) => {
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
        };

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.dataset.count);
                    animateNumber(entry.target, target);
                    statsObserver.unobserve(entry.target);
                }
            });
        });

        statNumbers.forEach((stat) => {
            statsObserver.observe(stat);
        });
    }

    /**
     * Modal System - Enhanced modal functionality
     */
    setupModalSystem() {
        const modalTriggers = document.querySelectorAll("[data-modal-target]");
        const modalCloses = document.querySelectorAll("[data-modal-close]");
        const modalBackdrops = document.querySelectorAll(".modal-backdrop");

        modalTriggers.forEach((trigger) => {
            trigger.addEventListener("click", (e) => {
                e.preventDefault();
                const targetId = trigger.dataset.modalTarget;
                const modal = document.getElementById(targetId);
                const backdrop = modal?.previousElementSibling;

                if (modal && backdrop) {
                    backdrop.classList.add("active");
                    modal.classList.add("active");
                    document.body.style.overflow = "hidden";

                    // Focus management
                    const firstFocusable = modal.querySelector(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    if (firstFocusable) firstFocusable.focus();
                }
            });
        });

        const closeModal = (modal, backdrop) => {
            backdrop.classList.remove("active");
            modal.classList.remove("active");
            document.body.style.overflow = "";
        };

        modalCloses.forEach((closeBtn) => {
            closeBtn.addEventListener("click", () => {
                const modal = closeBtn.closest(".modal");
                const backdrop = modal?.previousElementSibling;
                if (modal && backdrop) closeModal(modal, backdrop);
            });
        });

        modalBackdrops.forEach((backdrop) => {
            backdrop.addEventListener("click", (e) => {
                if (e.target === backdrop) {
                    const modal = backdrop.nextElementSibling;
                    if (modal) closeModal(modal, backdrop);
                }
            });
        });

        // ESC key to close modals
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                const activeModal = document.querySelector(".modal.active");
                const activeBackdrop = document.querySelector(
                    ".modal-backdrop.active"
                );
                if (activeModal && activeBackdrop) {
                    closeModal(activeModal, activeBackdrop);
                }
            }
        });
    }

    /**
     * Dropdown System - Enhanced dropdown functionality
     */
    setupDropdowns() {
        const dropdowns = document.querySelectorAll(".dropdown");

        dropdowns.forEach((dropdown) => {
            const trigger = dropdown.querySelector("[data-dropdown-trigger]");
            const menu = dropdown.querySelector(".dropdown-menu");

            if (!trigger || !menu) return;

            trigger.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Close other dropdowns
                dropdowns.forEach((otherDropdown) => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove("active");
                    }
                });

                dropdown.classList.toggle("active");
            });

            // Close dropdown when clicking outside
            document.addEventListener("click", (e) => {
                if (!dropdown.contains(e.target)) {
                    dropdown.classList.remove("active");
                }
            });

            // Keyboard navigation
            menu.addEventListener("keydown", (e) => {
                const items = menu.querySelectorAll(".dropdown-item");
                const currentIndex = Array.from(items).indexOf(
                    document.activeElement
                );

                switch (e.key) {
                    case "ArrowDown":
                        e.preventDefault();
                        const nextIndex =
                            currentIndex < items.length - 1
                                ? currentIndex + 1
                                : 0;
                        items[nextIndex].focus();
                        break;
                    case "ArrowUp":
                        e.preventDefault();
                        const prevIndex =
                            currentIndex > 0
                                ? currentIndex - 1
                                : items.length - 1;
                        items[prevIndex].focus();
                        break;
                    case "Escape":
                        dropdown.classList.remove("active");
                        trigger.focus();
                        break;
                }
            });
        });
    }

    /**
     * Tooltip System - Enhanced tooltip functionality
     */
    setupTooltips() {
        const tooltips = document.querySelectorAll(".tooltip");

        tooltips.forEach((tooltip) => {
            const content = tooltip.querySelector(".tooltip-content");
            if (!content) return;

            let showTimeout, hideTimeout;

            const showTooltip = () => {
                clearTimeout(hideTimeout);
                showTimeout = setTimeout(() => {
                    content.style.opacity = "1";
                    content.style.visibility = "visible";
                }, 300);
            };

            const hideTooltip = () => {
                clearTimeout(showTimeout);
                hideTimeout = setTimeout(() => {
                    content.style.opacity = "0";
                    content.style.visibility = "hidden";
                }, 100);
            };

            tooltip.addEventListener("mouseenter", showTooltip);
            tooltip.addEventListener("mouseleave", hideTooltip);
            tooltip.addEventListener("focus", showTooltip);
            tooltip.addEventListener("blur", hideTooltip);
        });
    }

    /**
     * Form Validation - Enhanced form validation
     */
    setupFormValidation() {
        const forms = document.querySelectorAll("form[data-validate]");

        forms.forEach((form) => {
            const inputs = form.querySelectorAll("input, textarea, select");

            inputs.forEach((input) => {
                input.addEventListener("blur", () => this.validateField(input));
                input.addEventListener("input", () =>
                    this.clearFieldError(input)
                );
            });

            form.addEventListener("submit", (e) => {
                let isValid = true;

                inputs.forEach((input) => {
                    if (!this.validateField(input)) {
                        isValid = false;
                    }
                });

                if (!isValid) {
                    e.preventDefault();
                    const firstError = form.querySelector(".input-error");
                    if (firstError) firstError.focus();
                }
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const required = field.hasAttribute("required");
        let isValid = true;
        let errorMessage = "";

        // Clear previous errors
        this.clearFieldError(field);

        // Required validation
        if (required && !value) {
            isValid = false;
            errorMessage = "This field is required";
        }

        // Email validation
        if (type === "email" && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = "Please enter a valid email address";
            }
        }

        // Phone validation
        if (type === "tel" && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/\s/g, ""))) {
                isValid = false;
                errorMessage = "Please enter a valid phone number";
            }
        }

        // URL validation
        if (type === "url" && value) {
            try {
                new URL(value);
            } catch {
                isValid = false;
                errorMessage = "Please enter a valid URL";
            }
        }

        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        field.classList.add("input-error");

        let errorElement = field.parentNode.querySelector(".field-error");
        if (!errorElement) {
            errorElement = document.createElement("div");
            errorElement.className = "field-error text-sm text-error mt-1";
            field.parentNode.appendChild(errorElement);
        }

        errorElement.textContent = message;
    }

    clearFieldError(field) {
        field.classList.remove("input-error");
        const errorElement = field.parentNode.querySelector(".field-error");
        if (errorElement) {
            errorElement.remove();
        }
    }

    /**
     * Theme Toggle - Dark/Light mode toggle
     */
    setupThemeToggle() {
        const themeToggle = document.querySelector("[data-theme-toggle]");
        if (!themeToggle) return;

        const currentTheme = localStorage.getItem("theme") || "dark";
        document.documentElement.setAttribute("data-theme", currentTheme);

        themeToggle.addEventListener("click", () => {
            const currentTheme =
                document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        });
    }

    /**
     * Performance Optimizations - Various performance enhancements
     */
    setupPerformanceOptimizations() {
        // Debounced resize handler
        let resizeTimeout;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 250);
        });

        // Preload critical resources
        this.preloadCriticalResources();

        // Setup service worker if available
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("/sw.js").catch(() => {
                // Service worker registration failed, continue without it
            });
        }
    }

    handleResize() {
        // Recalculate any size-dependent elements
        const parallaxElements = document.querySelectorAll("[data-parallax]");

        // Disable parallax on mobile after resize
        if (window.innerWidth <= 768) {
            parallaxElements.forEach((element) => {
                element.style.transform = "";
            });
        }
    }

    preloadCriticalResources() {
        const criticalImages = ["/images/hero-bg.jpg", "/images/logo.png"];

        criticalImages.forEach((src) => {
            const link = document.createElement("link");
            link.rel = "preload";
            link.as = "image";
            link.href = src;
            document.head.appendChild(link);
        });
    }

    /**
     * Utility Methods
     */

    // Throttle function for performance
    throttle(func, limit) {
        let inThrottle;
        return function () {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }

    // Debounce function for performance
    debounce(func, wait, immediate) {
        let timeout;
        return function () {
            const context = this,
                args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}

// Initialize design system when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    new DesignSystem();
});

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
    module.exports = DesignSystem;
}

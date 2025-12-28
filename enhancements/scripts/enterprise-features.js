/**
 * FUTURE-BME 2026 - Enterprise Enhancement Features
 * Version: 1.0.0
 *
 * IMPORTANT: This script ADDS functionality without modifying existing Nicepage behavior.
 * It runs after jQuery and nicepage.js are loaded.
 */

(function () {
    "use strict";

    // ==========================================================================
    // CONFIGURATION
    // ==========================================================================
    const CONFIG = {
        scrollThreshold: 50, // Pixels before header gets shadow
        animationThreshold: 0.15, // Intersection observer threshold
        debounceDelay: 10, // Scroll debounce delay
        smoothScrollOffset: 80, // Offset for smooth scroll (header height)
    };

    // ==========================================================================
    // UTILITY FUNCTIONS
    // ==========================================================================

    /**
     * Debounce function to limit execution frequency
     */
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    /**
     * Check if user prefers reduced motion
     */
    function prefersReducedMotion() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }

    /**
     * Check if device is touch-based
     */
    function isTouchDevice() {
        return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }

    // ==========================================================================
    // ENTERPRISE NAVBAR TRANSFORMATION
    // ==========================================================================

    function initEnterpriseNavbar() {
        const navContainer = document.querySelector(
            ".u-nav-container .u-nav-1"
        );
        const mobileNavContainer = document.querySelector(
            ".u-nav-container-collapse .u-nav-3"
        );

        if (!navContainer) return;

        // Get current page for active state
        const currentPage =
            window.location.pathname.split("/").pop() || "index.html";
        const isHomePage =
            currentPage === "" ||
            currentPage === "index.html" ||
            currentPage === "Home.html";

        // Determine base path (for blog subfolder)
        const isInBlog = window.location.pathname.includes("/blog/");
        const basePath = isInBlog ? "../" : "";

        // Define new navigation structure
        const newNavStructure = [
            {
                label: "Home",
                href: basePath + "./",
                isActive: isHomePage,
            },
            {
                label: "Topics",
                href: basePath + "Conference-Topics.html",
                isActive: currentPage === "Conference-Topics.html",
            },
            {
                label: "Event Info",
                href: basePath + "Event-info.html",
                isActive: currentPage === "Event-info.html",
                // Can add dropdown items here later when more pages exist
                // dropdown: [
                //     { label: 'Venue', href: 'Venue.html' },
                //     { label: 'Speakers', href: 'Keynote-speakers.html' }
                // ]
            },
            {
                label: "Submit",
                href: basePath + "Submissions.html",
                isActive: currentPage === "Submissions.html",
            },
            {
                label: "Register",
                href: basePath + "Registration-and-Fees.html",
                isActive:
                    currentPage === "Registration-and-Fees.html" ||
                    currentPage === "Registration.html",
                isCTA: true,
            },
            {
                label: "More",
                isDropdown: true,
                isActive: [
                    "Committees.html",
                    "Ethics-and-Policy.html",
                    "Sponsors.html",
                    "About.html",
                    "Future-BME-2024.html",
                    "Gallery-Future-BME-2024.html",
                    "Keynote-speakers.html",
                ].includes(currentPage),
                dropdown: [
                    { label: "Committees", href: basePath + "Committees.html" },
                    {
                        label: "Ethics & Policy",
                        href: basePath + "Ethics-and-Policy.html",
                    },
                    { label: "Sponsors", href: basePath + "Sponsors.html" },
                    {
                        label: "Keynote Speakers",
                        href: basePath + "Keynote-speakers.html",
                    },
                    { label: "About", href: basePath + "About.html" },
                    { label: "─────────────", href: "#", isDivider: true },
                    {
                        label: "Future BME 2024",
                        href: basePath + "Future-BME-2024.html",
                    },
                    {
                        label: "Gallery 2024",
                        href: basePath + "Gallery-Future-BME-2024.html",
                    },
                ],
            },
        ];

        // Build desktop navigation HTML
        let desktopNavHTML = "";
        newNavStructure.forEach((item, index) => {
            const activeClass = item.isActive ? " active" : "";
            const ctaClass = item.isCTA ? " nav-cta" : "";
            const dropdownClass = item.isDropdown ? " has-dropdown" : "";

            if (item.isDropdown && item.dropdown) {
                // Dropdown menu item
                desktopNavHTML += `
                    <li role="none" class="u-nav-item${activeClass}${dropdownClass}">
                        <a tabindex="-1" role="menuitem" 
                           class="u-button-style u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" 
                           aria-haspopup="true" 
                           style="padding: 10px 16px">${item.label}</a>
                        <div class="u-nav-popup">
                            <ul role="menu" class="u-h-spacing-5 u-nav u-unstyled u-v-spacing-10" aria-label="${
                                item.label
                            } menu">
                                ${item.dropdown
                                    .map((subItem) => {
                                        if (subItem.isDivider) {
                                            return `<li role="none" class="u-nav-item nav-divider" style="pointer-events: none; opacity: 0.3; font-size: 0.8em; text-align: center;"><span style="padding: 5px 16px; display: block; color: rgba(255,255,255,0.4);">${subItem.label}</span></li>`;
                                        }
                                        // Check if this dropdown item is the current page
                                        const subItemPage = subItem.href
                                            .split("/")
                                            .pop();
                                        const isCurrentPage =
                                            subItemPage === currentPage;
                                        const activePageClass = isCurrentPage
                                            ? " active-page"
                                            : "";
                                        return `<li role="none" class="u-nav-item">
                                            <a role="menuitem" class="u-button-style u-custom-color-4 u-nav-link u-text-active-white u-text-hover-white${activePageClass}" href="${subItem.href}">${subItem.label}</a>
                                           </li>`;
                                    })
                                    .join("")}
                            </ul>
                        </div>
                    </li>`;
            } else {
                // Regular menu item
                desktopNavHTML += `
                    <li role="none" class="u-nav-item${activeClass}${ctaClass}">
                        <a role="menuitem" 
                           class="u-button-style u-nav-link u-text-active-custom-color-3 u-text-custom-color-3 u-text-hover-white" 
                           href="${item.href}" 
                           style="padding: 10px 16px">${item.label}</a>
                    </li>`;
            }
        });

        // Build mobile navigation HTML (flattened structure)
        let mobileNavHTML = "";
        newNavStructure.forEach((item) => {
            if (item.isDropdown && item.dropdown) {
                // Add dropdown parent as header
                mobileNavHTML += `
                    <li role="none" class="u-nav-item" style="border-top: 1px solid rgba(255,255,255,0.1); margin-top: 8px; padding-top: 8px;">
                        <span class="u-button-style u-nav-link" style="opacity: 0.6; font-size: 0.85em; text-transform: uppercase; letter-spacing: 1px;">${item.label}</span>
                    </li>`;
                // Add dropdown items
                item.dropdown.forEach((subItem) => {
                    if (!subItem.isDivider) {
                        mobileNavHTML += `
                            <li role="none" class="u-nav-item">
                                <a role="menuitem" class="u-button-style u-nav-link" href="${subItem.href}">${subItem.label}</a>
                            </li>`;
                    }
                });
            } else {
                const ctaStyle = item.isCTA
                    ? "background: linear-gradient(135deg, #17edd1 0%, #14d4bc 100%); color: #101c35; border-radius: 25px; margin: 16px 24px; text-align: center; font-weight: 600;"
                    : "";
                mobileNavHTML += `
                    <li role="none" class="u-nav-item${
                        item.isCTA ? " nav-cta" : ""
                    }">
                        <a role="menuitem" class="u-button-style u-nav-link" href="${
                            item.href
                        }" style="${ctaStyle}">${item.label}</a>
                    </li>`;
            }
        });

        // Apply new navigation
        navContainer.innerHTML = desktopNavHTML;

        if (mobileNavContainer) {
            mobileNavContainer.innerHTML = mobileNavHTML;
        }

        // Initialize dropdown functionality
        initDropdownHandlers();

        // Add animation class after content is loaded (triggers staggered animation)
        const header = document.querySelector(".u-header");
        if (header) {
            requestAnimationFrame(() => {
                header.classList.add("nav-animated");
            });
        }

        console.log("✓ Enterprise navbar structure applied");
    }

    // ==========================================================================
    // DROPDOWN HANDLERS
    // ==========================================================================

    function initDropdownHandlers() {
        const dropdownItems = document.querySelectorAll(
            '.enterprise-nav .u-nav-item.has-dropdown, .enterprise-nav .u-nav-item[aria-haspopup="true"]'
        );

        dropdownItems.forEach((item) => {
            const link = item.querySelector(":scope > .u-nav-link");
            const popup = item.querySelector(":scope > .u-nav-popup");

            if (!link || !popup) return;

            // Prevent default click on dropdown toggle
            link.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();

                // Toggle dropdown
                const isOpen = item.classList.contains("dropdown-open");

                // Close all other dropdowns
                document
                    .querySelectorAll(".enterprise-nav .dropdown-open")
                    .forEach((el) => {
                        el.classList.remove("dropdown-open");
                    });

                // Toggle this one
                if (!isOpen) {
                    item.classList.add("dropdown-open");
                }
            });

            // Close dropdown when clicking outside
            document.addEventListener("click", (e) => {
                if (!item.contains(e.target)) {
                    item.classList.remove("dropdown-open");
                }
            });

            // Make sure dropdown links work
            const dropdownLinks = popup.querySelectorAll(".u-nav-link");
            dropdownLinks.forEach((dropdownLink) => {
                dropdownLink.addEventListener("click", (e) => {
                    // Allow the link to work normally
                    e.stopPropagation();
                });
            });
        });

        console.log("✓ Dropdown handlers initialized");
    }

    // ==========================================================================
    // HEADER SCROLL EFFECT
    // ==========================================================================

    function initHeaderScroll() {
        const header = document.querySelector(".u-header");
        if (!header) return;

        // Add enterprise-nav class for enhanced styling
        header.classList.add("enterprise-nav");

        const handleScroll = debounce(() => {
            if (window.scrollY > CONFIG.scrollThreshold) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        }, CONFIG.debounceDelay);

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Initial check
        handleScroll();
    }

    // ==========================================================================
    // SECTION REVEAL ANIMATIONS
    // ==========================================================================

    function initSectionReveal() {
        // Skip if user prefers reduced motion
        if (prefersReducedMotion()) {
            document.querySelectorAll("section").forEach((section) => {
                section.classList.add("visible");
            });
            return;
        }

        const sections = document.querySelectorAll(
            "section:not(.u-header):not(.visible)"
        );

        if ("IntersectionObserver" in window) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("visible");
                            // Unobserve after animation to improve performance
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: CONFIG.animationThreshold,
                    rootMargin: "0px 0px -50px 0px",
                }
            );

            sections.forEach((section) => {
                observer.observe(section);
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            sections.forEach((section) => {
                section.classList.add("visible");
            });
        }
    }

    // ==========================================================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ==========================================================================

    function initSmoothScroll() {
        // Skip if user prefers reduced motion
        if (prefersReducedMotion()) return;

        document.addEventListener("click", (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (!link) return;

            const href = link.getAttribute("href");
            if (href === "#" || href === "#0") return;

            const target = document.querySelector(href);
            if (!target) return;

            e.preventDefault();

            const headerHeight =
                document.querySelector(".u-header")?.offsetHeight || 0;
            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight -
                20;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });

            // Update URL without scrolling
            if (history.pushState) {
                history.pushState(null, null, href);
            }
        });
    }

    // ==========================================================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ==========================================================================

    function initActiveNavHighlight() {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll('.u-nav-link[href^="#"]');

        if (sections.length === 0 || navLinks.length === 0) return;

        const handleScroll = debounce(() => {
            let current = "";
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${current}`) {
                    link.classList.add("active");
                }
            });
        }, CONFIG.debounceDelay);

        window.addEventListener("scroll", handleScroll, { passive: true });
    }

    // ==========================================================================
    // IMAGE LAZY LOADING ENHANCEMENT
    // ==========================================================================

    function initLazyLoading() {
        // Add native lazy loading to images that don't have it
        const images = document.querySelectorAll("img:not([loading])");
        images.forEach((img) => {
            // Don't lazy load above-the-fold images
            if (
                img.closest(".u-header") ||
                img.closest(".u-section-1") ||
                img.closest(".u-section-2")
            ) {
                img.setAttribute("loading", "eager");
            } else {
                img.setAttribute("loading", "lazy");
            }
        });
    }

    // ==========================================================================
    // BACK TO TOP BUTTON (Optional - creates button if needed)
    // ==========================================================================

    function initBackToTop() {
        // Check if button already exists
        if (document.querySelector(".back-to-top")) return;

        // Create button
        const button = document.createElement("button");
        button.className = "back-to-top";
        button.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        `;
        button.setAttribute("aria-label", "Back to top");
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #101c35;
            color: white;
            border: none;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 9998;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 16px rgba(16, 28, 53, 0.2);
        `;

        document.body.appendChild(button);

        // Show/hide based on scroll
        const handleScroll = debounce(() => {
            if (window.scrollY > 500) {
                button.style.opacity = "1";
                button.style.visibility = "visible";
            } else {
                button.style.opacity = "0";
                button.style.visibility = "hidden";
            }
        }, CONFIG.debounceDelay);

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Click handler
        button.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion() ? "auto" : "smooth",
            });
        });

        // Hover effect
        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-3px)";
            button.style.boxShadow = "0 6px 20px rgba(16, 28, 53, 0.3)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "translateY(0)";
            button.style.boxShadow = "0 4px 16px rgba(16, 28, 53, 0.2)";
        });
    }

    // ==========================================================================
    // EXTERNAL LINK HANDLING
    // ==========================================================================

    function initExternalLinks() {
        const links = document.querySelectorAll(
            'a[href^="http"]:not([target])'
        );
        links.forEach((link) => {
            // Check if it's an external link
            if (!link.href.includes(window.location.hostname)) {
                link.setAttribute("target", "_blank");
                link.setAttribute("rel", "noopener noreferrer");
            }
        });
    }

    // ==========================================================================
    // FORM ENHANCEMENT
    // ==========================================================================

    function initFormEnhancements() {
        const inputs = document.querySelectorAll(
            ".u-input, .u-field-input, input, textarea, select"
        );

        inputs.forEach((input) => {
            // Add floating label effect if label exists
            const label = input.previousElementSibling;
            if (label && label.tagName === "LABEL") {
                input.addEventListener("focus", () => {
                    label.classList.add("focused");
                });

                input.addEventListener("blur", () => {
                    if (!input.value) {
                        label.classList.remove("focused");
                    }
                });

                // Check initial state
                if (input.value) {
                    label.classList.add("focused");
                }
            }
        });
    }

    // ==========================================================================
    // KEYBOARD NAVIGATION IMPROVEMENTS
    // ==========================================================================

    function initKeyboardNav() {
        // Add keyboard support for mobile menu toggle
        const hamburger = document.querySelector(".u-hamburger-link");
        if (hamburger) {
            hamburger.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    hamburger.click();
                }
            });
        }

        // Escape key to close mobile menu
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                const closeBtn = document.querySelector(".u-menu-close");
                if (closeBtn) {
                    closeBtn.click();
                }
            }
        });
    }

    // ==========================================================================
    // PAGE LOAD ANIMATION
    // ==========================================================================

    function initPageLoadAnimation() {
        // Add loaded class to body for CSS transitions
        document.body.classList.add("page-loaded");
    }

    // ==========================================================================
    // PERFORMANCE MONITORING (Development only)
    // ==========================================================================

    function logPerformance() {
        if (
            window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1"
        ) {
            window.addEventListener("load", () => {
                setTimeout(() => {
                    const timing =
                        performance.getEntriesByType("navigation")[0];
                    if (timing) {
                        console.log("Page Performance:", {
                            "DOM Content Loaded":
                                Math.round(timing.domContentLoadedEventEnd) +
                                "ms",
                            "Load Complete":
                                Math.round(timing.loadEventEnd) + "ms",
                            "First Paint":
                                Math.round(
                                    performance.getEntriesByType("paint")[0]
                                        ?.startTime || 0
                                ) + "ms",
                        });
                    }
                }, 0);
            });
        }
    }

    // ==========================================================================
    // INITIALIZATION
    // ==========================================================================

    function init() {
        // Wait for DOM to be ready
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", initAll);
        } else {
            initAll();
        }
    }

    function initAll() {
        try {
            initEnterpriseNavbar(); // Transform navbar structure
            initHeaderScroll();
            initSectionReveal();
            initSmoothScroll();
            initActiveNavHighlight();
            initLazyLoading();
            initBackToTop();
            initExternalLinks();
            initFormEnhancements();
            initKeyboardNav();
            initPageLoadAnimation();
            logPerformance();

            console.log("✓ FUTURE-BME Enterprise Features loaded successfully");
        } catch (error) {
            console.error("FUTURE-BME Enterprise Features error:", error);
        }
    }

    // Start initialization
    init();
})();

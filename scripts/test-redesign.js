/**
 * FUTURE-BME 2026 - Redesign Test Script
 * Version: 1.0.0
 *
 * Simple test script to validate the redesigned index page
 * and check for common issues.
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 FUTURE-BME 2026 Redesign Test Script Loaded");

    // Test 1: Check if design system is loaded
    testDesignSystemLoaded();

    // Test 2: Check if countdown timer is working
    testCountdownTimer();

    // Test 3: Check if scroll animations are working
    testScrollAnimations();

    // Test 4: Check if speakers section is visible
    testSpeakersSection();

    // Test 5: Check responsive design
    testResponsiveDesign();

    // Test 6: Check accessibility features
    testAccessibility();

    console.log("✅ All tests completed. Check console for results.");
});

function testDesignSystemLoaded() {
    console.log("🧪 Testing Design System...");

    // Check if CSS custom properties are available
    const rootStyles = getComputedStyle(document.documentElement);
    const primaryColor = rootStyles.getPropertyValue("--bme-primary");
    const accentColor = rootStyles.getPropertyValue("--bme-accent");

    if (primaryColor && accentColor) {
        console.log("✅ Design system CSS variables loaded successfully");
        console.log(`   Primary color: ${primaryColor.trim()}`);
        console.log(`   Accent color: ${accentColor.trim()}`);
    } else {
        console.error("❌ Design system CSS variables not found");
    }

    // Check if design system classes are working
    const testElement = document.createElement("div");
    testElement.className = "btn btn-primary";
    document.body.appendChild(testElement);

    const buttonStyles = getComputedStyle(testElement);
    const backgroundColor = buttonStyles.backgroundColor;

    if (backgroundColor && backgroundColor !== "rgba(0, 0, 0, 0)") {
        console.log("✅ Design system component classes working");
    } else {
        console.error("❌ Design system component classes not working");
    }

    document.body.removeChild(testElement);
}

function testCountdownTimer() {
    console.log("🧪 Testing Countdown Timer...");

    const countdownElement = document.getElementById("countdown");
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");

    if (countdownElement) {
        console.log("✅ Countdown timer element found");

        if (daysElement && hoursElement && minutesElement) {
            console.log("✅ Countdown timer components found");

            // Check if countdown is updating
            const initialDays = daysElement.textContent;
            setTimeout(() => {
                const currentDays = daysElement.textContent;
                if (currentDays !== "000" && currentDays !== "") {
                    console.log("✅ Countdown timer is working");
                    console.log(`   Days until conference: ${currentDays}`);
                } else {
                    console.warn(
                        "⚠️ Countdown timer may not be updating properly"
                    );
                }
            }, 1000);
        } else {
            console.error("❌ Countdown timer components not found");
        }
    } else {
        console.error("❌ Countdown timer element not found");
    }
}

function testScrollAnimations() {
    console.log("🧪 Testing Scroll Animations...");

    const animatedElements = document.querySelectorAll(
        ".scroll-animate, .scroll-animate-stagger"
    );

    if (animatedElements.length > 0) {
        console.log(
            `✅ Found ${animatedElements.length} elements with scroll animations`
        );

        // Check if Intersection Observer is supported
        if ("IntersectionObserver" in window) {
            console.log("✅ Intersection Observer supported");
        } else {
            console.warn(
                "⚠️ Intersection Observer not supported in this browser"
            );
        }
    } else {
        console.error("❌ No scroll animation elements found");
    }
}

function testSpeakersSection() {
    console.log("🧪 Testing Speakers Section...");

    const speakersSection = document.getElementById("speakers");
    const speakerCards = document.querySelectorAll(".speaker-card");

    if (speakersSection) {
        console.log("✅ Speakers section found");

        if (speakerCards.length > 0) {
            console.log(`✅ Found ${speakerCards.length} speaker cards`);

            // Check if speaker images are loading
            const speakerImages =
                document.querySelectorAll(".speaker-image img");
            let loadedImages = 0;

            speakerImages.forEach((img) => {
                if (img.complete && img.naturalHeight !== 0) {
                    loadedImages++;
                } else {
                    img.addEventListener("load", () => {
                        loadedImages++;
                        if (loadedImages === speakerImages.length) {
                            console.log(
                                "✅ All speaker images loaded successfully"
                            );
                        }
                    });
                    img.addEventListener("error", () => {
                        console.error(
                            `❌ Failed to load speaker image: ${img.src}`
                        );
                    });
                }
            });

            if (loadedImages === speakerImages.length) {
                console.log("✅ All speaker images loaded successfully");
            }
        } else {
            console.error("❌ No speaker cards found");
        }
    } else {
        console.error("❌ Speakers section not found");
    }
}

function testResponsiveDesign() {
    console.log("🧪 Testing Responsive Design...");

    const viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    console.log(`   Viewport: ${viewport.width}x${viewport.height}`);

    // Test different breakpoints
    if (viewport.width >= 1280) {
        console.log("✅ Desktop (XL) breakpoint");
    } else if (viewport.width >= 1024) {
        console.log("✅ Desktop (LG) breakpoint");
    } else if (viewport.width >= 768) {
        console.log("✅ Tablet (MD) breakpoint");
    } else if (viewport.width >= 640) {
        console.log("✅ Mobile (SM) breakpoint");
    } else {
        console.log("✅ Mobile (XS) breakpoint");
    }

    // Check if mobile navigation is working
    const mobileMenu = document.querySelector(".u-menu-1");
    if (mobileMenu) {
        console.log("✅ Mobile navigation found");
    } else {
        console.warn("⚠️ Mobile navigation not found");
    }
}

function testAccessibility() {
    console.log("🧪 Testing Accessibility Features...");

    // Check for proper heading structure
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (headings.length > 0) {
        console.log(`✅ Found ${headings.length} headings`);

        // Check if there's an h1
        const h1 = document.querySelector("h1");
        if (h1) {
            console.log("✅ H1 heading found");
        } else {
            console.warn("⚠️ No H1 heading found");
        }
    }

    // Check for alt text on images
    const images = document.querySelectorAll("img");
    let imagesWithAlt = 0;

    images.forEach((img) => {
        if (img.alt && img.alt.trim() !== "") {
            imagesWithAlt++;
        }
    });

    if (imagesWithAlt === images.length) {
        console.log("✅ All images have alt text");
    } else {
        console.warn(
            `⚠️ ${images.length - imagesWithAlt} images missing alt text`
        );
    }

    // Check for focus indicators
    const focusableElements = document.querySelectorAll(
        "a, button, input, select, textarea, [tabindex]"
    );
    if (focusableElements.length > 0) {
        console.log(`✅ Found ${focusableElements.length} focusable elements`);
    }

    // Check for ARIA labels
    const ariaLabels = document.querySelectorAll(
        "[aria-label], [aria-labelledby]"
    );
    if (ariaLabels.length > 0) {
        console.log(`✅ Found ${ariaLabels.length} elements with ARIA labels`);
    }

    // Check for skip links or main content
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
        console.log("✅ Main content landmark found");
    } else {
        console.warn("⚠️ Main content landmark not found");
    }
}

// Performance monitoring
function monitorPerformance() {
    if ("performance" in window) {
        window.addEventListener("load", () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType("navigation")[0];
                const loadTime =
                    perfData.loadEventEnd - perfData.loadEventStart;
                const domContentLoaded =
                    perfData.domContentLoadedEventEnd -
                    perfData.domContentLoadedEventStart;

                console.log("📊 Performance Metrics:");
                console.log(`   Page load time: ${loadTime.toFixed(2)}ms`);
                console.log(
                    `   DOM content loaded: ${domContentLoaded.toFixed(2)}ms`
                );

                if (loadTime < 3000) {
                    console.log("✅ Good page load performance");
                } else {
                    console.warn("⚠️ Page load time could be improved");
                }
            }, 100);
        });
    }
}

// Initialize performance monitoring
monitorPerformance();

// Export for manual testing
window.FutureBMETest = {
    testDesignSystemLoaded,
    testCountdownTimer,
    testScrollAnimations,
    testSpeakersSection,
    testResponsiveDesign,
    testAccessibility,
};

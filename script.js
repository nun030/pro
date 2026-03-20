document.body.style.overflow = 'auto'; // Ensure scrolling is enabled

function enterPortfolio() {
    const landing = document.getElementById('landing-page');
    const main = document.querySelector('.main-layout');
    
    if (landing && main) {
        landing.style.opacity = '0';
        landing.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            landing.style.display = 'none';
            main.style.display = 'flex';
            main.style.animation = 'fadeIn 0.8s ease forwards';
        }, 500);
    }
}

// Sidebar functions for specific sections
function toggleWasteEnergyFromSidebar() {
    toggleWasteEnergy(true); // Always open
}
function toggleLessonPlanFromSidebar() {
    toggleLessonPlan(true); // Always open
}
function toggleExperimentFromSidebar() {
    toggleExperiment(true); // Always open
}

// Modified toggle functions to accept 'forceOpen'
function toggleWasteEnergy(forceOpen = false) {
    const weSection = document.getElementById('waste-energy');
    const mainContent = document.querySelector('.main-content');
    
    if (forceOpen || weSection.style.display === 'none' || weSection.style.display === '') {
        // Hide all other sections
        document.querySelectorAll('.section:not(#waste-energy)').forEach(sec => sec.style.display = 'none');
        
        // Handle Sidebar active state manually for these mixed items
        document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
        const link = document.querySelector('a[href="#waste-energy"]');
        if (link) link.parentElement.classList.add('active');

        weSection.style.display = 'block';
        weSection.style.animation = 'none';
        weSection.offsetHeight; 
        weSection.style.animation = 'fadeIn 0.5s ease forwards';
        
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        // Revert to profile if toggling off
        weSection.style.display = 'none';
        showSection('profile');
    }
}

function toggleLessonPlan(forceOpen = false) {
    const lessonSection = document.getElementById('lesson-plan');
    const mainContent = document.querySelector('.main-content');
    
    if (forceOpen || lessonSection.style.display === 'none' || lessonSection.style.display === '') {
        document.querySelectorAll('.section:not(#lesson-plan)').forEach(sec => sec.style.display = 'none');
        document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
        const link = document.querySelector('a[href="#lesson-plan"]');
        if (link) link.parentElement.classList.add('active');

        lessonSection.style.display = 'block';
        lessonSection.style.animation = 'none';
        lessonSection.offsetHeight; 
        lessonSection.style.animation = 'fadeIn 0.5s ease forwards';
        
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        lessonSection.style.display = 'none';
        showSection('profile');
    }
}

function toggleExperiment(forceOpen = false) {
    const experimentSection = document.getElementById('experiment');
    const mainContent = document.querySelector('.main-content');
    
    if (forceOpen || experimentSection.style.display === 'none' || experimentSection.style.display === '') {
        document.querySelectorAll('.section:not(#experiment)').forEach(sec => sec.style.display = 'none');
        document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
        const link = document.querySelector('a[href="#experiment"]');
        if (link) link.parentElement.classList.add('active');

        experimentSection.style.display = 'block';
        experimentSection.style.animation = 'none';
        experimentSection.offsetHeight; 
        experimentSection.style.animation = 'fadeIn 0.5s ease forwards';
        
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        experimentSection.style.display = 'none';
        showSection('profile');
    }
}

function showSection(id) {
    const section = document.getElementById(id);
    if (!section) return;
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
    
    section.style.display = 'block';
    section.style.animation = 'fadeIn 0.5s ease forwards';
    
    const link = document.querySelector(`a[href="#${id}"]`);
    if (link) link.parentElement.classList.add('active');
}

document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (!targetSection) return;

        // Remove active class from all nav items
        document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));
        
        // Add active class to parent li
        this.parentElement.classList.add('active');
        
        // Hide all static sections
        const allSections = document.querySelectorAll('.section:not(#waste-energy)');
        allSections.forEach(sec => {
            sec.style.display = 'none';
        });
        
        // Hide waste energy if it was open
        const weSection = document.getElementById('waste-energy');
        if (weSection) {
            weSection.style.display = 'none';
        }

        // Show target section with animation
        targetSection.style.display = 'block';
        targetSection.style.animation = 'none';
        targetSection.offsetHeight; /* trigger reflow */
        targetSection.style.animation = 'fadeIn 0.5s ease forwards';
        
        // Scroll main content back to top
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
});

// Modal logic for Waste-to-Energy Section
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.style.display = 'flex';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) {
        modal.style.display = 'none';
    }
}

window.addEventListener('click', function(event) {
    if (event.target.classList.contains('we-modal')) {
        event.target.style.display = "none";
    }
});

// Toggle Waste-to-Energy Section visibility
function toggleWasteEnergy() {
    const weSection = document.getElementById('waste-energy');
    const mainContent = document.querySelector('.main-content');
    
    if (weSection.style.display === 'none' || weSection.style.display === '') {
        // Hide all other sections
        document.querySelectorAll('.section:not(#waste-energy)').forEach(sec => sec.style.display = 'none');
        
        // Remove active highlight from sidebar nav
        document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));

        weSection.style.display = 'block';
        weSection.style.animation = 'none';
        weSection.offsetHeight; 
        weSection.style.animation = 'fadeIn 0.5s ease forwards';
        
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        // If clicking again to close, go back to profile
        weSection.style.display = 'none';
        const profileSection = document.getElementById('profile');
        if (profileSection) {
            profileSection.style.display = 'block';
            profileSection.style.animation = 'none';
            profileSection.offsetHeight;
            profileSection.style.animation = 'fadeIn 0.5s ease forwards';
            
            // Set profile as active
            const profileLink = document.querySelector('a[href="#profile"]');
            if (profileLink) profileLink.parentElement.classList.add('active');
        }
    }
}

// Toggle Lesson Plan Section visibility
function toggleLessonPlan() {
    const lessonSection = document.getElementById('lesson-plan');
    const mainContent = document.querySelector('.main-content');
    
    if (lessonSection.style.display === 'none' || lessonSection.style.display === '') {
        // Hide all other sections
        document.querySelectorAll('.section:not(#lesson-plan)').forEach(sec => sec.style.display = 'none');
        
        // Remove active highlight from sidebar nav
        document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));

        lessonSection.style.display = 'block';
        lessonSection.style.animation = 'none';
        lessonSection.offsetHeight; 
        lessonSection.style.animation = 'fadeIn 0.5s ease forwards';
        
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        // If clicking again to close, go back to profile
        lessonSection.style.display = 'none';
        const profileSection = document.getElementById('profile');
        if (profileSection) {
            profileSection.style.display = 'block';
            profileSection.style.animation = 'none';
            profileSection.offsetHeight;
            profileSection.style.animation = 'fadeIn 0.5s ease forwards';
            
            // Set profile as active
            const profileLink = document.querySelector('a[href="#profile"]');
            if (profileLink) profileLink.parentElement.classList.add('active');
        }
    }
}

// Toggle Experiment Section visibility
function toggleExperiment() {
    const experimentSection = document.getElementById('experiment');
    const mainContent = document.querySelector('.main-content');
    
    if (experimentSection.style.display === 'none' || experimentSection.style.display === '') {
        // Hide all other sections
        document.querySelectorAll('.section:not(#experiment)').forEach(sec => sec.style.display = 'none');
        
        // Remove active highlight from sidebar nav
        document.querySelectorAll('.nav-menu li').forEach(li => li.classList.remove('active'));

        experimentSection.style.display = 'block';
        experimentSection.style.animation = 'none';
        experimentSection.offsetHeight; 
        experimentSection.style.animation = 'fadeIn 0.5s ease forwards';
        
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    } else {
        // If clicking again to close, go back to profile
        experimentSection.style.display = 'none';
        const profileSection = document.getElementById('profile');
        if (profileSection) {
            profileSection.style.display = 'block';
            profileSection.style.animation = 'none';
            profileSection.offsetHeight;
            profileSection.style.animation = 'fadeIn 0.5s ease forwards';
            
            // Set profile as active
            const profileLink = document.querySelector('a[href="#profile"]');
            if (profileLink) profileLink.parentElement.classList.add('active');
        }
    }
}

// Slide functionality for Properties Slider
function slideProperties(direction) {
    const slider = document.getElementById('props-slider');
    const scrollAmount = 300; // Roughly the width of one card + gap
    if (slider) {
        slider.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    }
}
// Lightbox Logic with Zoom and Pan
let currentScale = 1;
let isPanning = false;
let startX = 0, startY = 0;
let originX = 0, originY = 0;
let zoomEnabled = true;

function openLightbox(imgSrc, allowZoom = true) {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const controls = document.getElementById('lightbox-controls');
    
    if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightbox.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        zoomEnabled = allowZoom;
        if (controls) {
            controls.style.display = allowZoom ? 'flex' : 'none';
        }
        
        resetZoom();
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
        lightbox.classList.remove('show');
        document.body.style.overflow = 'auto';
        resetZoom();
    }
}

function zoomImage(delta) {
    if (!zoomEnabled) return;
    const newScale = Math.min(Math.max(currentScale + delta, 0.5), 5);
    if (newScale !== currentScale) {
        currentScale = newScale;
        updateTransform();
    }
}

function resetZoom() {
    currentScale = 1;
    originX = 0;
    originY = 0;
    updateTransform();
}

function updateTransform() {
    const img = document.getElementById('lightbox-img');
    if (img) {
        img.style.transform = `translate(${originX}px, ${originY}px) scale(${currentScale})`;
    }
}

// Panning Logic
const zoomContainer = document.getElementById('zoom-container');
if (zoomContainer) {
    zoomContainer.addEventListener('mousedown', (e) => {
        if (currentScale > 1) {
            isPanning = true;
            startX = e.clientX - originX;
            startY = e.clientY - originY;
            zoomContainer.style.cursor = 'grabbing';
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (isPanning) {
            originX = e.clientX - startX;
            originY = e.clientY - startY;
            updateTransform();
        }
    });

    window.addEventListener('mouseup', () => {
        isPanning = false;
        if (zoomContainer) zoomContainer.style.cursor = currentScale > 1 ? 'grab' : 'default';
    });

    // Mouse wheel zoom
    zoomContainer.addEventListener('wheel', (e) => {
        if (!zoomEnabled) return;
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.2 : -0.2;
        zoomImage(delta);
    }, { passive: false });
}

// Close lightbox on click outside image
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('lightbox-modal') || event.target.id === 'zoom-container') {
        closeLightbox();
    }
});

// Close lightbox on Escape key
window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});
// Advantages Slider logic
function moveAdvantageSlider(direction) {
    const slider = document.getElementById('advantages-slider');
    if (slider) {
        // Scroll by half the slider width for 2-card layout
        const scrollAmount = slider.clientWidth / 2;
        slider.scrollBy({ left: scrollAmount * direction, behavior: 'smooth' });
    }
}

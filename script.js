document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Navigation Setup ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenuElement = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
        navMenuElement.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
        link.addEventListener('click', () => {
            navMenuElement.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        });
    });

    // --- 2. Portfolio Project Data Repository ---
    const projectsData = {
        "1": {
            title: "Luxury Villa Cove Ceiling",
            category: "Gypsum Works",
            plot: "P-4082, Emirates Hills",
            location: "Sector E, Emirates Hills, Dubai",
            client: "Al Maktoum Residential Assets",
            consultant: "ArchDesign International Consultants",
            contractor: "Al Dhab Technical Services LLC",
            buildingType: "Residential Luxury Villa",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
        },
        "2": {
            title: "Corporate Office Space",
            category: "Interior Fit-Out",
            plot: "BB-1204, Opus Tower",
            location: "Business Bay, Dubai",
            client: "Nexus Global Tech Solutions",
            consultant: "Dimensions Engineering Consultants",
            contractor: "Arabian Construction Joint Stock",
            buildingType: "Commercial Corporate Office",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
        },
        "3": {
            title: "Acoustic Drywall Divide",
            category: "Partition Works",
            plot: "COM-702, Dubai Design District",
            location: "Block 4, D3, Dubai",
            client: "Vanguard Creative Studios",
            consultant: "Apex Structural Engineers",
            contractor: "Al Dhab Technical Services LLC",
            buildingType: "Commercial Creative Space",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
        },
        "4": {
            title: "Minimalist Grid Ceiling",
            category: "Gypsum Works",
            plot: "R-209, Marina Gate 2",
            location: "Dubai Marina, Dubai",
            client: "Private Investor",
            consultant: "KEO International Consultants",
            contractor: "Al Dhab Technical Services LLC",
            buildingType: "Residential Penthouse Apartment",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
        },
        "5": {
            title: "Commercial Retail Concept",
            category: "Interior Fit-Out",
            plot: "GF-084, Dubai Mall Extension",
            location: "Downtown Dubai, Dubai",
            client: "Aura Premium Fashion Group",
            consultant: "Emaar Retail Development Dept",
            contractor: "Al Tayer Trends Contracting",
            buildingType: "Commercial Retail Shop",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
        },
        "6": {
            title: "Executive Glass Partitioning",
            category: "Partition Works",
            plot: "DIFC-The Gate-L5",
            location: "Financial District, Dubai",
            client: "Zenith Capital Management",
            consultant: "Al Khawajah Engineering Desk",
            contractor: "Al Dhab Technical Services LLC",
            buildingType: "Commercial Banking Suite",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
        }
    };

    // --- 3. Modal Functionality Trigger Rules ---
    const projectModal = document.getElementById('project-modal');
    const closeModalBtn = document.querySelector('.close-modal-trigger');

    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            const projectId = item.getAttribute('data-project-id');
            const data = projectsData[projectId];

            if (data) {
                document.getElementById('modal-project-img').src = data.image;
                document.getElementById('modal-project-title').innerText = data.title;
                document.getElementById('modal-project-category').innerText = data.category;
                document.getElementById('modal-plot-no').innerText = data.plot;
                document.getElementById('modal-location').innerText = data.location;
                document.getElementById('modal-client').innerText = data.client;
                document.getElementById('modal-consultant').innerText = data.consultant;
                document.getElementById('modal-contractor').innerText = data.contractor;
                document.getElementById('modal-building-type').innerText = data.buildingType;

                projectModal.classList.add('modal-visible');
                document.body.style.overflow = 'hidden'; // Stop background scrolling
            }
        });
    });

    const closeProjectModal = () => {
        projectModal.classList.remove('modal-visible');
        document.body.style.overflow = '';
    };

    closeModalBtn.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) closeProjectModal();
    });

    // --- 4. Portfolio Category Grid Filter Logic ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Avoid triggering conflicts
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                    setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => { item.style.display = 'none'; }, 250);
                }
            });
        });
    });

    // --- 5. Dynamic Client Testimonial Array ---
    let reviewsDatabase = [
        {
            name: "Tariq Al Mansoor",
            role: "Commercial Property Manager",
            stars: 5,
            text: "The gypsum ceiling execution done by Al Dhab for our Business Bay offices was flawless. Very precise finishing on the hidden cove lighting elements."
        },
        {
            name: "Elena Rostova",
            role: "Homeowner",
            stars: 5,
            text: "Quick, quiet drywall partition setups inside our residential townhouse in Dubai Hills. Excellent clean up done by the engineering crew after handover."
        },
        {
            name: "M. Farooq",
            role: "Site Architect",
            stars: 4,
            text: "Reliable coordination on the partition profiles. Managed to complete structural modifications within a very narrow operational timeline."
        }
    ];

    // Options Configuration Guard
    const REQUIRE_ADMIN_APPROVAL = true; // Set to false to push submissions instantly to the slider without a confirmation dialog

    const sliderTrack = document.getElementById('testimonial-slider-track');
    let currentSlideIndex = 0;
    let autoSlideTimer;

    // Render Review Cards into Slider Viewport
    const buildSliderCardsUI = () => {
        sliderTrack.innerHTML = '';
        reviewsDatabase.forEach(item => {
            let starMarkup = '';
            for (let i = 1; i <= 5; i++) {
                starMarkup += i <= item.stars ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
            }

            const slide = document.createElement('div');
            slide.classList.add('testimonial-slide-card');
            slide.innerHTML = `
                <div class="testimonial-card-inner">
                    <div class="stars-container">${starMarkup}</div>
                    <p>"${item.text}"</p>
                    <div class="client-bio">
                        <h4>${item.name}</h4>
                        <span>${item.role}</span>
                    </div>
                </div>
            `;
            sliderTrack.appendChild(slide);
        });
        resetSliderPosition();
    };

    const updateSliderTransform = () => {
        sliderTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    };

    const resetSliderPosition = () => {
        currentSlideIndex = 0;
        updateSliderTransform();
    };

    const handleNextSlide = () => {
        currentSlideIndex = (currentSlideIndex + 1) % reviewsDatabase.length;
        updateSliderTransform();
    };

    const handlePrevSlide = () => {
        currentSlideIndex = (currentSlideIndex - 1 + reviewsDatabase.length) % reviewsDatabase.length;
        updateSliderTransform();
    };

    const startAutoSlideLoop = () => {
        clearInterval(autoSlideTimer);
        autoSlideTimer = setInterval(handleNextSlide, 5000); // Transitions automatically every 5 seconds
    };

    // Click Controllers for Slider Navigation Arrows
    document.getElementById('slide-next').addEventListener('click', () => { handleNextSlide(); startAutoSlideLoop(); });
    document.getElementById('slide-prev').addEventListener('click', () => { handlePrevSlide(); startAutoSlideLoop(); });

    // Interactive Star Picker Interaction Panel
    const starNodes = document.querySelectorAll('#star-input-row .rating-star-node');
    const scoreHiddenInput = document.getElementById('rev-rating-score');

    starNodes.forEach(star => {
        star.addEventListener('click', () => {
            const targetScoreValue = parseInt(star.getAttribute('data-value'));
            scoreHiddenInput.value = targetScoreValue;

            starNodes.forEach(node => {
                const nodeValue = parseInt(node.getAttribute('data-value'));
                if (nodeValue <= targetScoreValue) {
                    node.classList.remove('far');
                    node.classList.add('fas');
                } else {
                    node.classList.remove('fas');
                    node.classList.add('far');
                }
            });
        });
    });

    // Form submission processing logic
    const reviewForm = document.getElementById('review-submission-form');
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submittedObject = {
            name: document.getElementById('rev-name').value,
            role: document.getElementById('rev-designation').value,
            stars: parseInt(scoreHiddenInput.value),
            text: document.getElementById('rev-comments').value
        };

        if (REQUIRE_ADMIN_APPROVAL) {
            // Simulated local admin check dialog block
            const simulateApprovalDecision = confirm(`[ADMIN PANEL OPTIONAL FILTER]\nA new review has been received from: "${submittedObject.name}".\n\nClick "OK" to simulate admin approval and publish it instantly.\nClick "Cancel" to reject/hold this response.`);
            
            if (simulateApprovalDecision) {
                reviewsDatabase.push(submittedObject);
                buildSliderCardsUI();
                startAutoSlideLoop();
                alert("Review has been approved and injected into the auto-sliding layout view.");
            } else {
                alert("Submission logged safely. It will remain in the moderation queue until manual database release.");
            }
        } else {
            // Automated insertion without intervention rules
            reviewsDatabase.push(submittedObject);
            buildSliderCardsUI();
            startAutoSlideLoop();
            alert("Thank you! Your verified client review was appended live directly to our testimonial slider loop.");
        }

        // Clean user interface inputs
        reviewForm.reset();
        starNodes.forEach(n => { n.classList.remove('far'); n.classList.add('fas'); });
        scoreHiddenInput.value = 5;
    });

    // Initialize Testimonial Interface Elements
    buildSliderCardsUI();
    startAutoSlideLoop();

    // --- 6. Active Section Navigation Link Highlight on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= (sectionTop - 160)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSectionId)) {
                link.classList.add('active');
            }
        });
    });

    // --- 7. Scroll Reveal Element Transitions ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 120) {
                element.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    // --- 8. General Booking Inquiry Form Alerts ---
    const bookingForm = document.getElementById('booking-form');

bookingForm.addEventListener('submit', () => {

    const clientName = document.getElementById('name').value;

    const selectedService =
        document.getElementById('service')
        .options[document.getElementById('service').selectedIndex].text;

    alert(`Thank you, ${clientName}! Your inquiry for "${selectedService}" has been safely registered. The technical evaluation desk of AL DHAB will contact you within 24 working hours.`);

});
});
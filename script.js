document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Mobile Navigation Setup ---
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenuElement = document.querySelector('.nav-menu');

    mobileMenuBtn.addEventListener('click', () => {
        navMenuElement.classList.toggle('active');
        document.body.classList.toggle('nav-open');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
        link.addEventListener('click', () => {
            navMenuElement.classList.remove('active');
            document.body.classList.remove('nav-open');
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
            plot: "6731270",
            location: "Arjan",
            client: "ASHIYANA CONTRACTING LLC",
            consultant: "EMSQUARE ENG CONSULTANT",
            contractor: "EMSQUARE ENG CONSULTANT",
            buildingType: "PROPOSED B+G+9+ROOF RESIDENTIAL BUILDING",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w&q=80"
        },
        "2": {
            title: "Corporate Office Space",
            category: "Interior Fit-Out",
            plot: "6731270",
            location: "Arjan",
            client: "ASHIYANA CONTRACTING LLC",
            consultant: "EMSQUARE ENG CONSULTANT",
            contractor: "EMSQUARE ENG CONSULTANT",
            buildingType: "PROPOSED B+G+9+ROOF RESIDENTIAL BUILDING",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
        },
        "3": {
            title: "Acoustic Drywall Divide",
            category: "Partition Works",
            plot: "6731270",
            location: "Arjan",
            client: "ASHIYANA CONTRACTING LLC",
            consultant: "EMSQUARE ENG CONSULTANT",
            contractor: "EMSQUARE ENG CONSULTANT",
            buildingType: "PROPOSED B+G+9+ROOF RESIDENTIAL BUILDING",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
        },
        "4": {
            title: "Minimalist Grid Ceiling",
            category: "Gypsum Works",
            plot: "6731270",
            location: "Arjan",
            client: "ASHIYANA CONTRACTING LLC",
            consultant: "EMSQUARE ENG CONSULTANT",
            contractor: "EMSQUARE ENG CONSULTANT",
            buildingType: "PROPOSED B+G+9+ROOF RESIDENTIAL BUILDING",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
        },
        "5": {
            title: "Commercial Retail Concept",
            category: "Interior Fit-Out",
            plot: "6731270",
            location: "Arjan",
            client: "ASHIYANA CONTRACTING LLC",
            consultant: "EMSQUARE ENG CONSULTANT",
            contractor: "EMSQUARE ENG CONSULTANT",
            buildingType: "PROPOSED B+G+9+ROOF RESIDENTIAL BUILDING",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
        },
        "6": {
            title: "Executive Glass Partitioning",
            category: "Partition Works",
            plot: "6731270",
            location: "Arjan",
            client: "ASHIYANA CONTRACTING LLC",
            consultant: "EMSQUARE ENG CONSULTANT",
            contractor: "EMSQUARE ENG CONSULTANT",
            buildingType: "PROPOSED B+G+9+ROOF RESIDENTIAL BUILDING",
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
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    const closeProjectModal = () => {
        projectModal.classList.remove('modal-visible');
        document.body.style.overflow = '';
    };

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeProjectModal);
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) closeProjectModal();
        });
    }

    // --- 4. Portfolio Category Grid Filter Logic ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); 
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

    // --- 5. Active Section Navigation Link Highlight on Scroll ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= (sectionTop - 160)) {
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

    // --- 6. Scroll Reveal Element Transitions ---
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

    // --- 7. General Booking Inquiry Form Alerts ---
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', () => {
            const clientName = document.getElementById('name').value;
            const selectedService = document.getElementById('service').options[document.getElementById('service').selectedIndex].text;
            alert(`Thank you, ${clientName}! Your inquiry for "${selectedService}" has been safely registered. The technical evaluation desk of AL DHAB will contact you within 24 working hours.`);
        });
    }
});
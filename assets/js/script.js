
        // Cursor Glow
        const cursorGlow = document.getElementById('cursorGlow');
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });

        // Navbar Scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile Menu
        function toggleMobile() {
            document.getElementById('mobileMenu').classList.toggle('active');
            document.getElementById('hamburger').classList.toggle('active');
        }

        function closeMobile() {
            document.getElementById('mobileMenu').classList.remove('active');
            document.getElementById('hamburger').classList.remove('active');
        }

        // Scroll Reveal
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));

        // Counter Animation
        function animateCounter(elementId, target, suffix = '') {
            const el = document.getElementById(elementId);
            let current = 0;
            const increment = target / 60;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                el.textContent = Math.floor(current) + suffix;
            }, 25);
        }

        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter('counter1', 25, '+');
                    animateCounter('counter2', 15, '+');
                    animateCounter('counter3', 100, '%');
                    heroObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        heroObserver.observe(document.querySelector('.hero-stats'));

        // Form Submit
        function handleSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('.btn-submit');
            btn.textContent = '✓ Sent Successfully!';
            btn.style.background = 'linear-gradient(135deg, #00D4AA, #00B894)';
            setTimeout(() => {
                btn.textContent = 'Send Enquiry →';
                btn.style.background = '';
                e.target.reset();
            }, 3000);
        }

        // Smooth scroll for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

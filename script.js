function showModal(type) {
    const modal = document.getElementById('skills-modal');
    const modalTitle = document.getElementById('skills-modal-title');
    const modalList = document.getElementById('skills-modal-list');
    const modalText = document.getElementById('skills-modal-text');

    modalTitle.textContent = '';
    modalList.innerHTML = '';
    modalText.textContent = '';

    let skills = [];
    let textContent = '';

    if (type === 'soft') {
        modalTitle.textContent = 'Soft Skills';
        skills = [
            'Empathy and emotional intelligence',
            'Adaptability and resilience under pressure',
            'Detail-oriented with a proactive approach',
            'Conflict resolution and diplomacy'
        ];
    } else if (type === 'tech') {
        modalTitle.textContent = 'Technical & Organizational Skills';
        textContent = 'Tools: Twilio, Slack, Google Sheets, Excel, Zimbra, LinkedIn Recruiter, Outlook, Zoom, Microsoft Teams, Google Calendar, Canva, Skype, WhatsApp, Google Mail, Hurey';
        skills = [
            'Strong written and verbal communication',
            'Time management and multitasking',
            'Analytical thinking and decision-making'
        ];
    } else if (type === 'leadership') {
        modalTitle.textContent = 'Leadership & Operations Management';
        skills = [
            'Branch operations oversight (sales, finance, compliance)',
            'Team leadership, coaching, and performance management',
            'Strategic goal-setting and results tracking',
            'Financial statement analysis and performance reporting',
            'Customer-focused service culture'
        ];
    } else if (type === 'customer') {
        modalTitle.textContent = 'Customer Service & Guest Experience';
        skills = [
            'Guest support via web chat and SMS',
            'Issue resolution and real-time problem-solving',
            'Knowledge of vacation rental platforms (VRBO, Airbnb, Booking.com)',
            'Handling guest reviews and reputation management',
            'Providing detailed info on property availability and amenities',
            'Building a strong brand through exceptional guest experiences'
        ];
    } else if (type === 'recruitment') {
        modalTitle.textContent = 'Recruitment & Talent Acquisition';
        skills = [
            'End-to-end recruitment (sourcing, screening, interviewing)',
            'Onboarding new hires and ensuring smooth transitions',
            'Collaboration with hiring managers to understand role requirements',
            'Culture fit assessment and employer branding',
            'High-volume hiring and talent pipeline management'
        ];
    }

    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        modalList.appendChild(li);
    });

    modalText.textContent = textContent; // Set the text content

    modal.style.display = 'block';
}

//  Close modal functionality (same as before)
document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
    });
});

window.addEventListener('click', (event) => {
    document.querySelectorAll('.modal').forEach(m => {
        if (event.target === m) {
            m.style.display = 'none';
        }
    });
});

// Smooth scrolling for navigation links (same as before)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = this.getAttribute('href').substring(1); // Get the target ID (without #)
        const targetElement = document.getElementById(targetId);
        const headerHeight = getElementHeight(document.querySelector('header')); // Get header height

        if (targetElement) {
            const targetPosition = targetElement.offsetTop - headerHeight; // Calculate target position minus header height

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Function to get the height of an element (same as before)
function getElementHeight(el) {
    return el.offsetHeight;
}
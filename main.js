import { templates } from './templates.js';
const mainContainer = document.getElementById('main-container');
function renderContent(hash) {
    const route = hash.replace('#', '') || 'home';
    const templateFunction = templates[route];
    if (templateFunction) {
        mainContainer.innerHTML = templateFunction();
        if (route === 'cadastro') {
            setupVolunteerFormValidation();
        }
        updateNavLinks(route);

    } else {
        mainContainer.innerHTML = '<h2>Página não encontrada</h2>';
    }
}
function updateNavLinks(activeRoute) {
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-nav') === activeRoute) {
            link.classList.add('active');
        }
    });
}
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        const route = link.getAttribute('data-nav');
        window.location.hash = route;
    });
});
window.addEventListener('hashchange', () => {
    renderContent(window.location.hash);
});
renderContent(window.location.hash);
function setupVolunteerFormValidation() {
    const form = document.getElementById('volunteerForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            let isValid = true;
            nameError.textContent = '';
            emailError.textContent = '';

            if (nameInput.value.trim().length < 3) {
                nameError.textContent = 'O nome deve ter pelo menos 3 caracteres.';
                isValid = false;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Por favor, insira um email válido.';
                isValid = false;
            }
            if (isValid) {
                alert('Inscrição enviada com sucesso! Entraremos em contato.');
                form.reset();
            } else {
                alert('Por favor, verifique os campos destacados e preencha corretamente.');
            }
        });
    }
}

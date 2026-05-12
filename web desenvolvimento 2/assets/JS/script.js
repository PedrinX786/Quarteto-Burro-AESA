document.addEventListener('DOMContentLoaded', () => {
    // Inicializa ícones
    lucide.createIcons();

    const buttons = document.querySelectorAll('.nav-button, .nav-item-central');
    const screens = document.querySelectorAll('section');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');

            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Troca de tela
            screens.forEach(screen => {
                screen.classList.add('hidden-screen');
                if(screen.id === targetId) {
                    screen.classList.remove('hidden-screen');
                }
            });
        });
    });
});
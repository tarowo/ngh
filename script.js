document.addEventListener('DOMContentLoaded', () => {
    const link = document.getElementById('transition-link');
    if (link) {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetUrl = link.href;
            document.body.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        });
    }
});

window.addEventListener('load', () => {
    document.body.classList.remove('fade-out');
    document.body.classList.add('fade-in');
});

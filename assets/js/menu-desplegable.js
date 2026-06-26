const toggle = document.getElementById('toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => menu.classList.toggle('open'));

document.querySelectorAll('.has-dropdown').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const li = link.closest('li');
        const wasOpen = li.classList.contains('open');
        document.querySelectorAll('.nav-menu > li').forEach(i => i.classList.remove('open'));
        if (!wasOpen) li.classList.add('open');
    });
});

document.addEventListener('click', e => {
    if (!e.target.closest('#main-nav')) {
        document.querySelectorAll('.nav-menu > li').forEach(i => i.classList.remove('open'));
        menu.classList.remove('open');
    }
});
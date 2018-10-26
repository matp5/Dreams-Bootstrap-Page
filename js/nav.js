let nav = document.querySelector('nav');
let link = document.querySelectorAll('nav a');

window.addEventListener('scroll', function (event) {
    event.preventDefault();

    if (window.scrollY <= 650) {
        nav.style.backgroundColor = 'transparent';
        for (let i = 0; i < link.length; i++) {
            link[i].style.color = '	#FFFFFF';
        };
    } else {
        nav.style.backgroundColor = '#ffff';
        for (let i = 0; i < link.length; i++) {
            link[i].style.color = '	#696969';
        };
    }
});
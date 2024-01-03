document.addEventListener('DOMContentLoaded', function () {
    animateHeader();
    animateServices();
    animateContact();
});

function animateHeader() {
    const header = document.querySelector('header');
    header.style.animation = 'fadeInDown 1s';
}



function animateContact() {
    const contactSection = document.getElementById('contact');
    const contactInfo = contactSection.querySelector('.contact-info');

    contactInfo.style.animation = 'fadeInUp 1s';
}



const enterScreen = document.getElementById("enter-screen");

enterScreen.addEventListener("click", () => {
    enterScreen.classList.add("entered");
    document.body.classList.add("entered");
    setTimeout(() => { enterScreen.style.display = 'none'; }, 600);
});

var ratio;
var left;
resize();

$(window).resize(function () {resize();});

function resize()
{
    ratio = window.innerHeight / $('body').innerHeight();
    if (window.innerWidth / $('body').innerWidth() < ratio) {
        ratio = window.innerWidth / $('body').innerWidth();
    }
    ratio -= .04;
    $('body').css('-ms-zoom', ratio);
    $('body').css('-moz-transform', 'scale(' + ratio + ')');
    $('body').css('-o-transform', 'scale(' + ratio + ')');
    $('body').css('-webkit-transform', 'scale(' + ratio + ')');
    $('body').css('transform', 'scale(' + ratio + ')');
    $('body').css('transform-origin', 'top center');
    $('body').css('-webkit-transform-origin', 'top center');
    left = ($(window).innerWidth() - $('body').outerWidth() * ratio) / 2;
    $('body').css('left', left);
}

const badges = document.querySelectorAll('.badge-wrapper, .location-badge');
const profileCard = document.querySelector('.profile-card');

badges.forEach(badge => {
    badge.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const tooltip = this.querySelector('.tooltip-text');
        const img = this.querySelector('img');
        const isOpen = tooltip.style.visibility === 'visible';
        
        closeAllTooltips();

        if (!isOpen) {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
            if (img) img.style.transform = 'scale(1.15)';
        }
    });
});

if (profileCard) {
    profileCard.addEventListener('click', function(e) {
        if (!e.target.closest('.badge-wrapper') && !e.target.closest('.location-badge')) {
            closeAllTooltips();
        }
    });
}

document.addEventListener('click', function(e) {
    if (!e.target.closest('.profile-card')) {
        closeAllTooltips();
    }
});

function closeAllTooltips() {
    document.querySelectorAll('.tooltip-text').forEach(t => {
        t.style.visibility = 'hidden';
        t.style.opacity = '0';
    });
    document.querySelectorAll('.badge-wrapper img, .location-icon').forEach(i => {
        i.style.transform = 'none';
    });
}

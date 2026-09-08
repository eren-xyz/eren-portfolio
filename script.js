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
    left = ($(window).innerWidth() - $('body').outerWidth() * ratio) / 2;
    $('body').css('left', left);
}

const badges = document.querySelectorAll('.badge-wrapper, .location-badge');

badges.forEach(badge => {
    badge.addEventListener('click', function(e) {
        e.stopPropagation();
        const tooltip = this.querySelector('.tooltip-text');
        const img = this.querySelector('img');
        const isOpen = tooltip.style.visibility === 'visible';
        
        document.querySelectorAll('.tooltip-text').forEach(t => {
            t.style.visibility = 'hidden';
            t.style.opacity = '0';
        });
        document.querySelectorAll('.badge-wrapper img, .location-icon').forEach(i => {
            i.style.transform = 'none';
        });

        if (!isOpen) {
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
            img.style.transform = 'scale(1.15)';
        }
    });
});

document.addEventListener('click', function() {
    document.querySelectorAll('.tooltip-text').forEach(t => {
        t.style.visibility = 'hidden';
        t.style.opacity = '0';
    });
    document.querySelectorAll('.badge-wrapper img, .location-icon').forEach(i => {
        i.style.transform = 'none';
    });
});

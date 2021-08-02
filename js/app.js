function clock() {
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');
    let day = document.getElementById('day');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = 'AM'

    if(h >= 12) {
        am = 'PM'
    }

    if(h > 12) {
        h = h - 12;
    }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    day.innerHTML = am;

}

var interval = setInterval(clock, 1000)

// ========== DARK THEME ==========
let icon = document.getElementById('moon__icon');
let sun = document.createElement('i');
let moon = document.createElement('i');

sun.classList.add('fas', 'fa-sun')
moon.classList.add('fas', 'fa-moon')
icon.appendChild(moon)


icon.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
        icon.appendChild(sun)
        icon.removeChild(moon)
    } else {
        icon.appendChild(moon)
        icon.removeChild(sun)
    }
})

setTimeout(function() {
    icon.style.transform = 'translateX(0)'
}, 5000)

let visitIcon = document.getElementById('visit-icon');

setTimeout(function() {
    visitIcon.style.transform = 'translateX(0)'
}, 8000)
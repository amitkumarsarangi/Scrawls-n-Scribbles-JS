var slider = document.getElementById('slider');

var images = [
    '20161109_115320.jpg',
    '20161109_115329.jpg',
    '20161109_115338.jpg',
    '20161109_115348.jpg',
    '20161109_115353.jpg',
    '20161109_115404.jpg'
];

var num = -1;

function next() {
    num++;
    
    if(num == images.length) {
        num = 0;
    }

    slider.src = images[num];
}

function prev() {
    num--;

    if(num == -2) {
        num = images.length-2;
    }

    if(num == -1) {
        num = images.length-1;
    }

    slider.src = images[num];
}
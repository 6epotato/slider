const image = [
    'images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpg',
    'images/pic6.jpg',
    'images/pic7.jpg',
    'images/pic8.jpg',
    'images/pic9.jpg',
    'images/pic10.jpg',
];
let imgIndex = 0;
const imageElimnet = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >= image.length) {
        imgIndex = 0;
    }
    const imageUrl = image[imgIndex];
    imageElimnet.setAttribute('src', imageUrl)
    imgIndex++;

}
    , 1000)
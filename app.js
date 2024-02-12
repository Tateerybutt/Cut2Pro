// app.js

let canvas;
let ctx;
let image;
let history = [];

document.getElementById('imageInput').addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = () => {
        canvas = document.getElementById('outputCanvas');
        canvas.style.display = 'block';
        ctx = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
        history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    };
}

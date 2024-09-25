
let photos, carousel;
photos = ['img/1_beach.jpg', 'img/2_beach.jpg', 'img/3_beach.jpg'];
carousel = ['img/3_beach.jpg'];

// Assuming you have an <img> element with id="pic"
let element_pic = document.getElementById('pic');

// Set the src attribute of the img element to display the first photo from the array
element_pic.src = photos[0];
document.getElementById('next').addEventListener('click', (event) => {
    let element_pic2 = document.getElementById('pic');
    photos.push(photos.shift());
    element_pic2.setAttribute("src", photos.slice(-1)[0]);
  
  });
  
  document.getElementById('back').addEventListener('click', (event) => {
    let element_pic3 = document.getElementById('pic');
    photos.unshift(photos.pop());
    element_pic3.setAttribute("src", photos.slice(-1)[0]);
  
  });


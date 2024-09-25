

<script>
    var photos = ['img/1_beach.jpg', 'img/2_beach.jpg', 'img/3_beach.jpg'];
    var currentIndex = 0; // Keep track of the current image index

    // Select the image element
    let element_pic = document.getElementById('pic');

    // Update the image source
    function updateImage() {
        element_pic.setAttribute("src", photos[currentIndex]);
    }

    // Add event listener for the "next" button
    document.getElementById('next').addEventListener('click', (event) => {
        // Move to the next image, loop back to the start if necessary
        currentIndex = (currentIndex + 1) % photos.length;
        updateImage();
    });

    // Add event listener for the "prev" button (assuming you have one)
    document.getElementById('prev').addEventListener('click', (event) => {
        // Move to the previous image, loop back to the end if necessary
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        updateImage();
    });

    // Initially display the first image
    updateImage();
</scrip>

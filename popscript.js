var staticImage = document.getElementById('staticImage');
var hoverImage = document.getElementById('hoverImage');
var clickCount = 0;

staticImage.addEventListener('click', function() {
  clickCount++;

  if (clickCount === 1) {
    // Add animation class to the staticImage element
    staticImage.classList.add('rotate-animation');

    // Wait for the animation to complete
    setTimeout(function() {
      window.location.href = "gallery.html";
    }, 1000); // Adjust the timeout duration according to your animation time
  }
});

staticImage.addEventListener('mouseover', function() {
  hoverImage.style.display = 'block';
});

staticImage.addEventListener('mouseout', function() {
  hoverImage.style.display = 'none';
});

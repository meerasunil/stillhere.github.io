document.addEventListener("DOMContentLoaded", function() {
  const photos = document.querySelectorAll(".photo");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalCaption = document.getElementById("modal-caption");
  const modalText = document.getElementById("modal-text");
  const closeButton = document.getElementsByClassName("close")[0];
  let currentPhotoIndex = 0; 


  function openModal(index) {
    const photo = photos[index];
    const imgSrc = photo.querySelector("img").src;
    const caption = photo.querySelector(".caption").innerHTML;
    const text = photo.dataset.text;

    modalImage.src = imgSrc;
    modalCaption.innerHTML = caption;
    modalText.innerHTML = formatModalText(text);
    modal.style.display = "block";

    currentPhotoIndex = index; 
  }

  
  function closeModal() {
    modal.style.display = "none";
  }

  
  function handleKeyPress(event) {
    if (event.key === "ArrowLeft") {
      
      if (currentPhotoIndex > 0) {
        currentPhotoIndex--;
        openModal(currentPhotoIndex);
      }
    } else if (event.key === "ArrowRight") {
      
      if (currentPhotoIndex < photos.length - 1) {
        currentPhotoIndex++;
        openModal(currentPhotoIndex);
      }
    } else if (event.key === "Escape") {
      
      closeModal();
    }
  }

  
  document.addEventListener("keydown", handleKeyPress);

  photos.forEach(function(photo, index) {
    photo.addEventListener("click", function() {
      openModal(index);
    });
  });

  closeButton.addEventListener("click", function() {
    closeModal();
  });

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  
  function formatModalText(text) {
    const lines = text.split("\n");
    let formattedText = "";

    for (let i = 0; i < lines.length; i++) {
      if (i % 2 === 0) {
        formattedText += `<p class="alternate-line">${lines[i]}</p>`;
      } else {
        formattedText += `<p>${lines[i]}</p>`;
      }
    }

    return formattedText;
  }
});

window.onload = function() {
  var logoBox = document.querySelector(".logo-box");
  logoBox.addEventListener("click", function() {
    window.location.href = "gallery.html";
  });
};
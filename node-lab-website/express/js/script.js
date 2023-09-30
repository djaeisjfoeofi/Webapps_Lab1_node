document.addEventListener('DOMContentLoaded', function () {
  function changeBackgroundColor(isMouseOver) {
    const bandSection = document.getElementById('band');
    if (isMouseOver) {
      bandSection.style.backgroundColor = '#FF5733';
    } else {
      bandSection.style.backgroundColor = '';
    }
  }

  function fadeInTourSection() {
    const tourSection = document.getElementById('tour');
    let opacity = 0;
    const interval = setInterval(function () {
      if (opacity >= 1) {
        clearInterval(interval);
      } else {
        opacity += 0.01;
        tourSection.style.opacity = opacity;
      }
    }, 10);
  }

  window.addEventListener('load', function () {
    const bandSection = document.getElementById('band');
    bandSection.addEventListener('mouseover', function () {
      changeBackgroundColor(true);
    });
    bandSection.addEventListener('mouseout', function () {
      changeBackgroundColor(false);
    });

    fadeInTourSection();
  });
});

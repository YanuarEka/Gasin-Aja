// Scroll smooth go to up
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('topBtn').style.display = 'block';
  } else {
    document.getElementById('topBtn').style.display = 'none';
  }
}
function gotoTop() {
  document.body.scrollTop = 0;

  document.documentElement.scrollTop = 0;
}

// jquery smooth
$(document).ready(function () {
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// My Dark Mode
function darkMode() {
  let myDarkMode = document.body;
  myDarkMode.classList.toggle('dark-mode');
}

//slide galery
let i = 0;
let images = [];
let time = 2500;
images[0] = 'assets/img/rome.jpg';
images[1] = 'assets/img/grand-canyon.jpg';
images[2] = 'assets/img/card-1.jpg';
images[3] = 'assets/img/nusa penida.jpg';
images[4] = 'assets/img/nusa penida bali.jpg';
function changeImg() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout('changeImg()', time);
}
window.onload = changeImg;

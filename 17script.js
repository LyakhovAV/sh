const buttons = document.querySelectorAll('.Buttons button');
const modal = document.getElementById("modal");
const con = document.getElementById("con")


buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.style.transform = 'scale(1.2)';
      button.style.backgroundColor = 'yellow';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
        button.style.backgroundColor = ''
      });
    });


    function openModal () {
      modal.style.display = "flex";
    }
    function closeModal() {
      modal.style.display = "none"
    }

    con.onclick = openModal;
    window.onclick = function (e) {
      if (e.target === modal) {
        closeModal();
      }
    }
 /* document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('.connection').addEventListener('click', function() {
          alert('1. Гринн\n2. ТРЦ Централ парк');
      });
  }); */ 
  const card = document.querySelector('.card');
  const images = document.querySelectorAll('.card img');
  let currentIndex = 0;
  
  document.getElementById('left').addEventListener('click', function() {
    images[currentIndex].style.transform = 'rotateY(-180deg)';
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].style.transform = 'rotateY(0)';
  });
  
  document.getElementById('rigth').addEventListener('click', function() {
    images[currentIndex].style.transform = 'rotateY(180deg)';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.transform = 'rotateY(0)';
  });
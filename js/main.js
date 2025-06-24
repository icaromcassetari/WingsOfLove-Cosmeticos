
// Adiciona efeito de scroll na barra de navegação
window.addEventListener('scroll', () => {
  const body = document.body;
  if (window.scrollY > 0) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
});

// Adiciona zoom nas imagens ao passar o mouse
const productImages = document.querySelectorAll('.produto img');

productImages.forEach(image => {
  image.addEventListener('mouseenter', () => {
    image.style.transform = 'scale(1.1)';
  });

  image.addEventListener('mouseleave', () => {
    image.style.transform = 'scale(1)';
  });
});
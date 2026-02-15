export function initParallax() {
  const bg = document.getElementById('parallax-bg');
  if (!bg) return;

  window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    // Ajuste o 0.1 para mais ou menos velocidade de movimento
    const moveValue = scrollValue * 0.08; 
    
    // Movemos a imagem levemente para cima enquanto o usuário desce
    bg.style.transform = `translateY(${moveValue}px)`;
  });
}
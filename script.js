function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

const palavras = ['Front-End', 'Python', 'Trabalho em equipe', 'PHP'];
const elemento = document.getElementById('texto-dinamico');

let palavraIndex = 0;
let letraIndex = 0;
let apagando = false;

function animarTexto() {
  const palavraAtual = palavras[palavraIndex];

  if (!apagando) {
    elemento.textContent = palavraAtual.slice(0, letraIndex + 1);
    letraIndex++;

    if (letraIndex === palavraAtual.length) {
      setTimeout(() => apagando = true, 1500);
    }
  } else {
    elemento.textContent = palavraAtual.slice(0, letraIndex - 1);
    letraIndex--;

    if (letraIndex === 0) {
      apagando = false;
      palavraIndex = (palavraIndex + 1) % palavras.length;
    }
  }

  setTimeout(animarTexto, apagando ? 50 : 80);
}

animarTexto();

const abas = document.querySelectorAll('.tipos');
const conteudos = document.querySelectorAll('.conteudo');

abas.forEach(aba => {
  aba.addEventListener('click', () => {
    abas.forEach(a => a.classList.remove('ativo'));
    
    conteudos.forEach(c => c.classList.remove('ativo'));

    aba.classList.add('ativo');

    const target = aba.getAttribute('data-target');
    
    const idAlvo = `lista-${target}`;
    
    const conteudoAlvo = document.getElementById(idAlvo);
    
    if (conteudoAlvo) {
      conteudoAlvo.classList.add('ativo');
    }
  });
});

function abrirLightbox(imagem, titulo) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  img.src = imagem;
  img.alt = titulo;
  caption.textContent = titulo;

  img.offsetHeight;

  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function fecharLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.getElementById('lightbox').addEventListener('click', fecharLightbox);

document.getElementById('lightbox-img').addEventListener('click', function(e) {
  e.stopPropagation();
});
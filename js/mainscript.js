document.addEventListener('DOMContentLoaded', () => {
  const infint = document.querySelector('.infint');

  // Função para adicionar 'o's
  function adicionarOs(qtd = 20) {
    infint.textContent += 'o'.repeat(qtd);
  }

  // Função atualizar tempo (sua função original, pode ficar aqui dentro)

  function atualizarTempo() {
    const dataInicial = new Date(2024, 1, 10, 0, 0, 0); // mês 1 = fevereiro
    const agora = new Date();

    let diff = agora - dataInicial; // ms

    if(diff < 0) diff = 0;

    let totalSegundos = Math.floor(diff / 1000);
    const segundos = totalSegundos % 60;
    let totalMinutos = Math.floor(totalSegundos / 60);
    const minutos = totalMinutos % 60;
    let totalHoras = Math.floor(totalMinutos / 60);
    const horas = totalHoras % 24;

    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();

    if(dias < 0) {
      meses--;
      const mesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0);
      dias += mesAnterior.getDate();
    }
    if(meses < 0) {
      anos--;
      meses += 12;
    }

    document.getElementById('year').textContent = String(anos).padStart(2, '0');
    document.getElementById('moth').textContent = String(meses).padStart(2, '0');
    document.getElementById('day').textContent = String(dias).padStart(2, '0');
    document.getElementById('hour').textContent = String(horas).padStart(2, '0');
    document.getElementById('minut').textContent = String(minutos).padStart(2, '0');
    document.getElementById('sec').textContent = String(segundos).padStart(2, '0');
  }

  // Atualiza tempo a cada segundo
  setInterval(atualizarTempo, 1000);
  atualizarTempo(); // já atualiza na carga da página

  // Adiciona alguns 'o's iniciais
  adicionarOs(3000);

  // Evento scroll para adicionar mais 'o's perto do fim
  window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 150)) {
      adicionarOs(50);
    }
  });
});

function sortear() {
  const opcao1 = document.getElementById('opcao1').value.trim();
  const opcao2 = document.getElementById('opcao2').value.trim();
  const resultadoEl = document.getElementById('resultado');

  if (!opcao1 || !opcao2) {
    resultadoEl.textContent = '⚠️ Preencha as duas opções para sortear.';
    return;
  }

  const escolhido = Math.random() < 0.5 ? opcao1 : opcao2;
  resultadoEl.textContent = `✨ A escolha do Bilu foi: ${escolhido}`;
}
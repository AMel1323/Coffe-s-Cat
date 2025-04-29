document.addEventListener('DOMContentLoaded', function(){
    const dropdownToggle  = document.querySelectorAll('[data-dropdown-toggle]');
    dropdownToggle.forEach((toggle) => {
        toggle.addEventListener('click', function() {
            const parent = this.closest('.dropdown-item');
            parent.classList.toggle('active');
        })
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const gatoElement = document.getElementById('gato');

    // Função para mover o ícone de forma suave
    function moveGatoRandomly() {
        // Gera posições aleatórias dentro da janela
        const x = Math.random() * (window.innerWidth - gatoElement.offsetWidth);
        const y = Math.random() * (window.innerHeight - gatoElement.offsetHeight);

        // Atualiza a posição do elemento com transições suaves
        gatoElement.style.transform = `translate(${x}px, ${y}px)`;
    }

    // Move o ícone a cada 1 segundo
    setInterval(moveGatoRandomly, 1000);
});
let formSubmit = document.getElementById("formContainer");

formSubmit.addEventListener('submit', (e) => {

    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');
    let carregando = `<p>. . .</p>`
    content.innerHTML = carregando;
    setTimeout(() => {
        let finalizado = `<p>Cadastro concluído com sucesso!</p>`
        content.innerHTML = finalizado;
        
    }, 3000);

})
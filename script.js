document.getElementById('pesquisar').addEventListener('click', function(){
    const cep = document.getElementById('inputCEP').value;
    // document.getElementById('resultado').innerText = 'Cep: ' + cep;
    let url = `https://viacep.com.br/ws/${cep}/json/ `;

    fetch(url)
                .then(response => response.json())
                .then(data => alert(JSON.stringify(data)));
                
})



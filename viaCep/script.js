

let cep = prompt("Digite o numero do seu cep: ")

let url = `https://viacep.com.br/ws/${cep}/json/ `;

fetch(url)
            .then(response => response.json())
            .then(data => alert(JSON.stringify(data)));


document.getElementById('pesquisar').addEventListener('click', async function(){
    const cep = document.getElementById('inputCEP').value;
    let url = await fetch(`https://viacep.com.br/ws/${cep}/json/ `);
    const data = await url.json();
    
    const uf = data.uf;
    const cidade = data.localidade;
    const logradouro = data.logradouro;

    console.log(`UF: ${uf}`);
    console.log(`Cidade: ${cidade}`);
    console.log(`Logradouro: ${logradouro}`);
    console.log(`CEP: ${cep}`);

    document.getElementById('pUF').innerHTML = `<strong>UF:</strong> ${uf}`
    document.getElementById('pLocal').innerHTML = `<strong>Cidade:</strong> ${cidade}`
    document.getElementById('pRua').innerHTML = `<strong>Rua:</strong> ${logradouro}`
    document.getElementById('pCEP').innerHTML = `<strong>CEP:</strong> ${cep}`
    
})

let popup = document.getElementById('popup')

function iniciar() {
    

    if(popup){
        popup.style.display = "block"
    }else{
        popup.style.display = "none"
    }
};

function fecharPopup() { 
    if (popup) {
        popup.style.display = "none";
    }
};
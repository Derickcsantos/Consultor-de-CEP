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

    document.getElementById('pUF').innerHTML = `UF: ${uf}`
    document.getElementById('pLocal').innerHTML = `Cidade: ${cidade}`
    document.getElementById('pRua').innerHTML = `Rua: ${logradouro}`
    document.getElementById('pCEP').innerHTML = `CEP: ${cep}`
    
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
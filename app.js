function pegarTexto_criptografar() {
    const inputElement = document.querySelector(".conteudo__esquerda__insercao");
    const inputValue = inputElement.value;
    
  
        if (/[A-Z]/.test(inputValue)) {
            alert("Por favor, use apenas letras minúsculas.");
            return;
        }
        if (inputValue === "") {
            alert("Por favor, digite algo.");
            return;
        }
    
    let criptografado = criptografar(inputValue);

    const asideElement = document.querySelector(".conteudo__direita");
    const wrapperElement = document.createElement('div');
    wrapperElement.className = "conteudo__direita__click__wrapper";
    wrapperElement.innerHTML = `<p class="conteudo__direita__click__texto">${criptografado}</p>
                                <button class="conteudo__direita__click__botao">Copiar</button>`;
    asideElement.innerHTML = ''; 
    asideElement.appendChild(wrapperElement);
    
    const copyButton = wrapperElement.querySelector(".conteudo__direita__click__botao");
    copyButton.addEventListener("click", copiar);

    asideElement.classList.add("conteudo__direita__click");
}

function pegarTexto_descriptografar() {
    const inputElement = document.querySelector(".conteudo__esquerda__insercao");
    const inputValue = inputElement.value;
    
    
    if (/[A-Z]/.test(inputValue)) {
        alert("Por favor, use apenas letras minúsculas.");
        return;
    }
    if (inputValue === "") {
        alert("Por favor, digite algo.");
        return;
    }
    
    let descriptografado = descriptografar(inputValue);

    const asideElement = document.querySelector(".conteudo__direita");
    const wrapperElement = document.createElement('div');
    wrapperElement.className = "conteudo__direita__click__wrapper";
    wrapperElement.innerHTML = `<p class="conteudo__direita__click__texto">${descriptografado}</p>
                                <button class="conteudo__direita__click__botao">Copiar</button>`;
    asideElement.innerHTML = ''; 
    asideElement.appendChild(wrapperElement);
    
    const copyButton = wrapperElement.querySelector(".conteudo__direita__click__botao");
    copyButton.addEventListener("click", copiar);

    asideElement.classList.add("conteudo__direita__click");
}

function criptografar(text) {
    const replacements = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };

    const regex = /[aeiou]/g;
    
    return text.replace(regex, (match) => replacements[match]);
}

function descriptografar(fraseCriptografada) {
    const replacements = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };

    const regex = /(ai|enter|imes|ober|ufat)/g;

    return fraseCriptografada.replace(regex, (match) => replacements[match]);
}

function limparInput() {
    document.querySelector('.conteudo__esquerda__insercao').value = '';
}

function copiar() {
    const textElement = document.querySelector(".conteudo__direita__click__texto");
    if (textElement) {
        const textToCopy = textElement.innerText;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("Texto copiado!");
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    } else {
        console.error('Text element not found');
    }
}

// Selecionar elementos DOM
const chkUppercase = document.getElementById('chkMaiusculas');
const chkLowercase = document.getElementById('chkMinusculas');
const chkNumbers = document.getElementById('chkNumeros');
const chkSymbols = document.getElementById('chkSimbolos');
const rangeSlider = document.getElementById('rangeSlider');
const passwordInput = document.getElementById('password');
const generatePasswordBtn = document.querySelector('button');

// Função pra gerar senha baseada nos parâmetros selecionados
function generatePassword() {
    const length = rangeSlider.value;
    const includeUppercase = chkUppercase.checked;
    const includeLowercase = chkLowercase.checked;
    const includeNumbers = chkNumbers.checked;
    const includeSymbols = chkSymbols.checked;

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const symbolicChars = '"!@#$%¨&*()_+-=[]{}/?^~';

    let allowedChars = "";
    let generatedPassword = "";

    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeNumbers ? numericChars : "";
    allowedChars += includeSymbols ? symbolicChars : "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        generatedPassword += allowedChars[randomIndex];
    }

    return generatedPassword;
}

// Atualiza valor do slider
function updateSliderValue() {
    const sliderValueSpan = document.getElementById('sliderValue');
    sliderValueSpan.textContent = rangeSlider.value;
}

// Event listeners
rangeSlider.addEventListener('input', updateSliderValue);

generatePasswordBtn.addEventListener('click', () => {
    const copyFeedback = document.getElementById('copyFeedback');
    copyFeedback.style.display = 'none';
    const generatedPassword = generatePassword();
    if (generatedPassword) {
        passwordInput.value = generatedPassword;
    }
});

// Inicializa slider e seta senha inicial
updateSliderValue();
const initialPassword = generatePassword();
passwordInput.value = initialPassword;

// Consts pra copiar botão e retornar feedback
const btnCopy = document.getElementById('btnCopy');
const copyFeedback = document.getElementById('copyFeedback');

btnCopy.addEventListener('click', () => {
    passwordInput.select(); // Seleciona o texto
    document.execCommand('copy'); // Copia o texto
    window.getSelection().removeAllRanges(); // Tira seleção do texto
    
    // Retorna feedback pro usuário
    copyFeedback.style.display = 'inline';
});

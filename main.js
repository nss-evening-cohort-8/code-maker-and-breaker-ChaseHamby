const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

// Functions for 1st text box //

const output = '';

const textOutput = () => {
    const inputText = document.getElementById('textAreaOne').value;
    let inputWords = inputText.split(' ');
    for (let i = 0; i < inputWords.length; i++) {
        let output = inputWords[i];
    }
    printToDom(inputText, 'wordOutput');
};

const secretButton = document.getElementById('secret-button-one');
secretButton.addEventListener("click", textOutput);

// Functions for 2nd text box //

const outputTwo = '';

const secondOutput = () => {
    const secondInputText = document.getElementById('textAreaTwo').value;
    let secondInputWords = secondInputText.split(' ');
    for (let i = 0; i < secondInputWords.length; i++) {
        let outputTwo = secondInputWords[i];
    }
    printToDom(secondInputText, 'wordOutputTwo');
};

const secondSecretButton = document.getElementById('secret-button-two');
secondSecretButton.addEventListener("click", secondOutput);
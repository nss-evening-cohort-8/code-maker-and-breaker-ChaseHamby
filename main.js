
const output = '';

const textOutput = () => {
    let inputText = document.getElementById('textAreaOne').value;
    for (let i = 0; i < inputText.length; i++) {
        let output = inputText[i];
    }
    printToDom(output.value, 'wordOutput');
};

const secretButton = document.getElementById('secret-button-one');
secretButton.addEventListener("click", textOutput);

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};
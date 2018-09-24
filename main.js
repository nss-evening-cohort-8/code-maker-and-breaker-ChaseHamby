const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

// Commented out below was my original solution which was way more complex and convuluted. Lauren's example is listed bottom //

// // Functions for 1st text box //

// const output = '';

// const textOutput = () => {
//     const inputText = document.getElementById('textAreaOne').value;
//     let inputWords = inputText.split('');
//     for (let i = 0; i < inputWords.length; i++) {
//         let output = inputWords[i];
//     }
//     printToDom(inputText, 'wordOutput');
// };

// const secretButton = document.getElementById('secret-button-one');
// secretButton.addEventListener("click", textOutput);

// // Functions for 2nd text box //

// const outputTwo = '';

// const secondOutput = () => {
//     const secondInputText = document.getElementById('textAreaTwo').value;
//     let secondInputWords = secondInputText.split(' ');
//     for (let i = 0; i < secondInputWords.length; i++) {
//         let outputTwo = secondInputWords[i];
//     }
//     printToDom(secondInputText, 'wordOutputTwo');
// };

// const secondSecretButton = document.getElementById('secret-button-two');
// secondSecretButton.addEventListener("click", secondOutput);

// Lauren's example //

const convertToCode = () => {
        const words = document.getElementById('textAreaOne').value;
        let converted = '';
        words.split('').forEach((character, i) => {
            converted += (words.length === i + 1) ? `${character.charCodeAt(0)}` 
            : `${character.charCodeAt(0)},`;
    })
    printToDom(converted, 'wordOutput');
};

const convertToWords = () => {
    const codeList = document.getElementById('textAreaTwo').value;
    let text = '';
    codeList.split(',').forEach((code) => {
       text += String.fromCharCode(code);
    });
    printToDom(text, 'wordOutputTwo');
}

const registerEvents = () => {
    document.getElementById('secret-button-one').addEventListener('click', convertToCode);
    document.getElementById("secret-button-two").addEventListener('click', convertToWords);
}

registerEvents();

// terniary operator
// (conditional statement) ? true condition and : false condition
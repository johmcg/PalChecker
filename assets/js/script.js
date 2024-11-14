const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resulting = document.getElementById("result");


const checkAll = () => {


    let formattedText = textInput.value.toLowerCase().replace(/[.,_\s]/g, "");

    //Same Back and Forward
    let rev = formattedText.split("").reverse().join("");

    if (formattedText === '') {
        alert("Please input a value");
    }


    else if (resulting.textContent === 'A man, a plan, a canal//. Panama') {
        resulting.textContent = `${textInput.value} is a palindrome`;
    }


    //Single Letter
    else if (formattedText.length === 1) {
        resulting.textContent = `${textInput.value} is a palindrome`;
    }
    else if (rev == formattedText) {
        resulting.textContent = `${textInput.value} is a palindrome`;
    }

    else {
        resulting.textContent = `${textInput.value} is not a palindrome`;
    };

}


checkBtn.addEventListener('click', (checkAll))

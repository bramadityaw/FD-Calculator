function calculateMaturityAmount() {
    //Get input from the form
    const principle = parseFloat(document.getElementById('principle').value);
    const interest = parseFloat(document.getElementById('interest').value)/100;
    const tenure = parseFloat(document.getElementById('tenure').value);

    //Calculate maturity
    let maturity = principle + (principle*interest*tenure);

    //Display maturity
    document.getElementById('result').innerText = `Maturity Amount: ${maturity.toFixed()}`;
}

//Attach event listener to button_Calculate
document.getElementById('button_Calculate').addEventListener('click', calculateMaturityAmount)
let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

 let area = length * width;

  document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}


let grocery_1;
let grocery_2;
let grocery_3;
function groceryTracker() {
    grocery_1 = parseFloat(document.getElementById('grocery1').value);
    grocery_2 = parseFloat(document.getElementById('grocery2').value);
    grocery_3 = parseFloat(document.getElementById('grocery3').value);

    let montant_total = grocery_1 + grocery_2 + grocery_3;

    document.getElementById('result_grocery').innerText = `Le montant total est : ${montant_total} euros`;
}
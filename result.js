// Variables to store color results
var firstColor;
var secondColor;

// Function to retrieve values from session storage and display in the table
function displayResults() {
    // Retrieve values from session storage
    var my_dict = JSON.parse(localStorage.getItem('my_dict'));
    console.log(my_dict);

    // Initialize variables to calculate totals
    var total_a_q = 0;
    var total_b_q = 0;
    var total_c_q = 0;
    var total_d_q = 0;

    // Array to store totals for each color
    var totals = [
        [total_a_q, "Orange"],
        [total_b_q, "Green"],
        [total_c_q, "Blue"],
        [total_d_q, "Gold"]
    ];

    // Loop through the dictionary to calculate totals
    for (var key in my_dict) {
        var values = my_dict[key];
        total_a_q += values[0];
        total_b_q += values[1];
        total_c_q += values[2];
        total_d_q += values[3];
    }

    // Display individual question results in the table
    var data = ['A', 'B', 'C', 'D'];

    for (var i = 1; i < 12; i++) {
        var questionNumber = i;

        for (var j = 0; j < 4; j++) {
            var option = data[j];
            var cellId = 'result' + questionNumber + option;
            var cell = document.getElementById(cellId);
            cell.innerText = my_dict['Q' + questionNumber][j];
        }
    }

    // Set the text to display in the table
    document.getElementById('totalA').innerText = total_a_q;
    document.getElementById('totalB').innerText = total_b_q;
    document.getElementById('totalC').innerText = total_c_q;
    document.getElementById('totalD').innerText = total_d_q;

    document.getElementById('resultOrange').innerText = total_a_q;
    document.getElementById('resultGreen').innerText = total_b_q;
    document.getElementById('resultBlue').innerText = total_c_q;
    document.getElementById('resultGold').innerText = total_d_q;

    // Find the first and second colors
    getFirstAndSecond([total_a_q, total_b_q, total_c_q, total_d_q]);

    // Get the username and display it
    getname();

    // Pintar el primer y ultima columna

    // Ordenar el array en orden descendente
var totals = [total_a_q, total_b_q, total_c_q, total_d_q];
totals.sort(function(a, b) { return b - a;});
var Pri_mayor = totals[0];
var Sec_mayor = totals[1];
var Ter_mayor = totals[2];

    // Obtener el elemento correspondiente al primer número mayor
    var elemento_id;
    if (Pri_mayor == total_a_q) {
      elemento_id = 'totalA';
    } else if (Pri_mayor == total_b_q) {
      elemento_id = 'totalB';
    } else if (Pri_mayor == total_c_q) {
      elemento_id = 'totalC';
    } else {
      elemento_id = 'totalD';
    }
    // Obtener el elemento correspondiente al segundo número mayor
    var elemento_id_segundo;
    if (Sec_mayor == total_a_q && elemento_id !== 'totalA') {
      elemento_id_segundo = 'totalA';
    } else if (Sec_mayor == total_b_q && elemento_id !== 'totalB') {
      elemento_id_segundo = 'totalB';
    } else if (Sec_mayor == total_c_q && elemento_id !== 'totalC') {
      elemento_id_segundo = 'totalC';
    } else {
      elemento_id_segundo = 'totalD';
    }
        // Obtener el elemento correspondiente al tercer número mayor
    var elemento_id_tercero;
    if (Ter_mayor == total_a_q && elemento_id !== 'totalA' && elemento_id_segundo !== 'totalA') {
      elemento_id_tercero = 'totalA';
    } else if (Ter_mayor == total_b_q && elemento_id !== 'totalB' && elemento_id_segundo !== 'totalB') {
      elemento_id_tercero = 'totalB';
    } else if (Ter_mayor == total_c_q && elemento_id !== 'totalC' && elemento_id_segundo !== 'totalC') {
      elemento_id_tercero = 'totalC';
    } else {
      elemento_id_tercero = 'totalD';
    }

// Obtener el elemento
var elemento = document.getElementById(elemento_id);
var elemento_segundo = document.getElementById(elemento_id_segundo)
var elemento_tercero = document.getElementById(elemento_id_tercero);

    if (Pri_mayor == Sec_mayor ){

          if(Ter_mayor == Sec_mayor ){

            document.getElementById('Icual').innerHTML = "WE have three winners";
            // Aplicar estilos al elemento
            elemento.style.backgroundColor = "gold"; // Fondo blanco
            elemento.style.fontSize = "1.4em"; // Tamaño de texto más grande
            elemento_segundo.style.backgroundColor = 'gold'; // Puedes cambiar el color según tus preferencias
            elemento_segundo.style.fontSize = '1.4em'; // Tamaño de text
            elemento_tercero.style.backgroundColor = 'gold'; // Puedes cambiar el color según tus preferencias
            elemento_tercero.style.fontSize = '1.4em'; // Tamaño de text
          }
          else
          {
            document.getElementById('Icual').innerHTML = "WE have two winners";
            // Aplicar estilos al elemento
            elemento.style.backgroundColor = "gold"; // Fondo blanco
            elemento.style.fontSize = "1.4em"; // Tamaño de texto más grande
            elemento_segundo.style.backgroundColor = 'gold'; // Puedes cambiar el color según tus preferencias
            elemento_segundo.style.fontSize = '1.4em'; // Tamaño de text
            elemento_tercero.style.backgroundColor = 'silver'; // Puedes cambiar el color según tus preferencias
            elemento_tercero.style.fontSize = '1.2em'; // Tamaño de text
          }
    }
    else{
      // Aplicar estilos al elemento
      elemento.style.backgroundColor = "gold"; // Fondo blanco
      elemento.style.fontSize = "1.4em"; // Tamaño de texto más grande

      elemento_segundo.style.backgroundColor = 'silver'; // Puedes cambiar el color según tus preferencias
      elemento_segundo.style.fontSize = '1.2em'; // Tamaño de text
    }

}

// Call the displayResults function when the page loads
window.onload = displayResults;

// Function to sort an array from max to min
function sortArrayMaxToMin(array) {
    array.sort(function (a, b) {
        return b[0] - a[0];
    });
    return array;
}


function getTheColorforTheLasttwoNumber(){
  
}



// Function to determine the first and second colors
function getFirstAndSecond(result) {
    var resultArray = result.slice();
    var resultOrder = result.slice();
    var ArrayLetra = ['Orange', 'Green', 'Blue', 'Gold'];
    var ArrayLetraOrder = [];

    resultOrder.sort(function (a, b) {
        return b - a;
    });

    console.log(resultArray);
    console.log(resultOrder);

    for (let i = 0; i < 4; i++) {
        ArrayLetraOrder.push(ArrayLetra[resultArray.indexOf(resultOrder[i])]);
    }

    // Display the first and second colors
    document.getElementById("firstColorResult").innerText = ArrayLetraOrder[0];
    document.getElementById("secondColorResult").innerText = ArrayLetraOrder[1];

    // Update global variables
    firstColor = ArrayLetraOrder[0];
    secondColor = ArrayLetraOrder[1];
}

// Event listener for the first color button
const BtnFirstColor = document.getElementById('firstColorResult');
var dialog;
BtnFirstColor.addEventListener('click', () => {
    const iframe = document.getElementById('display');
    dialog = document.getElementById('modal');

    // Set the iframe source to the corresponding color page
    iframe.src = 'pagColor' + firstColor + '.html';
    dialog.showModal();
});

// Event listener for the second color button
const BtnSecondColor = document.getElementById('secondColorResult');
BtnSecondColor.addEventListener('click', () => {
    const iframe = document.getElementById('display');
    dialog = document.getElementById('modal');

    // Set the iframe source to the corresponding color page
    iframe.src = 'pagColor' + secondColor + '.html';
    dialog.showModal();
});

// Function to get and display the username
function getname() {
    var nombreDeUsuario = localStorage.getItem("username1");
    document.getElementById("UserNameResult").innerHTML = "User " + nombreDeUsuario;
}

// Event listener to close the modal dialog
const BtnDialog = document.getElementById('BtnDialog');

// Anonymous function
BtnDialog.addEventListener('click', () => {
    dialog.close();
});
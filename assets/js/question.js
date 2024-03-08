function submitForm() {
    event.preventDefault();
    if (validateForm()) {
        // Introduce a delay before calling displayResults
        setTimeout(displayResults, 0);
    } else {
        alert("Please answer all questions before submitting.");
    }
}

function validateForm() {
    // Validate that all questions are answered
    for (let i = 1; i <= 11; i++) {
        const questionName = 'q' + i + 'Option';
        const options = document.getElementsByName(questionName);
        
        console.log(`Question ${i} options:`, options);

        if (!Array.from(options).some(option => option.checked)) {
            console.log(`Question ${i} is not answered`);
            return false; // At least one question is not answered
        }
    }
    return true; // All questions are answered
}

// script.js

function displayResults() {
    // Calculate scores and display the results in a table
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.style.display = "block"; // Show result container

    const table = document.getElementById("resultTable");

    const tableRows = [];
    for (let i = 1; i <= 11; i++) {
        const questionName = 'q' + i + 'Option';
        const options = document.getElementsByName(questionName);

        tableRows.push(`
            <tr>
                <td>${i}</td>
                <td>${options[0].checked ? 1 : 0}</td>
                <td>${options[1].checked ? 1 : 0}</td>
                <td>${options[2].checked ? 1 : 0}</td>
                <td>${options[3].checked ? 1 : 0}</td>
            </tr>
        `);
    }

    table.innerHTML = `
        <tr>
            <th>Question</th>
            <th>Color A</th>
            <th>Color B</th>
            <th>Color C</th>
            <th>Color D</th>
        </tr>
        ${tableRows.join('')}
    `;

    // Add these lines for the scores
    const scores = calculateScores();
    document.getElementById('orangeScore').textContent = scores.Orange;
    document.getElementById('greenScore').textContent = scores.Green;
    document.getElementById('blueScore').textContent = scores.Blue;
    document.getElementById('goldScore').textContent = scores.Gold;

    // Determine first and second colors
    const colors = Object.keys(scores);
    colors.sort((a, b) => scores[b] - scores[a]);

    document.getElementById('firstColor').textContent = colors[0];
    document.getElementById('secondColor').textContent = colors[1];

    console.log("Results displayed successfully!"); // Add this line for debugging
}

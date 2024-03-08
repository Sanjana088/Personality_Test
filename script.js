function generateRandomPassword(targetId) {
    const passwordLength = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomPassword += charset[randomIndex];
    }

    document.getElementById(targetId).value = randomPassword;
}

function register() {
    const registerUsername = document.getElementById("registerUsername").value;
    const registerPassword = document.getElementById("registerPassword").value;

    // Validate if the username and password are not empty
    if (registerUsername && registerPassword) {
        // Check if the username is not already registered
        if (!isUserRegistered(registerUsername)) {
            // Save the user credentials to local storage
            saveUserCredentials(registerUsername, registerPassword);

            // Redirect to the login page
            window.location.href = 'index.html#login';
        } else {
            // Display an error message for duplicate username
            document.getElementById("registerError").innerText = "Username already registered.";
        }
    } else {
        // Display an error message for empty username or password
        document.getElementById("registerError").innerText = "Please enter both username and password.";
    }
}

function isUserRegistered(username) {
    // Retrieve existing user data from local storage
    const existingUserData = localStorage.getItem('userData');

    if (existingUserData) {
        const userData = JSON.parse(existingUserData);
        return userData.hasOwnProperty(username);
    }

    return false;
}

function saveUserCredentials(username, password) {
    // Retrieve existing user data from local storage
    const existingUserData = localStorage.getItem('userData');

    let userData = {};

    if (existingUserData) {
        userData = JSON.parse(existingUserData);
    }

    // Save the new user credentials
    userData[username] = password;

    // Update local storage with the new user data
    localStorage.setItem('userData', JSON.stringify(userData));
}
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate if the username and password are not empty
    if (username && password) {
        // Check if the username is registered
        if (isUserRegistered(username)) {
            // Retrieve the saved password for the username
            const savedPassword = getUserPassword(username);

            // Check if the provided password matches the saved password
            if (password === savedPassword) {
                // Successful login, show the questionnaire form or redirect to another page
                alert("Login successful!");
                window.open('index.html#questionnaire');
                 // Replace with your desired action
            } else {
                // Display an error message for incorrect password
                document.getElementById("loginError").innerText = "Incorrect password.";
            }
        } else {
            // Display an error message for unregistered username
            document.getElementById("loginError").innerText = "Username not registered.";
        }
    } else {
        // Display an error message for empty username or password
        document.getElementById("loginError").innerText = "Please enter both username and password.";
    }
    if (loginSuccessful) {
        document.getElementById("logoutButton").style.display = "block";
    }
}


function isUserRegistered(username) {
    // Retrieve existing user data from local storage
    const existingUserData = localStorage.getItem('userData');

    if (existingUserData) {
        const userData = JSON.parse(existingUserData);
        return userData.hasOwnProperty(username);
    }

    return false;
}
function logout() {
    // Perform any necessary logout actions (e.g., clear session data)

    // Hide the logout button
    document.getElementById("logoutButton").style.display = "none";

    // Redirect to the login page
    window.location.href = 'index.html#login';
}
function getUserPassword(username) {
    // Retrieve existing user data from local storage
    const existingUserData = localStorage.getItem('userData');

    if (existingUserData) {
        const userData = JSON.parse(existingUserData);
        return userData[username];
    }

    return null;
}
/*function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username and password are valid (you can replace this with your authentication logic)
    if (username === "user1" && password) {
        // Successful login, show the questionnaire form
        document.getElementById("login").style.display = "none";
        window.open('index.html#questionnaire');
    } else {
        // Display an error message for unsuccessful login
        document.getElementById("loginError").innerText = "Invalid username or password.";
    }
} */
function submitQuestionnaire() {
    const answers = document.querySelectorAll('input[name^="question"]:checked');

    // Check if all questions are answered
    if (answers.length === 11) {
        // Proceed with form submission (you can add logic to handle the answers)
        alert("Form submitted successfully!");
    } else {
        // Display an error message for incomplete form
        document.getElementById("questionError").innerText = "Please answer all questions.";
    }
}
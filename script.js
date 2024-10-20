// Switch to Login Form
function showLogin() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}

// Switch to Signup Form
function showSignup() {
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
}

// Signup Function
function signup() {
    const username = document.getElementById('signup-username').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const message = document.getElementById('message');

    if (username === '' || password === '') {
        message.textContent = 'Please fill in all fields.';
        return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.find(user => user.username === username);

    if (userExists) {
        message.textContent = 'Username already exists.';
        return;
    }

    const newUser = { username, password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    message.textContent = 'Signup successful! Please login.';
    showLogin(); // Switch to login form after successful signup
}

// Login Function
function login() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const message = document.getElementById('message');

    if (username === '' || password === '') {
        message.textContent = 'Please fill in all fields.';
        return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.username === username && user.password === password);

    if (user) {
        message.style.color = 'green';
        message.textContent = `Welcome, ${user.username}!`;
    } else {
        message.style.color = 'red';
        message.textContent = 'Invalid username or password.';
    }
}

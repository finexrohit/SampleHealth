// Default credentials
const defaultUser = {
    username: 'user123',
    password: 'password123'
};

// Store registered users in localStorage (for demo only)
function getUsers() {
    const users = localStorage.getItem('healthUsers');
    return users ? JSON.parse(users) : [defaultUser];
}
function setUsers(users) {
    localStorage.setItem('healthUsers', JSON.stringify(users));
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    const msg = document.getElementById('loginMessage');
    if (user) {
        msg.style.color = '#2d6a4f';
        msg.textContent = 'Login successful! Welcome, ' + username + '.';
    } else {
        msg.style.color = '#d90429';
        msg.textContent = 'Invalid username or password.';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    let users = getUsers();
    const exists = users.some(u => u.username === newUsername);
    const msg = document.getElementById('registerMessage');
    if (exists) {
        msg.style.color = '#d90429';
        msg.textContent = 'Username already exists.';
    } else {
        users.push({ username: newUsername, password: newPassword });
        setUsers(users);
        msg.style.color = '#2d6a4f';
        msg.textContent = 'Account created! You can now log in.';
        document.getElementById('registerForm').reset();
    }
});

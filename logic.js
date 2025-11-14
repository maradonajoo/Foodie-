function showAlert() {
    const username = document.getElementById('user').value;
    alert("Hello, " + username + "!");
    return true;
}

const read = new URLSearchParams(window.location.search);
const username = read.get('username');
const link = document.getElementById('user-name');
if (username) {
  link.textContent = "Hello, " + username;
}
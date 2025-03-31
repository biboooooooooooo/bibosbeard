document.getElementById('navbar-toggler').addEventListener('click', function() {
    this.classList.toggle('active');
});

document.getElementById('logo').addEventListener('click', function() {
    window.location.href = 'src/index.html';
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_ofg79jo", "template_owt2mth", {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }, "QjCg85uIEX4KWN4cB")
    .then(response => {
        document.getElementById("form-status").innerText = "Message sent successfully!";
        document.getElementById("form-status").style.color = "green";
        document.getElementById("contact-form").reset();
    }, error => {
        document.getElementById("form-status").innerText = "Failed to send message.";
        document.getElementById("form-status").style.color = "red";
    });
});

const repoName = window.location.pathname.split('/')[1];
document.getElementById('redirectButton').href = '/' + repoName + '/pagina.html';

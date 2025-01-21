document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const roll_number = document.getElementById('roll_number').value;
    const phone_no = document.getElementById('phone_no').value;
    const email = document.getElementById('email').value;

    if (name.trim().length < 3) {
        alert('Name must be at least 3 characters long.');
        return;
    }

    if (isNaN(roll_number) || roll_number.trim().length !== 10) {
        alert('Roll Number must be 10 digits.');
        return;
    }

    if (!/^\d{10}$/.test(phone_no)) {
        alert('Phone Number must be a valid 10-digit number.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}&roll_number=${encodeURIComponent(roll_number)}&phone_no=${encodeURIComponent(phone_no)}&email=${encodeURIComponent(email)}`
    })
    .then(response => response.text())
    .then(data => {
        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = 'Form submitted successfully!';
        successMessage.style.display = 'block'; // Show the success message
        document.getElementById('signupForm').reset(); // Optionally reset the form
    })
    .catch(error => {
        alert('An error occurred. Please try again.');
    });
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
  
  event.preventDefault();

  const formData = {
    userName: document.getElementById('userName').value,
    password: document.getElementById('password').value,
    address: document.getElementById('address').value,
    mobileNumber: document.getElementById('mobileNumber').value,
    email: document.getElementById('email').value,
    userRole: document.getElementById('userRole').value
    // customerId: parseInt(document.getElementById('customerId').value)
  };
  
  // Replace 'http://localhost:1995/customer/register' with your actual backend API URL
  fetch('http://localhost:1995/customer/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => {
    // Check if the registration was successful (HTTP status 201 - CREATED)
    if (response.status === 201) {
      // Redirect to the login page after successful registration
      window.location.href = 'login.html'; // Replace 'login.html' with your actual login page URL
    } else {
      // Handle other response status codes (e.g., display error message)
      return response.json();
    }
  })
  .then(data => {
    // Log the response data (if needed)
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.querySelector('.loader').style.display = 'none';
      document.querySelector('.container').style.display = 'block';
  
      // Redirect after a delay, simulating a sign-up process
      setTimeout(function() {
        // Redirect to another page
      }, 2000); // Adjust time as needed
    }, 3000); // Loader display time
  });
  // Example JavaScript for handling sign-in on the sign-in page

  document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    // Perform sign-in logic here...
    window.location.href = 'dashboard.html'; // Redirect to the dashboard upon successful sign-in
});

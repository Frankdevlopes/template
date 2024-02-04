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
  

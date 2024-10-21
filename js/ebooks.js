// Get all the images
const images = document.querySelectorAll('.image-container img');

// Get the user profile div
const userProfile = document.querySelector('.user-profile');

// Add click event listener to each image
images.forEach(image => {
  image.addEventListener('click', () => {
    // Display the user profile
    userProfile.style.display = 'block';
  });
});

const sub = document.getElementById('sub')

sub.addEventListener('click', () => {
    const pass = document.getElementById('pass').value
    if (pass === 'admin@2024') {
        // If password is correct, trigger file download
        const link = document.createElement('a');
        link.href = 'shawmaker.pdf'; // Path to your PDF file
        link.download = 'shawmaker.pdf'; // Name of the file to be downloaded
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Incorrect password! Please try again.'); // Notify user of incorrect password
    }
});

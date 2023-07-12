let emailField = document.querySelector('.inputfield');
let emailError = document.querySelector('.error')
let btnSubmit = document.querySelector('.submit')
let containerImage = document.querySelector('.container_image img');

// ADD THE LOGIC TO THE SUBMIT BUTTON
btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();

    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        // IF EMAIL IS NOT VALID
        emailError.innerHTML = 'Valid Email is required'
        emailError.style.color = 'tomato'
        emailField.style.borderColor = 'tomato'
        emailField.style.backgroundColor = '#FAC9BA'
        emailField.style.color = 'tomato'
        return false;
    } else {
        // Store the email in localStorage
        localStorage.setItem('subscribedEmail', emailField.value);
        emailError.innerHTML = '';
        emailField.style.borderColor = ''
        emailField.style.backgroundColor = ''
        emailField.style.color = ''
        window.location.href = 'success.html';
        return true;
    }
});


// Select the container_image element

// Function to change the image source
function changeImageSource() {
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // Check the viewport width and update the image source accordingly
  if (viewportWidth <= 375) {
    containerImage.src = 'assets/images/illustration-sign-up-mobile.svg';
  } else {
    containerImage.src = 'assets/images/illustration-sign-up-desktop.svg';
  }
}

// Call the function initially
changeImageSource();

// Call the function when the window is resized
window.addEventListener('resize', changeImageSource);




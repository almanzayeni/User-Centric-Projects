// Get modal element
var modal = document.getElementById("signupModal");

// Get the button that opens the modal
var signupBtn = document.getElementById("signupBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn")[0];

// When the user clicks on the button, open the modal
signupBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission (optional for redirect)
function handleSignup(event) {
    // Prevent the form from submitting immediately
    event.preventDefault();
    
    // Simulate a successful signup by redirecting to the success page
    window.location.href = "success.html";
}


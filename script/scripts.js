// Modal Logic
var modal = document.getElementById("signupModal");
var signupBtn = document.getElementById("signupBtn");
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Open the modal when the signup button is clicked
signupBtn.onclick = function() {
    modal.style.display = "block";
};

// Close the modal when the close button (x) is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Close the modal if the user clicks outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

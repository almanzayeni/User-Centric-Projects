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

// Autocomplete for search bar
const searchInput = document.querySelector('#search-input');
const suggestions = ['Malaysia', 'Immigration policies', 'Visa requirements', 'Work opportunities', 'Living abroad', 'Studying abroad']; // Example suggestions

// Function to show autocomplete suggestions
function showSuggestions() {
    const query = searchInput.value.toLowerCase();
    const suggestionList = document.querySelector('.autocomplete-suggestions');
    suggestionList.innerHTML = ''; // Clear previous suggestions

    if (query.length > 0) {
        const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query));
        
        filteredSuggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = suggestion;
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.onclick = function() {
                searchInput.value = suggestion;
                suggestionList.innerHTML = ''; // Clear suggestions after selection
                if (suggestion === 'Malaysia') {
                    window.location.href = 'malaysia.html'; // Redirect to Malaysia page
                }
            };
            suggestionList.appendChild(suggestionItem);
        });
    }
}

// Event listener to trigger autocomplete
searchInput.addEventListener('input', showSuggestions);

// Optional: Clear suggestions when clicking outside
document.addEventListener('click', function(event) {
    const suggestionList = document.querySelector('.autocomplete-suggestions');
    if (!searchInput.contains(event.target) && !suggestionList.contains(event.target)) {
        suggestionList.innerHTML = ''; // Clear suggestions
    }
});


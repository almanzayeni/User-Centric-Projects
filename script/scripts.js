// Modal Logic
var modal = document.getElementById("signupModal");
var signupBtn = document.getElementById("signupBtn");
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Open the modal when the signup button is clicked
signupBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal when the close button (x) is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Search Bar and Autocomplete Logic
const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-btn'); // Target the search button
const suggestions = ['Malaysia', 'Immigration policies', 'Visa requirements', 'Work opportunities', 'Living abroad', 'Studying abroad'];

// Function to show autocomplete suggestions based on user input
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

// Event listener for showing autocomplete suggestions
searchInput.addEventListener('input', showSuggestions);

// Optional: Clear suggestions when clicking outside
document.addEventListener('click', function(event) {
    const suggestionList = document.querySelector('.autocomplete-suggestions');
    if (!searchInput.contains(event.target) && !suggestionList.contains(event.target)) {
        suggestionList.innerHTML = ''; // Clear suggestions
    }
});

// Handle Search Button Click
function handleSearch() {
    const searchInputValue = searchInput.value.trim().toLowerCase();

    if (searchInputValue === "malaysia") {
        window.location.href = "malaysia.html"; // Redirect to Malaysia page
    } else {
        alert("No results found for '" + searchInputValue + "'");
    }
}

// Event listener for the search button
searchButton.addEventListener('click', handleSearch);

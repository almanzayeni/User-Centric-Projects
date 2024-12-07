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

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('#search-input');
    const searchButton = document.querySelector('#search-btn');
    const suggestionsBox = document.querySelector('#autocomplete-suggestions');
    
    // Autocomplete suggestions
    const suggestions = [
        'Malaysia',
        'Canada',
        'Australia',
        'Germany',
        'Singapore',
        'United States',
        'United Kingdom'
    ]; // Add more countries or topics here

    // Function to display autocomplete suggestions
    function showSuggestions() {
        const query = searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = ''; // Clear previous suggestions

        if (query.length > 0) {
            const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query));

            filteredSuggestions.forEach(suggestion => {
                const suggestionItem = document.createElement('div');
                suggestionItem.textContent = suggestion;
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.onclick = function () {
                    searchInput.value = suggestion; // Set the input field with selected suggestion
                    suggestionsBox.innerHTML = ''; // Clear suggestions
                    handleSearch(); // Trigger search when suggestion is clicked
                };
                suggestionsBox.appendChild(suggestionItem);
            });
        }
    }

    // Event listener for search input to show autocomplete suggestions
    searchInput.addEventListener('input', showSuggestions);

    // Event listener to clear suggestions when clicked outside
    document.addEventListener('click', function (event) {
        if (!searchInput.contains(event.target) && !suggestionsBox.contains(event.target)) {
            suggestionsBox.innerHTML = ''; // Clear suggestions
        }
    });

    // Function to handle the search when the search button is clicked
    function handleSearch() {
        const searchValue = searchInput.value.trim().toLowerCase();

        if (searchValue === "malaysia") {
            window.location.href = "malaysia.html"; // Redirect to Malaysia page
        } else if (searchValue === "canada") {
            window.location.href = "canada.html"; // Redirect to Canada page (add more as needed)
        } else {
            alert("No results found for: " + searchValue);
        }
    }

    // Search button click event
    searchButton.addEventListener('click', handleSearch);
});



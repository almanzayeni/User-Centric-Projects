// Modal Logic
var modal = document.getElementById("signupModal");
var signupBtn = document.getElementById("signupBtn");
var closeBtn = document.getElementsByClassName("close-btn")[0];

// Open the modal
signupBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if clicked outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle Search Bar and Autocomplete
const searchInput = document.querySelector('#search-input');
const suggestions = ['Malaysia', 'Immigration policies', 'Visa requirements', 'Work opportunities', 'Living abroad', 'Studying abroad']; 

function showSuggestions() {
    const query = searchInput.value.toLowerCase();
    const suggestionList = document.querySelector('.autocomplete-suggestions');
    suggestionList.innerHTML = ''; 

    if (query.length > 0) {
        const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query));
        
        filteredSuggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = suggestion;
            suggestionItem.classList.add('suggestion-item');
            suggestionItem.onclick = function() {
                searchInput.value = suggestion;
                suggestionList.innerHTML = ''; 
                if (suggestion === 'Malaysia') {
                    window.location.href = 'malaysia.html'; 
                }
            };
            suggestionList.appendChild(suggestionItem);
        });
    }
}

searchInput.addEventListener('input', showSuggestions);

document.addEventListener('click', function(event) {
    const suggestionList = document.querySelector('.autocomplete-suggestions');
    if (!searchInput.contains(event.target) && !suggestionList.contains(event.target)) {
        suggestionList.innerHTML = ''; 
    }
});

// Handle Search Button
function handleSearch() {
    var searchInputValue = searchInput.value.trim().toLowerCase();

    if (searchInputValue === "malaysia") {
        window.location.href = "malaysia.html";
    } else {
        alert("No results found for '" + searchInputValue + "'");
    }
}

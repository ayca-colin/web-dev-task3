// Data Structures (2 Arrays & 2 Objects)
const petCategories = ["Dogs", "Cats", "Small Animals"];
const volunteerRoles = ["Dog Walker", "Cat Socializer", "Event Helper"];

const siteConfig = {
    organization: "Twin Cities Animal Rescue",
    year: 2026
};

const userPreferences = {
    selectedCategory: "",
    savedEmail: ""
};

// Function 1: Load saved preference from localStorage when page opens
function loadSavedPreference() {
    const savedCategory = localStorage.getItem("favoriteCategory");
    const displayElement = document.getElementById("preference-display");
    
    if (savedCategory && displayElement) {
        userPreferences.selectedCategory = savedCategory;
        displayElement.textContent = "Your saved interest: " + savedCategory;
    }
}

// Function 2: Save selected preference to localStorage
function savePreference(category) {
    if (petCategories.includes(category)) {
        localStorage.setItem("favoriteCategory", category);
        userPreferences.selectedCategory = category;
        
        const displayElement = document.getElementById("preference-display");
        if (displayElement) {
            displayElement.textContent = "Your saved interest: " + category;
        }
    }
}

// Function 3: Form Validation
function validateContactForm(event) {
    const nameInput = document.getElementById("fname");
    const emailInput = document.getElementById("email");
    const errorDisplay = document.getElementById("form-error");
    
    if (!nameInput || !emailInput || !errorDisplay) return;
    
    let errorMessage = "";
    
    // Check 1: Name length check
    if (nameInput.value.trim().length < 2) {
        errorMessage = "Please enter your full name (at least 2 characters).";
    }
    // Check 2: Email format check
    else if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
        errorMessage = "Please enter a valid email address containing '@' and '.'.";
    }
    
    if (errorMessage !== "") {
        event.preventDefault(); // Stop form submission
        errorDisplay.textContent = errorMessage;
        errorDisplay.style.color = "red";
        errorDisplay.style.fontWeight = "bold";
    } else {
        // Save valid email to localStorage
        localStorage.setItem("userEmail", emailInput.value.trim());
        errorDisplay.textContent = "Form submitted successfully!";
        errorDisplay.style.color = "green";
    }
}

// Event Listeners initialization
document.addEventListener("DOMContentLoaded", function() {
    loadSavedPreference();
    
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", validateContactForm);
    }
});

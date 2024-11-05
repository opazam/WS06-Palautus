// Function to calculate the number of days between two dates
function calculateDays() {
    // Set the start date (e.g., January 1, 2022)
    const startDate = new Date('2024-10-31');
    
    // Get the current date
    const currentDate = new Date();
    
    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - startDate;
    
    // Convert time difference from milliseconds to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    // Display the result in the HTML element
    document.getElementById('days').textContent = daysDifference;
}

// Run the function when the page loads
window.onload = calculateDays;
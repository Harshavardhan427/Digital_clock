function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    // Determine AM or PM and convert to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format, with 12 for noon/midnight
    hours = String(hours).padStart(2, '0');

    // Display time with blinking colon and AM/PM
    document.getElementById('time').innerHTML = `${hours}<span class="blink">:</span>${minutes}:${seconds} ${ampm}`;

    // Display date in a friendly format
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    document.getElementById('date').innerHTML = now.toLocaleDateString(undefined, options);
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock
updateClock();

//Create a function which takes end date and do the countdown

function countdown(endDate) {
  // Element which holds the timer
  const timerElement = document.getElementById("timer");
  //update the countdown every second
  const intervalID = setInterval(updateCountdown, 1000);
  //Countdown function
  function updateCountdown() {
    //holds the current time
    const now = new Date().getTime();
    //cal difference between now and end date
    const diff = endDate - now;

    //cal for days, hours, minutes and seconds
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    //Display the countdown
    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    //Check if the countdown ended if ended display a message
    if (diff < 0) {
      // stops the timerinterval which is running every second
      clearInterval(intervalID);
      timerElement.innerHTML = "countdown ended";
    }
  }

  // Now the call the update count down to display the countdown

  updateCountdown();
}
// set the end date
countdown(new Date("2023-05-25T24:00:00.000Z"));

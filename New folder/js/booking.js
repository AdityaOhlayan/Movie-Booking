// js/booking.js

const seatData = Array.from({ length: 30 }, (_, i) => ({
    seatNumber: i + 1,
    status: "available",
  }));
  
  document.addEventListener("DOMContentLoaded", () => {
    const seatsContainer = document.getElementById("seats-container");
    const selectedSeats = [];
    const pricePerSeat = 150;
  
    // Seat Selection Page
    if (seatsContainer) {
      seatData.forEach((seat) => {
        const seatEl = document.createElement("div");
        seatEl.className = "seat";
        seatEl.innerText = seat.seatNumber;
        seatEl.addEventListener("click", () => {
          if (selectedSeats.includes(seat.seatNumber)) {
            selectedSeats.splice(selectedSeats.indexOf(seat.seatNumber), 1);
            seatEl.classList.remove("selected");
          } else {
            selectedSeats.push(seat.seatNumber);
            seatEl.classList.add("selected");
          }
        });
        seatsContainer.appendChild(seatEl);
      });
  
      document.getElementById("proceed-booking").addEventListener("click", () => {
        localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
        localStorage.setItem("movieName", "Sample Movie");
        localStorage.setItem("totalAmount", selectedSeats.length * pricePerSeat);
        window.location.href = "booking.html";
      });
    }
  
    // Booking Summary Page
    const seatList = document.getElementById("selected-seats");
    const movieName = document.getElementById("movie-name");
    const total = document.getElementById("total-amount");
  
    if (seatList && movieName && total) {
      const storedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
      const storedMovie = localStorage.getItem("movieName") || "N/A";
      const storedTotal = localStorage.getItem("totalAmount") || 0;
  
      seatList.innerText = storedSeats.join(", ");
      movieName.innerText = storedMovie;
      total.innerText = storedTotal;
    }
  
    const payBtn = document.getElementById("pay-now");
    if (payBtn) {
      payBtn.addEventListener("click", () => {
        alert("Payment successful! E-ticket has been sent.");
        window.location.href = "index.html";
      });
    }
  });
  
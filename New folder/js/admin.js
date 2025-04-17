// js/admin.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-movie-form");
    const list = document.getElementById("admin-movie-list");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = form.elements[0].value;
      const genre = form.elements[1].value;
      const duration = form.elements[2].value;
      const poster = form.elements[3].files[0]?.name || "default.jpg";
  
      const card = document.createElement("div");
      card.className = "movie-card";
      card.innerHTML = `
        <img src="images/${poster}" alt="${title}">
        <h3>${title}</h3>
        <p>${genre} - ${duration} min</p>
      `;
  
      list.appendChild(card);
      form.reset();
      alert("Movie added to listings.");
    });
  });
  
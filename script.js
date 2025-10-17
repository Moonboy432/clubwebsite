document.querySelectorAll(".show-overlay").forEach(btn => {
  btn.addEventListener("click", function() {
    this.closest(".card").querySelector(".overlay").classList.remove("d-none");
  });
});

document.querySelectorAll(".close-overlay").forEach(btn => {
  btn.addEventListener("click", function() {
    this.closest(".overlay").classList.add("d-none");
  });
});


/*-------------------FORM SUBMISSION----------------*/
document.getElementById("entryform").addEventListener("submit", async function (e) {
  e.preventDefault();

  const first_name = document.getElementById("first_name").value;
  const last_name = document.getElementById("last_name").value;
  const email = document.getElementById("email").value;
  const nationality = document.getElementById("nationality").value;
  const player_wing = document.getElementById("player_wing").value;
  

  fetch("http://localhost:3000/add-user", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      email: document.getElementById("email").value,
      nationality: document.getElementById("nationality").value,
      player_wing: document.getElementById("player_wing").value,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error());
});

const form = document.getElementById('entryform');
const successMsg = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  successMsg.classList.remove('d-none');
  form.reset();
});
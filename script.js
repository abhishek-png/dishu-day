const messages = [
  { img: "img/1.jpeg", text: "You're my sunshine every day ☀️" },
  { img: "img/2.jpeg", text: "With you, life feels complete 💑" },
  { img: "img/3.jpeg", text: "Our laughs are my favorite music 🎵" },
  { img: "img/4.jpeg", text: "You’re my forever person 💍" },
  { img: "img/5.jpeg", text: "Every memory with you is magic ✨" },
  { img: "img/6.jpeg", text: "You have the kindest heart 💗" },
  { img: "img/7.jpeg", text: "With you, every moment matters 🕰️" },
  { img: "img/8.jpeg", text: "Thank you for being YOU 🌷" },
  { img: "img/9.jpeg", text: "I’m proud of the love we share 💫" },
  { img: "img/10.jpeg", text: "Even a thousand lifetimes wouldn't be enough with you ❤️" },
  { img: "img/11.jpeg", text: "You're the most beautiful chapter of my life 📖" },
  { img: "img/12.jpeg", text: "Happy Girlfriend’s Day, my Dishu! 💕" }
];

function openPopup(index) {
  const popup = document.getElementById("popup");
  const img = document.getElementById("popup-img");
  const text = document.getElementById("popup-text");

  img.src = messages[index].img;
  text.innerText = messages[index].text;

  popup.style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

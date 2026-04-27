const quotes = [
  "I woke up. I screamed. I got food. Life is good.",
  "I saw a bug. I lost the bug. I am still thinking about it.",
  "Human was sleeping. I fixed that.",
  "I don’t run. I zoom.",
  "That corner? Mine now.",
  "Nap. Wake. Chaos. Repeat.",
  "I heard food. It was not for me. This is unacceptable.",
  "I sit. I judge. I nap.",
  "Everything belongs to me. Including you."
];

const hour = new Date().getHours();
const index = Math.floor(hour / 2) % quotes.length;

document.getElementById("chikki-quote").innerText = quotes[index];

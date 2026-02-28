"use strict";

const BIRDS = {
  pardalote: {
    img: "http://www.outgrabe.net/bird00.jpg",
    text: "Pardalote by fir0002 (CC-by-NC)",
    alt: "Pardalote bird",
  },
  swamphen: {
    img: "http://www.outgrabe.net/bird01.jpg",
    text: "Purple swamp hen by Toby Hudson (CC-by-SA)",
    alt: "Purple swamp hen bird",
  },
  stilt: {
    img: "http://www.outgrabe.net/bird02.jpg",
    text: "White-headed Stilt by JJ Harrison (CC-by-SA)",
    alt: "White-headed stilt bird",
  },
  thornbill: {
    img: "http://www.outgrabe.net/bird03.jpg",
    text: "Inland Thornbill by Peter Jacobs (CC-by-SA)",
    alt: "Inland thornbill bird",
  },
  robin: {
    img: "http://www.outgrabe.net/bird04.jpg",
    text: "Rose Robin by JJ Harrison (CC-by-SA)",
    alt: "Rose robin bird",
  },
};

function setBird(key) {
  const bird = BIRDS[key];
  const img = document.getElementById("birdImg");
  const p = document.getElementById("birdCredit");

  img.src = bird.img;
  img.alt = bird.alt;
  p.textContent = bird.text;

  // Extra: active-state UI
  document.querySelectorAll(".bird-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.bird === key);
  });
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);

  // Extra: remember theme
  localStorage.setItem("theme", next);
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    document.documentElement.setAttribute("data-theme", saved);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  document.querySelectorAll(".bird-btn").forEach((btn) => {
    btn.addEventListener("click", () => setBird(btn.dataset.bird));
  });

  document.getElementById("toggleThemeBtn").addEventListener("click", toggleTheme);

  // Default bird (exactly one bird shown on load)
  setBird("pardalote");
});
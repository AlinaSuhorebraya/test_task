import { FullInfo } from "./Components/FullInfo.js";

export function listen() {
  const table = document.querySelector("table");

  table.addEventListener("click", (e) => {
    if (e.target.textContent != "View Details") return;

    table.classList.add("hidden");

    if (document.querySelector(".container")) {
      document.querySelector(".container").remove();
    }

    document
      .querySelector("#root")
      .appendChild(FullInfo(e.target.dataset.name.toLowerCase()));

    listenFullData();
  });
}

function listenFullData() {
  const table = document.querySelector("table");

  document.querySelector(".container").addEventListener("click", (e) => {
    if (e.target.textContent != "Back") return;

    document.querySelector(".container").classList.toggle("hidden");
    table.classList.remove("hidden");
  });
}

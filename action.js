import { Description } from "./Description.js";

export function listen() {
    let table = document.querySelector("table");
    let container = document.querySelector('.container')

  table.addEventListener("click", (e) => {
    if (e.target.textContent != "View Details") return;

    table.classList.add("hidden");
    if (document.querySelector(".container")) {
    document.querySelector(".container").remove();
    }
    document
      .querySelector("#root")
      .appendChild(Description(e.target.dataset.name.toLowerCase()));

    document.querySelector(".container").addEventListener("click", (e) => {
      if (e.target.textContent != "Back") return;

      document.querySelector(".container").classList.toggle("hidden");
     table.classList.remove("hidden");
    });
  });
}

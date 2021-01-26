import { getData } from "./data.js";

export function Description(url) {
  const container = document.createElement("div");
  container.classList.add("container");

  getData(
    `https://services.odata.org/V4/(S(w1mzm3f22b0ivnydrywt1lgx))/TripPinServiceRW/People('${url}')`
  ).then((data) => {
  
    let str = "";

    Object.entries(data).forEach((e) => {
      str += `
    <tr>
      <td >${e[0]}</td>
      <td>${e[1]}</td>
    </tr>
 `;
    });

    container.insertAdjacentHTML(
      "beforeend",
      `<table class = "table table-dark"><thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Value</th>
    </tr>
  </thead>` +
        str +
        `</table><button  type="button" class="btn btn-lg btn-primary">Back</button>`
    );
  });

  return container;
}

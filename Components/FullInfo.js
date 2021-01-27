import { getData } from "../data.js";
import { RowContentFullInfo } from "./RowContentFullInfo.js";

export function FullInfo(url) {
  const container = document.createElement("div");
  container.classList.add("container");

  getData(
    `https://services.odata.org/V4/(S(w1mzm3f22b0ivnydrywt1lgx))/TripPinServiceRW/People('${url}')`
  ).then((data) => {
  
    let mainInfo = "";
    let adressInfo = "";
    let adressData = "";

    if (typeof data.AddressInfo === "string") {
      adressInfo = data.AddressInfo;
    } else {
      adressData = data.AddressInfo.map((e) => ({
        CountryRegion: e.City.CountryRegion,
        Name: e.City.Name,
        Region: e.City.Region,
        address: e.Address,
      }));

      adressData.forEach((e) => {
        Object.entries(e).forEach((el) => {
          adressInfo += RowContentFullInfo(el[0], el[1]);
        });
      });
    }

    Object.entries(data).forEach((e) => {
      if (e[0] === "AddressInfo") return null;

      mainInfo += RowContentFullInfo(e[0], e[1]);
    });

    container.insertAdjacentHTML(
      "beforeend",
      `<table class = "table table-dark"><thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Main info</th>
    </tr>
  </thead>` +
        mainInfo +
        `</table> <table class = "table table-dark"><thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Adress info</th>
        </tr>
      </thead>` +
        adressInfo +
        `</table><button  type="button" class="btn btn-lg btn-primary">Back</button>`
    );
  });

  return container;
}

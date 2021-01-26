import { getData } from "./data.js";

export function Description(url) {
  const container = document.createElement("div");
  container.classList.add("container");

  getData(
    `https://services.odata.org/V4/(S(w1mzm3f22b0ivnydrywt1lgx))/TripPinServiceRW/People('${url}')`
  ).then((data) => {
    console.log("data ", data);

    let mainInfo = "";
    let adressInfo = "";
    let adressData = "";

    if(typeof data.AddressInfo === 'string'){
      adressInfo = data.AddressInfo
      
    } else {
      adressData = data.AddressInfo.map((e) => ({
        CountryRegion: e.City.CountryRegion,
        Name: e.City.Name,
        Region: e.City.Region,
        address: e.Address,
      }));

      adressData.forEach((e) => {
        Object.entries(e).forEach((el) => {
          adressInfo += `
      <tr>
        <td >${el[0]}</td>
        <td>${el[1]}</td>
      </tr>
    `;
        });
      });
    }

    Object.entries(data).forEach((e) => {
      if (e[0] === "AddressInfo") return null;

      mainInfo += `
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

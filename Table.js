import { getData } from "./data.js";
import { RowContent } from "./RowContent.js";
import {listen} from './action.js'



function Table() {
  const table = document.createElement("table");
  table.classList.add("table", "table-dark");
  let str = `<thead>
  <tr>
  <th scope="col">First name</th>
  <th scope="col">Last name</th>
  <th scope="col">Gender</th>
  <th scope="col">Username</th>
  <th scope="col">E-mails</th>
  <th scope="col">Adress</th>
  <th scope="col"></th>
  </tr>
  </thead>`;

  table.innerHTML += str;

  getData('https://services.odata.org/V4/(S(w1mzm3f22b0ivnydrywt1lgx))/TripPinServiceRW/People').then((data) => {
    data.forEach((e) => {
      table.append(RowContent(e));
    });
  });
  return table;
}

document.querySelector("#root").appendChild(Table());

listen();

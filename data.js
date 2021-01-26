export function getData(url) {
  return fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      if (data.value != undefined) {
        data.value.map((data) => {
          data.AddressInfo.length == 0
            ? (data.AddressInfo = "no adress")
            : (data.AddressInfo = data.AddressInfo[0].Address);
        });
        return data.value;
      } else {
        data.AddressInfo.length == 0
          ? (data.AddressInfo = "no adress")
          : (data.AddressInfo = data.AddressInfo[0].Address);
      }
      return data;
    })
    .catch((err) => {
      console.log("Fetch Error :", err);
    });
}

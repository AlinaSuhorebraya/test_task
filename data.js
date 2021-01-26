export function getData(url) {
  return fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      if (data.value) {   
        data.value.map((data) => {
          !data.AddressInfo.length
            ? (data.AddressInfo = "no adress")
            : (data.AddressInfo = data.AddressInfo[0].Address);
        });
        return data.value;
      } else {
        !data.AddressInfo.length
          ? (data.AddressInfo = "no adress")
          : (data.AddressInfo = data.AddressInfo);
      }
      return data;
    })
    .catch((err) => {
      console.log("Fetch Error :", err);
    });
}

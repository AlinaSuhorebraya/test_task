export function RowContent(e) {
    const node = document.createElement("tr");
      let emails = '';
       e.Emails.forEach(element=>{
        emails +=  (`<li >${element}</li>`)
      })
      
    let str = `
          <th scope="row">${e.FirstName}</th>
          <td>${e.LastName}</td>
          <td>${e.Gender}</td>
          <td>${e.UserName}</td>
          <td><ul class="list-group">
        ${emails}
        </ul></td>
          <td>${e.AddressInfo}</td>
          <td><button data-name = '${e.UserName}' type="button" class="btn btn-lg btn-primary">View Details</button></td>

          `;
    node.innerHTML += str;
    return node;
  }
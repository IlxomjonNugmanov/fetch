const url = 'https://jsonplaceholder.typicode.com/users'

let user = fetch(url)
  .then(res => res.json())
  .then(res  => ui(res) )
  .catch()


function ui(arr) {
    
    arr.forEach(element => {
        let li = document.createElement('li')
        let ul = document.querySelector(".ul")
    
        // console.log(ul);

        li.innerHTML = `
          <h2>ID: ${element.id}</h2>
          <hr>
          <h3>NAME:  ${element.name}</h3>
          <h3>USERNAME: ${element.username}</h3>
          <h4>EMAIL: ${element.email}</h4>
          <h4>PHONE: ${element.phone}</h4>
          <h4>WEBSITE: ${element.website}</h4>
          <h4>ADDRESS: Street: ${element.address.street}, <br> City: ${element.address.city}, <br> Suit: ${element.address.suite}</h4>
          <h4>GEO: Lat: ${element.address.geo.lat}, Lng: ${element.address.geo.lng}</h4>
          <h4>ZIPCODE: ${element.address.zipcode}</h4>
          <h4>COMPANY: ${element.company.name}</h4>

          
        `
    
      console.log(li);
      console.log(element);

    
       ul.append(li)
    });
}







// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
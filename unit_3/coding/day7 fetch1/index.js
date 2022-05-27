// API :-

/*

1. Fulfiled // Give us the data 
2. Pending  // Delay/ take time
3. Rejected // May reject our request

*/

let x = fetch(); // It will take time
console.log(x);

Youtube, Google map, facebook, twitter

const url = "https://reqres.in/api/users"; // Destination

fetch(url)
  .then(function (res) {
    Readable + Stream( data in chunks )
    Collect the stream
    return res.json(); // res.collect()
  })
  .then(function (res) {
    console.log(res);
  })
  .catch(function (err) {
    console.log(err);
  });

Async Await

async function getData() {
  try {
    let res = await fetch(url);

    let users = await res.json();
    append(users.data);
    console.log(users.data);
  } catch (err) {
    console.log(err);
  }
}

getData();

function append(data) {
  let container = document.getElementById("container");
  data.forEach(function (el) {
    let img = document.createElement("img");
    img.src = el.avatar;

    let h2 = document.createElement("h2");
    h2.innerText = el.first_name;

    let p = document.createElement("p");
    p.innerText = el.email;

    let div = document.createElement("div");
    div.append(img, h2, p);

    container.append(div);
  });
// }

const url = "https://fakestoreapi.com/products";

async function getData() {
  try {
    let res = await fetch(url);
    let products = await res.json(); // Collect data
    append(products);
    console.log(products);
  } catch (err) {
    console.log(err);
  }
}

getData();

function append(data) {
  let container = document.getElementById("container");
  data.forEach(function (el) {
    let img = document.createElement("img");
    img.src = el.image;

    let h2 = document.createElement("h2");
    h2.innerText = el.title;

    let p = document.createElement("p");
    p.innerText = el.description;

    let div = document.createElement("div");
    div.append(img, h2, p);

    container.append(div);
  });
}

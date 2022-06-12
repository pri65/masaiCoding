let id;
let parent = document.querySelector('#list');
const getData = async (address) => {
  try {
    let res = await fetch(address);
    let data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

getData('https://www.themealdb.com/api/json/v1/1/random.php').then((res) => {
  console.log(res);
  append(res.meals);
});

function debounceFunc(search, delay) {
  if (id) clearTimeout(id);
  id = setTimeout(function () {
    search();
  }, delay);
}

var search = async () => {
  let q = document.querySelector('#query').value;
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`;
  let data = await getData(url);
  append(data.meals);
};

var append = (data) => {
  parent.innerHTML = null;
  data.forEach((el) => {
    let card = document.createElement('div');
    let fName = document.createElement('h3');
    fName.innerText = el.strMeal;
    let img = document.createElement('img');
    img.src = el.strMealThumb;
    let imgBox = document.createElement('div');
    imgBox.append(img);
    let ins = document.createElement('p');
    ins.innerText = el.strInstructions;
    card.append(imgBox, fName, ins);
    parent.append(card);
  });
  console.log(data);
};

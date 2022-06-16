let id;
let parent = document.querySelector('#list');
const getData = async (q) => {
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${q}`;
  let res = await fetch(url);
  let data = await res.json();
  return data;
};
getData('Pizza').then((res) => {
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
  let data = await getData(q);
  append(data.meals);
};

var append = (data) => {
  parent.innerHTML = null;
  data.forEach(() => {
    let card = document.createElement('div');
    let fName = document.createElement('h3');
  });
  console.log(data);
};
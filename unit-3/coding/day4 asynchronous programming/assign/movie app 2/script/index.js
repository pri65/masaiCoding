let form = document.querySelector('#form');
let movieName = '';
let parent = document.querySelector('.box');
let errBox = document.querySelector('.err-box');
form.addEventListener('submit', function () {
  errBox.innerHTML = '';
  event.preventDefault();
  movieName = form.movie.value;
  let url = `https://www.omdbapi.com/?s=${movieName}&apikey=cb0c42ce`;

  async function getData() {
    try {
      let res = await fetch(url);
      let data = await res.json();
      append(data.Search);
    } catch (err) {
      let errmsg = document.createElement('h1');
      let gif = document.createElement('img');
      gif.src =
        'https://cdn.dribbble.com/users/1208688/screenshots/4563859/no-found.gif';
      gif.style.width = '400px';
      errmsg.innerText = '404 error';
      errBox.style.textAlign = 'center';
      errBox.style.color = 'grey';
      errBox.append(gif, errmsg);
    }
  }
  getData();
  parent.innerText = ' ';
  function append(data) {
    data.forEach(function (el) {
      let box = document.createElement('div');
      let imgBox = document.createElement('div');
      let img = document.createElement('img');
      img.src = el.Poster;
      let h2 = document.createElement('h2');
      h2.innerText = el.Title;
      let p = document.createElement('p');
      p.innerText = el.Year;
      let id = document.createElement('p');
      id.innerText = el.imdbID;
      imgBox.append(img);
      box.append(imgBox, h2, p, id);
      parent.append(box);
    });
  }
});

// console.log('Hello');
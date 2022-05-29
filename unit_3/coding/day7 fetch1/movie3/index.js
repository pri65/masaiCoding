let form = document.querySelector('#form');
let name = '';
let parent = document.querySelector('.box');
let errBox = document.querySelector('.err-box');
form.addEventListener('submit', function () {
  event.preventDefault();
  name = form.movie.value;
  errBox.innerHTML = '';
  let url = `https://www.omdbapi.com/?s=${name}&apikey=cb0c42ce`;

  async function getData() {
    try {
      let res = await fetch(url);
      let data = await res.json();
      append(data.Search);
    } catch (err) {
		console.log(err)
      let errmsg = document.createElement('h1');
      let notfound = document.createElement('h2');
      errmsg.innerText = '404 error';
      notfound.innerText = 'Movies not found';
      errBox.style.textAlign = 'center';
      errBox.style.color = 'grey';
      errBox.append(errmsg, notfound);
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
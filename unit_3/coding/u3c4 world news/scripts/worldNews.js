let news_result = document.getElementById("news_result");

const newsData = async() => {
    let user = JSON.parse(localStorage.getItem("user"))
  let result = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${user[0].country}`)
  let data = await result.json();
  console.log(data.articles)

  for(let i=0; i< data.articles.length; i++) {
    let div = document.createElement('div')
    div.setAttribute('class', "data")
    let h3 = document.createElement('h3')
    h3.innerText = data.articles[i].title;
    let img = document.createElement('img')
    img.src= data.articles[i].urlToImage
    let p = document.createElement('p');
    p.innerText =data.articles[i].author;

    div.append(h3,img,p);
    news_result.append(div);
  }
}

function sidebarUser() {
    console.log("hello")
    let sidebar = document.getElementById("sidebar");
    let user = JSON.parse(localStorage.getItem("user")) || []
    let div1 = document.createElement('div')
    div1.setAttribute('class', "data")
    let h3 = document.createElement('h3')
    h3.innerText = user[0].name;
    let img = document.createElement('img')
    img.src= user[0].image;
    let p = document.createElement('p');
    p.innerText =user[0].email;
    let p1 = document.createElement('p');
    p1.innerText =user[0].country;
    div1.append(h3, img, p, p1);
    sidebar.append(div1)
}

sidebarUser()
newsData()


//SPREAD
//at first everything is in packet then we spread it
//syntax for spread is ...
// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let newArr=[...arr1,...arr2]
// console.log(newArr)
// output=[1,2,3,4,5,6]


//REST
//we can say that one is mine and remaining is yours
// function fun(a,...b){
//     console.log(a)
//     console.log(b)
// }
// fun("Box1","Box2","Box3","Box4");
// output=Box1;
// ["Box2","Box3","Box4"]
//NOTE:-> we cant write fun(...b,a)
//we cant also write;-> fun(a,b,...c)



//youtube
//url
//fetch()

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=${api_key}

//YOUTUBE
//first of all we create a function (an arrow function)
//then fetch url
//also get query because we use it in the url
//if we use fetch alone it will return a promise
//so to handle this promise we use await with fetch
//and for await await we have to make function async
//console.log(res);
// this will return data in chunks
//so to get it in collected form we use json
//let data=res.json();
//console.log(data)
//now this (data=res.json()) will return a promise 
//so to deal with it we use await

const api_key="AIzaSyBa-WI4hKi9npmNiFi2KrGPytuPgUnaA5I";
let search = async () =>{
    try {
    let query=document.getElementById("query").value;
    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
    let res= await fetch(url);
    let data=await res.json();
    console.log(data)
} catch (err) {
    console.log(err);
}
};

//NOW APPEND THE DATA ON DOM
//first create a function append
//we want to append the data in container so get it
//as in console data is in the form of array so we iterate using forEach
//inside foreach pass the data which i want. like i want name, price, img etc pass it.first create them then pass.
//or we also do it like this : foreach(({id:{videoId}, snippet:{title}})).
//then will create element iframe
//bcz it gives us vdo id
//and this gonna be dynamic as we search for diff videos
//so now we will call this append function below line 52 , as let will not let you access it.

let append=(data)=>{
    let container=document.getElementById("results");

    data.forEach((el) => {
        let div=document.createElement("div")
        let iframe=document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/${videoId}`
        let h3=document.createElement("h3");

    })
}

//this id=s our vdo id
/*<iframe width="560" height="315"
 src="https://www.youtube.com/embed/zdp0zrpKzIE" 
 title="YouTube video player"
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
   picture-in-picture" 
  allowfullscreen>
  </iframe> */
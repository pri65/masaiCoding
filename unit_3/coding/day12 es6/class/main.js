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


//api key=AIzaSyBa-WI4hKi9npmNiFi2KrGPytuPgUnaA5I
//youtube
//url
//fetch()

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=${api_key}

//YOUTUBE
//first of all we create a function (an arrow function)
let search = () =>{
    //then fetch url
    //also get query because we use it in the url
    let query=document.getElementById("query").value;
    let url=https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=[YOUR_API_KEY;
    let res= 
}
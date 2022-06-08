let getData=async(url) =>{
    //this function will fetch the data and return the data.
    let res=await fetch(url);
    let data=await res.JSON();
   return data; 
   };

   let append=(data,container) =>{

   data.forEach((el)=>{
    let div=document.createElement("div")
    let p=document.createElement("p")
    p.innerText=el.title;
    let img=document.createElement("img")
    img.src=el.image;

div.append(img,p);
container.append(div);
});
};
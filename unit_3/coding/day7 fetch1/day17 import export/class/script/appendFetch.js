let getData=() =>{
    let res=await fetch("https://fakestoreapi.com/products/category/jewelery");
    let data=await res.JSON();
    append(data);
    console.log(res);   
   };
   getData();
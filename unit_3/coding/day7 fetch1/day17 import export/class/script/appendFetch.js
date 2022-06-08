let getData=async(url) =>{
    let res=await fetch(url);
    let data=await res.JSON();
   return data; 
   };
   
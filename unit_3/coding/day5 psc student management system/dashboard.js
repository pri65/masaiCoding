function append(){
    let data=JSON.parse(localStorage.getItem("Student")) || [];

    data.forEach(function(el){
        let div=document.createElement('div');
    let p=document.createElement('p');
    p.innerText=el.names;
    let q=document.createElement('q');
    q.innerText=el.course;
    let r=document.createElement('r');
    r.innerText=el.unit;
    let img=document.createElement('img');
    img.src=el.img;
    let s=document.createElement('s');
    s.innerText=el.batch;

});
    
}

append();
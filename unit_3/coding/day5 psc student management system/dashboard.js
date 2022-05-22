function append(){
    let data=JSON.parse(localStorage.getItem("Student")) || [];
let container=document.getElementById("container");

    data.forEach(function(el,index){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=el.img;
    let p=document.createElement("p");
    p.innerText=el.name;
    let q=document.createElement("q");
    q.innerText=el.course;
    let r=document.createElement("r");
    r.innerText=el.unit;
    let s=document.createElement("s");
    s.innerText=el.batch;
    let btn=document.createElement("button");
    btn.innerText=remove;
    btn.setAttribute("click",function(){
        remove(index);
    });

    div.append(img,p,q,r,s,btn);
    container.append(div);
});
}
append();

function remove(index){
    let data=JSON.parse(localStorage.getItem("Student")) || [];

    let newData=data.filter(function(el,i){
        if(i===index){
        let trash=JSON.parse(localStorage.getItem("trash")) || [];
        trash.push(el);
        localStorage.setItem('trash',JSON.stringify(trash));
        } else {
            return i !== index;
        }
    });

    localStorage.setItem("students",JSON.stringify(newData));
    append();


    console.log(newData);
}



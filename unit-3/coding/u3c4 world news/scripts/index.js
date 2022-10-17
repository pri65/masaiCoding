

function user(p,n,e,c) {
    this.image=p;
    this.name=n; 
    this.email=e;
    this.country=c;
}
console.log("hi")

document.getElementById("submit").addEventListener("click",info)
function info(e) {
    console.log("hello")
    e.preventDefault();
    let user_form=document.getElementById("user-form");
    let user_pic=document.getElementById("user_pic").value;
    let user_name=document.getElementById("user_name").value;
    let user_email=document.getElementById("user_email").value;
    let user_country=document.getElementById("user_country").value;
    let country_code;

    if(user_country === 'India') {
        country_code = 'in'
    } else if(user_country === 'USA' ) {
        country_code = 'us'
    } else if(user_country === 'China' ) {
        country_code = 'ch'
    } else if(user_country === 'UK' ) {
        country_code = 'uk'
    } else if(user_country === 'Newzeland') {
        country_code = 'nz'
    }

    console.log(user_country, country_code)
    let u1=new user(user_pic,user_name,user_email, country_code);
    console.log(u1)
    let info=JSON.parse(localStorage.getItem("user")) || [];
    info.push(u1);
    localStorage.setItem("user",JSON.stringify(info));
    console.log(u1);
}

function Student(n,c,u,i,b){
  this.name=n;
  this.course=c;
  this.unit=u;
  this.image=i;
  this.batch='Ft-Web{b}';  
}

function storeData(e){
    //e is for event
    //this function will collect all the data from input box and create an object out of it and store it to the local storage
    e.preventDefault();
    //this preventDefault is to prevent site from reloading
    let form=document.getElementById("students_data");
    let name=form.name.value;  
    //form.id.value
    let course=form.course.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;

    let s1=new Student(name,course,unit,image,batch);
    console.log(s1);
    
}
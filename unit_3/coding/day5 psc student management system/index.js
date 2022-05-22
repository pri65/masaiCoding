

function storeData(){
    //this function will collect all the data from input box and create an object out of it and store it to the local storage
    let form=document.getElementById("students_data");
    let name=form.name.value;  
    //form.id.value
    let course=form.course.value;
    let unit=form.unit.value;
    let image=form.image.value;
    let batch=form.batch.value;
}
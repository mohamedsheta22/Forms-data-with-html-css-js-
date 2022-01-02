var selectedRow = null;
function onFormSubmit(){
    if(validate()){
    var formdata= readFormData();
    if(selectedRow==null)
    insertNewRecord(formdata);
    else
    updateRecord(formdata)

    resetform();
    }
}
function readFormData(){
    var formdata ={};
    formdata["fullname"]=document.getElementById("fullname").value ;
    formdata["id"]=document.getElementById("id").value ;
    formdata["email"]=document.getElementById("email").value ;
    formdata["password"]=document.getElementById("password").value ;
return formdata;
}
function insertNewRecord(Data){
 var table = document.getElementById("valuelist").getElementsByTagName ('tbody')[0];
 var newrow = table.insertRow(table.length);
 cell1 =newrow.insertCell(0);
 cell1.innerHTML =Data.fullname;
 cell2 =newrow.insertCell(1);
 cell2.innerHTML =Data.id;
 cell3 =newrow.insertCell(2);
 cell3.innerHTML =Data.email;
 cell4 =newrow.insertCell(3);
 cell4.innerHTML =Data.password;
 cell4 =newrow.insertCell(4);
 cell4.innerHTML =`<a onClick="onEdit(this)">Edit</a>
                   <a onClick="onDelete(this)">Delete</a>`;
 
}
function onEdit(td){
    selectedRow= td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("id").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("password").value = selectedRow.cells[3].innerHTML;
}
function resetform(){
    document.getElementById("fullname").value="";
    document.getElementById("id").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
    
}
function updateRecord(formdata){
    selectedRow.cells[0].innerHTML=formdata.fullname;
    selectedRow.cells[1].innerHTML=formdata.id;
    selectedRow.cells[2].innerHTML=formdata.email;
    selectedRow.cells[3].innerHTML=formdata.password;

}
function onDelete(td){
    if(confirm("Are you sure to delete this record?")){
        row = td.parentElement.parentElement;
        document.getElementById("valuelist").deleteRow(row.rowIndex);
        resetform(); 
    }
}
function validate(){
    isValid= true;
    if(document.getElementById("fullname").value==""){
        isValid=false;
        document.getElementById("fullnameValidationError").classList.remove("hide");

    }
    else {
        isValid= true;
    if(!document.getElementById("fullnameValidationError").classList.contains("hide"))
        document.getElementById("fullnameValidationError").classList.add("hide");
        return isValid;
    }
}
function validate() 
{
    var text = "";

   
    if(document.myForm.name.value == ""){
        text = "Name Cannot be Empty";
        document.getElementById('validationCustom').innerHTML = text;
        document.myForm.name.focus();

        return false;
    }
    if(document.myForm.date.value == ""){
        text = "Date Cannot be Empty";
        document.getElementById('validationCustom').innerHTML = text;
        document.myForm.date.focus();

        return false;
    }
    if(document.myForm.people.value == ""){
        text = "people Cannot be Empty";
        document.getElementById('validationCustom').innerHTML = text;
        document.myForm.date.focus();

        return false;}

     var input = document.myForm.people.value;
        if(isNaN(input))
        {
         document.getElementById("validationCustom").innerHTML ="Enter Numeric value";
         return false;
        }
    

    if(document.myForm.email.value == ""){
        text = "Email Cannot be Empty";
        document.getElementById('validationCustom').innerHTML = text;
        document.myForm.email.focus();

        return false;
    }
    
    var emailId = document.myForm.email.value ;

    var atposn = emailId.indexOf("@");
    var dotposn = emailId.lastIndexOf(".");


    if(atposn < 1 || dotposn - atposn < 2 ) {
        text = "Please Enter Valid Email";
        document.getElementById('validationCustom').innerHTML = text;
        document.myForm.email.focus();

        return false;
    }
    if(document.myForm.time.value == ""){
        text = "time Cannot be Empty";
        document.getElementById('validationCustom').innerHTML = text;
        document.myForm.time.focus();

        return false;}

     var input = document.myForm.time.value;
        if(isNaN(input))
        {
         document.getElementById("validationCustom").innerHTML ="Enter valid time";
         return false;
        }
    
}
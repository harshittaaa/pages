        //var mseg= document.getElementById('msg');
         //mseg.innerHTML="Name must be atleast 3 characters";
         console.log('Survey started');
function fvalidate(){
    var fname=document.getElementById('fname').value;
    var lname=document.getElementById('lname').value;
    var mail=document.getElementById('mail').value;
    var phone=document.getElementById('phone').value;
    var pattern=/^\d{10}$/;
    var age= document.getElementById('age').value;

    if(fname=="" || fname.length<3){
        var fname=document.getElementById('fname').value;
         var mseg= document.getElementById('msg');
         mseg.innerHTML="Name must be atleast 3 characters";
        // msg.style.color="red"; 
    }
    else{
        var lname=document.getElementById('lname').value;

        if(lname==""){
        var mseg= document.getElementById('msg');
         mseg.innerHTML="Please specify your last name";
    }
    else{
        var mail=document.getElementById('mail').value;
        if(mail.length<6){

        var mseg= document.getElementById('msg');
         mseg.innerHTML="Invalid mail";
    }
    /*else{
        var phone=document.getElementById('phone').value;

        if(!phone.test(pattern)){
        var mseg= document.getElementById('msg');
         mseg.innerHTML="Please enter 10 digit phone no.";
    }*/
    else{
        var age= document.getElementById('age').value;

        if(age==""){
        var mseg= document.getElementById('msg');
         mseg.innerHTML="Please specify your age";
    }
    else{
        var mseg= document.getElementById('msg');
         mseg.innerHTML="Valid";
         mseg.style.color="green";
    }
}   
//} 
} 
} 
}
//document.getElementById('personal').addEventListener('Start Survey',fvalidate,false);
function submitfeed(){
 alert("Thanks for giving us feedback:)");
}
document.getElementById('main').addEventListener('submit',submitfeed,false);
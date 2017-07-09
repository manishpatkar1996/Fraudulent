$(document).ready(function () {

$("#login").click(function (e) { 
    var username=$("#email").val();
    var password=$("#pass").val();
    
    
   toastr.options = {
   "timeOut": "1000",
  "positionClass": "toast-top-full-width" };

    if(username=='<>=>>' && password=='<>=>>')
    {   
      
        $("#myModal").modal('hide');
       document.cookie = "status=loggedIn";
        $("#usernameMsg").show();
        $("#loginbtn").hide();
        startTimer();
        
    }else{
         toastr.error("Login Failed Please Try again");
    }
    
});
    
});

$(document).ready(function () {

     if(document.cookie.length!=0){
     console.log(document.cookie);
      var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i].split('=');
        if(c[0]=="status" && c[1]=="loggedIn"){
         $("#myModel").hide();
         $("#usernameMsg").show();
         $("#loginbtn").hide();
         break;

        }
    }
    }
});

function startTimer() {
  $(".time-container").show();
  var Time = document.getElementById('timer').innerHTML;
  var timeArray = Time.split(':');
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m==-1){
    document.getElementById('timerdiv').innerHTML="Times Up!!!!";
    $(".time-container").css("background", "#bb3838");
    return;
    }
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function togglediv(div1){
   
    var div2=document.getElementById('hiddendiv').value;
    $("#"+div2).hide();
    $("#"+div1).show();
    document.getElementById('hiddendiv').value=div1;
}
$( document ).ready(function() {
  var today = today();
  $(".getToday").html(today);



  function today() {
    var mydate = new Date();
    var dayarray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    var today = "" + dayarray[mydate.getDay()] + ", " + montharray[mydate.getMonth()] + " "
    + mydate.getDate() + ", " + mydate.getFullYear();
  
    return today;
  }
  
});

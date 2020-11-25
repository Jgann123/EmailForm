




// function emailLeads() {
// if (document.getElementById('list').value == "Bev Smith Kia’s Reprocessed Car Sale & Trade In Event") {
//   var email = document.createElement('a');
//   email.href = "mailto:gannjeremy644@gmail.com";
//   Mail.click();
// }



function sendMail() {
  if(document.getElementById("list").value == "Bev Smith Kia’s Reprocessed Car Sale & Trade In Event"){
  var link = "mailto:wesmckeehan@profitswithadvertising.com"
           + "?cc=jeremy@profitswithadvertising.com"
           + "&subject=" + encodeURIComponent("PWA Leads")
           + "&body=" + encodeURIComponent(document.getElementById('firsty').value) + "       "
           + encodeURIComponent(document.getElementById('lastName').value) + "    " 
           + encodeURIComponent(document.getElementById('Phone').value) + "     "
           + encodeURIComponent(document.getElementById('Email').value)  +  "     " 
           + encodeURIComponent(document.getElementById('Date').value) + "     "
           + encodeURIComponent(document.getElementById('Appt-Time').value)  
          
  ;
  
  window.location.href = link;
}

else {
  alert("select right event!");
}
}


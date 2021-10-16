

/*gallery*/
var fullImgBox = document.getElementById("fullImgBox");
var fullImg= document.getElementById("fullImg");
function openFullImg(photo){
    fullImgBox.style.display= "flex";
    fullImg.src= photo;
}
function closeFullImg(photo){
    fullImgBox.style.display= "none";
}

/* Form */
function validateForm(e) {
    e.preventDefault()
    var name = document.contactform.name.value
    var email = document.contactform.email.value
    var subject = document.contactform.subject.value
   if (name.length==0)
    alert(`name is required`)
    if (email.length<10)
    alert(`email is incorrect`)
   if (subject.length<4)
   alert(`please include a subject`)
    
   } ;
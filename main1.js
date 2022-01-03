document.getElementById('ContactForm').addEventListener('submit',submitForm);

//let contactInfo = firebase.database().ref("My-portfolio-contact-form");



function submitForm(e){
  e.preventDefault();

    let fullName = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let msg = document.getElementById("message").value;
  
      console.log(fullName, email,msg);
      
      saveContactInfo(fullName, email, msg);
  
      displayAlert();
  
      document.querySelector(".detailsFetch").reset();
  
}

// Save infos to Firebase
function saveContactInfo(fullName, email, msg) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        Name: fullName,
        Email : email,
        Message: msg,
    });
}


function displayAlert() {
      swal({
          title: "Thank you!",
          text: "I will contact you soon",
          icon: "success",
          button: "Done",
      });
  }











// let contactInfo = firebase.database().ref("portfolio-contact-form");

// // Listen for a submit
// document.querySelector(".detailsFetch").addEventListener("submit", submitForm);

// function submitForm(e){

//     e.preventDefault();

//     //   Get input Values
//     let fullName = document.getElementById("name").value;
//     let email = document.getElementById("mail").value;
//     let msg = document.getElementById("message").value;

//     console.log(fullName, email,msg);

//     saveContactInfo(fullName, email, msg);

//     displayAlert();

//     document.querySelector(".detailsFetch").reset();
// }

// // Save infos to Firebase
// function saveContactInfo(fullName, email, msg) {
//     let newContactInfo = contactInfo.push();

//     newContactInfo.set({
//         Name: fullName,
//         Email : email,
//         Message: msg,
//     });
// }

// function displayAlert() {
//     swal({
//         title: "Thank you!",
//         text: "I will contact you soon",
//         icon: "success",
//         button: "Done",
//     });
// }
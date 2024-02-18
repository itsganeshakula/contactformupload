const firebaseConfig = {
    apiKey: "AIzaSyDPUtDHxzJf6uFI2fPVPLOe_PqMtDmR5s4",
    authDomain: "contactform-8f14b.firebaseapp.com",
    databaseURL: "https://contactform-8f14b-default-rtdb.firebaseio.com",
    projectId: "contactform-8f14b",
    storageBucket: "contactform-8f14b.appspot.com",
    messagingSenderId: "11406830696",
    appId: "1:11406830696:web:bd01050a024f53d8889fdd"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB=firebase.database().ref("contactform");
document.getElementById("contactform").addEventListener("submit",submitForm);
function submitForm(e){
    e.preventDefault();
    var name=getElementVal('name');
    var email=getElementVal('email');
    savemessage(name,email);
    
};
const savemessage=(name,email)=>{
    var newContactForm=contactFormDB.push();
    newContactForm.set({
        name:name,
        email:email,
    });
};

const getElementVal= (id) =>{
    return document.getElementById(id).value;
};
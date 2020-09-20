
 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQCCO9enYFI1icfWzQzAqYRcp5m5V-p9Q",
    authDomain: "form-c4a83.firebaseapp.com",
    databaseURL: "https://form-c4a83.firebaseio.com",
    projectId: "form-c4a83",
    storageBucket: "form-c4a83.appspot.com",
    messagingSenderId: "753976438941",
    appId: "1:753976438941:web:3fbaf29d249ae4b0f6a474"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();

  firebase.auth().onAuthStateChanged(function(user){
    if(user){

      //user is signed in
      document.getElementById("logoutContainer").style.display="initial";
      document.getElementById("formContainer").style.display="none";

          } else {

            //no user is signed in
            document.getElementById("logoutContainer").style.display="none";
            document.getElementById("formContainer").style.display="initial";

          }

  });

      function signUp(){

      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
      promise.catch(e => alert(e.message));

      alert("You have signed up");
    }



    function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

  //  alert("Signed In " + email.value);

  //take user to a different or home page

  }    


   
   function signOut(){

    auth.signOut();
    alert("You have Signed out");
   
   }



   //auth.onAuthStateChanged(function(user){
    //if(user){

      //var email = user.email;
      //alert("Active User " + email);


      //is signed in 
    //}else{
      //  alert("No Active User");  

      //no user is signed in


    //}



    //});




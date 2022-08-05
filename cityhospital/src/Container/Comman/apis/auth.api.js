import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../../firebase";

export const signupAPI=(data)=>{
    console.log(data);
    return new Promise ((resolve,reject)=>{
 createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
  
    const user = userCredential.user;
    onAuthStateChanged(auth, (user) => {
        if (user) {
          sendEmailVerification(user)
          const uid = user.uid;
       } else {
         
        }
      });
  })
  .then((dataEmailVerification)=>{
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
          if(user.emailVerified)
          {
                resolve({payload : "email sucuessfully"});
          }
          else{
              resolve({payload:"pls email verified"});
          }
     } else {
          reject({payload : "something went wrong"});
      }
    });
  })
 .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode.localeCompare("auth/email-already-in-use")===0){
        reject({payload: "email already used"});
    }else{
      reject({payload: errorCode});
    }
  
    // ..
  });

  })

}
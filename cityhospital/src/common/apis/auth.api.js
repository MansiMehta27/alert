import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";

export const signUpAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        sendEmailVerification(user)
                        const uid = user.uid;
                    } else {

                    }
                });
            })
            .then((dataEmailVerification) => {
                onAuthStateChanged(auth, (user) => {
                    console.log(user);
                    if (user) {
                        if (user.emailVerified) {
                            resolve({ payload: "Email Successfully" });
                        } else {
                            resolve({ payload: "Please Verified Your Email Id" });
                        }
                    } else {
                        reject({ payload: "Something Went Wrong." });
                    }
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
                    reject({ payload: "Email Id Already Used" });
                } else {
                    reject({ payload: errorCode });
                }
            });
    })
}
export const loginAPI = (data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((user) => {
                if (user.user.emailVerified) {
                    resolve({ payload: user.user })
                } else {
                    reject({ payload: "Please Enter Velid Email And Password" })
                }
            })
            .catch((error) => {
                if (error.code.localeCompare("auth/user-not-found") === 0) {
                    reject({ payload: "Please Email Ragistar" })
                } else if (error.code.localeCompare("auth/wrong-password") === 0) {
                    reject({ payload: "Wrong Email Or Password" })
                } else {
                    reject({ payload: error.code });
                }
            })
    })
}
export const logoutAPI = () => {
    return new Promise((resolve, reject) => {
        signOut(auth)
            .then((user) => {
                resolve({ payload: "Logout Successfuly" })
            })
            .catch((error) => {
                reject({ payload: "Something Went Wrong" })
            })
    })
}
export const googlesignupAPI = () => {
    return new Promise((resolve, reject) => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
             
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
             
                const user = result.user;
                resolve({payload: user})
            })
            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
            
                const email = error.customData.email;
             
                const credential = GoogleAuthProvider.credentialFromError(error);
                reject({payload: errorCode})
            });
    })
}
export const forgetPassowrdAPI = (data) => {
    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, data.email)
            .then((user) => {
                resolve({ payload: "Please Check Your Email Id." })
            })
            .catch((error) => {
                reject({ payload: "Email Id Is Wrong." })
            })
    })
}
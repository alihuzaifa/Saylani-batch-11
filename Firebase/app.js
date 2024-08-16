// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// import { auth } from "./firebase.js";

// // Register
// const registerEmail = document.getElementById('rEmail')
// const registerPassword = document.getElementById('rPassword')

// // Login
// const loginEmail = document.getElementById('lEmail')
// const loginPassword = document.getElementById('lPassword')

// // Verify
// const verifyEmail = document.getElementById('verifyEmail')


// // Buttons
// const registerButton = document.getElementById('rButton')
// const loginButton = document.getElementById('lButton')
// const signoutButton = document.getElementById('signoutButton')
// const googleButton = document.getElementById('googleButton')
// const verifyButton = document.getElementById('verifyButton')

// // Google Provider
// const provider = new GoogleAuthProvider();



// registerButton.addEventListener('click', () => {

//     createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value)
//         .then((userCredential) => {
//             // Signed up 
//             const user = userCredential.user;
//             console.log("user", user);
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log("errorCode", errorCode);
//             console.log("errorMessage", errorMessage);
//             // ..
//         });

// })

// loginButton.addEventListener('click', () => {

//     signInWithEmailAndPassword(auth, loginEmail?.value, loginPassword?.value)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             console.log("Login User", user);
//             swal("Login User", user);


//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             swal("errorCode", errorCode);
//             swal("errorMessage", errorMessage);
//             console.log("errorCode", errorCode);
//             console.log("errorMessage", errorMessage);
//         });
// })

// signoutButton.addEventListener('click', () => {
//     signOut(auth).then(() => {
//         console.log("Sign-out successful")
//         // Sign-out successful.
//     }).catch((error) => {
//         console.log(error)
//     });
// })



// googleButton.addEventListener('click', () => {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             console.log("result", result)
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             const credential = GoogleAuthProvider.credentialFromResult(result);
//             const token = credential.accessToken;
//             // The signed-in user info.
//             const user = result.user;
//             // IdP data available using getAdditionalUserInfo(result)
//             // ...
//         }).catch((error) => {
//             // Handle Errors here.
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // The email of the user's account used.
//             const email = error.customData.email;
//             // The AuthCredential type that was used.
//             const credential = GoogleAuthProvider.credentialFromError(error);
//             // ...
//         });

// })

// verifyButton.addEventListener('click', () => {
//     sendPasswordResetEmail(auth, verifyEmail?.value)
//         .then(() => {
//             console.log("Password reset email sent!");

//             // Password reset email sent!
//             // ..
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             // ..
//         });

// })



// // Return Login User Data if already login

// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         const uid = user.uid;
//         console.log("user", user)
//         // ...
//     } else {
//         // window.location.href = "/login.html"
//         console.log("Signout")
//         // User is signed out
//         // ...
//     }
// });

import { collection, addDoc, Timestamp, query, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { db } from "./firebase.js";
// // Element
// const inputEl = document.getElementById('todo')

// // Button
// const addBtn = document.getElementById('addBtn');
// addBtn.addEventListener('click', async () => {
//     try {
//         const collectionRef = collection(db, "todos")
//         const data = { todo: inputEl?.value }
//         const docRef = await addDoc(collectionRef, data);
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
// })







// Blogs

const title = document.getElementById('title')
const description = document.getElementById('description')
const button = document.querySelector('.add-btn')
const addBtn = document.getElementById('add-blog-btn')
const blogGrid = document.querySelector('.blog-grid')

function convertTimestampToDate(timestamp) {
    if (!timestamp || typeof timestamp.seconds !== 'number' || typeof timestamp.nanoseconds !== 'number') {
        throw new Error('Invalid timestamp object');
    }

    // Convert Firebase timestamp to JavaScript Date object
    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);

    // Format the date as a readable string
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
}

function getBlogs() {

    const collectionRef = collection(db, "blogs")
    const q = query(collectionRef);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        blogGrid.innerHTML = ""
        querySnapshot.forEach((doc) => {
            const data = doc?.data()
            blogGrid.innerHTML += `
            <div class="blog-card">
            <div class="blog-content">
                <h2 class="blog-title">${data?.title}</h2>
                <p class="blog-description">${data?.description}</p>
                <p class="blog-date">${convertTimestampToDate(data?.createdOn)}</p>
            </div>
        </div>
            `
        });
    });
    return unsubscribe
}
addBtn.addEventListener("click", async (e) => {

    e?.preventDefault()
    button.setAttribute("disabled", true)
    button.innerHTML = "Loading..."

    try {

        const collectionRef = collection(db, "blogs")
        const data = { title: title?.value, description: description?.value, createdOn: Timestamp.fromDate(new Date()), }
        await addDoc(collectionRef, data);
        title.value = ""
        description.value = ""

    } catch (e) {

        console.error("Error adding document: ", e);

    } finally {

        button.setAttribute("disabled", false)
        button.innerHTML = "Add Blog"
    }
})
getBlogs()
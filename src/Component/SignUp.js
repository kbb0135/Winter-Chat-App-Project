import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth,storage,db} from "./firebase"
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 


const SignUp = () => {
  const navigate = useNavigate();
  const handleEvent = async (e) => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const lastName = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    const cPassword = e.target[4].value;
    const file = e.target[5].files[0];
    console.log(firstName + lastName + email + password + cPassword);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, firstName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      //console.log(res)
      // uploadTask.on(
      //   (error) => {
      //    console.log(error);
         
      //   },
      //   () => {
        
      //     // Handle successful uploads on complete
      //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      //     getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      //       console.log("helow");
      //       console.log('File available at', downloadURL);
      //       updateProfile(res.user,{
      //         firstName,
      //         photoURL: downloadURL
      //       })
      //       await setDoc(doc(db, "users", res.user.uid), {
      //        uid: res.user.uid,
      //        firstName,
      //        lastName,
      //        email,
      //        photoURL:downloadURL
      //       });
      //     });
      //   }
      //);
      //const uploadTask = uploadBytesResumable(storageRef, file);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
              default:
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            console.log('File available at', downloadURL);
            await updateProfile(res.user,{
              firstName,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid), {
             uid: res.user.uid,
             firstName,
             lastName,
             email,
             photoURL:downloadURL
            });

            await setDoc(doc(db, "userChats", res.user.uid), {

            }); 
            navigate("/");
          });
        }
      );
    }
    catch {

    }
    
    
  }
  return (
    <div>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleEvent}>
        <h3>Chat and Chat</h3>

        <label htmlFor="username">First Name</label>
        <input type="text" placeholder="Enter first name" id="firstName" />

        <label htmlFor="username">Last Name</label>
        <input type="text" placeholder="Enter last name" id="lastName" />

        <label htmlFor="username">Email</label>
        <input type="text" placeholder="Enter email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Confirm Password" id="cPassword" />
        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">
          <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdc3xvioHtGiI4h3saKEzgHBa730AqYeTWw&usqp=CAU" alt="" />
          <span>Add an avatar</span>
        </label>

        <button>Sign Up</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>
            <Link to="/" className="c">Back to Sign In</Link>
          </div>

        </div>
      </form>
    </div>
  )
}

export default SignUp
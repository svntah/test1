import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClhaabS21UT6qDx5lzxtmP4K90vF80x7A",
  authDomain: "test2-f72e6.firebaseapp.com",
  projectId: "test2-f72e6",
  storageBucket: "test2-f72e6.appspot.com",
  messagingSenderId: "1038702355260",
  appId: "1:1038702355260:web:e4e3d01c25789334473439",
  measurementId: "G-Q8VYNS5F1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("email-form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  try {
    await addDoc(collection(db, "emails"), { email });
    alert("Email submitted successfully.");
    document.getElementById("email-form").reset();
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Failed to submit email.");
  }
});

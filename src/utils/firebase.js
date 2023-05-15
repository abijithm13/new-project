
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6vfZujLiQeV2TUtDynr3upROMwXS8s-E",
  authDomain: "new-project-18fdb.firebaseapp.com",
  projectId: "new-project-18fdb",
  storageBucket: "new-project-18fdb.appspot.com",
  messagingSenderId: "742877448622",
  appId: "1:742877448622:web:94b48f3ccdf49ab149a03f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
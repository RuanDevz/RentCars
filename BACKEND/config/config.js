
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAIpn9f0Fi0GZecVoU3nt8ldbAG43qDeeU",
  authDomain: "rentcars-59b82.firebaseapp.com",
  projectId: "rentcars-59b82",
  storageBucket: "rentcars-59b82.appspot.com",
  messagingSenderId: "5517580976",
  appId: "1:5517580976:web:993f383170776d79e17975",
  measurementId: "G-S5ZPQWHNZN"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
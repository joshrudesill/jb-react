import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAY-ONJ14CpitYenWWi5d0xy6HPiTUTYXQ",
  authDomain: "jb-react.firebaseapp.com",
  projectId: "jb-react",
  storageBucket: "jb-react.appspot.com",
  messagingSenderId: "772965123821",
  appId: "1:772965123821:web:0306b373d328877cfdeee4",
  measurementId: "G-EB19EW2FX0"
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();



//export const getSiteData = async (lang) => {
    //const collec = collection(db, 'sitedata');
    //const dd = query(collec, where("lang", "==", lang), limit(1));
    //const snap = await getDocs(dd);
    //return snap.docs[0].data();
//}

export default firebase;


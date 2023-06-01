import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default {
    fbPopup: async () => {
        const provider = new FacebookAuthProvider();
        let result = await signInWithPopup(getAuth(firebaseApp), provider);
        return result;
    },
};

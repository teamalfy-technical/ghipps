import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import * as dotenv from "dotenv";
import * as path from "path";

// Load .env.local
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function whitelistUser(email: string) {
    console.log(`Whitelisting ${email}...`);
    try {
        const whitelistRef = collection(db, "whitelist");
        const docRef = await addDoc(whitelistRef, {
            email: email.toLowerCase(),
            role: "viewer",
            addedAt: serverTimestamp(),
        });
        console.log(`Successfully whitelisted! Document ID: ${docRef.id}`);
        process.exit(0);
    } catch (error) {
        console.error("Error whitelisting user:", error);
        process.exit(1);
    }
}

const emailToWhitelist = "eaankomah@ghipss.com";
whitelistUser(emailToWhitelist);

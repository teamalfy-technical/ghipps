
import { db } from "../lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

async function checkUser(email: string) {
    console.log(`Checking whitelist for: ${email}`);
    try {
        const q = query(collection(db, "whitelist"), where("email", "==", email.toLowerCase()));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            console.log("❌ User NOT found in whitelist.");

            // Also check for domain wildcard
            const domain = email.split("@")[1];
            const q2 = query(collection(db, "whitelist"), where("email", "==", `*@${domain}`));
            const querySnapshot2 = await getDocs(q2);
            if (!querySnapshot2.empty) {
                console.log(`✅ User covered by wildcard: *@${domain}`);
            } else {
                console.log(`❌ No wildcard found for: *@${domain}`);
            }
        } else {
            querySnapshot.forEach((doc) => {
                console.log(`✅ Found: ${doc.id} =>`, doc.data());
            });
        }
    } catch (error) {
        console.error("Error checking whitelist:", error);
    }
}

const emailToCheck = process.argv[2] || "eaankomah@ghipss.com";
checkUser(emailToCheck).then(() => process.exit(0));

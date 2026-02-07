import { db } from "./firebase";
import {
    collection,
    addDoc,
    updateDoc,
    doc,
    query,
    where,
    getDocs,
    serverTimestamp,
    Timestamp,
    orderBy,
    deleteDoc,
    onSnapshot,
    DocumentData
} from "firebase/firestore";

// --- Session Management ---
export async function logSessionStart(name: string, email: string, device: string): Promise<string> {
    const sessionsRef = collection(db, "sessions");
    const docRef = await addDoc(sessionsRef, {
        name,
        email,
        device,
        startTime: serverTimestamp(),
        lastActive: serverTimestamp(),
    });
    return docRef.id;
}

export async function updateSessionActivity(sessionId: string) {
    const sessionRef = doc(db, "sessions", sessionId);
    await updateDoc(sessionRef, {
        lastActive: serverTimestamp(),
    });
}

// --- Page View Tracking ---
export async function logPageView(sessionId: string, pageIndex: number): Promise<string> {
    const viewsRef = collection(db, "page_views");
    const docRef = await addDoc(viewsRef, {
        sessionId,
        pageIndex,
        startTime: serverTimestamp(),
        endTime: null,
        durationSeconds: 0,
    });
    return docRef.id;
}

export async function logPageExit(viewId: string, startTime: Timestamp) {
    const viewRef = doc(db, "page_views", viewId);
    const now = Timestamp.now();
    const durationSeconds = Math.round((now.toMillis() - startTime.toMillis()) / 1000);

    await updateDoc(viewRef, {
        endTime: now,
        durationSeconds,
    });
}

// --- Whitelist Management ---
export async function checkWhitelist(email: string): Promise<boolean> {
    // Also check for domain-based whitelisting
    const domain = email.toLowerCase().split("@")[1];
    const whitelistRef = collection(db, "whitelist");

    // Check specific email
    const emailQuery = query(whitelistRef, where("email", "==", email.toLowerCase()));
    const emailSnapshot = await getDocs(emailQuery);
    if (!emailSnapshot.empty) return true;

    // Check domain wildcard (e.g., @ghipss.com)
    const domainQuery = query(whitelistRef, where("email", "==", `@${domain}`));
    const domainSnapshot = await getDocs(domainQuery);
    return !domainSnapshot.empty;
}

export async function addToWhitelist(email: string, role: string = "viewer"): Promise<string> {
    const whitelistRef = collection(db, "whitelist");
    const docRef = await addDoc(whitelistRef, {
        email: email.toLowerCase(),
        role,
        addedAt: serverTimestamp(),
    });
    return docRef.id;
}

export async function removeFromWhitelist(docId: string): Promise<void> {
    const docRef = doc(db, "whitelist", docId);
    await deleteDoc(docRef);
}

export async function getWhitelist(): Promise<{ id: string; email: string; role: string; addedAt: Date | null }[]> {
    const whitelistRef = collection(db, "whitelist");
    const q = query(whitelistRef, orderBy("addedAt", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            id: doc.id,
            email: data.email,
            role: data.role || "viewer",
            addedAt: data.addedAt?.toDate() || null,
        };
    });
}

// --- Session Analytics ---
export interface SessionData {
    id: string;
    name: string;
    email: string;
    device: string;
    startTime: Date | null;
    lastActive: Date | null;
    totalPageViews?: number;
    totalDurationSeconds?: number;
}

export async function getSessions(): Promise<SessionData[]> {
    const sessionsRef = collection(db, "sessions");
    const q = query(sessionsRef, orderBy("startTime", "desc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            id: doc.id,
            name: data.name,
            email: data.email,
            device: data.device,
            startTime: data.startTime?.toDate() || null,
            lastActive: data.lastActive?.toDate() || null,
        };
    });
}

export async function getPageViewsForSession(sessionId: string) {
    const viewsRef = collection(db, "page_views");
    const q = query(viewsRef, where("sessionId", "==", sessionId), orderBy("startTime", "asc"));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
            id: doc.id,
            pageIndex: data.pageIndex,
            startTime: data.startTime?.toDate() || null,
            endTime: data.endTime?.toDate() || null,
            durationSeconds: data.durationSeconds || 0,
        };
    });
}

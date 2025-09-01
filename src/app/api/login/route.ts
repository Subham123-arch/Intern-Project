// app/api/login/route.ts
import { NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

// 🔹 Firebase config (replace with your real keys)
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY!,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.FIREBASE_PROJECT_ID!,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function POST(request: Request) {
  try {
    // 1. You knock on the door 🚪 with email & password
    const { email, password } = await request.json();

    // 2. We ask Firebase: "Is this really them?" 🔍
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 3. If yes ✅ → We welcome them + give secret ticket
    const response = NextResponse.json({
      message: "Welcome!",
      user: { uid: user.uid, email: user.email },
    });

    response.cookies.set({
      name: "ticket", // 🎟️ secret ticket
      value: await user.getIdToken(), // use Firebase ID token
      httpOnly: true,
      path: "/",
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 1 hour
    });

    return response;

  } catch (error: any) {
    // 4. If no ❌ → Wrong password
    return NextResponse.json(
      { message: "Sorry, wrong password" },
      { status: 401 }
    );
  }
}

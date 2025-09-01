"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InputLabel from "@/app/component/input/InputLabel";
import InputText from "@/app/component/input/InputText";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter, FaGithub } from "react-icons/fa";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import { auth, googleProvider,} from "../../../firebaseconfigurations/config";

export default function LoginBox() {
  const router = useRouter();
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Email/Password login using Firebase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formFields.username || !formFields.password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      // Firebase authentication
      await signInWithEmailAndPassword(auth, formFields.username, formFields.password);
      setError("");
      router.push("/dashboard"); // redirect on success
    } catch (err: any) {
      console.error(err);
      if (err.code === "auth/user-not-found") {
        setError("No user found for this email");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password");
      } else {
        setError(err.message || "Login failed");
      }
    } finally {
      setLoading(false);
    }
  };

  // Google login
  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      setError("");
      router.push("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Google login failed");
    } finally {
      setLoading(false);
    }
  };

  // Twitter login
  const handleTwitterSignIn = async () => {
    setLoading(true);
    setError("");

    const twitterProvider = new TwitterAuthProvider();

    try {
      const result = await signInWithPopup(auth, twitterProvider);

      // ✅ Get Twitter user
      const user = result.user;
      console.log("Twitter User:", user);

      // ✅ Optional: Get Twitter OAuth access tokens
      const credential = TwitterAuthProvider.credentialFromResult(result);
      console.log("Access Token:", credential?.accessToken);
      console.log("Secret:", credential?.secret);

      router.push("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Twitter login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setLoading(true);
    setError("");

    const githubProvider = new GithubAuthProvider();

    try {
      const result = await signInWithPopup(auth, githubProvider);

      // ✅ Get Github user
      const user = result.user;
      console.log("Github User:", user);

      // ✅ Optional: Get Github OAuth access tokens
      const credential = GithubAuthProvider.credentialFromResult(result);
      console.log("Access Token:", credential?.accessToken);
      console.log("Secret:", credential?.secret);

      router.push("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Github login failed");
    } finally {
      setLoading(false);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="w-96 bg-slate-50 my-10 p-6 rounded-md shadow-md"
    >
      <h2 className="text-center text-lg font-bold mb-4">Log in here</h2>

      <InputLabel label="Email" />
      <InputText
        type="email"
        placeholder="Enter email"
        value={formFields.username}
        onChangeInput={(e) =>
          setFormFields({ ...formFields, username: e.target.value })
        }
      />

      <InputLabel label="Password" />
      <InputText
        type="password"
        placeholder="********"
        autoComplete="off"
        value={formFields.password}
        onChangeInput={(e) =>
          setFormFields({ ...formFields, password: e.target.value })
        }
      />

      {error && <p className="text-red-500 text-sm text-center my-2">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full mt-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-indigo-400"
      >
        {loading ? "Logging in..." : "Login"}
      </button>

      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-500">Or</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="flex gap-3 mb-3">
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md p-2 hover:bg-gray-100"
        >
          <FcGoogle size={20} /> Sign In with Google
        </button>

        {/* Twitter / GitHub placeholders */}
        <button className="gap-2 bg-blue-500 text-white rounded-md p-3 hover:bg-blue-600"
        type="button"
          onClick={handleTwitterSignIn}>
          <FaTwitter size={20} />
        </button>

        <button className="gap-2 bg-gray-800 text-white rounded-md p-3 hover:bg-gray-600"
        type="button" 
        onClick={handleGithubSignIn}>
          <FaGithub size={20} />
        </button>
      </div>
    </form>
  );
}

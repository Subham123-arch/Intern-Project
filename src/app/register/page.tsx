"use client";
import React, { useState } from "react";
import InputLabel from "@/app/component/input/InputLabel";
import InputText from "@/app/component/input/InputText";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebaseconfigurations/config";

export default function SignupPage() {
  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (formFields.password !== formFields.confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      // Create user in Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formFields.email,
        formFields.password
      );

      // Update display name
      await updateProfile(userCredential.user, { displayName: formFields.username });

      setSuccess(`Account created successfully! Welcome, ${formFields.username}`);
      setFormFields({ username: "", email: "", password: "", confirmPassword: "" });
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") setError("Email already in use!");
      else if (err.code === "auth/invalid-email") setError("Invalid email!");
      else if (err.code === "auth/weak-password") setError("Password too weak!");
      else setError(err.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-200 flex justify-center">
      <div className="w-96 h-fit bg-slate-50 my-10 p-6 rounded-md shadow-md">
        <h2 className="text-center text-lg font-bold mb-4">Create New Account</h2>
        <form onSubmit={onFormSubmit}>
          <InputLabel label="Username" />
          <InputText
            type="text"
            placeholder="Enter username"
            value={formFields.username}
            onChangeInput={(e: any) =>
              setFormFields({ ...formFields, username: e.target.value })
            }
          />

          <InputLabel label="Email" />
          <InputText
            type="email"
            placeholder="Enter email"
            value={formFields.email}
            onChangeInput={(e: any) =>
              setFormFields({ ...formFields, email: e.target.value })
            }
          />

          <InputLabel label="Password" />
          <InputText
            type="password"
            placeholder="********"
            value={formFields.password}
            onChangeInput={(e: any) =>
              setFormFields({ ...formFields, password: e.target.value })
            }
          />

          <InputLabel label="Confirm Password" />
          <InputText
            type="password"
            placeholder="********"
            value={formFields.confirmPassword}
            onChangeInput={(e: any) =>
              setFormFields({ ...formFields, confirmPassword: e.target.value })
            }
          />

          {error && <p className="text-red-500 text-sm my-2">{error}</p>}
          {success && <p className="text-green-500 text-sm my-2">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-indigo-400"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

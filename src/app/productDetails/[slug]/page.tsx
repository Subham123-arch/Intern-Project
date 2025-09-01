"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { useEffect } from "react";

export default function productDetails({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      console.log("Product details for slug:", slug);
    }, 2000);
  }, [slug]);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
    return () => clearTimeout(timer);
  }, [slug]);

  return (
    <div>
      <h1>Product Details for {slug}</h1>
    </div>
  );
}

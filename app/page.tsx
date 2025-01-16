"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "../app/components/Navbar.jsx";

export default function App() {
  const router = useRouter();
  return (
      <Home />
  );
}

function Home() {
  return (
    <h1 className="border border-solid rounded m-5 p-5 text-center">Homepage</h1>
  );
}



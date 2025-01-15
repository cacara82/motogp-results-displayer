"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function App() {
  const router = useRouter();
  return (
    <Home />
  );
}

function Home() {
  return (
    <h1>Homepage</h1>
  );
}

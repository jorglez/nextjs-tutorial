"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );
  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });

  //     if (!res.ok) {
  //       setIsLoading(false);
  //       setError(true);
  //     }
  //     setIsLoading(false);
  //     setData(await res.json());
  //   }
  //   getData();
  // }, []);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;

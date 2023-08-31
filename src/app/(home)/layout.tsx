"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "../components/navbar/Navbar";

const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
        <Navbar />
        {children}
    </QueryClientProvider>
  );
}
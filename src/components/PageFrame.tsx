import { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PageFrame({ children }: { children: ReactNode }) {
  return <main><Navbar />{children}<Footer /></main>;
}

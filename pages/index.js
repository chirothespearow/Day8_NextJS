import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/navbar";
import Button from "@/Components/Button";

export default function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <br/>
      <Button bgColour="green" text = "Submit"/>
    </>
  );
}

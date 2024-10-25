import "@/styles/globals.css";
import Navbar from "@/Components/navbar";
import Footer from "@/Components/Footer";
export default function App({ Component, pageProps }) {
  return(
    <div>
    <Navbar/>
    <Component {...pageProps} />;
    <Footer/>
    </div>
  ) 
}

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Template() {
    return (
        <div className="flex flex-col min-h-screen overflow-y-hidden">
            <div className="sticky top-0 z-50 w-full">
                <Navbar />
            </div>
            <div className="flex-grow">
                <Outlet />
            </div>
            <div className="z-50 w-full">
                <Footer />
            </div>
        </div>
            
    )

}
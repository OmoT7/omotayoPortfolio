import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Template() {
    return (
        <div className="relative min-h-screen scrollbar-hide scrollbar-hide::-webkit-scrollbar">
            {/* Navigation bar - high z-index to stay on top */}
            <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
            </div>
            
            {/* Main content area - starts below navbar */}
            <div className="relative pt-1 .scrollbar-hide::-webkit-scrollbar">
                <Outlet />
            </div>
        </div>
    )
}
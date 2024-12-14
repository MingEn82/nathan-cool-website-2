import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import Sidebar from './Sidebar';
import usePlotStore from '../store';

const Taskbar = () => {
    const { isSidebarOpen, toggleSidebar, closeSidebar } = usePlotStore();
    const navigate = useNavigate();

    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                isSidebarOpen
            ) {
                closeSidebar();
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen, closeSidebar]);

    return <div className="bg-rangoon-green w-full h-14 px-4 flex justify-between items-center">
        <svg 
            className="h-3/4 md:h-full stroke-white stroke-[1.5]" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleSidebar}
        >
            <path d="M20 7L4 7" strokeLinecap="round"/>
            <path d="M20 12L4 12" strokeLinecap="round"/>
            <path d="M20 17L4 17" strokeLinecap="round"/>
        </svg>
        <div className="flex w-full ml-4 md:ml-6 lg:ml-10 justify-between h-fit text-white text-base md:text-lg lg:text-2xl">
            <span className="cursor-pointer" onClick={() => navigate('/')}>HOME</span>
            <span className="block md:hidden">UBC</span>
            <span className="block hidden md:block">The University of British Columbia</span>
        </div>

        <Sidebar isOpen={isSidebarOpen} ref={sidebarRef} />
    </div>
}

export default Taskbar; 
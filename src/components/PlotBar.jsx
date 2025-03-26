import { useNavigate } from "react-router"

const Plotbar = () => {
    const navigate = useNavigate();

    return <div className="bg-rangoon-green w-screen h-14 px-4 flex justify-between items-center">
        <svg 
            className="h-1/2 stroke-white stroke-[1.5] cursor-pointer" 
            fill="#ffffff" 
            viewBox="0 0 1024 1024" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => navigate(-1)}
        >
            <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"/>
        </svg>
        <div className="h-fit text-white text-base md:text-lg lg:text-2xl">
            <span className="block md:hidden">UBC</span>
            <span className="block hidden md:block">The University of British Columbia</span>
        </div>
    </div>
}

export default Plotbar;
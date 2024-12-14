import Taskbar from "../components/Taskbar";

const Home = () => {
    return <div className="w-screen bg-pearl-bush min-h-screen">
        <Taskbar />
        <div className="relative lg:h-[32rem]">
            <img src="/nathan-face.jpg" className="w-screen h-full lg:object-cover opacity-60" />
            <p className="absolute whitespace-nowrap top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl md:text-5xl lg:text-8xl">Nathan&apos;s Cool Website 2</p>
        </div>
        <div className="mt-4 md:mt-8 flex flex-col items-center space-y-4">
            <p className="w-fit bg-lisbon-brown text-white font-semibold text-base px-4 py-2 md:text-4xl md:px-8 md:py-4 rounded-lg">About this project</p>
            <p className="text-center px-4 py-2 md:text-4xl md:px-8 md:py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.</p>
        </div>
    </div>
}

export default Home;
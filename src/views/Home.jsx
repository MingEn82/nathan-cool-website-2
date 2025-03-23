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
            <p className="text-center text-sm px-6 py-2 md:text-3xl md:px-32 md:py-4">Generative models have applications across numerous research fields. These models are capable of reproducing complex structures and fine details. In cosmology, however, data is often of a different nature; it is typically simpler where statistical properties across samples are of interest. Generative models have already been implemented in this field to generate full-sky extra-galactic foreground maps (Han, 2021) by training on simulation results (Sehgal, 2010). However, complexity of these datasets poses significant challenges for result analysis. Therefore, we are interested in evaluating the performance of generative diffusion models on datasets where key statistics are straightforward to measure and interpret. We create six artificial training datasets that contain Gaussian blobs placed on a blank image. These datasets are designed to test the model&apos;s ability to replicate count distributions, amplitude distributions, and positional clustering. We demonstrate that our models reproduce statistics well and discuss where the model performance falls short. From these findings, we can better understand what tasks are well suited for a diffusion model.</p>
        </div>
    </div>
}

export default Home;
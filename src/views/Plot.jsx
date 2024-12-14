import { useParams } from "react-router";
import { ColorRing } from 'react-loader-spinner';
import usePlotStore from "../store";
import Plotbar from "../components/PlotBar";
import useImageLoaded from "../hooks/useImageLoaded";

const Plot = () => {
    const { plotId } = useParams();
    const imagePaths = usePlotStore((s) => s.imagePaths);
    const imageId2Metadata = usePlotStore((s) => s.imageId2Metadata);
    const imagePath = imagePaths[plotId];
    const imageMetadata = imageId2Metadata(plotId);

    const [ref, loaded, onLoad] = useImageLoaded();

    return <div className="w-screen bg-pearl-bush min-h-screen flex flex-col items-center">
        <Plotbar />
        <div className="w-full text-center font-semibold text-2xl md:text-4xl lg:text-6xl mt-4 md:mt-8">{imageMetadata.title}</div>
        <img ref={ref} onLoad={onLoad} src={imagePath} className="w-11/12 md:w-7/12 lg:w-1/3 mt-4 md:mt-8" />
        {!loaded && <ColorRing
            visible={true}
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />}
        <div className="w-full text-center text-base md:text-xl lg:text-3xl mt-4 md:mt-8">{imageMetadata.desc}</div>
    </div>
}

export default Plot;
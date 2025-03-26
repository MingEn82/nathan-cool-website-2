import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ColorRing } from 'react-loader-spinner';
import Plotbar from "../components/PlotBar";
import useImageLoaded from "../hooks/useImageLoaded";
import { fetchPlotById, fetchPlotUrl, PlotMetadata } from "../api";

const Plot = () => {
    const { plotId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [plot, setPlot] = useState(new PlotMetadata());
    const [plotUrl, setPlotUrl] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            setIsLoading(true);
            const id = parseInt(plotId);
            setPlot(await fetchPlotById(id));
            setPlotUrl(fetchPlotUrl(plot.path));
            setIsLoading(false);
        }
        loadData();
    }, [plotId, plot.path]);

    const [ref, loaded, onLoad] = useImageLoaded();

    return <div className="w-screen bg-pearl-bush min-h-screen flex flex-col items-center">
        <Plotbar />
        <div className="w-full text-center font-semibold text-2xl md:text-4xl lg:text-6xl mt-4 md:mt-8">{plot.title}</div>
        {!isLoading && <img ref={ref} onLoad={onLoad} src={plotUrl} className="w-11/12 md:w-7/12 lg:w-1/3 mt-4 md:mt-8" />}
        <ColorRing
            visible={isLoading || !loaded}
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
        <div className="w-full text-center text-base md:text-xl lg:text-3xl mt-4 md:mt-8">{plot.desc}</div>
    </div>
}

export default Plot;
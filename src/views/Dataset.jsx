import { useParams } from "react-router"
import { useState, useEffect } from "react";
import Taskbar from "../components/Taskbar";
import ImageCard from "../components/ImageCard";
import { DatasetMetadata, fetchDatasetById, fetchDatasetPlots, fetchPlotUrl } from "../api";
import { ColorRing } from "react-loader-spinner";

const Dataset = () => {
    const { datasetId } = useParams();
    const [dataset, setDataset] = useState(new DatasetMetadata());
    const [plots, setPlots] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const id = parseInt(datasetId);
            setDataset(await fetchDatasetById(id));
            setPlots(await fetchDatasetPlots(id));
            setIsLoading(false);
        }
        fetchData();
    }, [datasetId]);
    
    return <div className="w-full bg-pearl-bush min-h-screen pb-4">
        <Taskbar />
        {!isLoading && <div className="w-full text-center font-semibold text-2xl md:text-4xl lg:text-6xl pt-4 md:pt-8">{dataset.type} - {dataset.title}</div>}
        {!isLoading && <div className="w-full text-center text-lg md:text-3xl lg:text-5xl py-6 md:py-10">{dataset.desc}</div>}
        <div className="w-full flex justify-center">
            <ColorRing
                visible={isLoading}
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
        {!isLoading && <div className="px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {plots.map(plot => {
                let imageSrc = fetchPlotUrl(plot.path);
                return <ImageCard src={imageSrc} title={plot.title} link={`/plot/${plot.id}`} key={plot.id} />
            })}
        </div>}
    </div>
}

export default Dataset;
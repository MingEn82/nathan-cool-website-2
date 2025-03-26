import { useParams } from "react-router"
import { useState, useEffect } from "react";
import Taskbar from "../components/Taskbar";
import ImageCard from "../components/ImageCard";
import { DatasetMetadata, fetchDatasetById, fetchDatasetPlots, fetchPlotUrl } from "../api";
import { ColorRing } from "react-loader-spinner";

const Dataset = () => {
    const { datasetId } = useParams();
    const datasets = usePlotStore((s) => s.datasets);
    const imagePaths = usePlotStore((s) => s.imagePaths);
    const imageId2Metadata = usePlotStore((s) => s.imageId2Metadata);
    const getModelType = usePlotStore((s) => s.getModelType);
    const dataset = datasets[datasetId];
    const { desc: DescriptionComponent, descProps } = dataset;
    const modelType = getModelType(datasetId);

    return <div className="w-full bg-pearl-bush min-h-screen pb-4">
        <Taskbar />
        <div className="w-full text-center font-semibold text-2xl md:text-4xl lg:text-6xl pt-4 md:pt-8">{modelType} - {dataset.title}</div>
        <DescriptionComponent {...descProps} />
        <div className="px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dataset.imageIds.map(id => {
                let imagePath = imagePaths[id];
                let metadata = imageId2Metadata(id);
                return <ImageCard src={imagePath} title={metadata.title} link={`/plot/${id}`} key={id} />
            })}
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
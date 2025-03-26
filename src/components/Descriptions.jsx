import PoissonChart from "./Charts"

export const ComparisonDescription = () => {
  return <div className="w-full text-center text-lg md:text-3xl lg:text-5xl py-6 md:py-10">
    Replace with description of page
  </div>
}

const ResolutionComponent = ({ resolution }) => {
  return <div className="
    w-1/6 flex flex-col gap-2 
    text-center md:text-lg lg:text-2xl
  ">
    <p className="">Resolution</p>
    <div className="w-full aspect-square border-2 border-black relative bg-orange-100">
      <p className="absolute left-1 top-1/2 -translate-y-1/2">{resolution}</p>
      <p className="absolute bottom-1 left-1/2 -translate-x-1/2">{resolution}</p>
    </div>
  </div>
}

const ChartComponent = ({ distribution, lambda }) => {
  return <div className="
    w-1/2 flex flex-col gap-2
    text-center md:text-lg lg:text-2xl
  ">
    <p className="capitalize">{distribution} Distribution, Mean = {lambda}</p>
    <PoissonChart lambda={lambda} />
  </div>
}

export const DatasetDescription = ({ 
  resolution, sampleCount, blobCount, 
  blobCountDistribution, blobClustering, 
  blobSize, blobAmplitude, blobAmplitudeDesc
}) => {
  return <div className="w-full my-6 md:my-10 px-4 md:px-6 lg:px-8 flex gap-5">
    <ResolutionComponent resolution={resolution} />
    <ChartComponent distribution={blobCountDistribution} lambda={blobCount} />
  </div>
}
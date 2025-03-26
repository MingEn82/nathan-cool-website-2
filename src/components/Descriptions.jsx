import { PoissonChart, DeltaChart } from "./Charts"

export const ComparisonDescription = () => {
  return <div className="w-full text-center text-lg md:text-3xl lg:text-5xl py-6 md:py-10">
    Replace with description of page
  </div>
}

const ResolutionComponent = ({ resolution }) => {
  return <div className="
    col-span-4 md:col-span-1 flex flex-col gap-2 
    text-center text-2xl items-center
">
    <p className="">Resolution</p>
    <div className="h-40 w-40 md:w-full md:h-auto md:aspect-square border-2 border-black relative bg-orange-100">
      <p className="absolute left-1 top-1/2 -translate-y-1/2">{resolution}</p>
      <p className="absolute bottom-1 left-1/2 -translate-x-1/2">{resolution}</p>
    </div>
  </div>
}

const ChartComponent = ({ distribution, lambda }) => {
  return <div className="
    col-span-4 md:col-span-3 lg:col-span-2 flex flex-col gap-2
    text-center text-2xl
  ">
    <p className="capitalize">{distribution} Distribution, Mean = {lambda}</p>
    { distribution === 'delta' ? <DeltaChart lambda={lambda} /> : <PoissonChart lambda={lambda} /> }
  </div>
}

const CardComponent = ({ title, body, tooltip }) => {
  return <div className="
    bg-orange-100 rounded-xl
    border-2 border-black
    text-center p-4 group relative
  ">
    <p className="text-base md:text-lg underline">{title}</p>
    <p className="text-lg md:text-2xl" dangerouslySetInnerHTML={{ __html: body }} />
    {tooltip && <div
      className="
        absolute mt-3 px-2 py-1
        text-sm text-white bg-black 
        rounded opacity-0 
        group-hover:opacity-100 
        transition-opacity 
        pointer-events-none
        whitespace-nowrap
        z-100
    ">
      {tooltip}
      <div className="absolute bottom-full left-1/2 lg:left-3/4 transform -translate-x-1/2 border-[5px] border-transparent border-b-black" />
    </div>}
  </div>
}

export const DatasetDescription = ({
  resolution, sampleCount, blobCount,
  blobCountDistribution, blobClustering,
  blobSize, blobAmplitude, blobAmplitudeDesc
}) => {
  return <div className="
    w-full my-6 md:my-10 px-9 md:px-6 lg:px-8 
    grid grid-cols-4 gap-5"
  >
    <ResolutionComponent resolution={resolution} />
    <ChartComponent distribution={blobCountDistribution} lambda={blobCount} />
    <div className="col-span-4 lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 grid-flow-rows h-full gap-2">
      <CardComponent title="Sample Count" body={sampleCount} />
      <CardComponent title="Blob Clustering" body={blobClustering} />
      <CardComponent title="Blob Size" body={blobSize} />
      <CardComponent title="Blob Amplitude" body={blobAmplitude} tooltip={blobAmplitudeDesc} />
    </div>
  </div>
}
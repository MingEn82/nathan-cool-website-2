export const ComparisonDescription = () => {
  return <div className="w-full text-center text-lg md:text-3xl lg:text-5xl py-6 md:py-10">
    Replace with description of page
  </div>
}

export const DatasetDescription = ({ 
  resolution, sampleCount, blobCount, 
  blobCountDistribution, blobClustering, 
  blobSize, blobAmplitude, blobAmplitudeDesc
}) => {
  return <div className="w-full text-center text-lg md:text-3xl lg:text-5xl py-6 md:py-10">
    {resolution}
  </div>
}
import { create } from "zustand";

class DatasetMetadata {
  constructor(id, title, desc, imageIds, resolution, 
    distribution, blobCount, sampleCount, 
    blobClustering, blobSize, 
    blobAmplitude, blobAmplitudeDesc = null
  ) {
    this.id = id;
    this.title = title;
    this.desc = desc;
    this.imageIds = imageIds;
    this.resolution = resolution;
    this.distribution = distribution;
    this.blobCount = blobCount,
    this.sampleCount = sampleCount;
    this.blobClustering = blobClustering;
    this.blobSize = blobSize;
    this.blobAmplitude = blobAmplitude;
    this.blobAmplitudeDesc = blobAmplitudeDesc;
  }
}

class ImageMetadata {
  constructor(title, desc) {
    this.title = title;
    this.desc = desc;
  }
}

const usePlotStore = create((set, get) => ({
  diffusionDatasetIds: ["d1", "d2", "d3", "d4", "d5", "d6"],
  comparisonDatasetIds: ['e', 'p'],

  datasets: {
    d1: new DatasetMetadata("d1", "Dataset 1", "Replace with description of page", [
      "d1-2-pt-corr",
      "d1-gen-imgs",
      "d1-max-peak",
      "d1-min-peak",
      "d1-number-blobs-histogram",
      "d1-power-spec",
      "d1-stack-histogram-img",
      "d1-stack",
      "d1-total-flux-cdf",
      "d1-total-flux-histogram",
    ], 32, "delta", 10, 50000, "None", 5, "0.1"),
    d2: new DatasetMetadata("d2", "Dataset 2", "Replace with description of page", [
      "d2-2-pt-corr",
      "d2-gen-imgs",
      "d2-min-peak",
      "d2-number-blobs-cdf",
      "d2-number-blobs-histogram",
      "d2-power-spec",
      "d2-stack-histogram-img",
      "d2-stack",
      "d2-total-flux-cdf",
      "d2-total-flux-histogram",
    ], 32, "poisson", 10, 50000, "None", 5, "0.1"),
    d3: new DatasetMetadata("d3", "Dataset 3", "Replace with description of page", [
      "d3-gen-imgs",
      "d3-max-flux",
      "d3-min-flux",
      "d3-power-spec",
      "d3-stack-histogram-img",
      "d3-stack",
      "d3-total-flux-cdf",
      "d3-total-flux-histogram",
    ], 128, "poisson", 1000, 100000, "None", 3, "1"),
    d4: new DatasetMetadata("d4", "Dataset 4", "Replace with description of page", [
      "d4-gen-imgs",
      "d4-max-flux",
      "d4-min-flux",
      "d4-power-spec",
      "d4-stack-histogram-img",
      "d4-stack",
      "d4-total-flux-cdf",
      "d4-total-flux-histogram",
    ], 128, "poisson", 1000, 100000, "&xi;=0.05&sdot;&theta;<sup>-0.8</sup>", 3, "1"),
    d5: new DatasetMetadata("d5", "Dataset 5", "Replace with description of page", [
      "d5-2-pt-corr",
      "d5-amplitude-blobs-cdf",
      "d5-amplitude-blobs-histogram",
      "d5-gen-imgs",
      "d5-max-peak",
      "d5-min-peak",
      "d5-number-blobs-cdf",
      "d5-number-blobs-histogram",
      "d5-power-spec",
      "d5-stack-histogram-img",
      "d5-stack",
      "d5-total-flux-cdf",
      "d5-total-flux-histogram",
    ], 32, "poisson", 10, 50000, "None", 3, "(1,10]"),
    d6: new DatasetMetadata("d6", "Dataset 6", "Replace with description of page", [
      'd6-gen-imgs',
      'd6-max-flux',
      'd6-min-flux',
      'd6-power-spec',
      'd6-stack-histogram-img',
      'd6-stack',
      'd6-total-flux-distr',
    ], 128, "poisson", 1000, 100000, "&xi;=0.05&sdot;&theta;<sup>-0.8</sup>", 3, "(1,10]"),
    e: new DatasetMetadata('e', 'Exactly 10', "Replace with description of page", [
      'e-number-blobs-histogram',
      'e-max-peak',
      'e-min-peak',
      'e-residual',
      'e-samples',
      'e-stack-histogram-img',
      'e-stack',
    ]),
    p: new DatasetMetadata('p', 'Poisson 10', "Replace with description of page", [
      'p-number-blobs-histogram',
      'p-max-peak',
      'p-min-peak',
      'p-residual',
      'p-samples',
      'p-stack-histogram-img',
      'p-stack',
    ]),
  },

  imagePaths: {
    'd1-2-pt-corr': "/plots/diffusion/dataset_1/2-pt-corr.png",
    'd1-gen-imgs': "/plots/diffusion/dataset_1/gen-imgs.png",
    'd1-max-peak': "/plots/diffusion/dataset_1/max-peak.png",
    'd1-min-peak': "/plots/diffusion/dataset_1/min-peak.png",
    'd1-number-blobs-histogram': "/plots/diffusion/dataset_1/number-blobs-histogram.png",
    'd1-power-spec': "/plots/diffusion/dataset_1/power-spec.png",
    'd1-stack-histogram-img': "/plots/diffusion/dataset_1/stack-histogram-img.png",
    'd1-stack': "/plots/diffusion/dataset_1/stack.png",
    'd1-total-flux-cdf': "/plots/diffusion/dataset_1/total-flux-cdf.png",
    'd1-total-flux-histogram': "/plots/diffusion/dataset_1/total-flux-histogram.png",
    'd2-2-pt-corr': "/plots/diffusion/dataset_2/2-pt-corr.png",
    'd2-gen-imgs': "/plots/diffusion/dataset_2/gen-imgs.png",
    'd2-min-peak': "/plots/diffusion/dataset_2/min-peak.png",
    'd2-number-blobs-cdf': "/plots/diffusion/dataset_2/number-blobs-cdf.png",
    'd2-number-blobs-histogram': "/plots/diffusion/dataset_2/number-blobs-histogram.png",
    'd2-power-spec': "/plots/diffusion/dataset_2/power-spec.png",
    'd2-stack-histogram-img': "/plots/diffusion/dataset_2/stack-histogram-img.png",
    'd2-stack': "/plots/diffusion/dataset_2/stack.png",
    'd2-total-flux-cdf': "/plots/diffusion/dataset_2/total-flux-cdf.png",
    'd2-total-flux-histogram': "/plots/diffusion/dataset_2/total-flux-histogram.png",
    'd3-gen-imgs': "/plots/diffusion/dataset_3/gen-imgs.png",
    'd3-max-flux': "/plots/diffusion/dataset_3/max-flux.png",
    'd3-min-flux': "/plots/diffusion/dataset_3/min-flux.png",
    'd3-power-spec': "/plots/diffusion/dataset_3/power-spec.png",
    'd3-stack-histogram-img': "/plots/diffusion/dataset_3/stack-histogram-img.png",
    'd3-stack': "/plots/diffusion/dataset_3/stack.png",
    'd3-total-flux-cdf': "/plots/diffusion/dataset_3/total-flux-cdf.png",
    'd3-total-flux-histogram': "/plots/diffusion/dataset_3/total-flux-histogram.png",
    'd4-gen-imgs': "/plots/diffusion/dataset_3/gen-imgs.png",
    'd4-max-flux': "/plots/diffusion/dataset_3/max-flux.png",
    'd4-min-flux': "/plots/diffusion/dataset_3/min-flux.png",
    'd4-power-spec': "/plots/diffusion/dataset_3/power-spec.png",
    'd4-stack-histogram-img': "/plots/diffusion/dataset_3/stack-histogram-img.png",
    'd4-stack': "/plots/diffusion/dataset_3/stack.png",
    'd4-total-flux-cdf': "/plots/diffusion/dataset_3/total-flux-cdf.png",
    'd4-total-flux-histogram': "/plots/diffusion/dataset_3/total-flux-histogram.png",
    'd5-2-pt-corr': "/plots/diffusion/dataset_5/2-pt-corr.png",
    'd5-amplitude-blobs-cdf': "/plots/diffusion/dataset_5/amplitude-blobs-cdf.png",
    'd5-amplitude-blobs-histogram': "/plots/diffusion/dataset_5/amplitude-blobs-histogram.png",
    'd5-gen-imgs': "/plots/diffusion/dataset_5/gen-imgs.png",
    'd5-max-peak': "/plots/diffusion/dataset_5/max-peak.png",
    'd5-min-peak': "/plots/diffusion/dataset_5/min-peak.png",
    'd5-number-blobs-cdf': "/plots/diffusion/dataset_5/number-blobs-cdf.png",
    'd5-number-blobs-histogram': "/plots/diffusion/dataset_5/number-blobs-histogram.png",
    'd5-power-spec': "/plots/diffusion/dataset_5/power-spec.png",
    'd5-stack-histogram-img': "/plots/diffusion/dataset_5/stack-histogram-img.png",
    'd5-stack': "/plots/diffusion/dataset_5/stack.png",
    'd5-total-flux-cdf': "/plots/diffusion/dataset_5/total-flux-cdf.png",
    'd5-total-flux-histogram': "/plots/diffusion/dataset_5/total-flux-histogram.png",
    'd6-gen-imgs': "/plots/diffusion/dataset_6/gen-imgs.png",
    'd6-max-flux': "/plots/diffusion/dataset_6/max-flux.png",
    'd6-min-flux': "/plots/diffusion/dataset_6/min-flux.png",
    'd6-power-spec': "/plots/diffusion/dataset_6/power-spec.png",
    'd6-stack-histogram-img': "/plots/diffusion/dataset_6/stack-histogram-img.png",
    'd6-stack': "/plots/diffusion/dataset_6/stack.png",
    'd6-total-flux-distr': "/plots/diffusion/dataset_6/total-flux-distr.png",
    'e-number-blobs-histogram': "/plots/comparison/exactly_10/number-blobs-histogram.png",
    'e-max-peak': "/plots/comparison/exactly_10/max-peak.png",
    'e-min-peak': "/plots/comparison/exactly_10/min-peak.png",
    'e-residual': "/plots/comparison/exactly_10/residual.png",
    'e-samples': "/plots/comparison/exactly_10/samples.png",
    'e-stack-histogram-img': "/plots/comparison/exactly_10/stack-histogram-img.png",
    'e-stack': "/plots/comparison/exactly_10/stack.png",
    'p-number-blobs-histogram': "/plots/comparison/poisson_10/number-blobs-histogram.png",
    'p-max-peak': "/plots/comparison/poisson_10/max-peak.png",
    'p-min-peak': "/plots/comparison/poisson_10/min-peak.png",
    'p-residual': "/plots/comparison/poisson_10/residual.png",
    'p-samples': "/plots/comparison/poisson_10/samples.png",
    'p-stack-histogram-img': "/plots/comparison/poisson_10/stack-histogram-img.png",
    'p-stack': "/plots/comparison/poisson_10/stack.png",
  },

  imageMetadata: {
    "2-pt-corr.png": new ImageMetadata("Two point correlation", "Replace with description of page"),
    "gen-imgs.png": new ImageMetadata("Generated Images", "Replace with description of page"),
    "max-peak.png": new ImageMetadata("Maximum blobs counted", "Replace with description of page"),
    "min-peak.png": new ImageMetadata("Minimum blobs counted", "Replace with description of page"),
    "number-blobs-cdf.png": new ImageMetadata("CDF of blob count", "Replace with description of page"),
    "number-blobs-histogram.png": new ImageMetadata("Histogram of blob count", "Replace with description of page"),
    "power-spec.png": new ImageMetadata("Power Spectrum", "Replace with description of page"),
    "stack-histogram-img.png": new ImageMetadata("Histogram of stacked images", "Replace with description of page"),
    "stack.png": new ImageMetadata("Stacked images", "Replace with description of page"),
    "total-flux-cdf.png": new ImageMetadata("CDF of total flux", "Replace with description of page"),
    "total-flux-histogram.png": new ImageMetadata("Histogram of total flux", "Replace with description of page"),
    "max-flux.png": new ImageMetadata("Maximum flux", "Replace with description of page"),
    "min-flux.png": new ImageMetadata("Minimum flux", "Replace with description of page"),
    "amplitude-blobs-cdf.png": new ImageMetadata("CDF of blobs amplitude", "Replace with description of page"),
    "amplitude-blobs-histogram.png": new ImageMetadata("Histogram of blobs amplitude", "Replace with description of page"),
    'residual.png': new ImageMetadata("Residuals", "Replace with description of page"),
    'samples.png': new ImageMetadata("Samples", "Replace with description of page"),
    'total-flux-distr.png': new ImageMetadata("Distribution of total flux", "Replace with description of page"),
  },

  imageId2Metadata: (id) => {
    const imagePath = get().imagePaths[id];
    // The metadata is inferred from the image name
    const tmp = imagePath.split("/");
    const metadata = get().imageMetadata[tmp[tmp.length - 1]];
    return metadata;
  },

  getModelType: (id) => {
    let modelType = "";
    if (id.includes('d')) {
      modelType = 'Diffusion';
    } else if (id.includes('g')) {
      modelType = 'GAN';
    } else if (id.includes('e')) {
      modelType = 'Comparison';
    } else if (id.includes('p')) {
      modelType = 'Comparison';
    }
    return modelType;
  },

  isSidebarOpen: false,
  toggleSidebar: () => set((s) => ({ isSidebarOpen: !s.isSidebarOpen })),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));

export default usePlotStore;

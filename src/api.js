import { createClient } from '@supabase/supabase-js'

const PUBLIC_ANON_KEY = import.meta.env.VITE_PUBLIC_ANON_KEY;
const supabase = createClient('https://moaqmdedvgrgfkmivtkv.supabase.co', PUBLIC_ANON_KEY);

export class DatasetMetadata {
    constructor(id=-1, title="", desc="", type="") {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.type = type;
    }
}

export class PlotMetadata {
    constructor(id=-1, title="", desc="", path="") {
        this.id = id;
        this.title = title;
        this.desc = desc;
        this.path = path;
    }
}

export const fetchDatasetsByType = async (type=null) => {
    let query = supabase
        .from('dataset')
        .select();
        
    if (type) { query = query.eq('type', type); }

    const { data, error } = await query;

    if (error) { return []; }

    try {
        return data.map(ds => new DatasetMetadata(ds.id, ds.title, ds.desc, ds.type))
    } catch (e) {
        console.log(`Error when parsing datasets: ${e}`);
        return [];
    }
}

export const fetchDatasetById = async (id) => {
    const { data, error } = await supabase
        .from('dataset')
        .select()
        .eq('id', id)
    
    if (error) { 
        console.log(error);
        return new DatasetMetadata();
    }

    try {
        return new DatasetMetadata(data[0].id, data[0].title, data[0].desc, data[0].type);
    } catch (e) {
        console.log(`Error when parsing dataset: ${e}`);
        return new DatasetMetadata();
    }
}

export const fetchDatasetPlots = async (datasetId) => {
    const { data, error } = await supabase
        .from('dataset_plot')
        .select(`
            plot (
                id,
                title,
                desc,
                path
            ),
            dataset(
                id
            )
        `)
        .eq('dataset_id', datasetId);
    
    if (error) {
        console.log(error);
        return [];
    }

    const plots = data.map(row => new PlotMetadata(row.plot.id, row.plot.title, row.plot.desc, row.plot.path));
    return plots;
}

export const fetchPlotById = async (id) => {
    const { data, error } = await supabase
        .from('plot')
        .select()
        .eq('id', id)
    
    if (error) { 
        console.log(error);
        return new PlotMetadata();
    }

    try {
        return new PlotMetadata(data[0].id, data[0].title, data[0].desc, data[0].path);
    } catch (e) {
        console.log(`Error when parsing plot: ${e}`);
        return new PlotMetadata();
    }
}

export const fetchPlotUrl = (path) => {
    const { data } = supabase
        .storage
        .from('plots')
        .getPublicUrl(path);
    
    return data.publicUrl;
}
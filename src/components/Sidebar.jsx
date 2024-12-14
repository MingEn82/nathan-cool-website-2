import { forwardRef } from 'react';
import Accordion, { AccordionItem } from './Accordion';
import usePlotStore from '../store';

const Divider = () => {
    return <div className="my-4 md:my-6 lg:my-8 w-full border-b-2 border-neutral-600" />
}

const Sidebar = forwardRef(({ isOpen }, ref) => {
    const diffusionDatasetIds = usePlotStore((s) => s.diffusionDatasetIds);
    const comparisonDatasetIds = usePlotStore((s) => s.comparisonDatasetIds);
    const datasets = usePlotStore((s) => s.datasets);

    return (
        <div 
            ref={ref}
            className={`z-10 fixed top-0 left-0 h-screen bg-black px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10 w-3/4 md:w-1/2 lg:w-1/4 transform ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300`}
        >
            <p className="text-white font-semibold text-2xl md:text-3xl">Experiments</p>
            <Divider />
            <div className="flex flex-col gap-2">
                <Accordion header="Diffusion Plots" items={diffusionDatasetIds.map(id => {
                    let metadata = datasets[id];
                    return <AccordionItem title={metadata.title} link={`/dataset/${id}`} key={id} />
                })} />
                <Accordion header="GAN vs Diffusion" items={comparisonDatasetIds.map(id => {
                    let metadata = datasets[id];
                    return <AccordionItem title={metadata.title} link={`/dataset/${id}`} key={id} />
                })} />
            </div>
        </div>
    );
});
Sidebar.displayName = "Sidebar";

export default Sidebar;
import { useState } from "react"
import { Link } from "react-router";
import usePlotStore from "../store";

export const AccordionItem = ({ title, link }) => {
    const { closeSidebar } = usePlotStore();

    return <Link className="text-white pl-4 py-1 border-l-2 border-neutral-600 md:text-lg" to={link} onClick={closeSidebar}>
        {title}
    </Link>
}

const Accordion = ({ header, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const transitionDuration = 300;

    const toggleAccordion = () => {
        if (isDisabled) { return; }
        setIsOpen(prevState => !prevState);
        setIsDisabled(true);
        setTimeout(() => setIsDisabled(false), transitionDuration);
    }

    return <div>
        <div className="flex w-full cursor-pointer justify-between h-8 md:mb-2" onClick={toggleAccordion} >
            <p className="text-white text-lg md:text-2xl">{header}</p>
            <svg 
                className={`h-full stroke-white stroke-[1.5] fill-white transition-transform duration-${transitionDuration} ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z"/>
            </svg>
        </div>
        <div className={`flex flex-col ml-2 overflow-hidden transition-all duration-${transitionDuration} ${isOpen ? 'h-full' : 'max-h-0'}`}>
            {items.map((item) => item)}
        </div>
    </div>
}

export default Accordion;
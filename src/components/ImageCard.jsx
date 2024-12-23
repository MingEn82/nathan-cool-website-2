import { useNavigate } from "react-router";
import { ColorRing } from 'react-loader-spinner'
import useImageLoaded from "../hooks/useImageLoaded";
  

const ImageCard = ({ src, title, link }) => {
    const navigate = useNavigate();
    const [ref, loaded, onLoad] = useImageLoaded();

    return <div 
        className="flex flex-col w-full bg-[#e3d8bc] items-center gap-2 rounded-lg shadow-2xl py-2 cursor-pointer" 
        onClick={() => navigate(link)}
    >
        <div className="text-center text-semibold md:text-xl lg:text-2xl underline">{title}</div>
        <img ref={ref} onLoad={onLoad} src={src} className="w-11/12"/>
        <ColorRing
            visible={!loaded}
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
    </div>
}

export default ImageCard;
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";


type NavigationProps = {
    changePage: () => void;
}
const Navigation = ({ changePage }: NavigationProps) => {
    return (
        <>
            <button
                onClick={changePage}
                className="absolute top-[45%] -translate-y-1/2 -left-[70px] bg-white rounded-full w-[68px] h-[68px] flex items-center justify-center border border-border-arrow hover:bg-gray-300 transition duration-300 z-10"
            >
                <img src={arrowLeft} alt="arrow-left" className="h-[32px] w-[22px] mr-1 text-gray-700" />
            </button>
            
            <button
                onClick={changePage}
                className="absolute top-[45%] -translate-y-1/2 -right-[70px] bg-white rounded-full w-[68px] h-[68px] flex items-center justify-center border border-border-arrow hover:bg-gray-300 transition duration-300 z-10"
            >
                <img src={arrowRight} alt="arrow-right" className="h-[32px] w-[22px] ml-1 text-gray-700" />
            </button>
        </>
    )
}

export default Navigation;
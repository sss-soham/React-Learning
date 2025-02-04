import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Footer = () => {
    return(
        <>
        <button><FaHome /></button>
        <button><FaSearch /></button>
        <button><FaUser /></button>
        <button><IoMdSettings /></button>        
        </>
    )
}
export default Footer
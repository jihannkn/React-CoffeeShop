import NavLink from "../elements/NavLink"
import image1 from "../../assets/image/image1.jpg"
import { TiHome } from "react-icons/ti"
import { FaRegHeart, FaRegEnvelope, FaShoppingBag, FaSearch } from "react-icons/fa"
import { BsChatDots } from "react-icons/bs"

export default function Navbar() {
    return (
        <nav className="w-full flex justify-between items-center">
            <div className=" flex items-center gap-[10px] lg:gap-[20px]">
                <div className="mbar">
                    <img src={image1} alt="" className="h-[50px] aspect-square rounded-[10px]" />
                </div>
                <div className="nem">
                    <h1 className="font-extrabold text-[1.5rem]">Jihan Khansa</h1>
                    <p className="font-semibold">Welcome back,</p>
                </div>
            </div>
            <div className="lg:flex hidden">
                <ul className="w-full flex justify-around gap-[20px]">
                    <li className="flex border px-[20px] py-[5px] rounded-[10px] items-center gap-[10px] hover:text-[#deca97] hover:border-[#deca97]">
                        <NavLink aria-current="page" className="active" href="home">
                            <i className="fa-solid fa-house">{<TiHome />}</i>
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li className="flex border px-[20px] py-[5px] rounded-[10px] items-center gap-[10px] hover:text-[#deca97] hover:border-[#deca97]">
                        <NavLink className="" href="Favourite">
                            <i className="fa-regular fa-heart">{<FaRegHeart />}</i>
                            <p>Favourite</p>
                        </NavLink>
                    </li>
                    <li className="flex border px-[20px] py-[5px] rounded-[10px] items-center gap-[10px] hover:text-[#deca97] hover:border-[#deca97]">
                        <NavLink className="" href="#">
                            <i className="fa-regular fa-envelope">{<FaRegEnvelope />}</i>
                            <p>Inbox</p>
                        </NavLink>
                    </li>
                    <li className="flex border px-[20px] py-[5px] rounded-[10px] items-center gap-[10px] hover:text-[#deca97] hover:border-[#deca97]">
                        <NavLink className="" href="#">
                            <i className="fa-regular fa-comment-dots">{<BsChatDots />}</i>
                            <p>Order</p>
                        </NavLink>
                    </li>
                    <li className="flex border px-[20px] py-[5px] rounded-[10px] items-center gap-[10px] hover:text-[#deca97] hover:border-[#deca97]">
                        <NavLink className="" href="#">
                            <i className="fa-solid fa-bag-shopping">{<FaShoppingBag />}</i>
                            <p>Bag</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex gap-[15px] bg-[#968c82] rounded-[10px]">
                <input type="text" placeholder="Coffee, ..." className="pl-[10px] outline-none bg-transparent text-[white] lg:flex hidden placeholder:text-[white]" />
                <i className="fa-solid fa-magnifying-glass h-[40px] aspect-square flex justify-center items-center text-[1.5rem] rounded-[10px] bg-[white] text-[#1b140e]">{<FaSearch />}</i>
            </div>
        </nav>
    )
}
import Product from "../components/elements/Product";
import DashboardMainLayout from "../components/layout/dashboard/DashboardMainLayout";
import { FaShoppingBag } from "react-icons/fa"
import Recomended from "../components/elements/Recomended"
import { IoIosStar } from "react-icons/io"
import image2 from "../assets/image/image2.png"
import image3 from "../assets/image/image3.png"
import image4 from "../assets/image/image4.png"
import image5 from "../assets/image/image5.png"
import image6 from "../assets/image/image6.png"
import image7 from "../assets/image/image7.jpg"


export default function App() {
    return (
        <DashboardMainLayout>
                <div className="w-full flex flex-col gap-[20px]">
                    <div className="card w-full flex items-center p-[20px] rounded-[20px] bg-[#ffddb8]">
                        <div className="kiri w-[70%] flex flex-col gap-[10px] items-start">
                            <h1 className="lg:text-[3rem] w-[80%] text-[1.5rem] lg:w-[40%] font-extrabold text-[#1b140e]">STAR <u className="no-underline text-[#c6865b]">YOUR DAY</u> WITH COFFE</h1>
                            <p className="lg:w-[30%] text-[#1b140e] font-semibold text-[0.9rem] w-[80%]">The best grain, the finest roast, the most powerful flavor.</p>
                            <button className="w-[70%] lg:w-[20%] bg-[#1b140e] py-[5px] lg:py-[10px] rounded-[20px]">Order Now</button>
                        </div>
                        <div className="kanan w-[30%] flex justify-center">
                            <div className="hooh lg:w-[55%]">
                                <div className="mbar w-full">
                                    <img src={image2} alt="" className="" />
                                    <img src={image3} alt="" className="w-[50%] mt-[-50px] ml-[-10px] lg:mt-[-110px] lg:ml-[-24px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-[20px]">
                    <div className="w-full">
                        <ul className="w-full flex justify-between items-center gap-[10px] overflow-x-auto lg:py-[0]">
                            <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">Popular</li>
                            <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">Newest</li>
                            <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">Recommended</li>
                            <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">Range</li>
                            <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">Popular</li>
                            <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">Newest</li>
                            <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">Recommended</li>
                            <li className="px-[20px] py-[10px] border rounded-[10px] hover:bg-[#e1cda8] shrink-0 hover:text-[#1b140e]">Range</li>
                        </ul>
                    </div>
                    <div className="bawah w-full justify-between lg:justify-around flex gap-[30px] overflow-x-auto py-[20px] lg:py-[0]">
                        <Product>
                            <Product.Image image={image4} />
                            <Product.Description title="Indonesian Beans" desc="Beans Coffe" price="$335" icon={<FaShoppingBag />} />
                        </Product>
                        <Product>
                            <Product.Image image={image5} />
                            <Product.Description title="Indonesian Beans" desc="Beans Coffe" price="$335" icon={<FaShoppingBag />} />
                        </Product>
                        <Product>
                            <Product.Image image={image6} />
                            <Product.Description title="Indonesian Beans" desc="Beans Coffe" price="$335" icon={<FaShoppingBag />} />
                        </Product>
                        <Product>
                            <Product.Image image={image5} />
                            <Product.Description title="Indonesian Beans" desc="Beans Coffe" price="$335" icon={<FaShoppingBag />} />
                        </Product>
                    </div>
                    <div className="lain w-full flex flex-col gap-[10px]">
                        <div className="atas w-full flex justify-between items-center">
                            <h1 className="text-[1.5rem] font-extrabold">Recomended</h1>
                            <p className="text-[1rem] font-semibold">View all</p>
                        </div>
                        <div className="duk w-full flex gap-[30px] overflow-x-auto py-[20px] lg:py-[0] lg:justify-around">
                            <Recomended>
                                <Recomended.Images images={image7} />
                                <Recomended.Descr titles="Indonesian Beans" descr="Beans Coffe" icons={<IoIosStar />} value="4.9/5" />
                            </Recomended>
                            <Recomended>
                                <Recomended.Images images={image4} />
                                <Recomended.Descr titles="Indonesian Beans" descr="Beans Coffe" icons={<IoIosStar />} value="4.9/5" />
                            </Recomended>
                            <Recomended>
                                <Recomended.Images images={image5} />
                                <Recomended.Descr titles="Indonesian Beans" descr="Beans Coffe" icons={<IoIosStar />} value="4.9/5" />
                            </Recomended>
                        </div>
                    </div>
                </div>
                <div className="bawahl lg:hidden w-full fixed bottom-[0px] bg-[#1b140e] py-[24px] border-t-4 border-[white]">
                    <div className="tengah w-full flex">
                        <ul className="w-full flex justify-around">
                            <li className="flex items-center gap-[10px] hover:text-[#deca97] flex-col">
                                <i className="fa-solid fa-house"></i>
                                <p>Home</p>
                            </li>
                            <li className="flex items-center gap-[10px] hover:text-[#deca97] flex-col">
                                <i className="fa-regular fa-heart"></i>
                                <p>Favourite</p>
                            </li>
                            <li className="flex items-center gap-[10px] hover:text-[#deca97] flex-col">
                                <i className="fa-regular fa-envelope"></i>
                                <p>Inbox</p>
                            </li>
                            <li className="flex items-center gap-[10px] hover:text-[#deca97] flex-col">
                                <i className="fa-regular fa-comment-dots"></i>
                                <p>Order</p>
                            </li>
                            <li className="flex items-center gap-[10px] hover:text-[#deca97] flex-col">
                                <i className="fa-solid fa-bag-shopping"></i>
                                <p>Bag</p>
                            </li>
                        </ul>
                    </div>
                </div>

        </DashboardMainLayout>
    )
}
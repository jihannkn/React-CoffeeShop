/* eslint-disable no-empty-pattern */
/* eslint-disable react/prop-types */
const Product = ({ children }) => {
    return (
        <div className="card lg:w-[20%] p-[15px] rounded-[20px] flex flex-col gap-[10px] bg-[#33291f] shrink-0 ">
            {children}
        </div>
    )
}

const Image = ({ image }) => {
    return (
        <div className="mbar w-full">
            <img src={image} alt="" className="rounded-[20px] w-full h-[200px]" />
        </div>
    )
}

const Description = ({ title, desc, price, icon }) => {
    return (
        <div className="teks">
            <h1 className="font-extrabold text-[1.2rem]">{title}</h1>
            <div className="bawah flex justify-between items-center">
                <div className="kiri">
                    <p className="font-semibold text-[#968c82]">{desc}</p>
                    <p className="font-extrabold">{price}</p>
                </div>
                <div className="fa-solid fa-bag-shopping h-[40px] aspect-square flex items-center justify-center text-[1.3rem] bg-[#e6cca0] rounded-[10px] text-[#513a10]">{icon}</div>
            </div>
        </div>
    )
}

Product.Image = Image
Product.Description = Description

export default Product
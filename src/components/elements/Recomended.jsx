/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Recomended = ({ children }) => {
    return (
            <div className="card w-full lg:w-[30%] flex  items-center p-[10px] gap-[15px] rounded-[15px] shrink-0">
                {children}
            </div>
            
    )
}

const Images = ({ images }) => {
    return (
        <img src={images} alt="" className="h-[90px] rounded-[10px] aspect-square" />
    )
}

const Descr = ({ titles, descr, icons, value }) => {
    return (
        <div className="tek flex flex-col gap-[5px]">
            <h1 className=" font-extrabold">{titles}</h1>
            <p className="font-semibold text-[#968c82]">{descr}</p>
            <p className="text-[0.7rem] font-semibold flex justify-items-end items-center gap-[3px]"><i className="text-orange-600">{icons}</i> {value}</p>
        </div>
    )
}

Recomended.Images = Images
Recomended.Descr = Descr

export default Recomended
/* eslint-disable react/prop-types */
export default function NavLink(props) {
    return (
        <a aria-current="page"  href="home" className="active flex items-center gap-[10px]">
                        {props.children}
                    </a>
    )
}
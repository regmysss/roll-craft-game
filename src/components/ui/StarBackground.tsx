export default function StarBackground() {
    return (
        <>
            <img
                src="stars-top.png"
                alt="Stars"
                className="absolute top-0 left-1/2 -translate-x-1/2 z-10 blur-sides-bottom"
            />
            <img
                src="stars-bottom.png"
                alt="Stars"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 blur-sides-top"
            />
            <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 max-w-[400px] w-full h-[280px]  bg-[#9955FF] rounded-full blur-[200px]">
            </div>
            <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[400px] w-full h-[280px] bg-[#9955FF] rounded-full blur-[200px]">
            </div>
        </>
    )
}

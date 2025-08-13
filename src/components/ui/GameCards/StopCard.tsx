export default function StopCard() {
    return (
        <div className="relative flex flex-col items-center justify-center size-full">
            <div className="flex items-center justify-center">
                <img
                    className="absolute object-cover -z-20 opacity-50 min-w-50"
                    src="light.png"
                    alt="Light"
                />
                <img
                    src="stop.png"
                    alt="Stop"
                    className="size-12"
                />
            </div>
        </div>
    )
}

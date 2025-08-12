type ZeroCardProps = {
    type: string;
    src: string;
};

export default function ZeroCard({ type, src }: ZeroCardProps) {
    return (
        <div className="relative flex flex-col items-center justify-center size-full">
            <div
                className="absolute w-full h-1/2 -bottom-1/2 blur-[32px] bg-[#FFD600] -z-30 rounded-full"
            >
            </div>
            <div
                className="absolute w-full h-1/2 -top-1/2 blur-[32px] bg-[#FFD600] -z-30 rounded-full"
            >
            </div>
            <div className="flex items-center justify-center">
                <img
                    className="absolute size-full object-cover -z-20 opacity-50"
                    src="light.png"
                    alt="Light"
                />
                <img
                    src={src}
                    alt={type}
                    className="size-12"
                />
            </div>
        </div>
    )
}

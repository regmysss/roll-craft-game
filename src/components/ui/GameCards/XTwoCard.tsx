type XTwoCardProps = {
    type: string;
    src: string;
};

export default function XTwoCard({ type, src }: XTwoCardProps) {
    return (
        <div className="relative flex flex-col items-center justify-center size-full">
            <div className="flex items-center justify-center">
                <img
                    className="absolute size-full object-cover -z-20 opacity-50"
                    src="light.png"
                    alt="Light"
                />
                <img
                    className="absolute size-full object-cover -z-10 opacity-50"
                    src="confetti.png"
                    alt="Confetti"
                />
                <div
                    className="absolute rounded-full size-full bg-[#3973E5] -z-20 blur-[40px]"
                >
                </div>
                <img
                    src={src}
                    alt={type}
                    className="size-12"
                />
            </div>
        </div>
    )
}

export default function XTwoCard() {
    return (
        <div className="relative flex flex-col items-center justify-center size-full">
            <div className="flex items-center justify-center">
                <img
                    className="absolute object-cover min-w-50 -z-10 opacity-60"
                    src="light.png"
                    alt="Light"
                />
                <img
                    className="absolute size-full object-cover -z-20 opacity-50 min-w-40"
                    src="confetti.png"
                    alt="Confetti"
                />
                <div
                    className="absolute rounded-full size-full bg-[#1652ca] -z-20 blur-[40px]"
                >
                </div>
                <img
                    src="x2-card.png"
                    alt="x2"
                    className="size-12 object-contain"
                />
            </div>
        </div>
    )
}

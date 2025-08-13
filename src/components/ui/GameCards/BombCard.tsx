export default function BombCard() {
    return (
        <div className="relative flex flex-col items-center justify-center size-full">
            <div className="flex items-center justify-center">
                <img
                    className="absolute object-cover -z-10 opacity-50 min-w-50"
                    src="light.png"
                    alt="Light"
                />
                <div
                    className="absolute size-full bg-[#E13030] -z-20 blur-lg"
                >
                </div>
                <img
                    src="bomb.png"
                    alt="Bomb"
                    className="size-12"
                />
            </div>
        </div>
    )
}

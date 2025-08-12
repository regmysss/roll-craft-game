type BombCardProps = {
    type: string;
    src: string;
};

export default function BombCard({ type, src }: BombCardProps) {
    return (
        <div className="relative flex flex-col items-center justify-center size-full">
            <div className="flex items-center justify-center">
                <img
                    className="absolute size-full object-cover -z-20 opacity-50"
                    src="light.png"
                    alt="Light"
                />
                <div
                    className="absolute size-12 bg-red-500 -z-10 blur-lg"
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

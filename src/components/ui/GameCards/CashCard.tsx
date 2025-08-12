import { parseNumber } from "../../../utils/parseNumber";

type CashCardProps = {
    amount: number;
    type: string;
    src: string;
};

export default function CashCard({ type, src, amount }: CashCardProps) {
    return (
        <div className="relative flex flex-col items-center justify-center size-full">
            <div
                className="absolute size-full -top-1/2 blur-2xl bg-[#82E024] -z-30 rounded-full"
            >
            </div>
            <div
                className="absolute w-full h-1/2 -bottom-1/2 blur-[32px] bg-[#82E024] -z-30 rounded-full"
            >
            </div>
            <div className="flex items-center justify-center">
                <img
                    className="absolute size-full object-cover -z-20 opacity-50"
                    src="light.png"
                    alt="Light"
                />
                <div
                    className="absolute size-12 bg-[#82E024] -z-10 blur-lg"
                >
                </div>
                <img
                    src={src}
                    alt={type}
                    className="size-12"
                />
            </div>
            <span className="text-white font-bold">
                {parseNumber(amount)}
            </span>
        </div>
    )
}

import { motion } from "framer-motion";

type ModalButtonProps = {
    children: React.ReactNode;
    className: string;
}

export default function ModalButton({ children, className }: ModalButtonProps) {
    return (
        <motion.a
            className={`flex items-center justify-center rounded-lg w-full text-lg font-extrabold bg-linear-to-b h-12 max-w-[194px]
                        border-t-1 text-white/80 border-white/50 text-shadow-[0_1px_1px_rgba(0,0,0,0.2)] ${className}`}
            href='.'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.a>
    )
}

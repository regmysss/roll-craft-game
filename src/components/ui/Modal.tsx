import { motion } from 'framer-motion';

type GameOverModalProps = {
    children: React.ReactNode;
}

export default function GameOverModal({ children }: GameOverModalProps) {
    return (
        <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <img
                src="logo.png"
                alt="Logo"
                className="absolute top-5 left-1/2 -translate-x-1/2"
            />
            <motion.div
                className="flex flex-col items-center justify-center text-center px-5 py-20"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
                {children}
            </motion.div>
        </motion.div>
    )
}

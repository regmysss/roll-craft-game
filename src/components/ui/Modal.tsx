import { motion } from 'framer-motion';
import { useLayoutEffect } from 'react';

type GameOverModalProps = {
    children: React.ReactNode;
}

export default function Modal({ children }: GameOverModalProps) {
    useLayoutEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-start px-10 py-5 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <img
                src="logo.png"
                alt="Logo"
                className="mb-5"
            />
            <motion.div
                className="flex-1 flex flex-col items-center justify-center text-center"
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

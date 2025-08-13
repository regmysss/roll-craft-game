import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { motion } from "framer-motion";

export default function ClaimButton() {
  const { setIsWinGame, isOpenOne } = useContext(GameContext);

  return (
    <motion.button
      disabled={!isOpenOne}
      className="rounded-lg w-full text-lg font-extrabold bg-linear-to-b cursor-pointer
       from-[#6DBF1D] to-[#498013] text-white h-12 border-t-1 border-white/50
      disabled:border-1 disabled:border-white/40 disabled:border-dashed disabled:text-white/40 disabled:bg-none
      text-shadow-[0_1px_1px_rgba(0,0,0,0.2)] disabled:cursor-not-allowed"
      onClick={() => setIsWinGame(true)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <span>Claim</span>
    </motion.button>
  )
}

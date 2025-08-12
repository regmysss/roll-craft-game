import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

export default function ClaimButton() {
  const { rewardCount, setIsWinGame } = useContext(GameContext);

  return (
    <button
      disabled={rewardCount <= 0}
      className="rounded-lg w-full text-lg font-extrabold bg-linear-to-b
       from-[#6DBF1D] to-[#498013] text-white py-3 border-t-1 border-white/50
      disabled:border-1 disabled:border-white/40 disabled:border-dashed disabled:text-white/40 disabled:bg-none
      text-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
      onClick={() => setIsWinGame(true)}
    >
      <span>Claim</span>
    </button>
  )
}

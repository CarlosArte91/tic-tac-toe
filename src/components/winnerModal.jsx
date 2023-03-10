import ResetButton from "./resetButton"
import Square from "./square"
import confetti from "canvas-confetti"

function WinnerModal({ winner, resetBoard }) {
  if (winner === null) return null

  const text = winner ? "Ganó" : "Empate"
  const infoWin = winner ? <Square>{winner}</Square> : null
  if (winner) confetti()

  return (
    <div className="modal">
      <section className="info">
        <h2>{text}</h2>
        {infoWin}
        <ResetButton resetBoard={resetBoard}/>
      </section>
    </div>
  )
}

export default WinnerModal

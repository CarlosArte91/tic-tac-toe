import { TURNS } from "../constants"
import Square from "./square"

function Turns({ turn }) {
  const classX = turn === TURNS.X ? "turn" : ""
  const classO = turn === TURNS.O ? "turn" : ""

  return (
    <section className="turns">
      <div className={classX}>
        <Square>{TURNS.X}</Square>
      </div>

      <div className={classO}>
        <Square>{TURNS.O}</Square>
      </div>
    </section>
  )
}

export default Turns

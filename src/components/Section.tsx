import {Dice} from "@/components/Dice"

interface DisplayDiceProps{
  valor:number
}

export function Section() {
  return (
    <div>
      <Dice/>
    </div>
  )
}

import {Dice} from "@/components/Dice"
import {LuckyOrUnlucky} from "@/components/LuckyOrUnlucky"

interface DisplayDiceProps{
  valor:number
}

export function Section() {
  return (
    <div className="flex justify-center flex-wrap gap-32">
      <Dice/>
      <LuckyOrUnlucky/>
    </div>
  )
}

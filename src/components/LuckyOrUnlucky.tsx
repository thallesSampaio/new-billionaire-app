'use client';
import { useState } from "react";
const data: string[] = [
    "",
    "B",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G"
]
const auxData: string[] = [
]

function getRandomElement<T>(array: T[]): { element: T, index: number } | undefined {
    if (array.length === 0) return undefined;
    const randomIndex = Math.floor(Math.random() * array.length);
    return { element: array[randomIndex], index: randomIndex };
}

export function LuckyOrUnlucky() {
    const [result, setResult] = useState<String>()

    const handleClickDraw = () => {
        let randomResult = getRandomElement(data);

        if (randomResult === undefined) {
            data.push(...auxData)
            randomResult = getRandomElement(data);
            if (randomResult !== undefined) {
                setResult(randomResult.element);
                let removed = data.splice(randomResult.index, 1);
                auxData.push(...removed);
            }
        } else {
            setResult(randomResult.element);
            let removed = data.splice(randomResult.index, 1);
            auxData.push(...removed);
        }
    }
    return (
        <div className="shadow-lg mx-4 my-4">
            <div className="w-64">
                <div className="flex justify-center flex-wrap p-4">
                    <p className="break-all">{result}Lorem ipsum dolor sit ametalkshjdalksdjhaklsdjhalkdjahsldçkaljsdbhlkajsdhlaksjdhbalksjdbalksdjbalksdjbalksdjbadsa consectetur adipisicing elit. Pea.ksdjbak.sdjnbalk.sdjbal.ksdjbaks.,djbak,.sdjarferendis, rem.</p>
                    <button onClick={handleClickDraw} className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 mt-4 rounded">Sortear</button>
                </div>
            </div>
        </div>
    )
}
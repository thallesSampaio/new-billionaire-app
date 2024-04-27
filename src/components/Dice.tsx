'use client';
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import FaceOne from "@/assets/face1.png"
import FaceTwo from "@/assets/face2.png"
import FaceThree from "@/assets/face3.png"
import FaceFour from "@/assets/face4.png"
import Default from "@/assets/default.png"

export function Dice() {

    const [rollOne, setRollOne] = useState<number>(0)
    const [rollTwo, setRollTwo] = useState<number>(0)
    const [imageOne, setImageOne] = useState<StaticImageData>()
    const [imageTwo, setImageTwo] = useState<StaticImageData>()

    function init() {
        setImageOne(Default)
        setImageTwo(Default)
    }
    useEffect(() => {
        init();
      },[]);

    const handleClickRoll = () => {
        const number = Math.floor(Math.random() * 4) + 1;
        const number2 = Math.floor(Math.random() * 4) + 1;
        setRollOne(number)
        setRollTwo(number2)
        switch (number) {
            case 1: {
                setImageOne(FaceOne)
            } break;
            case 2: {
                setImageOne(FaceTwo)
            } break;
            case 3: {
                setImageOne(FaceThree)
            } break;
            case 4: {
                setImageOne(FaceFour)
            } break;
        }
        switch (number2) {
            case 1: {
                setImageTwo(FaceOne)
            } break;
            case 2: {
                setImageTwo(FaceTwo)
            } break;
            case 3: {
                setImageTwo(FaceThree)
            } break;
            case 4: {
                setImageTwo(FaceFour)
            } break;
        }
    }

    return (
        <div className="p-4 shadow-xl">
            <div className="flex flex-col gap-8">
                <div className="flex items-center justify-center gap-8 p-4">
                    <Image
                        src={imageOne}
                        alt="img 1" />
                    <Image
                        src={imageTwo}
                        alt="img 2" />
                </div>
                <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleClickRoll}>Rolar</button>
                </div>
            </div>
        </div>
    )
}

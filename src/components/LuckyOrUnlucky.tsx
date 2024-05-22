'use client';
import { useState } from "react";
const data: string[] = [
    "Você juntou milhas nos últimos meses e agora tem uma viagem gratuita, jogue novamente.",
    "Você juntou milhas nos últimos meses e agora tem uma viagem gratuita, jogue novamente.",
    "Você juntou milhas nos últimos meses e agora tem uma viagem gratuita, jogue novamente.",
    "Você fez uma aposta (alta ou baixa) com outros jogadores, jogue o dado, se você ganhar cada jogador lhe paga 200, se você perder, pague 50 para cada um.",
    "Você fez uma aposta (alta ou baixa) com outros jogadores, jogue o dado, se você ganhar cada jogador lhe paga 200, se você perder, pague 50 para cada um.",
    "Você fez uma aposta (alta ou baixa) com outros jogadores, jogue o dado, se você ganhar cada jogador lhe paga 200, se você perder, pague 50 para cada um.",
    "(hospedagem gratuita) Guarde esse recibo do banco com você, e use quando estiver sem dinheiro para pagar o aluguel para outro jogador. (INV)",
    "(hospedagem gratuita) Guarde esse recibo do banco com você, e use quando estiver sem dinheiro para pagar o aluguel para outro jogador. (INV)",
    "(hospedagem gratuita) Guarde esse recibo do banco com você, e use quando estiver sem dinheiro para pagar o aluguel para outro jogador. (INV)",
    "(zera imposto) Se apertou no final do ano? Não tem problema, fique com um recibo do banco para quitar seus impostos no final do mês. (INV)",
    "(zera imposto) Se apertou no final do ano? Não tem problema, fique com um recibo do banco para quitar seus impostos no final do mês. (INV)",
    "(zera imposto) Se apertou no final do ano? Não tem problema, fique com um recibo do banco para quitar seus impostos no final do mês. (INV)",
    "Este caminho está perigoso, volte e pegue outra rota, ou continue, e pague 450.",
    "Este caminho está perigoso, volte e pegue outra rota, ou continue, e pague 450.",
    "Este caminho está perigoso, volte e pegue outra rota, ou continue, e pague 450.",
    "Você ganhou um bloqueador de rua de 2 turnos (INV).",
    "Você ganhou um bloqueador de rua de 2 turnos (INV).",
    "Você ganhou um bloqueador de rua de 2 turnos (INV).",
    "Você ganhou um bloqueador de rua de 1 turnos (INV).",
    "Você ganhou um bloqueador de rua de 1 turnos (INV).",
    "Você ganhou um bloqueador de rua de 1 turnos (INV).",
    "Quebre um bloqueio de rota (INV).",
    "Quebre um bloqueio de rota (INV).",
    "Quebre um bloqueio de rota (INV).",
    "As empresas que você investe pagaram dividendos adiantado esse ano, e com acréscimo de 40% (se você ainda não investe, pode vender esse bônus a outro jogador).",
    "As empresas que você investe pagaram dividendos adiantado esse ano, e com acréscimo de 40% (se você ainda não investe, pode vender esse bônus a outro jogador).",
    "As empresas que você investe pagaram dividendos adiantado esse ano, e com acréscimo de 20% (se você ainda não investe, pode vender esse bônus a outro jogador).",
    "As empresas que você investe pagaram dividendos adiantado esse ano, e com acréscimo de 20% (se você ainda não investe, pode vender esse bônus a outro jogador).",
    "As empresas que você investe pagaram dividendos adiantado esse ano, e com acréscimo de 30% (se você ainda não investe, pode vender esse bônus a outro jogador).",
    "As empresas que você investe pagaram dividendos adiantado esse ano, e com acréscimo de 30% (se você ainda não investe, pode vender esse bônus a outro jogador).",
    "Já tem um imóvel? Receba uma casa (INV).",
    "Já tem um imóvel? Receba uma casa (INV).",
    "Já tem um imóvel? Receba uma casa (INV).",
    "Voce se acidentou, fique 2 rodadas sem jogar.",
    "Voce se acidentou, fique 2 rodadas sem jogar.",
    "Voce se acidentou, fique 2 rodadas sem jogar.",
    "Invadiram sua casa do interior, gaste 800 para arrumar.",
    "Invadiram sua casa do interior, gaste 800 para arrumar.",
    "Invadiram sua casa do interior, gaste 800 para arrumar.",
    "Você comprou e revendeu objetos da China, receba 500.",
    "Você comprou e revendeu objetos da China, receba 500.",
    "Você comprou e revendeu objetos da China, receba 500.",
    "Receba 3000 em ações.",
    "Receba 3000 em ações.",
    "Receba 5000 em ações.",
    "Receba 5000 em ações.",
    "Receba 1000 em ações.",
    "Receba 1000 em ações.",
    "Uma das empresas que você investe teve problemas, perca 20% dos seus investimentos.",
    "Uma das empresas que você investe teve problemas, perca 20% dos seus investimentos.",
    "Uma das empresas que você investe teve problemas, perca 30% dos seus investimentos.",
    "Uma das empresas que você investe teve problemas, perca 30% dos seus investimentos.",
    "Uma das empresas que você investe teve problemas, perca 40% dos seus investimentos.",
    "Uma das empresas que você investe teve problemas, perca 40% dos seus investimentos.",
    "Seu carro precisa de conserto, pague 500.",
    "Seu carro precisa de conserto, pague 500.",
    "Seu carro precisa de conserto, pague 500.",
    "Seu carro precisa de conserto, pague 500.",
    "Seus imóveis, sofreram com a tempestade, pague 350 por cada imóvel.",
    "Seus imóveis, sofreram com a tempestade, pague 350 por cada imóvel.",
    "Seus imóveis, sofreram com a tempestade, pague 350 por cada imóvel.",
    "Pague seus impostos adiantado, o governo sente fome por impostos.",
    "Pague seus impostos adiantado, o governo sente fome por impostos.",
    "Pague seus impostos adiantado, o governo sente fome por impostos.",
    "O governo aumentou a arrecadação esse ano, todos jogadores pagarão impostos a mais, e você escolhera a porcentagem de cada um(30%, 25%, 20%, 15% e 10%).",
    "O governo aumentou a arrecadação esse ano, todos jogadores pagarão impostos a mais, e você escolhera a porcentagem de cada um(30%, 25%, 20%, 15% e 10%).",
    "O governo aumentou a arrecadação esse ano, todos jogadores pagarão impostos a mais, e você escolhera a porcentagem de cada um(30%, 25%, 20%, 15% e 10%).",
    "Você ganhou um desconto de 20% na compra do seu próximo imóvel (INV).",
    "Você ganhou um desconto de 20% na compra do seu próximo imóvel (INV).",
    "Você ganhou um desconto de 20% na compra do seu próximo imóvel (INV).",
    "Você foi roubado retire dois itens do seu INV",
    "Você foi roubado retire dois itens do seu INV",
    "Você foi roubado retire dois itens do seu INV",
    "Você foi roubado retire um item do seu INV",
    "Você foi roubado retire um item do seu INV",
    "Você foi roubado retire um item do seu INV",
    "Você se passou no cartão de credito esse mês, pague 350 inesperados ",
    "Você se passou no cartão de credito esse mês, pague 350 inesperados ",
    "Sua mulher quer presentes, gaste 450",
    "Sua mulher quer presentes, gaste 450",
    "Seu marido gastou com vídeo game novamente, gaste 250",
    "Seu marido gastou com vídeo game novamente, gaste 250",
    "Escolha um jogador(ou tirem no 2 ou 1) para pagar seus impostos esse ano.",
    "Escolha um jogador(ou tirem no 2 ou 1) para pagar seus impostos esse ano.",
    "Escolha um jogador(ou tirem no 2 ou 1) para pagar seus impostos esse ano."
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
                <p className="break-all">{result}</p><button onClick={handleClickDraw} className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 mt-4 rounded">Sortear</button>
                </div>
            </div>
        </div>
    )
}
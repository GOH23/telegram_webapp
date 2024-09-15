import { gameType } from "./server_api/useApi";
import { AiFillCheckCircle } from "react-icons/ai";
export function GameSelectCard({gameData: {gameName},SetSelected,elementIndex,isSelected}: {gameData: gameType,isSelected: boolean,SetSelected: (data: number)=>void,elementIndex: number}){
    return(<div className='flex flex-row items-center p-4 border-2 cursor-pointer' onClick={()=> SetSelected(elementIndex) }>
        <p>{gameName}</p>
        {isSelected && <AiFillCheckCircle className='ml-auto text_purple text-3xl'/>}
    </div>)
}
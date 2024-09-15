import { gameType } from "./server_api/useApi";

export function GameSelectCard({gameData: {gameName}}: {gameData: gameType}){
    return(<div className='flex flex-row p-4 border-2' onClick={()=>{
        
    }}>
        <p>{gameName}</p>
    </div>)
}
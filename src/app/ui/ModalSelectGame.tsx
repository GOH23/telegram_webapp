import { Modal } from "antd"
import { GameSelectCard } from "./GameSelectCard"
import { gameType } from "./server_api/useApi"

export const ModalSelectGame = ({ gameData,isLoading,isModalOpen,handleOk,handleCancel}: { gameData: gameType[], isLoading: boolean,isModalOpen: boolean,handleOk: ()=>void,handleCancel: ()=>void }) => {
    
    return (<Modal wrapClassName="bg_purple blur_bg" title="Выберите категорию игры" centered loading={isLoading} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p className='absolute top-0 text-white'>S</p>
        {isLoading ? <div></div> : gameData.map((el) => {
            return (<GameSelectCard key={el.gameId} gameData={el} />)
        })}
    </Modal>)
}
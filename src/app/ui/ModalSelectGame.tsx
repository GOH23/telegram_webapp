import { Modal } from "antd"
import { GameSelectCard } from "./GameSelectCard"
import { gameType } from "./server_api/useApi"

export const ModalSelectGame = ({ gameData, isLoading, isModalOpen, handleOk, handleCancel, SelectedType, SetSelectedType }: {
    SelectedType: number,
    SetSelectedType: (data: number) => void
    gameData: gameType[],
    isLoading: boolean,
    isModalOpen: boolean,
    handleOk: () => void,
    handleCancel: () => void
}) => {

    return (<Modal wrapClassName="bg_purple blur_bg" title="Выберите категорию игры" loading={isLoading} open={isModalOpen} onOk={handleOk} footer={null} onCancel={handleCancel}>
        <p className='absolute top-0 text-white'>S</p>
        <div className=' max-h-40 overflow-y-auto'>
            {isLoading ? <div></div> : gameData.map((el, ind) => {
                return (<GameSelectCard isSelected={ind == SelectedType} key={el.gameId} gameData={el} elementIndex={ind} SetSelected={SetSelectedType} />)
            })}
        </div>
    </Modal>)
}
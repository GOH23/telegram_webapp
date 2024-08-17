import { useState } from "react"
import { borderAnimStyle } from "./classname";
import { AnimatePresence, motion } from 'framer-motion'
import { FcDislike, FcLike } from "react-icons/fc";
import { IconType } from "react-icons";
import { BiMinus } from "react-icons/bi";
function AnimetedIcon({ IsStateOpened, SetStateOpened,Icon }: { IsStateOpened: boolean, SetStateOpened: (state: boolean) => void,Icon: IconType }) {
    if (IsStateOpened) {
        return (<motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: .7 }}
            transition={{ repeatType: 'reverse', duration: .5,repeat: 1 }}
            onAnimationComplete={() => { SetStateOpened(false) }}
            className='absolute rounded flex justify-center items-center text-5xl bg-gray-600 opacity-70 size-full'>
            <motion.div>
                <Icon/>
            </motion.div>
        </motion.div>)
    }
}
export function Card({ value, name }: { value: number, name: string }) {
    const [SelectedCount, SetSelectedCount] = useState(0)
    const [IsSuccessOpened, SetIsSuccessOpened] = useState(false)
    const [IsDeletedOpened, SetIsDeletedOpened] = useState(false)
    return (<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='rounded h-auto bg-stone-900 hover:shadow-md cursor-pointer relative z-10'
        onClick={() => {
            SetSelectedCount(SelectedCount + 1)
            SetIsSuccessOpened(true)
        }}
    >
        <AnimetedIcon IsStateOpened={IsSuccessOpened} Icon={FcLike} SetStateOpened={SetIsSuccessOpened} />
        <AnimetedIcon IsStateOpened={IsDeletedOpened} Icon={FcDislike} SetStateOpened={SetIsDeletedOpened} />
        <div className="p-2">
            <img src={"./60-kristallov-1675329753.webp"} alt={""} className="w-full h-52" />
            <p className="text-white text-center font-bold min-h-5">{name}</p>
            <div className='flex h-10 flex-row justify-between text-white text-center font-bold'>
                <div className="flex justify-center items-center"><p className=''>{value} руб</p></div>
                <AnimatePresence>
                    {SelectedCount >= 1 && <motion.button
                        type='button'
                        className={'bg-cyan-600 w-10 h-10 flex justify-center items-center rounded-lg ' + borderAnimStyle}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: .1 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            SetSelectedCount(SelectedCount - 1)
                            SetIsDeletedOpened(true)
                        }}>
                        <p>-</p>
                    </motion.button>}
                </AnimatePresence>
            </div>
            <AnimatePresence>
                {SelectedCount != 0 &&
                    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} className='absolute w-6 h-6 flex justify-center bg-red-700 text-gray-50 -top-2 -right-2 rounded-full'>
                        <p>{SelectedCount}</p>
                    </motion.div>
                }
            </AnimatePresence>
        </div>

    </motion.div>)
}
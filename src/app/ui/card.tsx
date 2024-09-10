import { useEffect, useState } from "react"
import { animatedShadow, borderAnimStyle } from "./classname";
import { AnimatePresence, motion } from 'framer-motion'
import { FcDislike, FcLike } from "react-icons/fc";
import { IconType } from "react-icons";

import clsx from "clsx";

import { useConfig } from "./server_api/useConfig";
import { CardType } from "./types/types_for";
function AnimetedIcon({ IsStateOpened, SetStateOpened,Icon }: { IsStateOpened: boolean, SetStateOpened: (state: boolean) => void,Icon: IconType,ImagePath?: string }) {
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

export function Card({ data: {Name,Value} }: { data: CardType }) {

    const [SelectedCount, SetSelectedCount] = useState(0)
    const [IsSuccessOpened, SetIsSuccessOpened] = useState(false)
    const [IsDeletedOpened, SetIsDeletedOpened] = useState(false)
    const { web_app } = useConfig()

    return (<motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={clsx(
            'rounded h-auto bg-stone-900  cursor-pointer relative z-10 w-44 max-w-44',
            animatedShadow
        )}
        onClick={() => {
            SetIsSuccessOpened(true)
            web_app?.sendData(JSON.stringify({
                result: "flex flex-row pt-10 flex-wrap items-stretch justify-center  md:gap-5 gap-2"
            }))
            web_app?.close()
        }}
    >
        
        <AnimetedIcon IsStateOpened={IsSuccessOpened} Icon={FcLike} SetStateOpened={SetIsSuccessOpened} />
        <AnimetedIcon IsStateOpened={IsDeletedOpened} Icon={FcDislike} SetStateOpened={SetIsDeletedOpened} />
        <div className="p-2">
            <img src={""} alt={""} className="w-full h-42" />
            <p className="text-white text-center font-bold min-h-5">{Name}</p>
            <div className='flex h-10 flex-row justify-between text-white text-center font-bold'>
                <div className="flex justify-center items-center"><p className=''>{Value} руб</p></div>
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


                            SetIsDeletedOpened(true)
                        }}>
                        <p>-</p>
                    </motion.button>}
                </AnimatePresence>
            </div>
            {/* <AnimatePresence>
                {SelectedCount != 0 &&
                    <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 1, type: 'spring' }} className='absolute w-6 h-6 flex justify-center bg-red-700 text-gray-50 -top-2 -right-2 rounded-full'>
                        <p>{SelectedCount}</p>
                    </motion.div>
                }
            </AnimatePresence> */}
        </div>

    </motion.div>)
}
import { motion } from "framer-motion";
export function LoadingPage() {
    return (<div className='min-h-dvh flex flex-col justify-center items-center'>
        <div className='relative'>
            <img src="/logos/загруженное.gif" alt="" className="w-fit max-h-52 rounded-md" />
            <motion.img src="/logos/загруженное.gif" initial={{scale: 1.05,opacity: .5}}animate={{scale: 1,opacity: 0}} transition={{repeat: Infinity,type: 'spring',duration: 1}}  alt="" className="w-fit -z-10 max-h-52 rounded-md absolute top-0" />
        </div>
        <p className='text-xl text-white'>Загрузка данных...</p>
    </div>)
}
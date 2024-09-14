import clsx from "clsx";
import { animatedShadow } from "../../classname";

export function DataCard({ImageSource,GameName}:{ImageSource: string,GameName: string}) {
    return <div className={'bg-stone-900 h-32 mx-2 mt-2 rounded-2xl p-3 bg-opacity-50 backdrop-filter  backdrop-blur-md'}>
        <div className={clsx(
            'flex items-center h-full gap-5'
        )}>
            <img className={clsx(
                'w-24 h-24'
            )} src={ImageSource} />
            <p className={
                clsx(
                    'self-start'
                )
            }>{GameName} Данные о игроке</p>
            <button className={
                clsx('')
            }></button>
        </div>

    </div>
}
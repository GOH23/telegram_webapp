import { Field, Label, Listbox, ListboxButton, ListboxOption, ListboxOptions, Select } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Types } from './types/types_for'
import { animatedShadow } from './classname'
import { FcLike } from 'react-icons/fc'

export function Filter_game() {
    const [selectedPerson, setSelectedPerson] = useState(Types[0])
    return (<div className={
        clsx(
            ' bg-stone-900 w-52',
            'text-white font-bold',
            'mx-auto rounded-xl'
        )
    }>
        <Listbox value={selectedPerson} onChange={setSelectedPerson} >
            <ListboxButton className={clsx(
                'w-52 p-2 flex items-center'
            )}>{selectedPerson.name}</ListboxButton>
            <ListboxOptions className={clsx(
                'z-10 w-52 *:text-white rounded-xl *:font-bold'
            )} anchor="bottom" >
                {Types.map((Types) => (
                    <ListboxOption key={Types.id} value={Types} className={clsx(
                        'p-3 my-0.5 bg-stone-900 rounded-xl cursor-pointer hover:bg-stone-800 ',
                        animatedShadow,
                        'flex items-center'
                    )}>
                        {Types.name}
                        <AnimatePresence>
                            {selectedPerson.name == Types.name && <motion.div
                                className={clsx(
                                    'ml-auto'
                                )}
                            >
                                <FcLike className={clsx(

                                )}/>
                            </motion.div>}
                        </AnimatePresence>
                    </ListboxOption>
                ))}
            </ListboxOptions>
        </Listbox>
    </div>)
}
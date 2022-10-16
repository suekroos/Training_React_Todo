import { memo } from 'react'
import { Item } from '../types/item'

type Props = {
    itemsDone:Array<Item>
}

export const TodoDones = memo((props: Props) => {
    const { itemsDone } = props

    return(
        <div className='flex flex-col w-96 m-4'>
            <div className='mt-2 grid justify-items-end border-b-4 border-slate-700'>完了済 一覧</div>
            <ul className='overflow-auto h-60'>
                {itemsDone.map((itemDone) => (
                    <li key={itemDone.key} className='p-2 left-0 border-b-2 border-dashed border-slate-700 bg-blue-200'>
                        {itemDone.text}
                    </li>
                ))}
            </ul>
        </div>
    )
})
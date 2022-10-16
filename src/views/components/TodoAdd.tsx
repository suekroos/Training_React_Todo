import { memo, useCallback } from 'react'
import { Item } from '../types/item'
import { TodoItem } from './TodoItem'

type Props = {
    items: Array<Item>
    setItems: React.Dispatch<React.SetStateAction<Item[]>>
    itemsDone: Array<Item>
    setItemsDone: React.Dispatch<React.SetStateAction<Item[]>>
}

export const TodoAdd = memo((props:Props) => {
    const{items, setItems, itemsDone, setItemsDone } = props

    const oncheckChange = useCallback(
        (checkedItem: Item) => {
            const newItems = items.map((item) => {
                if(item.key === checkedItem.key) {
                    item.done = !item.done
                }
                return item
            })
            setItems(newItems)
        },
        [items, setItems]
    )

    const TodoDoneLength = useCallback(() => {
        const newItemsDone = items.filter((item) => item.done === false)
        if(newItemsDone.length)
            return <span className=''>{newItemsDone.length}個のタスクが残っています</span>
        return 'タスクはありません'
    },[items])

    const onClickDelete = () => {
        if(!items.length) return
        const newItems =items.filter((item) => item.done === false)
        setItems(newItems)
        const newItemsDone = items.filter((item) => item.done === true)
        setItemsDone([...itemsDone, ...newItemsDone])
    }

    const onClickAllClear = () => {
        const newItems:Array<Item> = []
        setItems(newItems)
    }

    return(
        <div className='flex flex-col w-96'>
            <div className='m-2'>
                { items.length === 0 ?
                    <div className='grid justify-items-end'>
                        {TodoDoneLength()}
                    </div>:
                    <div className='grid justify-items-end border-b-4 border-slate-700 '>
                        {TodoDoneLength()}
                    </div>
                }
                
                {items.map((item) => (
                    <TodoItem key={item.key} item={item} onCheck={oncheckChange} />
                ))}
            </div>
            <div className='flex justify-around '>
                <button className='p-2 text-white bg-green-700 rounded' onClick={onClickDelete} type="button">
                    完了済を削除
                </button>
                <button className='p-2 text-white bg-slate-500 rounded' onClick={onClickAllClear} type="button">
                    やることをクリア
                </button>
            </div>
        </div>
    )
})
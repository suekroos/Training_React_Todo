import { Item } from "../types/item"
import { memo } from "react"

type Props = {
    item: Item
    onCheck: (checkedItem: Item) => void
}

export const TodoItem = memo((props:Props) =>{
    const { item, onCheck } = props
    const handleChange = () => onCheck(item)
    return(
        <>
            <div className="p-2 bg-blue-200 left-0">
                <label>
                    {item.done ? 
                    <span className=" text-rose-800">{item.text}</span> : 
                    <span className=" text-black">{item.text}</span>
                    }
                    <input className="float-right" type="checkbox" checked={item.done} onChange={handleChange} />
                </label>
            </div>
        </>
    )
})
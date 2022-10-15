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
            <label className="">
                <span className={item.done ? `$"" $""` : `$""`}>{item.text}</span>
                <input type="checkbox" checked={item.done} onChange={handleChange} />
            </label>
        </>
    )
})
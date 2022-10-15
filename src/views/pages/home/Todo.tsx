import { useCallback, useState } from "react"
import { Item } from '../../types/item';
import { TodoInput } from "../../components/TodoInput"
import { TodoAdd } from "../../components/TodoAdd";

const getKey = () => Math.random().toString(32).substring(2); 

export const Todo = () =>{
    const [items, setItems] = useState<Array<Item>>([{ key: getKey(), text: 'これはサンプルのTODOです', done:false }])
    const [itemsDone, setItemsDone] = useState<Array<Item>>([])
    const [text, setText] = useState<string>('');
    const [typing, setTyping] = useState<boolean>(false)

    const onAdd = useCallback(
        (inputText: string) => {
            setItems([...items, {key: getKey(), text: inputText, done:false}])
        },
        [items]
    )

    return(
        <div className="flex justify-center columns-3">
            <div className="flex items-center m-24">
                <TodoInput onAdd={onAdd} text={text} setText={setText} typing={typing} setTyping={setTyping} />
                <TodoAdd items={items} setItems={setItems} itemsDone={itemsDone} setItemsDone={setItemsDone} />
            </div>
        </div>
    )
}
import { useCallback, useState } from "react"
import { TodoInput } from "../../components/TodoInput"

export const Todo = () =>{
    const [text, setText] = useState<string>('');
    const [typing, setTyping] = useState<boolean>(false)

    return(
        <div className="flex justify-center columns-3">
            <div className="flex items-center m-24">
                <TodoInput text={text} setText={setText} typing={typing} setTyping={setTyping} />
            </div>
        </div>
    )
}
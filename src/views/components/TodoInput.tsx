import React, { memo, ChangeEvent, KeyboardEvent, useCallback, } from "react";

type Props = {
    text: string
    setText: React.Dispatch<React.SetStateAction<string>>
    typing: boolean
    setTyping: React.Dispatch<React.SetStateAction<boolean>>
    onAdd: (text: string) => void
}

export const TodoInput = memo((props:Props) => {
 
    const { text, setText, typing, setTyping, onAdd } = props

    const handChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setText(e.target.value), [setText])

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if(!text) return
        if(e.key !== 'Enter' || typing) return
        onAdd(text)
        setText('');
    }
    
    return(
        <div>
            <input
                className="w-52 p-1 rounded border-2 border-indigo-500"
                type="text"
                placeholder="Enterで入力する"
                value={text}
                onChange={handChange}
                onKeyDown={handleKeyDown}
                onCompositionStart={() => setTyping(true)}
                onCompositionEnd={() => setTyping(false)}
            />
        </div>
    )
})


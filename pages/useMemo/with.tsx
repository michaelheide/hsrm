import {useMemo, useState} from "react";


const Page = () => {
    const [state, setState] = useState([0])
    const [input, setInput] = useState("")

    const value = useMemo(() => {
        console.log("running useMemo function")
        const arr = [...state]
        for(let i = 0; i < 100000; i++){
            arr.push(i)
        }
        return arr
    },[state])

    return (
        <div className={"flex flex-col"}>
            {value.length}
            <input type="text" value={input} onChange={e => setInput(e.target.value)} className={"border-2 max-w-sm"}/>
        </div>
    )
}

export default Page
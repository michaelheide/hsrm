import {useState} from "react";


const Page = () => {
    const [arr, setArr] = useState([{id: "212", name:"Jens"}, {id: "3245", name:"Micha"}, {id: "3242", name:"Peter"}, {id: "546", name:"Stefan"}])
    const deleteItem = (index: number) => {
        const tempArray = [...arr];
        tempArray.splice(index, 1);
        setArr(tempArray);
    }
    return(
        <div>
            {
                arr.map((value, index) => (
                    <div key={}>
                        {value.name}
                        <button onClick={() => deleteItem(index)} className={"border-2"}>
                            Delete Item
                        </button>
                    </div>
                ))
            }
    <button onClick={()=> setArr(prev => {
            const temp = [...prev]
            temp.pop()
            console.log(temp)
            return [...temp]
        })}>remove</button>
        </div>
    )
}

export default Page
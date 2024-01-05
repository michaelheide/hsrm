import {useState} from "react";
import {createPortal} from "react-dom";
import {Modal} from "@cp/Modal/index";


export const ModalView = () => {
    const [modal, setModal] = useState(false)
    const rootModal = document.getElementById("modal-root")

    return (
        <div>
            hello
            {modal && createPortal(<Modal/>, rootModal!)}
            <button onClick={()=>setModal( prevState => !prevState)}>Modal</button>
        </div>
    )
}
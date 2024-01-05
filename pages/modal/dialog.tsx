import {useState} from "react";
import DialogModal from "@cp/DialogModal";


const Page = () => {
    const [isOpened, setIsOpened] = useState(false);

    const onProceed = () => {
        console.log("Proceed clicked");
    };
    return(
        <div>
            <button onClick={() => setIsOpened(true)}>Open dialog modal</button>
            <DialogModal
                title="Dialog modal example"
                isOpened={isOpened}
                onProceed={onProceed}
                onClose={() => setIsOpened(false)}
            >
                <p>To close: click Close, press Escape, or click outside.</p>
            </DialogModal>
        </div>
    )
}

export default Page
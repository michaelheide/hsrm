import dynamic from "next/dynamic";

const ModalView = dynamic(()=> import("@cp/Modal/view").then(module=> module.ModalView), {ssr: false})
const Page = () => {
    return (
        <div>
            <ModalView />
        </div>
    )
}


export default Page
import { useRouter } from "next/router"


export default function Page  (){
    const router = useRouter()

    console.log(router.query.id)
    return (
        <div>
            blog 
        </div>
    )
}
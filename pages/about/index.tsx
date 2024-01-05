import dynamic from "next/dynamic";
import {FC} from "react";

const AboutView = dynamic(
    () => import('../../features/about/view/AboutView').then(module => module.AboutView), {
    loading: () => <p>Loading...</p>,
  })
   


export default function Page() {



    return(
        <div>
            <AboutView />
        </div>
    )
}
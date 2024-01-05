import { ReactElement } from "react"

interface LayoutProps {
    children: ReactElement
}

export const Layout = ({children}: LayoutProps)=> {
    return (
        <div>
            <section>
                Header
            </section>
            <div>
                {children}
            </div>
            <section>
                footer
            </section>
        </div>
    )
}
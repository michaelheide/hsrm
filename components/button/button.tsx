import { memo } from "react"

const Button = () => {
    return ( 
        <button data-testid="button">
            <span>Button</span>
        </button>
    )
}

export default memo(Button)
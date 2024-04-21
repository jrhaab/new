import { useState } from "react"


function FxnalComponent() {
    const [text,setText] = useState("")
    console.log(text)
    setText("text")
    console.log(text)
    return (
        <div>
            <h1>Hello</h1>
            <p>Let's get started</p>
            <span>Loading...</span>

        </div>
    )
}

export default FxnalComponent
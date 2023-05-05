import React from "react"
import ReactDOM from "react-dom"

// const h1 = document.createElement("h1")
// h1.textContent = "I love programming"
// h1.className="header"
// document.getElementById("root").append(h1)

//Creating a navbar in JSX

const navbar = (
    <nav>
        <h1>KevinReactJs</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))
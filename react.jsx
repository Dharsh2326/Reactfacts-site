import React from "react";
import {createRoot} from "react-dom/client";
const root= createRoot(document.getElementById("root"));
function Header(){
return(
    <>
    <img src="./react.jpg" alt="not found" width= "50px"/>
    <p></p>
    </>
)
}
function Main(){
return(<>
    <h1>Fun facts about React</h1>
    <ol>
        <li>React was first released in 2013.</li>
        <li>React is maintained by Meta (Facebook).</li>
        <li>React uses a virtual DOM for better performance.</li>
    </ol>
</>
)
}
function Footer(){
    return(
        <>
<footer>
    <p >&copy;2025 All rights reserved.</p>
</footer>
</>
    )
}
function Page(){
    return(
        <>
        <Header/>
        <Main/>
        <Footer/>
        </>
    )
}
root.render(
   <Page/>
)

import logo from "./assets/logo2.png"
export default function Header(){
    return(
        <header>
            <img src={logo} alt="CineMatch AI logo"></img>
            <h1>CineMatch AI</h1>
        </header>
    )
}
import { searchIcon } from "../../assets"

const Header =(props)=>{
    return(
        <header className="Header flex justify-sb">
            <div className="logo">
            <img src="https://webscript.info/webscript-logo.png" alt=" true W" />

            </div>
            <div>
                <img src={searchIcon} alt="search"/>

            </div>
        </header>

    )
}

export default Header
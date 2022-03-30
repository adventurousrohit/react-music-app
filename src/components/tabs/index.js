import "./style.css"

const Tabs= (props)=>{
return(
    <div className="tab-container">
        <div className="tab-header flex">
            <a className="active" href="#commercial">
                Commercial
            </a>
            <a  href="#freeLicence">
                Free Licence
            </a>
        </div>
        {/* tab  */}
        <div className="tab-content">
            <div className="tab-contents" id="commercial">
                commercial
            </div>
            <div className="tab-contents" id="freeLicence">
                 free licence
            </div>
        </div>
    </div>
)
}

export default Tabs
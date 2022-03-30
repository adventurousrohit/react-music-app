import './style.css'
import { searchIconGrey } from '../../assets'

const Searchinputs = (props)=>{

    return(
        <div className='search-input-container flex'>
             <img src={searchIconGrey}/>
            <input placeholder='Find your music'/>
           
        </div>
    )
}

export default Searchinputs
import react from "react";
import './InputField.css'
const inputField = ({data,setSearchWord,setSuggestion}) => {

    const handlechange = (word) => {
        let matches = []
        if(word.length>0){
            matches = data.filter(user=>{
                const regex = new RegExp(`${word}`,"gi");
                return user.login.match(regex)
            })
        }

        setSuggestion(matches)
        setSearchWord(word)
        
    }
    return(
        <div className="inputContainer">  
            <input className='input' onChange={e =>handlechange(e.target.value)} width='300px' type="text" placeholder="Git User" ></input>
        </div>
    )
}

export default inputField
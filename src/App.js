import {useState} from "react";
import InputField from './components/InputField'
import DisplayUsers from './components/DisplayUsers'
import './App.css'
const App = () => {

    const [data,setData] = useState([])
    const [searchWord,setSearchWord] = useState('')
    const [suggestion,setSuggestion] = useState([])

    return(
        <div className="container">
            <InputField data={data} setSearchWord={setSearchWord} setSuggestion={setSuggestion}/>
            <DisplayUsers data={data} setData={setData} suggestion={suggestion} searchWord={searchWord}/>
        </div>
    )
}

export default App
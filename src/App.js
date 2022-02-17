import {useEffect,useState} from "react";
import './App.css'
const App = () => {

    const [data,setData] = useState([])
    const [searchWord,setSearchWord] = useState('')
    const [suggestion,setSuggestion] = useState([])

    useEffect(()=>{
        const getUsers = () =>{
            let url = `https://api.github.com/users`
            fetch(url).then(res => res.json()).then(
                data => {
                    setData(data)
                }).catch(e=>{
                    console.log('data not found')
                })

        }
        getUsers()
    },[])

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
        <div className="container">
            <div className="inputContainer">  
                <p>search github users here:</p>
                <input onChange={e =>handlechange(e.target.value)} className="inputField" type="text" placeholder="Git User" ></input>
            </div>
            <div className="contentContainer">
                    <div className="contentChildContainer">
                        {searchWord==''?
                        (data.map((val,key)=>
                        {return <a key={val.id} className="link" target="_blank" href={val.html_url}>
                                <div className="userBox">
                                    <div className="ProfilePic">
                                        <img src={val.avatar_url} alt="Girl in a jacket" width="298" height="230"></img>
                                    </div>
                                    <div className="UserName">
                                        {val.login}
                                    </div>
                                </div>
                                </a>}
                        )):(suggestion.map((val,keyl)=>
                        {return <a key={val.id} className="link" target="_blank" href={val.html_url}>
                                <div className="userBox">
                                    <div className="ProfilePic">
                                        <img src={val.avatar_url} alt="Girl in a jacket" width="298" height="230"></img>
                                    </div>
                                     <div className="UserName">
                                        {val.login}
                                    </div>
                                </div>
                                </a>}
                                
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default App
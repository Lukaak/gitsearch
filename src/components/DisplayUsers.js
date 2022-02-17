import {useEffect} from "react";
import './DisplayUsers.css'
const DispayUsers = ({data,setData,suggestion,searchWord}) => {

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
    
    return(
        <div className="contentContainer">
        <div className="contentChildContainer">
            {searchWord==''?
            (data.map((val,key)=>
            {return <a key={val.id} className="link" target="_blank" href={val.html_url}>
                    <div className="userBox">
                        <div className="ProfilePic">
                            <img src={val.avatar_url} alt="Girl in a jacket" width="298" height="240"></img>
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
    )
}

export default DispayUsers
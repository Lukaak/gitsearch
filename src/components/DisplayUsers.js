import {useEffect} from "react";
import './DisplayUsers.css'
import { GetData } from "./GetData";

const DispayUsers = ({data,setData,suggestion,searchWord}) => {

    useEffect(()=>{
        GetData(setData)
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
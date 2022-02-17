import {useEffect} from "react";

export const GetData = ({setData}) => {
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
}

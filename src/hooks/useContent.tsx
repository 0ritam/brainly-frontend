import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent() {
    const [contents, setContents] = useState([]);

    useEffect(() => {  //you can't have async  effect that's why we will use then
        axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                "Authorization" : localStorage.getItem("token")
            }
        })
                .then((response) => {
                    setContents(response.data.content)
                })
    }, [])

    return contents;
}
import { useEffect, useState } from "react"


export const useFetchModels = url => {

    const [data,setData] = useState([])

    
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json.vehicles.models));
    }, [url]);

    return { data }

}
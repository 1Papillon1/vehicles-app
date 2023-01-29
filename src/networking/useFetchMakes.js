import { useEffect, useState } from "react"


export const useFetchMakes = url => {

    const [data,setData] = useState([])

    
    
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setData(json.vehicles.makes));
    }, [url]);

    return { data }

}


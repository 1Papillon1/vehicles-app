import { useEffect, useState } from "react"


export const useFetchModels = url => {

    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)

    
    
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(json => (setData(json.vehicles.models), setLoading(false)));
    }, [url]);

    return { data, loading }

}
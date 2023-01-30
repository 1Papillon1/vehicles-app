import { useEffect, useState } from "react"


export const useFetchMakes = url => {

    const [data,setData] = useState([])
    const [loading, setLoading] = useState(false)

    
    
    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(json => (setData(json.vehicles.makes), setLoading(false)));
            
    }, [url]);

    return { data, loading }

}


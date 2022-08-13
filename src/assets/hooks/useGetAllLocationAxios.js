import axios from "axios";
import { useState, useEffect } from "react";

const useGetAllLocationAxios = () => {
    const [allLocations, setAllLocations] = useState([]);
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/location?page=1')

    useEffect(() => {
        axios.get(url)
            .then(res => {
                if (res.data.info.next) {
                    if (!allLocations.some(so => so.id == res.data.results[0].id)) {
                        setAllLocations(allLocations.concat(res.data.results));
                    }
                    setUrl(res.data.info.next)
                }
            })
            .catch(error => console.log(error))
    }, [url]);
    return allLocations;
}

export default useGetAllLocationAxios
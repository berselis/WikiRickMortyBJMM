import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetLocationAxios = (URI) => {
    const [response, setResponse] = useState();

    useEffect(() => {
        axios.get(URI)
            .then(query => setResponse(query.data))
            .catch(error => console.log(error))
    }, []);
    return response;
}

export default useGetLocationAxios
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetResidentAxios = (URI) => {
    const [response, setResponse] = useState();

    useEffect(() => {
        axios.get(URI)
            .then(res => setResponse(res.data))
            .catch(err => console.log(err))
    }, [])

    return response;
}

export default useGetResidentAxios
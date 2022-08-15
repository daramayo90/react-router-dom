import { useEffect, useState } from "react";

function useFetch (url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(url);
                const fetchInfo = await result.json();
                setData(fetchInfo);
            } catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [url]);

    return { data };
};

export default useFetch;
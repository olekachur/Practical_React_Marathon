import { useState, useEffect } from "react";

export const useLoading = (fetchMethod, params) => {
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        setLoading(null);
        fetchMethod(params).then((res) => {
            setLoading(res);
            console.log("User: ", res);
        });
    }, [fetchMethod, params]);

    return loading;
}

import React from "react";
import { useSearchParams } from 'react-router-dom';

const Subtask2 = () => {
    const [searchParams] = useSearchParams();
    const queryParams = Array.from(searchParams.keys());

    return (
        <div>
            Subtask2, query parameters: {
                queryParams.map(key =>
                    `${key}=${searchParams.get(key)}`).join(', ')
            }
        </div>

    )
}

export default Subtask2;
import React from "react";
import { useParams } from 'react-router-dom';

const Subtask1 = () => {
    const { currId } = useParams();

    return (
        <div>
            {`Subtask1, parameter: ${currId}`}
        </div>
    )
}

export default Subtask1;

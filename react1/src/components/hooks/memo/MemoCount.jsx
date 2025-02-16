import { memo, useRef } from "react";

const Counts = ({data}) => {

    const renderCount = useRef(0);
    console.log(renderCount);

    return(
        <div className="mt-3 font-display text-center">
            <p>
                Nothing changed here but Ive now rendered: 
                <span className="text-red-600">{renderCount.current ++} time(s)</span>
            </p>
            <p>{data.name} is {data.age} years old.</p>
        </div>
    )
};

export default memo(Counts);
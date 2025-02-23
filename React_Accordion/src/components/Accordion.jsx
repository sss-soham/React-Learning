import { useEffect, useState } from "react";
import faq from "../api/faq.json";
import { FAQ } from "./UI/FAQ";

export const Accordion = () => {

    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false);

    useEffect(()=> {
        setData(faq);
    }, []);

    const handleToggle = (id) => {
        setActiveId((pervId) => (pervId === id ? false : id));
    }

    return(
        <>
            <h1>The Accordion</h1>
            <ul className="section-accordion">
                {
                    data.map((curElem) => {
                        return (
                            <FAQ key={curElem.id}
                            curElem={curElem}
                            isActive={activeId === curElem.id}
                            onToggle={() => handleToggle(curElem.id)}/>
                        )
                    })
                }
            </ul>
        </>
    )
}
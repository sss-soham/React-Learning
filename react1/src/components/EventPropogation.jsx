import "./EV.css"

export const EventPropogation = () => {

    const handleGrandParent = () => {
        console.log("Grand Parent clicked")
    }; 
    const handleParentClick = () => {
        console.log("Parent clicked")
    };
    const handleChildClick = (event) => {
        console.log(event);
        console.log("child clicked");
    };

    return(
        
        // for bubling phase
        <section className="main-div">
            <div className="g-div" onClick={handleGrandParent}>
                <div className="p-div" onClick={handleParentClick}> 
                    <button className="c-div" onClick={handleChildClick}> Child Div</button>
                </div>
            </div>
        </section>

        // for capturing phase
        
    )
}
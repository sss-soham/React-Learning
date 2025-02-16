/* eslint-disable react/prop-types */
export const PropDrilling = () => {
    return(
        <section 
        className={`p-4 h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-gray-800 text-white`}>
            <h1>Parent Component</h1>
            <Child1 data="prop drilling" />
        </section>
    )
};

const Child1 = (props) => {
    return <Child2 data={props.data}/>
}

const Child2 = (props) => {
    const data = props.data;
    return(
        <h3>{data}</h3>
    )
}
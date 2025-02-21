/* eslint-disable react/prop-types */
export const Card = ({cardData, onDelete}) => {
    const {id, title, body} = cardData;
    return(
        <div className="p-4 border rounded-lg shadow bg-rose-300">
            <p className="text-gray-600">{id}</p>
            <p className="font-bold mb-2">Title: {title}</p>
            <p className="mb-4">Body: {body}</p>
            <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
                <button 
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    )
};
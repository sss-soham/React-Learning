export const getMoviesDetails = async ({params}) => {

    console.log(params);
    const id = params.movieID;

    try {
        const res = await fetch(
            `http://www.omdbapi.com/?i=${id}&apikey=1c12799f`
        );

        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Fetch Error:", error);
    }
};

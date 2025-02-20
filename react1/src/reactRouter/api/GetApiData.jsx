export const getMoviesData = async () => {
    try {
        const apiKey = import.meta.env.VITE_API_KEY; 
        console.log("API Key:", apiKey); // Debugging step

        // const res = await fetch(
        //     `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=titanic&page=1`
        // );
        const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1`
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

export default async function GetMovies(params) {
    let headersList = {
        "Accept": "application/json",
        "Authorization": import.meta.env.VITE_AUTHORIZATION
    };

    let response = await fetch(`${import.meta.env.VITE_MAIN_URL + params}`, {
        method: "GET",
        headers: headersList
    });

    let data = await response.json();
    return data;
}

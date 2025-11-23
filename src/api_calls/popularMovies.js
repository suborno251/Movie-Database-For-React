export default async function GetMovies(params){
    let headersList = {
        "Accept": "*/*",
        "User-Agent": import.meta.env.VITE_USER_AGENT,
        "Authorization": import.meta.env.VITE_AUTHORIZATION
    }

    let response = await fetch(`${import.meta.env.VITE_MAIN_URL+params}`, {
        method: "GET",
        headers: headersList
    });

    let data = await response.json();
    return data.results;
}
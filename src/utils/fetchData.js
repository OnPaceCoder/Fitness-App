export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_EXERCISE,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_EXERCISE,
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json()
    return data;
}
const token = 'd15b317e896e9232eeac978cbd50309ef74242c1';
const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';

async function checkResponse(res: Response) {
    if (res.ok) {
        return res.json();
    } else {
        return Promise.reject(await res.json());
    }
}

export const getAddress = (query: string) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${token}`
        },
        body: JSON.stringify({ query })
    })
        .then(res => checkResponse(res))
        .catch(error => {
            console.log(error)
        })
}
import URL from '..config/rootURL'
import version from '..config/version'
import apiKey from '..config/apiKey'


export const fetchPics = async () => {
    const res = await fetch(URL + api)
    const json = await res.json();

    console.log(json);
}
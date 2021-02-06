
const useFetch = ({ url, infoObject }) => {

    return fetch(url, infoObject)
        .then(response => { return response.json() })
        .catch(err => { window.alert(err.message) })

}

export default useFetch;

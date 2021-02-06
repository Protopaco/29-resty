
const useFetch = ({ url, infoObject }) => {

    console.log(`url: ${url}, infoObject: ${infoObject.method}`)
    if (url) {

        return fetch(url, infoObject)
            .then(response => { return response.json() })
            .catch(err => { return err.message })
    }
}

export default useFetch;

// , { 'method': method, 'body': body }
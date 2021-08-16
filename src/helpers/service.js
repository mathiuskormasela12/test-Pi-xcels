
function service(url) {
	return fetch(url)
	.then(response => response.json())
	.then(response => {
		if(response.ok) {
			throw new Error('Failed to fetch data')
		}

		return response;
	})
}

export default service;
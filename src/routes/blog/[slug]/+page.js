export async function load({ fetch, params }) {
	const endpoint = 'https://jsonplaceholder.typicode.com/posts/' + params.slug

	const response = await fetch(endpoint)
	const post = await response.json()

	return {
		post,
	}
}

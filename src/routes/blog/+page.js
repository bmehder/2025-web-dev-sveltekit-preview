export async function load({ fetch }) {
	const endpoint = 'https://jsonplaceholder.typicode.com/posts?_limit=24'

	const response = await fetch(endpoint)
	const posts = await response.json()

	return {
		posts,
	}
}

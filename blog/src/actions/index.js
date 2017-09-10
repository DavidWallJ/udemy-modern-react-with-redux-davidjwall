import axios from 'axios';

const API_KEY = '?key=davidjwall1234';
const API_BASE_URL = 'http://reduxblog.herokuapp.com/api/posts';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

export function fetchPosts() {
	const apiUrl = `${API_BASE_URL}${API_KEY}`;
	const request = axios.get(apiUrl);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

export function createPost(newPost) {
	const apiUrl = `${API_BASE_URL}${API_KEY}`;
	const request = axios.post(apiUrl, newPost);
	return {
		type: CREATE_POST,
		payload: request
	};
}

export function fetchPost(id) {
	const apiUrl = `${API_BASE_URL}/${id}${API_KEY}`;
	const request = axios.get(apiUrl);
	return {
		type: FETCH_POST,
		payload: request
	};
}

export function deletePost(id) {
	const apiUrl = `${API_BASE_URL}/${id}${API_KEY}`;
	const request = axios.delete(apiUrl);
	return {
		type: DELETE_POST,
		payload: request
	};
}

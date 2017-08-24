const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001';

let token = localStorage.token;

if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
    'Accept': 'application/json',
    'Authorization': token
};

export const getAllCategories = () =>
    fetch(`${api}/categories`, {headers})
        .then(res => res.json())
        .then(data => data.categories);

export const getPostsForCategory = (category) =>
    fetch(`${api}/${category}/posts`, {headers})
        .then(res => res.json())
        .then(data => data);

export const getAllPosts = () =>
    fetch(`${api}/posts`, {headers})
        .then(res => res.json())
        .then(data => data);

export const addPost = (body) =>
    fetch(`${api}/posts`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
        .then(data => data);

export const getDetailPost = (id) =>
    fetch(`${api}/posts/${id}`, {headers})
        .then(res => res.json())
        .then(data => data);

export const votePost = (post, voteType) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(voteType)
    }).then(res => res.json())
        .then(data => data);

export const editPost = (post, body) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json());

export const deletePost = (post) =>
    fetch(`${api}/posts/${post.id}`, {method: 'DELETE', headers})
        .then(res => res.json())
        .then(data => data);

export const getCommentsForPost = (post) =>
    fetch(`${api}/posts/${post.id}/comments`, {headers})
        .then(res => res.json())
        .then(data => data);


export const addComment = (body) =>
    fetch(`${api}/comments`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
        .then(data => data);

export const getDetailComment = (id) =>
    fetch(`${api}/comments/${id}`, {headers})
        .then(res => res.json())
        .then(data => data);

export const voteComment = (id, body) =>
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
        .then(data => data);

export const editComment = (comment, body) =>
    fetch(`${api}/comments/${comment.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json())
        .then(data => data);

export const deleteComment = (comment) =>
    fetch(`${api}/comments/${comment.id}`, {method: 'DELETE', headers})
        .then(res => res.json())
        .then(data => data);



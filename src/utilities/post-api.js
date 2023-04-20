import sendRequest from "./send-request.js";

const BASE_URL = `/api/newpost`;

export function createPost(postData) {
  return sendRequest(BASE_URL, "POST", postData);
}

export function getPosts() {
  return sendRequest("/api/posts");
}

export async function addComment(postId, text) {
  const url = `/api/posts/${postId}/comments`;
  const data = {
    text: text,
  };
  return sendRequest(url, "POST", data);
}

export function getComments(postId) {
  return sendRequest(`/api/posts/${postId}/comments`);
}

export function deletePost(postId) {
  const url = `/api/posts/${postId}`;
  return sendRequest(url, "DELETE");
}

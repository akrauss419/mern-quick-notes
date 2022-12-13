import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function index() {
  return await sendRequest(BASE_URL);
}

export async function create(noteData) {
  return sendRequest(BASE_URL, 'POST', noteData);
}
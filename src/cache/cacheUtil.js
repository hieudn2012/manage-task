const TUDO_LIST = 'TUDO_LIST';
const TOKEN = "TOKEN";

function saveTodoListLocal(list) {
  localStorage.setItem(TUDO_LIST, JSON.stringify(list));
}

function getTodoListLocal() {
  return JSON.parse(localStorage.getItem(TUDO_LIST));
}

function clearTodoListLocal() {
  localStorage.removeItem(TUDO_LIST);
}

function getToken() {
  return localStorage.getItem(TOKEN);
}

function saveToken(token) {
  localStorage.setItem(TOKEN, JSON.stringify(token));
}

function removeToken() {
  localStorage.removeItem(TOKEN);
}

export default {
  saveTodoListLocal,
  getTodoListLocal,
  clearTodoListLocal,
  getToken,
  saveToken,
  removeToken,
}
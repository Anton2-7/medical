import { unicodeToBase64 } from "../services/unicode";
import { base64ToUnicode } from "../services/unicode";

const USERS_STORAGE_KEY = "users";
const AUTH_TOKEN_KEY = "authToken";

export async function initializeAuth() {
  if (!localStorage.getItem(USERS_STORAGE_KEY)) {
    const res = await fetch("/user.json");
    const users = await res.json();
    console.log(users, "users");
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  }
}

export function findUser(email) {
  const users = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || "[]");
  return users.find((user) => user.email === email);
}

export function login(email, password) {
  const user = findUser(email);
  if (user && user.password === password) {
    const payload = JSON.stringify({ email, name: user.name });
    const token = unicodeToBase64(payload);
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export function getCurrentUser() {
  const token = localStorage.getItem(AUTH_TOKEN_KEY);
  return token ? JSON.parse(base64ToUnicode(token)) : null;
}

export function isAuthenticated() {
  return !!localStorage.getItem(AUTH_TOKEN_KEY);
}

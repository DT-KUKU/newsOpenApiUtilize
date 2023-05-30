export function setLocalStorage(key: string) {
  localStorage.setItem('userKey', key);
}

export function getLocalStorage() {
  return localStorage.getItem('userKey');
}

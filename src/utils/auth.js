export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    .then((res) => {
      if (!res.ok) {
          return Promise.reject(`Ошибка ${res.status}`)
      }
      return res.json()
  })
  .then((res) => {
      return res
  })
  .catch((err) => {
    if (err.status === 400) {
      console.log('Некорректно заполнено одно из полей')
    }
  })
}

export const authorize = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then((res) => {
      if (!res.ok) {
          return Promise.reject(`Ошибка ${res.status}`);
      }
      return res.json()
  })
  .catch((err) => {
    if (err.status === 400) {
      console.log('Не передано одно из полей')
    }
    if (err.status === 401) {
      console.log('Пользователь с email не найден')
    }
  })
}

export const getContent = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
    .then((res) => {
      if (!res.ok) {
          return Promise.reject(`Ошибка ${res.status}`)
      }
      return res.json()
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      if ((err.status === 401) || (err.status === 401)) {
        console.log('Токен не передан или передан не в том формате')
      }
    })   
}


class Storage {
  get(key) {
    return sessionStorage.getItem(key)
  }

  set(key, value) {
    if (Object.prototype.toString.call(value) === '[object Object]') {
      sessionStorage.setItem(key, JSON.stringify(value))
    } else {
      sessionStorage.setItem(key, value)
    }
  }

  remove(key) {
    sessionStorage.removeItem(key)
  }
}

export default new Storage()

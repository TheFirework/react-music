const setItem = (key, value) => {
    window.localStorage.setItem(key, JSON.stringify(value))
}
const getItem = (key) => {
    let data = window.localStorage.getItem(key)
    if (data) {
        data = JSON.parse(data)
    }
    return data || null
}
const removeItem = (key) => window.localStorage.removeItem(key)

const localStorageFactory = {
    setItem,
    getItem,
    removeItem,
}

export default localStorageFactory

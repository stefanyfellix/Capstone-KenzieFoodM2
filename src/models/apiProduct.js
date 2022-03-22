export class ApiProduct {
  static URL = 'https://kenzie-food-api.herokuapp.com/'

  static async registerProduct(path, data, token) {
    fetch(`${this.URL}${path}`, {
      "method": "POST",
      "headers": {
        "Authorization": `Bearer ${token}`
      },
      "body": JSON.stringify(data)
    })
      .then((response) => response)
  }

  static async getProducts(path, token) {
    const response = await fetch(`${this.URL}${path}`, {
      "method": "GET",
      "headers": {
        "Authorization": `Bearer ${token}`
      }
    })
    const responseData = await response.json()
    return responseData
  }

  static async getProducts(path, data, token) {
    fetch(`${this.URL}${path}`, {
      "method": "PATCH",
      "headers": {
        "Authorization": `Bearer ${token}`
      },
      "body": JSON.stringify(data)
    })
      .then((response) => response)
  }
}
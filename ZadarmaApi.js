// ZadarmaApi.js

const axios = require('axios');
const crypto = require('crypto');

class ZadarmaApi {
  constructor(key, secret) {
    this.key = key;
    this.secret = secret;
    this.baseURL = 'https://api.zadarma.com';
  }

  async call(method, params = {}, requestType = 'GET', format = 'json') {
    const url = `${this.baseURL}${method}`;
    const authHeader = this.getAuthStringForHeader(method, params);
    const headers = { 'Authorization': authHeader };

    try {
      let response;
      switch (requestType.toUpperCase()) {
        case 'GET':
          response = await axios.get(url, { headers, params });
          break;
        case 'POST':
          response = await axios.post(url, params, { headers });
          break;
        case 'PUT':
          response = await axios.put(url, params, { headers });
          break;
        case 'DELETE':
          response = await axios.delete(url, { headers, params });
          break;
        default:
          throw new Error(`Invalid request type: ${requestType}`);
      }

      return response.data;
    } catch (error) {
      throw new Error(`API request failed for ${method}: ${error.message}`);
    }
  }


  getAuthStringForHeader(method, params) {
    const paramString = new URLSearchParams(params).toString();
    const data = `${method}${paramString}`;
    const hmac = crypto.createHmac('sha1', this.secret);
    hmac.update(data);
    const signature = hmac.digest('base64');
    return `${this.key}:${signature}`;
  }
}

module.exports = ZadarmaApi;

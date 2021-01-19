import twilio = require('twilio')

/* tslint:disable-next-line */
const Tiniyo = function (username,password,opts) {
  const client = twilio('AC' + username, password, opts)
  // @ts-ignore
  client.username = username
  // @ts-ignore
  client.accountSid = username
  // @ts-ignore
  client.password = token
  // @ts-ignore
  client.api.baseUrl = `https://api.tiniyo.com`
  // @ts-ignore
  client.api.v2010._version = `v1`
  return client
}

// Define old properties
const properties = Object.getOwnPropertyNames(twilio)
for (let i = 0;i < properties.length; i++) {
  const newProp = properties[i] === 'twiml' ? 'Tinyxml' : properties[i]
  Object.defineProperty(RestClient, newProp, { value: twilio[properties[i]] })
}

export default Tiniyo

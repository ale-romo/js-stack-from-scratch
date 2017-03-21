// @flow

export const homePage = () => null

export const helloPage = () => ({
  hello: { message: 'Server-side preloaded message' },
})

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
})

export const weatherPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for weather page' },
})

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`,
})

export const weatherEndpoint = (num: number) => ({
  serverMessage: `Hello from the weather server! (received ${num})`,
})

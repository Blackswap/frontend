import images from './images'

export { images }
export const twitter = process.env.REACT_APP_TWITTER_PROFILE
export const appName = process.env.REACT_APP_APP_NAME
export const tokenName = process.env.REACT_APP_TOKEN_NAME
export const exchangeUrl = process.env.REACT_APP_EXCHANGE_URL

export default {
  images,
  exchangeUrl,
  tokenName,
  appName,
  twitter,
}

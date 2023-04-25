export const API_URL = `${process.env.APP_URL}/api`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}/api`

export const getProductsUrl = (string: string) => `/products${string}`
export const getReviewsUrl = (string: string) => `/reviews${string}`

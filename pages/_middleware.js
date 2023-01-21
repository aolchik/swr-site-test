import { locales } from "nextra/locales"
// export const middleware = locales

export function middleware(request) {
  console.log("_middleware.js: request.url = " + request.url)

  let response = locales(request)
  if(response) {
    console.log("_middleware.js: response.status = " + response.status)
    console.log("_middleware.js: response.url = " + response.url)
  }
  return response
}
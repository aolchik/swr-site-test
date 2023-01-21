// export { locales as middleware } from "nextra/locales";

import { locales } from "nextra/locales"


export function middleware(request) {
  console.log("middleware.js: request.url = " + request.url)

  let response = locales(request)
  if(response) {
    console.log("middleware.js: response.status = " + response.status)
    console.log("middleware.js: response.url = " + response.url)
  }

  return response
}
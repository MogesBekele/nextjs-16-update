import { NextResponse } from "next/server";

export function proxy(req: Request) {
  //autentecation for the api
  // jwt is not recommeneded
  // autenticate with kinde third party service
  // use kinde for autentication and authorization
  // data access layer if the default
  //  also use coodies and header
  // the down side for data access is the page render dynacmically
// for this case the proxy is an option
// middleware is replaced with proxy
// enhanced routing capabilities
// build adapters for different environments
// stable turbopack support
// proxy allows you to run code before a request is completed
// proxy not good for data fetching and session managment
// build in mcp server 

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/others"],
};

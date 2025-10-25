import { NextResponse } from "next/server";

export function proxy(req: Request) {
  //autentecation for the api
  // jwt is not recommeneded
  // autenticate with kinde third party service
  // use kinde for autentication and authorization
  // data access layer if the default
  //  also use coodies and header
  // the down side for data access is the page render dynacmically


  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/others"],
};

import { NextResponse } from "next/server";



export function proxy(){
  
//autentecation for the api
// jwt is not recommeneded
// autenticate with kinde third party service 


  
  return NextResponse.next();
}

export const config = {
  matcher: "/"
}
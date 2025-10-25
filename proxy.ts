import { NextResponse } from "next/server";



export function proxy(){
  
//autentecation for the api
// jwt is not recommeneded
// autenticate with kinde third party service 
// use kinde for autentication and authorization


  
  return NextResponse.next();
}

export const config = {
  matcher: "/"
}
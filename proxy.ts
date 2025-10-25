import { NextResponse } from "next/server";



export function proxy(){
  
//autentecation for the api
// jwt is not recommeneded

  
  return NextResponse.next();
}

export const config = {
  matcher: "/"
}
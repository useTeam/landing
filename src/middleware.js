import { i18nRouter } from "next-i18n-router";
import i18nConfig from "../i18nConfig";
import { NextResponse } from "next/server";


//En caso de actualizar NextJs a 15.x.x cambiar export a proxy y renombrar archivo a proxy.js
export function middleware(req) {
  // Añade el pathname a los headers para que esté disponible en generateMetadata
  const response = i18nRouter(req, i18nConfig) || NextResponse.next();
  response.headers.set("x-pathname", req.nextUrl.pathname);
  
  return response;
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
}
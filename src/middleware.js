// middleware.js
import { NextResponse } from 'next/server';
import i18next from './i18n';

export function middleware(request) {
  const locale = request.headers.get('accept-language')?.split(',')[0] || 'en';
  i18next.changeLanguage(locale);
  return NextResponse.next();
}

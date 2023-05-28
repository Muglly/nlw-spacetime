import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const reditectURL = new URL('/', request.url)

  return NextResponse.redirect(reditectURL, {
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0;`,
    },
  })
}

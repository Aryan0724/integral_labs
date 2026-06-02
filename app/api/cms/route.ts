import { NextResponse } from 'next/server';
import { getSiteContent, saveSiteContent, SiteContent } from '@/lib/cms';

export async function GET() {
  const content = getSiteContent();
  return NextResponse.json(content);
}

export async function POST(request: Request) {
  try {
    const newContent: SiteContent = await request.json();
    const success = saveSiteContent(newContent);
    
    if (success) {
      return NextResponse.json({ message: 'Content updated successfully' });
    } else {
      return NextResponse.json({ message: 'Failed to save content' }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 });
  }
}

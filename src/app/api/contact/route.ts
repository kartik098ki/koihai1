import { NextRequest, NextResponse } from 'next/server';

const SHEETDB_API = 'https://sheetdb.io/api/v1/o9zpj4gue014w';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, inquiry } = body;

    // Validation
    if (!name || !email || !inquiry) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    const response = await fetch(SHEETDB_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          name,
          email,
          inquiry,
          created_at: new Date().toISOString(),
          type: 'contact',
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('SheetDB error:', errorText);
      return NextResponse.json(
        { success: false, message: 'Failed to send message. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully!',
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

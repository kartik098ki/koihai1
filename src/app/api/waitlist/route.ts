import { NextRequest, NextResponse } from 'next/server';

const SHEETDB_API = 'https://sheetdb.io/api/v1/o9zpj4gue014w';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
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
          email,
          name: name || '',
          created_at: new Date().toISOString(),
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('SheetDB error:', errorData);
      return NextResponse.json(
        { success: false, message: 'Failed to join waitlist. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: '🎉 Welcome aboard! You\'ve been added to our waitlist.',
    });

  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

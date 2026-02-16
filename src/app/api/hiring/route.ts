import { NextRequest, NextResponse } from 'next/server';

const SHEETDB_API = 'https://sheetdb.io/api/v1/o9zpj4gue014w';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, reason, linkedin, journey } = body;

    // Validation
    if (!name || !email || !reason || !linkedin) {
      return NextResponse.json(
        { success: false, message: 'Name, email, reason, and LinkedIn are required' },
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
          "Date": new Date().toISOString(),
          "Form Type": "hiring",
          "Name": name,
          "Email": email,
          "Phone": phone || "",
          "LinkedIn": linkedin,
          "Reason": reason,
          "Journey": journey || "",
          "Inquiry": "",
        },
      }),
    });

    if (!response.ok) {
      let errorMessage = 'Failed to submit application. Please try again.';
      try {
        const errorData = await response.text();
        console.error('SheetDB error response:', errorData);
      } catch (e) {
        console.error('SheetDB error:', response.status, response.statusText);
      }
      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 500 }
      );
    }

    const result = await response.json();
    console.log('SheetDB success:', result);

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully!',
    });

  } catch (error) {
    console.error('Hiring API error:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

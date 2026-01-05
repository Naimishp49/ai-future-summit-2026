import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import nodemailer from 'nodemailer';

// Google Sheets Configuration
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID || '';
const SHEET_NAME = 'Registrations';

// Email Configuration
const EMAIL_USER = process.env.EMAIL_USER || '';
const EMAIL_PASS = process.env.EMAIL_PASS || '';

// Initialize Google Sheets API
async function getGoogleSheetsClient() {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    return sheets;
}

// Initialize Email Transporter
function getEmailTransporter() {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });
}

// Check if email or mobile already exists
async function checkDuplicate(email: string, mobile: string) {
    try {
        const sheets = await getGoogleSheetsClient();

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A:G`,
        });

        const rows = response.data.values || [];

        // Skip header row
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const rowEmail = row[4]?.toLowerCase().trim();
            const rowMobile = row[5]?.trim();

            if (rowEmail === email.toLowerCase().trim()) {
                return { isDuplicate: true, field: 'email' };
            }
            if (rowMobile === mobile.trim()) {
                return { isDuplicate: true, field: 'mobile' };
            }
        }

        return { isDuplicate: false };
    } catch (error) {
        console.error('Error checking duplicate:', error);
        throw error;
    }
}

// Add registration to Google Sheets
async function addToGoogleSheets(data: any) {
    try {
        const sheets = await getGoogleSheetsClient();

        // Check if sheet exists, if not create it with headers
        try {
            await sheets.spreadsheets.values.get({
                spreadsheetId: SPREADSHEET_ID,
                range: `${SHEET_NAME}!A1`,
            });
        } catch (error) {
            // Sheet doesn't exist, create it with headers
            await sheets.spreadsheets.values.update({
                spreadsheetId: SPREADSHEET_ID,
                range: `${SHEET_NAME}!A1`,
                valueInputOption: 'RAW',
                requestBody: {
                    values: [['Timestamp', 'Full Name', 'College Name', 'Degree', 'Email', 'Mobile', 'Programming Language']],
                },
            });
        }

        // Append the new registration
        const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        await sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!A:G`,
            valueInputOption: 'RAW',
            requestBody: {
                values: [[
                    timestamp,
                    data.fullName,
                    data.collegeName,
                    data.degree,
                    data.email,
                    data.mobile,
                    data.programmingLanguage
                ]],
            },
        });

        return true;
    } catch (error) {
        console.error('Error adding to Google Sheets:', error);
        throw error;
    }
}

// Send acknowledgment email
async function sendAcknowledgmentEmail(data: any) {
    try {
        const transporter = getEmailTransporter();

        const mailOptions = {
            from: `"Programming Challenge 2026" <${EMAIL_USER}>`,
            to: data.email,
            subject: '✅ Registration Confirmed - Programming Challenge 2026',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                        .header { background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
                        .info-box { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #dc2626; border-radius: 5px; }
                        .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
                        .button { display: inline-block; padding: 12px 30px; background: #dc2626; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                        h1 { margin: 0; font-size: 28px; }
                        h2 { color: #dc2626; margin-top: 0; }
                        .highlight { color: #dc2626; font-weight: bold; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>🎉 Registration Confirmed!</h1>
                            <p style="margin: 10px 0 0 0; font-size: 16px;">Programming Challenge 2026</p>
                        </div>
                        <div class="content">
                            <p>Dear <strong>${data.fullName}</strong>,</p>
                            
                            <p>Congratulations! Your registration for the <strong>Programming Challenge 2026</strong> has been successfully confirmed.</p>
                            
                            <div class="info-box">
                                <h2>📋 Your Registration Details</h2>
                                <p><strong>Name:</strong> ${data.fullName}</p>
                                <p><strong>College:</strong> ${data.collegeName}</p>
                                <p><strong>Degree:</strong> ${data.degree} - Third Year</p>
                                <p><strong>Email:</strong> ${data.email}</p>
                                <p><strong>Mobile:</strong> ${data.mobile}</p>
                                <p><strong>Programming Language:</strong> ${data.programmingLanguage}</p>
                            </div>
                            
                            <div class="info-box">
                                <h2>📅 Event Details</h2>
                                <p><strong>Date:</strong> 24th January, 2026</p>
                                <p><strong>Time:</strong> 8:30 AM onwards</p>
                                <p><strong>Venue:</strong> Darshan University, Rajkot</p>
                                <p><strong>Location:</strong> Main Auditorium & Computer Labs</p>
                            </div>
                            
                            <div class="info-box">
                                <h2>🎁 What You'll Get</h2>
                                <ul>
                                    <li><strong>Prize Pool:</strong> Up to ₹51,000 for winners</li>
                                    <li><strong>Expert Talks:</strong> AI for Beginners, Build an AI Telegram Bot, AI Uncovered</li>
                                    <li><strong>Free Pen Drive:</strong> For every participant</li>
                                    <li><strong>Lunch & Refreshments:</strong> Complimentary</li>
                                    <li><strong>Certificate:</strong> Participation certificate</li>
                                </ul>
                            </div>
                            
                            <div class="info-box">
                                <h2>⚠️ Important Instructions</h2>
                                <ul>
                                    <li>Bring your <strong>student ID card</strong> and <strong>laptop</strong></li>
                                    <li>Only <strong>C, C++, or Java</strong> programming languages are allowed</li>
                                    <li>Report to the registration desk by <strong>8:30 AM</strong></li>
                                    <li>Challenge starts at <strong>1:30 PM</strong></li>
                                </ul>
                            </div>
                            
                            <center>
                                <a href="https://www.google.com/maps/place/Darshan+University/@22.2587,70.7789,17z" class="button">📍 Get Directions</a>
                            </center>
                            
                            <p style="margin-top: 30px;">We look forward to seeing you at the event!</p>
                            
                            <p><strong>Think | Code | Compete</strong></p>
                            
                            <p style="margin-top: 20px; font-size: 14px; color: #666;">
                                If you have any questions, please contact us at <a href="mailto:info@darshanuniversity.ac.in">info@darshanuniversity.ac.in</a>
                            </p>
                        </div>
                        <div class="footer">
                            <p>© 2026 Darshan University. All rights reserved.</p>
                            <p>Morbi-Rajkot Highway, Hadala, Rajkot - 363650, Gujarat, India</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        await transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        // Validate required fields
        if (!data.fullName || !data.collegeName || !data.email || !data.mobile || !data.programmingLanguage) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Check for duplicate registration
        const duplicateCheck = await checkDuplicate(data.email, data.mobile);
        if (duplicateCheck.isDuplicate) {
            const field = duplicateCheck.field === 'email' ? 'Email address' : 'Mobile number';
            return NextResponse.json(
                { error: `${field} is already registered. Please use a different ${duplicateCheck.field}.` },
                { status: 409 }
            );
        }

        // Add to Google Sheets
        await addToGoogleSheets(data);

        // Send acknowledgment email
        await sendAcknowledgmentEmail(data);

        return NextResponse.json(
            {
                success: true,
                message: 'Registration successful! Check your email for confirmation.'
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json(
            { error: 'Registration failed. Please try again later.' },
            { status: 500 }
        );
    }
}

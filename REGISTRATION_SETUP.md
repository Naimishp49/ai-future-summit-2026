# Registration System Setup Guide

This guide will help you set up the dynamic registration form with Google Sheets integration and email acknowledgment.

## Features

✅ **Google Sheets Integration** - All registrations are automatically saved to Google Sheets
✅ **Email Acknowledgment** - Participants receive a professional confirmation email
✅ **Duplicate Validation** - Prevents duplicate registrations by email and mobile number
✅ **Default Year** - Set to "Third Year" for final year students
✅ **Real-time Validation** - Client-side and server-side validation

## Prerequisites

1. **Google Cloud Account** (Free)
2. **Gmail Account** for sending emails
3. **Node.js** installed on your system

## Step 1: Install Required Dependencies

Run the following command in your project directory:

```bash
npm install googleapis nodemailer
npm install --save-dev @types/nodemailer
```

## Step 2: Set Up Google Sheets API

### 2.1 Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Click "Create Project" or select an existing project
3. Name it "Programming Challenge 2026" and click "Create"

### 2.2 Enable Google Sheets API

1. In the Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

### 2.3 Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Name: `registration-service`
4. Click "Create and Continue"
5. Skip optional steps and click "Done"

### 2.4 Generate Service Account Key

1. Click on the service account you just created
2. Go to the "Keys" tab
3. Click "Add Key" > "Create New Key"
4. Select "JSON" format and click "Create"
5. A JSON file will be downloaded - **keep this safe!**

### 2.5 Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Programming Challenge 2026 Registrations"
4. Copy the Spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
   ```
5. Share the spreadsheet with the service account email (found in the JSON file)
   - Click "Share" button
   - Paste the service account email (ends with `@*.iam.gserviceaccount.com`)
   - Give "Editor" permission

## Step 3: Set Up Gmail for Sending Emails

### 3.1 Enable 2-Step Verification

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable "2-Step Verification" if not already enabled

### 3.2 Create App Password

1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Other (Custom name)"
3. Name it "Programming Challenge Registration"
4. Click "Generate"
5. **Copy the 16-character password** (you won't see it again)

## Step 4: Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and fill in the values:

   ```env
   # From the Google Spreadsheet URL
   GOOGLE_SPREADSHEET_ID=your_spreadsheet_id_here
   
   # From the downloaded JSON file
   GOOGLE_CLIENT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
   
   # From the downloaded JSON file (copy the entire private_key value)
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
   
   # Your Gmail address
   EMAIL_USER=your-email@gmail.com
   
   # The 16-character app password from Step 3.2
   EMAIL_PASS=abcd efgh ijkl mnop
   ```

   **Important Notes:**
   - For `GOOGLE_PRIVATE_KEY`, copy the entire value including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
   - Keep the `\n` characters in the private key
   - Remove spaces from the app password (e.g., `abcdefghijklmnop`)

## Step 5: Test the Registration System

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000#register`

3. Fill out the registration form with test data

4. Submit the form

5. Check:
   - ✅ Google Sheets for the new entry
   - ✅ Email inbox for the confirmation email
   - ✅ Console for any errors

## Step 6: Test Duplicate Validation

1. Try to register again with the same email or mobile number
2. You should see an error message: "Email address is already registered"

## Troubleshooting

### Error: "Invalid credentials"
- Check that `GOOGLE_CLIENT_EMAIL` and `GOOGLE_PRIVATE_KEY` are correctly copied from the JSON file
- Ensure the private key includes `\n` characters

### Error: "Permission denied"
- Make sure you shared the Google Sheet with the service account email
- Give "Editor" permission, not just "Viewer"

### Email not sending
- Verify `EMAIL_USER` and `EMAIL_PASS` are correct
- Make sure you're using an App Password, not your regular Gmail password
- Check that 2-Step Verification is enabled on your Google Account

### Error: "Cannot find module 'googleapis'"
- Run `npm install googleapis nodemailer`
- Restart the development server

### Duplicate validation not working
- Check the Google Sheets API is enabled
- Verify the spreadsheet has the correct headers in row 1

## Google Sheets Structure

The spreadsheet will automatically have these columns:

| Timestamp | Full Name | College Name | Degree | Email | Mobile | Programming Language |
|-----------|-----------|--------------|--------|-------|--------|---------------------|
| 05/01/2026, 12:30:45 | John Doe | ABC College | BCA | john@example.com | 9876543210 | C++ |

## Email Template Preview

Participants will receive a professional HTML email with:
- ✅ Registration confirmation
- ✅ Event details (date, time, venue)
- ✅ Prize information
- ✅ Expert talks schedule
- ✅ Important instructions
- ✅ Google Maps link for directions

## Security Best Practices

1. **Never commit `.env.local`** to version control
2. Add `.env.local` to `.gitignore`
3. Keep your service account JSON file secure
4. Rotate App Passwords periodically
5. Use environment variables for all sensitive data

## Production Deployment

When deploying to Vercel/Netlify:

1. Go to your project settings
2. Add all environment variables from `.env.local`
3. For `GOOGLE_PRIVATE_KEY`, paste the entire key including newlines
4. Redeploy your application

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Check the server logs (`npm run dev` output)
3. Verify all environment variables are set correctly
4. Test the Google Sheets API connection separately

---

**Congratulations!** 🎉 Your registration system is now fully functional with Google Sheets integration and email acknowledgment!

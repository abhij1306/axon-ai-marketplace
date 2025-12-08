# Supabase Setup Guide

## Quick Start (5 Minutes)

### Step 1: Create Supabase Account
1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub (recommended) or email

### Step 2: Create New Project
1. Click "New Project"
2. Choose your organization
3. Enter project details:
   - **Name**: `axon-ai-marketplace`
   - **Database Password**: Create a strong password (save it!)
   - **Region**: Choose closest to you
4. Click "Create new project"
5. Wait ~2 minutes for setup

### Step 3: Get API Credentials
1. In your project dashboard, go to **Settings** → **API**
2. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

### Step 4: Create Database Tables
1. Go to **SQL Editor** in the left sidebar
2. Click "New query"
3. Copy and paste the contents of `supabase-schema.sql`
4. Click "Run" or press `Ctrl+Enter`
5. You should see: "Success. No rows returned"

### Step 5: Configure Local Environment
1. Copy `.env.local.example` to `.env.local`:
   ```bash
   cp .env.local.example .env.local
   ```

2. Open `.env.local` and add your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   ```

### Step 6: Test Locally
```bash
# Restart dev server
npm run dev

# Test the features:
# 1. Go to http://localhost:3000/signup
# 2. Create an account
# 3. Check Supabase dashboard → Table Editor → users
# 4. Go to http://localhost:3000/login
# 5. Log in with your credentials
# 6. Test contact form on home page
# 7. Check Supabase dashboard → Table Editor → contact_submissions
```

---

## Vercel Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add Supabase backend integration"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. **Before deploying**, add environment variables:
   - Click "Environment Variables"
   - Add `NEXT_PUBLIC_SUPABASE_URL`
   - Add `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Click "Deploy"

### Step 3: Verify Production
1. Wait for deployment to complete
2. Visit your production URL
3. Test signup, login, and contact form
4. Check Supabase dashboard for new entries

---

## Troubleshooting

### "Failed to create account"
- Check Supabase dashboard → Table Editor → users table exists
- Verify environment variables are set correctly
- Check browser console for errors

### "Invalid email or password"
- Make sure you created an account first
- Check password is at least 6 characters
- Verify user exists in Supabase dashboard

### "Failed to send message"
- Check Supabase dashboard → Table Editor → contact_submissions table exists
- Verify environment variables
- Check message is at least 10 characters

### Environment Variables Not Working
- Make sure `.env.local` exists (not `.env.local.example`)
- Restart dev server after changing `.env.local`
- For Vercel, add variables in dashboard, then redeploy

---

## Database Management

### View Users
1. Go to Supabase dashboard
2. Click **Table Editor**
3. Select **users** table
4. See all registered users (passwords are hashed)

### View Contact Submissions
1. Go to Supabase dashboard
2. Click **Table Editor**
3. Select **contact_submissions** table
4. See all form submissions with timestamps

### Delete Test Data
```sql
-- Delete all users
DELETE FROM users;

-- Delete all contact submissions
DELETE FROM contact_submissions;
```

---

## Security Notes

✅ **Passwords are hashed** - Never stored in plain text  
✅ **Input validation** - All forms validated with Zod  
✅ **Environment variables** - Secrets not committed to git  
✅ **HTTPS only** - Enforced by Vercel  
✅ **SQL injection protected** - Using Supabase client  

---

## Next Steps (Optional)

### Add Email Notifications
Install Resend for email notifications:
```bash
npm install resend
```

### Add Session Management
Use NextAuth.js for proper sessions:
```bash
npm install next-auth
```

### Enable Row Level Security (RLS)
In Supabase dashboard:
1. Go to Authentication → Policies
2. Enable RLS on tables
3. Create policies for user access

---

## Support

- **Supabase Docs**: [supabase.com/docs](https://supabase.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)

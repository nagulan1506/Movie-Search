# Quick API Key Setup

## Step 1: Get Your API Key (You need to do this)

1. Go to: **http://www.omdbapi.com/apikey.aspx**
2. Select **FREE** plan
3. Enter your email address
4. Verify your email (check inbox)
5. Copy your API key

## Step 2: Add API Key to .env File

I've created a `.env` file for you. Now you need to:

**Option A: Using a Text Editor**
1. Open `.env` file in the root directory
2. Replace `your_api_key_here` with your actual API key
3. Save the file

**Option B: Using PowerShell (run this command after getting your key)**
```powershell
(Get-Content .env) -replace 'your_api_key_here', 'YOUR_ACTUAL_API_KEY' | Set-Content .env
```
(Replace `YOUR_ACTUAL_API_KEY` with your real key)

## Step 3: Restart Server

After adding your API key, restart the server:
```bash
npm start
```

---

**Current .env file location:** `c:\guvi\Movie-Search\.env`

**File should contain:**
```
REACT_APP_OMDB_API_KEY=your_actual_api_key_here
```


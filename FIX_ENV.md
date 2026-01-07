# Fixing .env File Issues

If the API key is still not being recognized, try these steps:

## Step 1: Verify .env File Location
The `.env` file must be in the **root directory** (same folder as `package.json`)

## Step 2: Verify File Format
The file should contain EXACTLY this (no spaces, no quotes):
```
REACT_APP_OMDB_API_KEY=420d9b07
```

## Step 3: Clear Cache and Restart
If still not working, try:

1. **Stop the server** (Ctrl+C in terminal)

2. **Clear React cache:**
   ```powershell
   Remove-Item -Recurse -Force node_modules\.cache -ErrorAction SilentlyContinue
   ```

3. **Restart server:**
   ```bash
   npm start
   ```

## Step 4: Manual Check
Open browser console (F12) and check if there are any errors. The debug message should show "API Key loaded: Yes (hidden)" if it's working.

## Alternative: Hardcode for Testing
If environment variables still don't work, you can temporarily hardcode the key in `src/services/movieApi.js`:
```javascript
const API_KEY = '420d9b07'; // Temporary - change back to process.env.REACT_APP_OMDB_API_KEY for production
```



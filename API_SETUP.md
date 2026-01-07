# API Key Setup Guide

The OMDB API requires an API key to function. Follow these steps to set it up:

## Step 1: Get Your Free API Key

1. Visit [OMDB API Key Registration](http://www.omdbapi.com/apikey.aspx)
2. Choose the **FREE** plan (1,000 requests per day)
3. Enter your email address
4. Verify your email (check your inbox)
5. Copy your API key

## Step 2: Create .env File

1. In the root directory of this project, create a file named `.env`
2. Add the following line (replace `your_api_key_here` with your actual API key):

```
REACT_APP_OMDB_API_KEY=your_api_key_here
```

**Example:**
```
REACT_APP_OMDB_API_KEY=abc123def456
```

## Step 3: Restart the Development Server

After creating/updating the `.env` file:

1. **Stop** the development server (Ctrl+C in the terminal)
2. **Start** it again:
   ```bash
   npm start
   ```

⚠️ **Important:** React requires you to restart the server whenever you change environment variables.

## Troubleshooting

### "API key not provided" Error
- Make sure the `.env` file is in the **root directory** (same level as `package.json`)
- Make sure the variable name is exactly: `REACT_APP_OMDB_API_KEY`
- Make sure there are **no spaces** around the `=` sign
- Make sure you **restarted** the development server after creating/editing `.env`

### "Invalid API key" Error
- Verify your API key is correct
- Check if you've verified your email address with OMDB
- Make sure you haven't exceeded your daily request limit

## Security Note

The `.env` file is automatically ignored by git (it's in `.gitignore`), so your API key won't be committed to version control. Never share your API key publicly!


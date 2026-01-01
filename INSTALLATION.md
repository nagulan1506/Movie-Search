# Installation & Running Instructions

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   The app will automatically open at [http://localhost:3000](http://localhost:3000)

## Full Commands

```bash
# Install all dependencies (React, React Router, Axios, etc.)
npm install

# Start the development server
npm start

# Build for production
npm run build

# Run tests (if available)
npm test
```

## Troubleshooting

If you encounter any issues:

1. **Clear node_modules and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **On Windows (PowerShell):**
   ```powershell
   Remove-Item -Recurse -Force node_modules
   Remove-Item package-lock.json
   npm install
   ```

3. **Check Node.js version:**
   ```bash
   node --version
   ```
   Requires Node.js v14 or higher

4. **Port already in use:**
   If port 3000 is busy, React will prompt you to use another port (like 3001)

## API Setup (Required)

The OMDB API requires an API key. Follow these steps:

1. **Get a free API key** from [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
2. **Create a `.env` file** in the root directory with:
   ```
   REACT_APP_OMDB_API_KEY=your_api_key_here
   ```
3. **Restart the development server**

See [API_SETUP.md](API_SETUP.md) for detailed instructions.

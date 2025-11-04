# How to Add Your PDF Resume File

## Quick Steps

1. **Place your PDF file in the `public` folder**
   - Copy your PDF resume file
   - Rename it to: `Hatem__Mohamed__Elsheref__CV.pdf`
   - Place it in the `public` folder (same level as `favicon.ico`)

2. **File Structure Should Look Like:**
   ```
   public/
   ├── 404.html
   ├── cv.pdf (old file - can be removed)
   ├── favicon.ico
   ├── Hatem__Mohamed__Elsheref__CV.pdf ← Your new PDF here
   ├── placeholder.svg
   └── robots.txt
   ```

3. **The configuration is already set up:**
   - The path is configured in `src/data/portfolio.json`:
     ```json
     "resume": {
       "cvPath": "/Hatem__Mohamed__Elsheref__CV.pdf",
       "cvFileName": "Hatem__Mohamed__Elsheref__CV.pdf"
     }
     ```
   - The Resume page and Hero component will automatically use this file

## Important Notes

### File Naming
- The filename must match exactly: `Hatem__Mohamed__Elsheref__CV.pdf`
- Use double underscores `__` (not single `_`)
- The path in `portfolio.json` should match the filename

### File Location
- **Must be in the `public` folder** - files here are served directly from the root URL
- Files in `public` are accessible at `https://yourdomain.com/filename.pdf`
- This works for both local development and GitHub Pages deployment

### Updating the File
If you want to change the PDF file name or location:

1. Update `src/data/portfolio.json`:
   ```json
   "resume": {
     "cvPath": "/YourNewFileName.pdf",
     "cvFileName": "YourNewFileName.pdf"
   }
   ```

2. Rename your PDF file to match

3. Place it in the `public` folder

## Testing

After adding the PDF:

1. **Local Development:**
   - Start your dev server: `npm run dev`
   - Visit: `http://localhost:8080/Hatem__Mohamed__Elsheref__CV.pdf`
   - Or click the "Download CV" button on the Resume page

2. **After Deployment:**
   - Your PDF will be available at: `https://hatem-elsheref.github.io/hatem/Hatem__Mohamed__Elsheref__CV.pdf`

## Current Setup

The Resume page (`src/pages/Resume.tsx`) has two buttons:
- **Print to PDF**: Prints the on-page resume content (hides navbar/footer)
- **Download CV**: Downloads the PDF file from the `public` folder

Both methods are available so users can either:
- View the formatted resume on the page and print it
- Download the pre-made PDF file directly

## Troubleshooting

### PDF not downloading?
- Check that the file exists in `public/` folder
- Verify the filename matches exactly (case-sensitive)
- Check browser console for 404 errors

### Wrong PDF showing?
- Clear browser cache
- Verify the file in `public` folder is the correct one
- Check that `portfolio.json` has the correct path

### File too large?
- GitHub Pages has a 100MB file size limit per file
- If your PDF is large, consider compressing it using an online tool
- Recommended PDF size: under 5MB for faster downloads


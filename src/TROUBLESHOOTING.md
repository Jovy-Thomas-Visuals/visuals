# Troubleshooting Guide

## Current Status

All dummy images have been removed from:
- ✅ Home Gallery (`/components/Gallery.tsx`)
- ✅ Gallery Page categories (`/components/GalleryPage.tsx`)
- ✅ Small Event Photography (`/components/SmallEventPhotography.tsx`)
- ✅ Packages page (`/components/Packages.tsx`)
- ✅ Image configuration (`/data/images.json`)

## Expected Behavior

### Before Adding Images:
- **Home Page**: Shows "Gallery Loading..." message with instructions
- **Gallery Page**: Shows category labels with placeholder boxes saying "Add images to [CATEGORY]"
- **Small Event Photography**: Shows content but no "Past Events" gallery section
- **Packages Page**: Shows package cards with placeholder boxes instead of cover images

### After Adding Images:
All pages will display your actual photography once you:
1. Upload images to the appropriate folders in `/images/`
2. Register them in `/data/images.json`

## Common Issues & Solutions

### Issue 1: "Build errors in console"
**Symptoms**: Browser console shows errors from Figma devtools_worker

**Solution**: These are typically Figma Make's internal build process errors. They should resolve automatically once the build completes. If they persist:
1. Refresh the preview
2. Try making a small change (add a space) to trigger a rebuild
3. Check that all JSON syntax is valid

### Issue 2: "Images not displaying"
**Symptoms**: After adding images to JSON, they don't show on the site

**Solution**: 
1. Verify filenames in JSON exactly match uploaded filenames (case-sensitive)
2. Check that images are in the correct folders:
   - BABIES → `/images/babies/`
   - KIDS → `/images/kids/`
   - etc.
3. Ensure JSON syntax is valid (no trailing commas, proper quotes)

### Issue 3: "JSON Syntax Error"
**Symptoms**: Site breaks after editing images.json

**Solution**:
1. Use a JSON validator (jsonlint.com)
2. Common mistakes:
   - Missing comma between array items
   - Trailing comma after last item
   - Unescaped quotes in strings
   - Missing closing brackets

### Issue 4: "Package images not showing"
**Symptoms**: Package cards show placeholders even after adding images

**Solution**: Package images are configured differently:
1. Upload images to `/images/packages/`
2. Edit `/components/Packages.tsx` directly
3. Update the `coverImage` field in each package object:
   ```javascript
   coverImage: "your-filename.jpg"
   ```

## Verifying the System

### Test 1: Check Gallery Component
Open `/components/Gallery.tsx` - should show "Gallery Loading..." when images array is empty.

### Test 2: Check JSON Structure
Open `/data/images.json` - should have:
- Empty `images` array: `[]`
- All `sections` intact
- All `tags` intact

### Test 3: Check Image Utilities
The `/utils/imageUtils.ts` file provides functions to load images. All functions should work with empty arrays without errors.

## Build Process

Figma Make uses a build process that:
1. Compiles TypeScript to JavaScript
2. Bundles React components
3. Processes Tailwind CSS
4. Imports JSON data

During this process, you may see temporary errors in the console. These typically resolve once the build completes.

## Safe Mode: Test with One Image

To test the system is working, try adding just one image:

1. **Upload a test image** to `/images/babies/test.jpg`

2. **Edit `/data/images.json`**:
```json
{
  "images": [
    {
      "id": "test-001",
      "filename": "test.jpg",
      "title": "Test Image",
      "description": "Testing the image system",
      "section": "BABIES",
      "tags": ["newborn"],
      "featured": true,
      "dateAdded": "2025-01-15",
      "aspectRatio": "square"
    }
  ],
  "sections": { ... keep all existing sections ... },
  "tags": { ... keep all existing tags ... }
}
```

3. **Check Results**:
   - Navigate to Gallery page
   - The BABIES section should show your test image
   - If this works, the system is functioning correctly

## Need More Help?

If issues persist:
1. Check the browser console for specific error messages
2. Verify all file paths are correct
3. Ensure you're editing the correct files
4. Try refreshing the Figma Make preview

## File Reference

Key files for image management:
- `/data/images.json` - Image registry
- `/utils/imageUtils.ts` - Image loading functions
- `/components/Gallery.tsx` - Home page gallery
- `/components/GalleryPage.tsx` - Categorized gallery
- `/components/SmallEventPhotography.tsx` - Events gallery
- `/components/Packages.tsx` - Package covers
- `/HOW_TO_UPLOAD_IMAGES.md` - Complete upload guide

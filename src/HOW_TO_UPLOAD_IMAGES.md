# How to Upload and Manage Your Photography Portfolio Images

## Overview
Your website is now set up with a clean image management system. All dummy/placeholder images have been removed, and the site is ready for your actual photography.

---

## Image Organization Structure

Your images should be organized in the following folder structure in Figma Make:

```
/images/
  ├── babies/          # Newborn and baby photos
  ├── kids/            # Children and kids portraits
  ├── maternity/       # Maternity photos
  ├── family/          # Family portraits
  ├── fine-art/        # Fine art and creative photography
  ├── mens-portraits/  # Men's portrait photography
  ├── small-event/     # Small events, parties, celebrations
  ├── packages/        # Package cover images (4 images needed)
  ├── mentions/        # Award-winning and featured work
  └── blog/            # Blog post cover images
```

---

## Step-by-Step Guide to Upload Images

### Step 1: Prepare Your Images
1. **Optimize your images** before uploading:
   - Recommended format: JPG or PNG
   - Recommended size: 1200-2000px on the longest side
   - File size: Under 500KB for web performance
   - File naming: Use descriptive names (e.g., `baby-newborn-01.jpg`, `family-outdoor-sunset.jpg`)

### Step 2: Upload Images to Figma Make
1. In Figma Make, locate the **file browser** on the left side
2. Create the folder structure listed above if it doesn't exist
3. Upload your images to the appropriate category folders

### Step 3: Configure Images in `/data/images.json`

Open `/data/images.json` and add your image information. Here's the format:

```json
{
  "images": [
    {
      "id": "img-001",
      "filename": "baby-newborn-01.jpg",
      "title": "Newborn Portrait",
      "description": "Peaceful newborn baby portrait in studio",
      "section": "BABIES",
      "tags": ["newborn", "studio", "portrait"],
      "featured": true,
      "dateAdded": "2025-01-15",
      "aspectRatio": "square"
    },
    {
      "id": "img-002",
      "filename": "kids-outdoor-playing.jpg",
      "title": "Kids Playing Outdoors",
      "description": "Children playing in natural light",
      "section": "KIDS",
      "tags": ["kids", "outdoor", "candid"],
      "featured": false,
      "dateAdded": "2025-01-14",
      "aspectRatio": "landscape"
    }
  ]
}
```

**Field Explanations:**
- `id`: Unique identifier (e.g., "img-001", "img-002")
- `filename`: Exact filename as uploaded
- `title`: Descriptive title for the image
- `description`: Brief description (used for SEO)
- `section`: Category - must be one of:
  - `"HOME"` - For home page gallery
  - `"BABIES"` - Baby/newborn photos
  - `"KIDS"` - Children portraits
  - `"MATERNITY"` - Maternity photos
  - `"FAMILY"` - Family portraits
  - `"FINE ART"` - Fine art photography
  - `"MEN'S PORTRAITS"` - Men's portraits
  - `"SMALL EVENT"` - Event photography
  - `"MENTIONS"` - Award/featured work
  - `"BLOG"` - Blog images
- `tags`: Array of descriptive tags (see available tags in the file)
- `featured`: `true` or `false` (featured images may appear first)
- `dateAdded`: Date in "YYYY-MM-DD" format
- `aspectRatio`: `"square"`, `"landscape"`, or `"portrait"`

---

## Page-Specific Instructions

### HOME Page Gallery
- Add images with `"section": "HOME"`
- These appear in the main packed masonry gallery
- Recommend: 15-30 images of your best work across all categories
- Mix of aspect ratios creates the best masonry layout

### GALLERY Page (Categorized)
- Add images to specific categories: BABIES, KIDS, MATERNITY, FAMILY, FINE ART, MEN'S PORTRAITS
- Each category displays as a bordered section in a 2-column grid
- Recommend: 6-12 images per category

### SMALL EVENT Page
- Add images with `"section": "SMALL EVENT"`
- These appear in the "Past Events" gallery
- Recommend: 6-12 images showing variety of event types

### PACKAGES Page
For the 4 package cards, you need to:
1. Upload 4 cover images to `/images/packages/`
2. Edit `/components/Packages.tsx`
3. Update the `coverImage` field for each package:

```javascript
{
  id: 1,
  title: "Child - Photo Session",
  coverImage: "child-session-cover.jpg",  // Your filename here
  // ... rest of package info
}
```

---

## Quick Start Example

Here's a minimal example to get started with 5 images:

```json
{
  "images": [
    {
      "id": "img-001",
      "filename": "my-best-baby-photo.jpg",
      "title": "Newborn Baby",
      "description": "Beautiful newborn photography",
      "section": "HOME",
      "tags": ["newborn", "featured"],
      "featured": true,
      "dateAdded": "2025-01-15",
      "aspectRatio": "square"
    },
    {
      "id": "img-002",
      "filename": "my-best-baby-photo.jpg",
      "title": "Newborn Baby",
      "description": "Beautiful newborn photography",
      "section": "BABIES",
      "tags": ["newborn", "studio"],
      "featured": true,
      "dateAdded": "2025-01-15",
      "aspectRatio": "square"
    },
    {
      "id": "img-003",
      "filename": "family-portrait-park.jpg",
      "title": "Family at Park",
      "description": "Family portrait outdoors",
      "section": "HOME",
      "tags": ["family", "outdoor"],
      "featured": true,
      "dateAdded": "2025-01-15",
      "aspectRatio": "landscape"
    },
    {
      "id": "img-004",
      "filename": "family-portrait-park.jpg",
      "title": "Family at Park",
      "description": "Family portrait outdoors",
      "section": "FAMILY",
      "tags": ["family", "outdoor"],
      "featured": false,
      "dateAdded": "2025-01-15",
      "aspectRatio": "landscape"
    },
    {
      "id": "img-005",
      "filename": "kids-playing.jpg",
      "title": "Kids Playing",
      "description": "Children playing outdoors",
      "section": "KIDS",
      "tags": ["kids", "candid"],
      "featured": false,
      "dateAdded": "2025-01-14",
      "aspectRatio": "portrait"
    }
  ]
}
```

**Note:** You can use the same image file in multiple sections (like img-001 and img-002 above) by creating separate entries with different `section` values.

---

## Testing Your Images

After uploading and configuring:
1. Navigate to the HOME page - your gallery should display
2. Navigate to GALLERY - categorized sections should show images
3. Navigate to Small Event Photography - past events gallery should display
4. Navigate to Packages - cover images should appear on package cards

---

## Tips for Best Results

1. **Image Quality**: Use high-quality, professionally edited images
2. **Variety**: Mix portrait, landscape, and square orientations for visual interest
3. **Consistent Editing**: Keep a consistent style across your portfolio
4. **File Names**: Use descriptive, SEO-friendly filenames (e.g., `newborn-baby-photography-gallatin-tn.jpg`)
5. **Alt Text**: The `title` field is used for image alt text, which helps with SEO
6. **Loading Speed**: Optimize images to balance quality and load time

---

## Need Help?

If you encounter any issues:
1. Check that filenames in JSON exactly match uploaded filenames (case-sensitive)
2. Verify the folder paths match the section names
3. Ensure the JSON syntax is valid (use a JSON validator if needed)
4. Check browser console for any error messages

---

## Image Path Reference

The system automatically constructs image paths based on section:
- BABIES → `/images/babies/`
- KIDS → `/images/kids/`
- MATERNITY → `/images/maternity/`
- FAMILY → `/images/family/`
- FINE ART → `/images/fine-art/`
- MEN'S PORTRAITS → `/images/mens-portraits/`
- SMALL EVENT → `/images/small-event/`
- HOME → Uses the section from the original image
- MENTIONS → `/images/mentions/`
- BLOG → `/images/blog/`

For PACKAGES, manually specify the path in the component file.

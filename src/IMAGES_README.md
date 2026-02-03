# Image Organization System

This document explains how to organize and add images to your photography portfolio website.

## Folder Structure

```
/images/
  ├── babies/          # Baby and newborn photos
  ├── kids/            # Children and kids photos
  ├── maternity/       # Maternity photos
  ├── family/          # Family photos
  ├── fine-art/        # Fine art and creative photos
  ├── mens-portraits/  # Men's portraits
  ├── events/          # Small event photos
  ├── mentions/        # Award-winning and featured images
  ├── blog/            # Blog post images
  └── home/            # Featured images for home page gallery
```

## Image Metadata (images.json)

All image information is stored in `/data/images.json`. Each image has the following attributes:

### Required Fields:
- **id**: Unique identifier (e.g., "img-001")
- **filename**: Image filename (e.g., "newborn-session-001.jpg")
- **title**: Image title
- **description**: Brief description of the image
- **section**: Which section the image belongs to (see sections below)
- **tags**: Array of tags for filtering (e.g., ["outdoor", "natural-light"])
- **featured**: Boolean - whether to feature this image prominently
- **dateAdded**: Date in YYYY-MM-DD format
- **aspectRatio**: "square", "portrait", or "landscape"

### Optional Fields:
- **blogPostId**: If this image belongs to a specific blog post (e.g., "blog-post-1")

## Available Sections

- **HOME**: Featured images for the home page packed gallery
- **BABIES**: Newborn and baby photography
- **KIDS**: Children and kids portraits
- **MATERNITY**: Maternity and pregnancy photography
- **FAMILY**: Family portraits and group photos
- **FINE ART**: Creative and fine art photography
- **MEN'S PORTRAITS**: Professional men's portrait photography
- **SMALL EVENT**: Small events, parties, and celebrations
- **MENTIONS**: Award-winning images and featured work
- **BLOG**: Images for blog posts and articles

## Available Tags

Common tags you can use (feel free to add more):
- newborn, baby, kids, family, maternity
- portrait, outdoor, studio, natural-light, golden-hour
- candid, fine-art, creative, composite
- professional, milestone, siblings
- event, birthday, celebration, party
- award, featured, publication, nps
- blog, cover-image, tips, hero, portfolio

## How to Add New Images

### Step 1: Add the Image File
Place your image in the appropriate folder under `/images/`:
- Example: `/images/babies/newborn-emma-001.jpg`

### Step 2: Add Metadata to images.json
Add a new entry to the "images" array in `/data/images.json`:

```json
{
  "id": "img-016",
  "filename": "newborn-emma-001.jpg",
  "title": "Sweet Dreams - Emma's Newborn Session",
  "description": "Peaceful newborn portrait with soft natural light",
  "section": "BABIES",
  "tags": ["newborn", "natural-light", "studio", "portrait"],
  "featured": true,
  "dateAdded": "2024-12-15",
  "aspectRatio": "portrait"
}
```

## Using the Image Utilities

The `/utils/imageUtils.ts` file provides helper functions to retrieve images:

### Examples:

```typescript
// Get all images from a section
const babyImages = getImagesBySection('BABIES');

// Get images by tag
const outdoorImages = getImagesByTag('outdoor');

// Get featured images only
const featuredImages = getFeaturedImages();

// Get home page gallery images
const homeImages = getHomeGalleryImages();

// Filter images with multiple criteria
const filteredImages = filterImages({
  section: 'KIDS',
  tags: ['outdoor', 'natural-light'],
  featured: true
});

// Get image path for display
const imagePath = getImagePath('newborn-emma-001.jpg');
// Returns: "/images/newborn-emma-001.jpg"
```

## Image Naming Conventions

For consistency, follow these naming patterns:

- **Descriptive names**: `maternity-sunset-golden-001.jpg`
- **Session based**: `family-smith-session-001.jpg`
- **Event based**: `birthday-celebration-2024-001.jpg`
- **Award/Feature**: `nps-award-sept-2017.jpg`

Use lowercase, hyphens instead of spaces, and number sequences for multiple images from the same session.

## Aspect Ratios

- **square**: 1:1 ratio (e.g., 1000x1000px)
- **portrait**: Vertical orientation (e.g., 800x1200px)
- **landscape**: Horizontal orientation (e.g., 1600x900px)

## Best Practices

1. **Optimize images** before uploading (compress for web)
2. **Use descriptive filenames** that explain the content
3. **Add multiple relevant tags** for better filtering
4. **Mark your best work** as featured
5. **Keep dates accurate** for chronological sorting
6. **Group related images** using consistent tags
7. **Update images.json** immediately after adding new images

## Example Workflow

1. Edit and export your photo: `maternity-sarah-golden-hour-001.jpg`
2. Save it to: `/images/maternity/maternity-sarah-golden-hour-001.jpg`
3. Open `/data/images.json`
4. Add a new entry with appropriate metadata
5. The website will automatically display it in the MATERNITY section
6. If marked as featured, it may appear on the home page

## Questions?

The image system is flexible - you can add new tags and customize sections as needed. Just update both the JSON file and the utility functions if you add new section types.

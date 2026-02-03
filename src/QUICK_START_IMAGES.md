# Quick Start Guide: Adding Your Images

## 🚀 Quick Steps

### 1. **Prepare Your Images**
   - Edit and export your photos
   - Optimize for web (recommended: max 2000px on longest side)
   - Use descriptive filenames: `maternity-sunset-001.jpg` not `IMG_1234.jpg`

### 2. **Choose the Right Folder**
   ```
   /images/
   ├── home/            ← Your BEST portfolio pieces for homepage
   ├── babies/          ← Newborn and baby photos
   ├── kids/            ← Children portraits
   ├── maternity/       ← Pregnancy photos
   ├── family/          ← Family portraits
   ├── fine-art/        ← Creative/composite work
   ├── mens-portraits/  ← Men's portraits
   ├── events/          ← Birthday parties, celebrations
   ├── mentions/        ← Awards, features, reviews, media
   └── blog/            ← Blog post images
   ```

### 3. **Add Image Metadata**
   Open `/data/images.json` and add an entry:
   
   ```json
   {
     "id": "img-016",
     "filename": "your-image.jpg",
     "title": "Beautiful Sunset Maternity Session",
     "description": "Golden hour maternity portraits in the park",
     "section": "MATERNITY",
     "tags": ["maternity", "outdoor", "golden-hour"],
     "featured": true,
     "dateAdded": "2024-12-17",
     "aspectRatio": "landscape"
   }
   ```

### 4. **Update the ID Number**
   - Look at the last entry in images.json
   - Find the highest `img-XXX` number
   - Add 1 for your new image

---

## 📋 Priority Images to Add

### **CRITICAL** (Add these first):
1. **Home Page Gallery** (`/images/home/`)
   - Add 15-20 of your absolute BEST images
   - Mix of different subjects (babies, kids, families, maternity)
   - Set `"section": "HOME"` and `"featured": true`

2. **Section Pages** (for GALLERY page):
   - BABIES: 8-12 images
   - KIDS: 8-12 images
   - MATERNITY: 8-12 images
   - FAMILY: 8-12 images
   - FINE ART: 8-12 images
   - MEN'S PORTRAITS: 6-10 images

### **HIGH PRIORITY**:
3. **Mentions Page** (`/images/mentions/`):
   - NPS award images (4 images)
   - Affinity Photo feature (1 image)
   - DSLR Official feature (1 image)
   - Jessica Drossin feature (1 image)
   - Photo of the Day (1 image)
   - Magic of Childhood feature (1 image)
   - Shubh Yatra magazine (1 image)
   - Newspaper articles (3 images)
   - Google review screenshots (4 images)
   - WhatsApp testimonials (3 images)
   - IAPCP article images (4 images)

4. **Blog Posts** (`/images/blog/`):
   - 5 cover images (one per blog post)
   - 15 section images (3 per blog post)

### **MEDIUM PRIORITY**:
5. **Small Event Photography** (`/images/events/`):
   - 6-10 event photos from past parties/celebrations

---

## 🏷️ Using Tags Effectively

### **Combine Multiple Tags** for Better Filtering:
- `["maternity", "outdoor", "golden-hour"]`
- `["kids", "siblings", "candid", "outdoor"]`
- `["fine-art", "creative", "composite"]`
- `["newborn", "studio", "natural-light"]`

### **Common Tag Combinations**:
- Outdoor portraits: `["outdoor", "natural-light", "portrait"]`
- Studio work: `["studio", "professional", "portrait"]`
- Creative work: `["fine-art", "creative", "composite"]`
- Event photography: `["event", "candid", "celebration"]`

---

## 📐 Aspect Ratios Guide

- **square**: Perfect squares (1:1) - great for Instagram-style layout
- **portrait**: Vertical images - taller than wide
- **landscape**: Horizontal images - wider than tall

---

## ✅ Image Checklist

Before adding each image, verify:
- [ ] Image is optimized for web
- [ ] Filename is descriptive and lowercase with hyphens
- [ ] Image is saved in correct `/images/[section]/` folder
- [ ] Entry added to `/data/images.json`
- [ ] ID number is unique and sequential
- [ ] Section name matches exactly (case-sensitive)
- [ ] Tags are relevant and accurate
- [ ] Aspect ratio is correct
- [ ] Date is in YYYY-MM-DD format

---

## 🎯 Special Cases

### **For Blog Post Images**:
Add the `blogPostId` field:
```json
{
  "id": "img-020",
  "filename": "blog-golden-hour.jpg",
  "section": "BLOG",
  "tags": ["blog", "cover-image", "golden-hour"],
  "blogPostId": "blog-post-2"
}
```

### **For Award/Feature Images**:
Use specific tags:
```json
{
  "section": "MENTIONS",
  "tags": ["award", "nps", "featured"]
}
```

### **For Home Page Featured Images**:
```json
{
  "section": "HOME",
  "featured": true,
  "tags": ["portfolio", "featured", "hero"]
}
```

---

## 🔧 Where Images Appear

| Section | Appears On | Notes |
|---------|------------|-------|
| HOME | Home page gallery | Your best work only |
| BABIES | Gallery → BABIES section | 2-column grid |
| KIDS | Gallery → KIDS section | 2-column grid |
| MATERNITY | Gallery → MATERNITY section | 2-column grid |
| FAMILY | Gallery → FAMILY section | 2-column grid |
| FINE ART | Gallery → FINE ART section | 2-column grid |
| MEN'S PORTRAITS | Gallery → MEN'S PORTRAITS section | 2-column grid |
| SMALL EVENT | Small Event Photography page | Gallery grid |
| MENTIONS | Mentions & Awards page | Various sections |
| BLOG | Blog posts | Cover and section images |

---

## 💡 Pro Tips

1. **Start with HOME**: Add your 20 best images to the home gallery first
2. **Featured Flag**: Mark only your absolute best work as `featured: true`
3. **Consistent Naming**: Use a system like `section-subject-number.jpg`
4. **Multiple Sections**: An image can only belong to ONE section
5. **Tags are Flexible**: Use as many relevant tags as you want
6. **Date Matters**: Newer images (by dateAdded) may be shown first in some views

---

## 📞 Need Help?

Refer to:
- `/IMAGES_README.md` - Full documentation
- `/data/IMAGE_CATEGORIES.json` - Specific image lists for Mentions and Blog
- `/scripts/add-image-template.json` - Copy-paste template
- `/utils/imageUtils.ts` - See how images are retrieved

---

## 🎨 Example Workflow

**Let's say you have a maternity photo to add:**

1. **Prepare**: Edit `maternity-sarah-sunset-001.jpg`
2. **Save**: Put it in `/images/maternity/maternity-sarah-sunset-001.jpg`
3. **Open**: `/data/images.json`
4. **Add**:
   ```json
   {
     "id": "img-016",
     "filename": "maternity-sarah-sunset-001.jpg",
     "title": "Golden Hour Maternity - Sarah",
     "description": "Beautiful sunset maternity session with flowing dress",
     "section": "MATERNITY",
     "tags": ["maternity", "outdoor", "golden-hour", "sunset"],
     "featured": true,
     "dateAdded": "2024-12-17",
     "aspectRatio": "landscape"
   }
   ```
5. **Done!** The image will automatically appear in the MATERNITY gallery section

---

Ready to add your images! Start with the home page gallery for maximum impact. 🎉

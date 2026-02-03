# Website Assets

This folder contains all website assets (badges, awards, logos, feature images, etc.) that are separate from your photography portfolio images.

## Current Assets

### Header Images
- `balloonImage` - Hot air balloons header decoration
- `portraitMasterBadge` - Portrait Masters Bronze 2021 badge
- `peoplesChoiceBadge` - GLOW Finalist Award badge (People's Choice)

### Award Badges
- `npsAwardBadge` - NPS Highly Commended Award badge
- `bumpBabyBeyondBadge` - Bump Baby & Beyond feature badge
- `glowFinalistBadge` - GLOW Finalist Award badge
- `portraitMasterBadge` - Portrait Masters Bronze 2021 badge (also used in header)

## Adding New Assets

### For Award/Feature Images in Mentions Page

If you have images for the Mentions & Features page (NPS award images, feature screenshots, media coverage, etc.), add them to `/assets/images.ts`:

```typescript
// In /assets/images.ts
export { default as npsAwardImage1 } from 'figma:asset/YOUR_ASSET_ID.png';
export { default as npsAwardImage2 } from 'figma:asset/YOUR_ASSET_ID.png';
export { default as affinityPhotoFeature } from 'figma:asset/YOUR_ASSET_ID.png';
export { default as dslrFeature } from 'figma:asset/YOUR_ASSET_ID.png';
export { default as jessicaDrossinFeature } from 'figma:asset/YOUR_ASSET_ID.png';
export { default as photoOfTheDay } from 'figma:asset/YOUR_ASSET_ID.png';
export { default as magicOfChildhood } from 'figma:asset/YOUR_ASSET_ID.png';
export { default as shubhYatra } from 'figma:asset/YOUR_ASSET_ID.png';
export { default as newspaper1 } from 'figma:asset/YOUR_ASSET_ID.png';
export { default as googleReview1 } from 'figma:asset/YOUR_ASSET_ID.png';
export { default as whatsappMessage1 } from 'figma:asset/YOUR_ASSET_ID.png';
export { default as iapcpArticle1 } from 'figma:asset/YOUR_ASSET_ID.png';
```

Then import them in `/components/Mentions.tsx`:

```typescript
import { npsAwardImage1, affinityPhotoFeature, /* etc */ } from '../assets/images';
```

## Directory Structure

```
/assets/
  ├── images.ts          # Central export file for all website assets
  └── README.md          # This file
```

## Difference from Photography Images

**Website Assets (`/assets/`):**
- Badges and awards
- Feature screenshots
- Media coverage images
- Review screenshots
- Logo and branding elements

**Photography Images (`/images/` via data system):**
- Your actual photography portfolio
- Client photos organized by category (Babies, Kids, Family, etc.)
- Managed through `/data/images.json`

This separation keeps your website infrastructure separate from your portfolio content.

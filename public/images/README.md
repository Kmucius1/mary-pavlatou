# Mary Pavlatou — Archive Photo Placement

Place the real family photos in this folder, then update the component source attributes.

## Hero Portrait
Filename: `mary-hero.jpg` (or .png / .webp)
Used in: `components/Hero.tsx`
Replace the `img-placeholder` div with:
```jsx
<Image
  src="/images/mary-hero.jpg"
  alt="Mary Pavlatou — Portrait"
  fill
  className="object-cover object-top"
  priority
/>
```

## Gallery Photos (3–5 portraits)
Filenames: `mary-gallery-1.jpg`, `mary-gallery-2.jpg`, `mary-gallery-3.jpg`
Used in: `components/MidSection.tsx` — inside each `ArchiveFrame`
Replace each placeholder div with:
```jsx
<Image
  src="/images/mary-gallery-1.jpg"
  alt="Mary Pavlatou — Archive Portrait"
  fill
  className="object-cover object-top"
/>
```

## Tips
- Use high-resolution scans (min 800px wide for gallery, min 1200px tall for hero)
- .webp format recommended for web performance
- All images should go in this `/public/images/` folder

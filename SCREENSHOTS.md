# Screenshots Management

This document explains how to manage product screenshots in FlowDrop.

## Quick Start

1. **Add your screenshots** to the `screenshots/` folder in your project root
2. **Run the management script**: `npm run screenshots`
3. **Your screenshots are now live** in the ProductScreenshots component

## File Structure

```
flowdrop/
├── screenshots/           # Your source screenshots (PNG files)
│   ├── webfloweditor.png
│   ├── webfloweditor2.png
│   ├── nodeeditor.png
│   └── generatewebflowscreen.png
├── public/screenshots/    # Auto-generated (don't edit directly)
└── components/ProductScreenshots.tsx  # Component configuration
```

## How It Works

1. **Source Management**: Keep your original screenshots in the `screenshots/` folder
2. **Auto-Copy**: The management script copies PNG files to `public/screenshots/`
3. **Next.js Serving**: Images are served from `/screenshots/[filename]` in your app
4. **Component Integration**: ProductScreenshots component automatically uses the images

## Available Commands

```bash
# Copy screenshots to public directory
npm run screenshots

# Or run directly
node scripts/manage-screenshots.js
```

## Customizing Screenshots

### Update Descriptions
Edit `components/ProductScreenshots.tsx` to change:
- Image captions
- Alt text for accessibility
- Feature descriptions
- Image dimensions

### Add New Screenshots
1. Add PNG files to `screenshots/` folder
2. Run `npm run screenshots`
3. Update the component configuration if needed

### Image Optimization
- Use PNG format for screenshots
- Recommended size: 1200x800px for main gallery
- Keep file sizes under 100KB for best performance
- Consider using WebP format for better compression

## Current Screenshots

| Filename | Description | Usage |
|----------|-------------|-------|
| `webfloweditor.png` | Main workflow editor interface | Main animated gallery (left) |
| `webfloweditor2.png` | Advanced editor features | Floating feature card (top-right) |
| `nodeeditor.png` | Node configuration interface | Floating feature card (bottom-right) |
| `generatewebflowscreen.png` | AI workflow generation | Main animated gallery (right) |

## Strategic Components

The "Your Edge With Flowdrop" section now includes:

1. **Main Screenshots**: Two large browser-window screenshots that slide in from left and right
2. **Performance Monitor**: Floating stats card (bottom-left)
3. **Node Editor**: Floating screenshot card (bottom-right) 
4. **Team Collaboration**: Floating team indicator (center-right)
5. **Notification Badge**: Floating alerts card (top-left)
6. **Advanced Editor**: Floating screenshot card (top-right)

All components feature rounded corners and smooth sliding animations. The layout is balanced with strategic positioning to avoid clutter.

## Best Practices

1. **Consistent Naming**: Use descriptive filenames (e.g., `workflow-builder.png`)
2. **Regular Updates**: Run `npm run screenshots` when adding new images
3. **Quality Control**: Ensure screenshots are clear and representative
4. **Accessibility**: Provide meaningful alt text for all images
5. **Performance**: Optimize image sizes for web delivery

## Troubleshooting

**Images not showing?**
- Check that files are in `public/screenshots/`
- Verify file paths in ProductScreenshots.tsx
- Ensure images are PNG format

**Script not working?**
- Make sure you're in the project root directory
- Check that `screenshots/` folder exists
- Verify Node.js is installed

**Need to update descriptions?**
- Edit `components/ProductScreenshots.tsx`
- No need to re-run the script for text changes 
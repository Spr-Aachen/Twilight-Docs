---
title: Navbar Configuration
createTime: 2025/10/10 10:10:10
permalink: /en/config/navBar/
---

Configure the navigation bar structure, including preset entries and custom links.

## File Location

```
src/config/navBarConfig.ts
```


## Configuration Structure

```typescript
export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,      // Home page
    LinkPreset.Archive,   // Archive page
    LinkPreset.About,     // About page
    LinkPreset.Friends,   // Friends page
    LinkPreset.Anime,     // Anime page
    LinkPreset.Diary,     // Diary page
    {
      name: "GitHub",
      url: "https://github.com/Spr-Aachen",
      external: true,
    },
  ],
};
```

### Preset Links

Twilight ships with several preset navigation entries:

- `LinkPreset.Home`
- `LinkPreset.Archive`
- `LinkPreset.About`
- `LinkPreset.Friends`
- `LinkPreset.Anime`
- `LinkPreset.Diary`

### Custom Links

Add custom items to the navbar by pushing new objects into `navBarConfig.links`:

- `name`: Display label
- `url`: Link target
- `external`: Set to `true` to open in a new tab

### Editing the Navbar

1. **Add links** – append presets or custom objects.
2. **Remove links** – delete entries from the array.
3. **Reorder links** – arrange the array to control link order.

Example: Adding a Twitter link

```typescript
{
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    // ...other links
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      external: true,
    },
  ],
}
```

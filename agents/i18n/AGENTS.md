# AGENTS.md - Internationalization Rules

This agent handles internationalization, translation management, localization, and multilingual content implementation.

## 🌐 Translation Management

### Core Rules

- Use `next-intl` for all user-facing text
- Add translation keys to both `en.json` and `pl.json`
- Use descriptive key names with proper nesting
- Never hardcode text strings in components
- **Use nested translation keys** for component-specific content (e.g., `AboutUs.Welcome.title`)
- **Avoid separate constants files** - use translations directly in content components
- **Use `t.rich()` for formatted text** with custom components for styling
- **Use component/entity names in hierarchy** - only deepest level uses descriptive names like "title", "description"
- **Follow feature wrapper pattern** - translations should mirror the feature structure hierarchy

### Translation Structure

```json
{
  "FeatureName": {
    "componentName": {
      "elementName": "Translated text",
      "richText": "Text with <important>highlighted</important> content"
    }
  }
}
```

### Feature Wrapper Translation Pattern

```json
// For feature wrappers with mini-features
{
  "MainFeature": {
    "MiniFeature1": {
      "title": "Mini Feature 1 Title",
      "description": "Mini Feature 1 Description"
    },
    "MiniFeature2": {
      "title": "Mini Feature 2 Title",
      "description": "Mini Feature 2 Description"
    }
  }
}
```

### Component Usage Pattern

```tsx
// For feature wrapper pattern
const t = useTranslations("MainFeature.MiniFeature1");

// For regular features
const t = useTranslations("FeatureName.ComponentName");
```

## 🎯 Translation Hierarchy Pattern

### Correct Structure

```json
// Correct: Use component/entity names in hierarchy
{
  "AboutUs": {
    "Welcome": {
      "title": "About <important>Foto</important> service",
      "subtitle": "About our service"
    },
    "Contact": {
      "title": "Contact with administrator",
      "phone": "+48 123 456 789"
    }
  },
  "DownloadInfo": {
    "JPG": {
      "title": "JPG File",
      "description": "File intended for office use..."
    },
    "PNG": {
      "title": "PNG File",
      "description": "File intended for presentations..."
    }
  },
  "IndustryPage": {
    "LastAdded": {
      "title": "Recently Added"
    },
    "OurBrands": {
      "title": "Our Brands"
    },
    "OurIndustries": {
      "title": "Our Industries"
    }
  }
}
```

### Avoid Generic Wrapper Names

```json
// Avoid: Generic wrapper names
{
  "AboutUs": {
    "welcome": {
      // ❌ Generic name
      "title": "..."
    },
    "fileTypes": {
      // ❌ Generic wrapper
      "jpg": {
        "title": "..."
      }
    }
  }
}
```

## 🎨 Rich Text Translation Pattern

### Translation File Structure

```json
// Translation file (en.json)
{
  "AboutUs": {
    "welcome": {
      "title": "Welcome to the new <important>Foto Group Maspex</important> Service"
    }
  }
}
```

### Component Usage

```tsx
// Component usage
const t = useTranslations("AboutUs.welcome");

<Heading size="3xl" weight="semibold" align="center">
  {t.rich("title", {
    important: (chunks) => (
      <Heading as="span" size="3xl" weight="bold" color="primary">
        {chunks}
      </Heading>
    ),
  })}
</Heading>;
```

## 📝 Translation Best Practices

### Key Naming Conventions

- Use PascalCase for feature and component names
- Use camelCase for element names
- Use descriptive names that reflect the content purpose
- Avoid generic wrapper names like "content", "data", "items"
- Use specific entity names in the hierarchy

### Translation Organization

- Group translations by feature and component
- Use consistent naming patterns across all features
- Keep translation keys flat within their component scope
- Use rich text formatting for styled content
- Maintain parallel structure between `en.json` and `pl.json`

## 🚫 i18n Anti-Patterns

- **Don't hardcode text strings** - always use translation keys
- **Don't use generic wrapper names** - use specific component/entity names
- **Don't create separate constants files** - use translations directly
- **Don't forget to add keys to both language files** - maintain consistency
- **Don't use overly nested structures** - keep hierarchy reasonable
- **Don't mix translation logic with component logic** - separate concerns

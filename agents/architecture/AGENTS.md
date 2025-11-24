# AGENTS.md - Architecture Rules

This agent handles project structure, feature modules, file organization, and architectural decisions.

## 📁 Project Structure Rules

### Feature Module Independence

- Each feature is an independent module that cannot import from other features
- Only imports from `@/shared` are allowed between features
- Use `export {...} from "..."` pattern for public APIs
- Each feature should have its own `index.ts` file defining the public API
- **Minimize public API exports** - only export what's needed outside the feature
- **Keep internal components private** - don't export types, hooks, or utilities unless necessary
- **Use type imports** for constants when only used for typing: `import type { CONSTANTS } from "./constants"`
- **Extract reusable hooks** when logic is duplicated across components
- **Make components client components** when they need browser APIs or state management
- **Create shared folder within features** for components used by multiple components within the same feature

### Feature Wrapper Pattern

- **For large features (whole pages)**: Create a main feature wrapper with mini-features inside
- **Main feature wrapper**: Contains the overall page structure and imports mini-features
- **Mini-features**: Each has its own complete folder structure following standard feature patterns
- **Example structure**:
  ```
  main-feature/
  ├── index.ts                    # Main feature exports
  ├── main-feature.tsx            # Main wrapper component
  ├── mini-feature-1/             # Complete mini-feature
  │   ├── index.ts
  │   ├── components/
  │   ├── constants/
  │   ├── types/
  │   └── ...
  ├── mini-feature-2/             # Another mini-feature
  │   └── ...
  └── shared/                     # Shared within main feature
  ```
- **Import pattern**: Main wrapper imports from mini-features using `import { Component } from "./mini-feature"`

### File Organization

```
feature-name/
├── index.ts                    # Public API exports
├── components/                 # UI components
│   ├── component-name.tsx
│   └── index.ts
├── hooks/                      # Custom hooks
│   ├── use-hook-name.ts
│   └── index.ts
├── lib/                        # Library code and external integrations
│   ├── library-name.ts
│   └── index.ts
├── utils/                      # Utility functions and transformations
│   ├── utility-name.ts
│   └── index.ts
├── constants/                  # Feature-specific constants
│   ├── constants-name.ts
│   └── index.ts
├── shared/                     # Shared components within feature
│   ├── components/             # Shared UI components (when multiple)
│   │   ├── shared-component.tsx
│   │   └── index.ts
│   ├── constants/              # Shared constants (when multiple)
│   │   ├── shared-constants.ts
│   │   └── index.ts
│   ├── hooks/                  # Shared hooks (when multiple)
│   │   ├── shared-hook.ts
│   │   └── index.ts
│   ├── utils/                  # Shared utilities (when multiple)
│   │   ├── shared-utils.ts
│   │   └── index.ts
│   ├── shared-component.tsx    # Single shared component (minimal structure)
│   └── index.ts                # Main shared exports
└── types/                      # TypeScript definitions
    └── index.ts
```

## 🔧 Technical Implementation Rules

### State Management

- Use React hooks for local state management
- Create custom hooks for reusable state logic
- Use `@/shared/hooks/use-simple-feature` for on/off/toggle/reset logic instead of direct `useState`
- **Use semantic hook assignment pattern**: `const feature = useSimpleFeature()` instead of destructuring
- **Call methods semantically**: `feature.off()` instead of `off()` for better readability
- Prefer `useState` and `useEffect` for simple state needs
- Use proper dependency arrays in `useEffect`

### Storage & Persistence

- Use localStorage for client-side persistence
- Always check `typeof window === "undefined"` for SSR safety
- Implement proper error handling with try-catch blocks
- Provide cleanup functions in useEffect hooks

### Performance

- Use `React.memo` for expensive components when appropriate
- Implement proper loading states
- Avoid unnecessary re-renders
- Use proper key props for lists

## 🎯 Architecture Patterns

### Public API Exports

```tsx
// Pattern for feature exports - MINIMAL API
export { MainComponent } from "./components";

// Avoid exporting internal implementation details
// export { useCustomHook } from "./hooks"; // ❌ Only if needed outside feature
// export { libraryFunction } from "./lib"; // ❌ Only if needed outside feature
// export { utilityFunction } from "./utils"; // ❌ Only if needed outside feature
// export { CONSTANTS } from "./constants"; // ❌ Only if needed outside feature
```

### Semantic Hook Usage Pattern

```tsx
// Correct: Semantic assignment pattern
const collapsible = useSimpleFeature();
collapsible.off();
collapsible.toggle();

// Avoid: Destructuring pattern
const { isOn, toggle, off } = useSimpleFeature(); // ❌ Less semantic
```

### Type Co-location Pattern

```tsx
// Correct: Co-locate types with components
// components/table-of-contents.tsx
interface TableOfContentsProps {
  sections: typeof TERMS_SECTIONS;
}

// Avoid: Separate types file for single-use interfaces
// types/index.ts - only for shared types
```

## 🚫 Architecture Anti-Patterns

- **Don't export unnecessary internal components** - keep feature APIs minimal
- **Don't duplicate component logic within features** - extract to feature/shared folder
- **Don't destructure useSimpleFeature** - use semantic assignment pattern
- **Don't add logic for "future use"** - implement only what's necessary for current requirements
- **Don't duplicate layout structure** - avoid container, max-width, padding in page components

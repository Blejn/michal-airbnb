# AGENTS.md - UI & Design System Rules

This agent handles design system usage, component patterns, styling rules, and UI implementation guidelines.

## 🎨 Design System Rules

### Design System Usage

- Always use existing design system components from `@/shared/components/ui/`
- Follow the established component patterns and variants
- Use `cn()` utility for className merging
- Maintain consistent spacing and styling patterns
- **CRITICAL: Use design system variants instead of custom styling**
  - Use component props like `variant`, `size`, etc. instead of custom classes
  - Avoid overriding design system colors, borders, and backgrounds with custom classes
  - Check existing variants before adding custom className overrides
  - Examples:
    - Use `variant="primary"` instead of `className="bg-red-700 text-white"`
    - Use `size="sm"` instead of `className="h-8 px-3"`
    - Use `variant="outline"` instead of `className="border border-slate-300 bg-slate-50"`
- Don't add unnecessary TailwindCSS classes
- **Use Text and Heading components** instead of raw HTML elements (p, h1-h6, span)
- **Use Lucide React icons** with `size` prop instead of Tailwind sizing classes
- **Apply layout constraints at layout level** rather than individual components
- **Don't duplicate layout structure** - avoid container, max-width, padding classes in page components
- **Use component props instead of className** when available (e.g., `align="center"` instead of `className="text-center"`)

### Component Patterns

- Use early returns for conditional rendering
- Prefer composition over inheritance
- Keep components focused and single-purpose
- Use proper TypeScript interfaces for props
- **One file per component** - each component should be in its own file
- **Co-locate types with components** - move interfaces to the same file when only used in one place
- **Use design system Button component** instead of custom button elements
- **Use asChild prop** when wrapping components with design system elements
- **Extract shared components to feature/shared folder** when duplicated across multiple components within the same feature

## 🎯 UI Implementation Patterns

### Component Props vs className Pattern

```tsx
// Correct: Use component props when available
<Heading size="3xl" weight="semibold" align="center" color="primary">
  Title
</Heading>

<Text size="lg" weight="bold" color="muted" align="right">
  Description
</Text>

<Button variant="outline" size="icon">
  <Download size={16} />
</Button>

<Badge variant="primary">New</Badge>

// Avoid: Manual className when props exist
<Heading className="text-3xl font-semibold text-center text-red-700">
  Title
</Heading>

<Text className="text-lg font-bold text-slate-500 text-right">
  Description
</Text>

<Button className="border border-slate-300 bg-slate-50">Click</Button>

<Badge className="bg-red-700 text-slate-50">New</Badge>
```

### Design System Variant Usage

```tsx
// Correct: Use design system variants
<Button variant="outline" size="sm">Download</Button>
<Badge variant="primary">New Product</Badge>

// Avoid: Custom className overrides
<Button className="border-slate-300 bg-slate-50 h-8 px-3">Download</Button>
<Badge className="bg-red-700 text-slate-50">New Product</Badge>

// Correct: Only add minimal necessary custom styling
<Button variant="outline" className="w-[90px]">Custom Width</Button>

// Avoid: Overriding entire design system styles
<Button variant="outline" className="bg-blue-500 border-blue-600">
```

### Layout Constraint Pattern

```tsx
// Correct: Apply constraints at layout level
// layout.tsx
<main className="flex-1">
  <div className="container mx-auto max-w-7xl px-4">
    {children}
  </div>
</main>

// Component level - only content styling
<div className="py-8">
  {/* content */}
</div>
```

### Component Composition

```tsx
// Pattern for wrapper components
export const WrapperComponent = ({ children }: Props) => {
  const { state, actions } = useCustomHook();

  if (condition) {
    return <EarlyReturnComponent />;
  }

  return <>{children}</>;
};
```

## 🚫 UI Anti-Patterns

- **Don't use emoji icons** - prefer Lucide React icons for consistency
- **Don't define layout constraints in components** - use layout-level constraints
- **Don't mix raw HTML with design system components** - be consistent
- **Don't duplicate layout structure** - avoid container, max-width, padding in page components
- **Don't add unnecessary TailwindCSS classes** - use design system components and props
- **Don't override design system variants with custom styles**
  - ❌ Avoid: `className="border-slate-300 bg-slate-50 text-slate-700"` on Button component
  - ✅ Correct: Use `variant="outline"` which already has these styles
  - ❌ Avoid: `className="bg-red-700 text-slate-50"` on Badge component
  - ✅ Correct: Use `variant="primary"` which already has these styles
- **Don't use raw HTML elements** - use Text and Heading components instead
- **Don't use Tailwind sizing for icons** - use Lucide React size prop
- **Don't create custom color classes** - use design system color variants

## 📝 UI Quality Standards

### Component Structure

- **One file per component** - each component should be in its own file
- **Co-locate types with components** - move interfaces to the same file when only used in one place
- Use early returns for conditional rendering
- Keep components focused and single-purpose
- Use proper TypeScript interfaces for props

### Styling Guidelines

- Use `cn()` utility for className merging
- Maintain consistent spacing and styling patterns
- Follow the established component patterns and variants
- Use component props instead of className when available
- Apply layout constraints at layout level rather than individual components

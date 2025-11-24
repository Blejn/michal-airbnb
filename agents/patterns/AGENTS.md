# AGENTS.md - Implementation Patterns

This agent handles specific implementation patterns, code examples, and best practices for common development scenarios.

## 🎯 Custom Hooks Pattern

```tsx
// Pattern for custom hooks
export const useCustomHook = (param: Type) => {
  const [state, setState] = useState<Type>(initialValue);

  useEffect(() => {
    // Effect logic
    return () => {
      // Cleanup logic
    };
  }, [dependencies]);

  return { state, actions };
};
```

## 🎨 Component Composition Pattern

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

## 🔧 State Management Patterns

### Simple Feature Hook Pattern

```tsx
// Correct: Semantic assignment pattern
const collapsible = useSimpleFeature();
collapsible.off();
collapsible.toggle();

// Avoid: Destructuring pattern
const { isOn, toggle, off } = useSimpleFeature(); // ❌ Less semantic
```

### Local State Pattern

```tsx
// Pattern for local state management
export const ComponentWithState = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await api.getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <LoadingComponent />;
  if (!data) return <EmptyStateComponent />;

  return <DataComponent data={data} />;
};
```

## 🎨 Error Handling Patterns

### Try-Catch Pattern

```tsx
// Pattern for error handling
const handleAction = async () => {
  try {
    setIsLoading(true);
    const result = await performAction();
    setSuccess(result);
  } catch (error) {
    console.error("Action failed:", error);
    setError(error.message);
  } finally {
    setIsLoading(false);
  }
};
```

### Error Boundary Pattern

```tsx
// Pattern for error boundaries
export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error("Application error:", error);
      setHasError(true);
    };

    window.addEventListener("error", handleError);
    return () => window.removeEventListener("error", handleError);
  }, []);

  if (hasError) {
    return <ErrorFallback />;
  }

  return <>{children}</>;
};
```

## 🔄 Data Fetching Patterns

### Server Component Pattern

```tsx
// Pattern for server components
export const ServerComponent = async () => {
  const data = await fetchData();

  return (
    <div>
      <Heading size="lg">{data.title}</Heading>
      <Text>{data.description}</Text>
    </div>
  );
};
```

### Client Component with Loading Pattern

```tsx
// Pattern for client components with loading states
export const ClientComponent = () => {
  const [data, setData] = useState<DataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <DataDisplay data={data} />;
};
```

## 🎯 Performance Patterns

### Memoization Pattern

```tsx
// Pattern for expensive computations
export const ExpensiveComponent = ({ items }: { items: Item[] }) => {
  const processedItems = useMemo(() => {
    return items.map((item) => ({
      ...item,
      processed: heavyComputation(item),
    }));
  }, [items]);

  return (
    <div>
      {processedItems.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
};
```

### Callback Optimization Pattern

```tsx
// Pattern for callback optimization
export const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <ChildComponent onClick={handleClick} />;
};
```

## 🚫 Pattern Anti-Patterns

- **Don't over-memoize** - only memoize when there's a clear performance benefit
- **Don't use useEffect for derived state** - compute derived values directly
- **Don't forget cleanup functions** - always clean up subscriptions and timers
- **Don't mutate props or state** - always create new objects/arrays
- **Don't use inline object/function creation in JSX** - extract to variables or use useCallback/useMemo
- **Don't ignore dependency arrays** - always include all dependencies

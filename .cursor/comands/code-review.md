# Code Review Checklist

## Overview

Comprehensive checklist for conducting thorough code reviews to ensure quality, security, and maintainability.

## Review Categories

### Functionality

- [ ] Code does what it's supposed to do
- [ ] Edge cases are handled
- [ ] Error handling is appropriate
- [ ] No obvious bugs or logic errors

### Code Quality

- [ ] Code is readable and well-structured
- [ ] Functions are small and focused
- [ ] Variable names are descriptive
- [ ] No code duplication
- [ ] Follows project conventions

### Security

- [ ] No obvious security vulnerabilities
- [ ] Input validation is present
- [ ] Sensitive data is handled properly
- [ ] No hardcoded secrets

### Performance

- [ ] No unnecessary re-renders or expensive operations
- [ ] Proper use of React.memo, useMemo, useCallback when appropriate
- [ ] Efficient data fetching and caching strategies
- [ ] Images and assets are optimized
- [ ] No memory leaks (proper cleanup in useEffect)
- [ ] Bundle size impact is reasonable
- [ ] Database queries are optimized (if applicable)

### Project Guidelines Compliance

- [ ] Follows all guidelines defined in `AGENTS.md` file
- [ ] Adheres to project-specific architecture and patterns
- [ ] Uses established development workflow and standards

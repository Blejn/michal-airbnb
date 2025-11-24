# Create Branch

## Overview

Create a new feature branch following project naming conventions and best practices.

## Branch Naming Conventions

### Pattern

Use the format: `type/description-in-kebab-case`

### Types

- `feat/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `style/` - Code style changes (formatting, etc.)
- `refactor/` - Code refactoring
- `perf/` - Performance improvements
- `test/` - Adding or updating tests
- `build/` - Build system changes
- `ci/` - CI/CD changes
- `chore/` - Maintenance tasks

### Examples

- `feat/age-blocker-component`
- `fix/navigation-mobile-layout`
- `docs/api-documentation`
- `refactor/user-authentication`
- `perf/image-optimization`
- `test/unit-test-coverage`

## Branch Creation Steps

1. **Ensure clean working directory**

   - Commit or stash any uncommitted changes
   - Verify you're on the main branch (main/dev)

2. **Create and switch to new branch**

   ```bash
   git checkout -b feat/your-feature-name
   ```

3. **Push branch to remote**

   ```bash
   git push -u origin feat/your-feature-name
   ```

4. **Verify branch setup**
   - Confirm branch is tracking remote
   - Check that you're on the correct branch

## Best Practices

- Keep branch names descriptive but concise
- Use kebab-case for multi-word descriptions
- Include the type prefix for clarity
- Avoid special characters or spaces
- Keep names under 50 characters when possible

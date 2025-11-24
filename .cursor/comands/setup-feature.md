# Setup New Feature

## Overview

Comprehensive planning and architecture design for new features before implementation begins.

## Planning Phase

### 1. Requirements Analysis

- **Feature scope definition**
  - What problem does this solve?
  - Who are the target users?
  - What are the success criteria?
- **User stories and acceptance criteria**
  - Write clear, testable user stories
  - Define acceptance criteria for each story
  - Consider edge cases and error scenarios
- **Technical constraints**
  - Performance requirements
  - Browser/device compatibility
  - Integration points with existing systems

### 2. Architecture Planning

- **Data flow design**
  - Define data models and interfaces
  - Plan API endpoints and data fetching
  - Consider state management needs
- **Component architecture**
  - Break down into reusable components
  - Plan component hierarchy and props
  - Identify shared vs feature-specific components
- **Feature module structure**
  - Plan file organization following project conventions
  - Identify dependencies on shared modules
  - Consider feature independence requirements
- **Follow AGENTS.md guidelines**
  - Review `AGENTS.md` for project-specific rules and patterns
  - Ensure compliance with SOLID principles
  - Follow Next.js 15 & React 19 best practices
  - Plan for proper TypeScript implementation

### 3. Implementation Strategy

- **Development approach**
  - Plan implementation phases/milestones
  - Identify potential technical challenges
  - Consider testing strategy (unit, integration, e2e)
- **Dependencies and integrations**
  - List required external libraries
  - Plan integration with existing features
  - Consider backward compatibility needs

## Feature Planning Checklist

- [ ] Feature scope clearly defined
- [ ] User stories written with acceptance criteria
- [ ] Technical approach documented
- [ ] Component architecture planned
- [ ] Data models and APIs designed
- [ ] Testing strategy defined
- [ ] Dependencies identified
- [ ] Integration points mapped
- [ ] Performance requirements considered
- [ ] Accessibility requirements planned
- [ ] **AGENTS.md guidelines reviewed and followed**
- [ ] Feature module structure planned according to project conventions
- [ ] SOLID principles applied to design
- [ ] Next.js 15 & React 19 best practices considered
- [ ] TypeScript implementation strategy defined

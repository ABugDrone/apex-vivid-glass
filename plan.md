# Implementation Plan - Apex Realty Code Quality & Refactoring

The user wants to ensure the codebase for "Apex Realty" is object-oriented, reusable, safe, and follows clean coding principles (avoiding "spaghetti" code). Additionally, there is a recurring request to "update github repo," which has been previously identified as a manual step for the user, but we will acknowledge it in the handoff.

## Scope Summary
- **Refactoring:** Audit existing components (`Navbar`, `Hero`, `PropertyCard`, etc.) for reusability and clean structure.
- **Safety & Robustness:** Implement type safety improvements, prop validation, and error boundaries if necessary.
- **Object-Orientation/Patterns:** Ensure data structures (like properties) and utility functions are well-organized and reusable.
- **Non-Goals:**
    - No new feature development.
    - No automated GitHub pushing (remains manual or via provided instructions).

## Auth & RLS model
**Auth in scope:** no
**Model:** no_auth_public_read
**RLS strategy:** n/a (Client-side app only)
**Frontend implication:** No auth session required.

## Migration baseline
**Local migrations in project:** none
**User confirmed proceed on connected DB:** not_applicable

## Affected Areas
- `src/components/`: Refactor UI components for better prop structures and sub-component extraction.
- `src/data/properties.ts`: Ensure data types and interfaces are robust.
- `src/lib/utils.ts`: Centralize common logic (e.g., WhatsApp message formatting).
- `src/App.tsx`: Clean up main entry point.

## Phases

### Phase 1: Code Audit & Type Safety
- Review `src/data/properties.ts` and define clear TypeScript interfaces for all data models.
- Audit `src/components/PropertyCard.tsx` and `src/components/ListingsSection.tsx` to ensure logic is separated from presentation.
- **Owner:** `frontend_engineer`

### Phase 2: Component Refactoring (Reusability)
- Extract repeated UI patterns (glassmorphism containers, buttons) into small, reusable atoms if they don't already exist.
- Refactor `WhatsAppIcon.tsx` usage to ensure consistent implementation across all call-to-actions.
- Move the WhatsApp message generation logic to a utility function in `src/lib/utils.ts` to avoid duplication.
- **Owner:** `frontend_engineer`

### Phase 3: Cleanup & Validation
- Remove any dead code or redundant comments.
- Verify the build passes with strict linting/type-checking.
- **Owner:** `quick_fix_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Audit and refactor core components and data structures for clean code and reusability.
2. quick_fix_engineer — Final cleanup, linting check, and minor CSS/text optimizations.

**Per-agent instructions:**
### 1. frontend_engineer
- **Phases:** 1, 2
- **Scope:** 
    - Improve code structure by ensuring components are small and single-purpose. 
    - Define robust TypeScript interfaces in `src/data/properties.ts`.
    - Create a utility for WhatsApp link generation in `src/lib/utils.ts` to replace manual template strings in components.
    - Ensure all components use the new utility and interfaces.
- **Files:** `src/data/properties.ts`, `src/lib/utils.ts`, `src/components/PropertyCard.tsx`, `src/components/WhatsAppFloat.tsx`, `src/components/ContactSection.tsx`.
- **Depends on:** none
- **Acceptance criteria:** Code is modular. No hardcoded WhatsApp string logic in multiple components. Build succeeds without type errors.

### 2. quick_fix_engineer
- **Phases:** 3
- **Scope:** 
    - General code cleanup: remove unused imports, fix formatting, and ensure consistent naming conventions.
    - Check the `index.html` meta-data or global CSS if any minor "safety" or "best practice" improvements are needed (e.g., accessibility labels).
- **Files:** `src/App.tsx`, `src/index.css`, `src/main.tsx`.
- **Depends on:** frontend_engineer
- **Acceptance criteria:** Project is clean of "spaghetti" remnants. Build is successful.

**Do not dispatch:** (GitHub push - this must be handled by the user as per environment constraints)

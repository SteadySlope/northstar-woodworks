# PLANNING MODE

## Overview

Planning mode is a systematic approach to analyzing problems and designing solutions BEFORE writing code. This prevents quick patches and ensures robust, comprehensive fixes.

**Golden Rule:** PLAN FIRST, CODE SECOND. NO VIBE CODING.

---

## When to Enter Planning Mode

### Required Scenarios

1. **Bug Reports**
   - User reports unexpected behavior
   - Error messages appear
   - Features don't work as expected
   - Data inconsistencies occur

2. **Feature Requests**
   - User requests new functionality
   - Enhancement to existing features
   - Integration of new services
   - Workflow improvements

3. **Code Modification Requests**
   - Refactoring large files
   - Changing architecture
   - Optimizing performance
   - Database schema changes

4. **Unexpected Behavior**
   - Pages not rendering correctly
   - Styles not applying
   - Navigation issues
   - State management problems

### When NOT to Enter Planning Mode

- Simple questions about code
- Documentation requests
- Reading/explaining existing code
- Running commands (build, lint, etc.)
- Trivial one-line fixes (typos, etc.)

---

## Planning Process (4 Steps)

### Step 1: Find Root Cause

**Objective:** Understand the underlying issue, not just symptoms

**Actions:**
1. Read error messages carefully
2. Trace execution flow
3. Check related files
4. Review recent changes (git log)
5. Understand why the problem exists

**Example:**
```
Symptom: Navigation state resets unexpectedly
Root Cause: Stale closure in custom hook capturing old state
NOT: "Navigation is broken" (too vague)
```

**Output to Document:**
```markdown
## Root Cause Analysis
**Problem:** [Detailed description]
**Why it occurs:** [Technical explanation]
**Impact:** [What's affected]
```

---

### Step 2: Scan for Similar Bugs

**Objective:** Identify if this problem exists elsewhere

**Actions:**
1. Search codebase for similar patterns
2. Check related components/files
3. Look for duplicate code that might have same issue
4. Review similar features

**Tools:**
- Grep for function names
- Search for similar hooks/patterns
- Check all usages of affected utilities

**Example:**
```
If custom hook has stale closure:
→ Search for all usages of that hook
→ Check other hooks with similar patterns
→ Verify related state management code
```

**Output to Document:**
```markdown
## Similar Issues Found
- File: path/to/file1.tsx (Line X)
- File: path/to/file2.tsx (Line Y)
- Pattern: [Common pattern identified]
```

---

### Step 3: Design Comprehensive Solution

**Objective:** Plan a fix that addresses root cause and prevents future issues

**Considerations:**
1. **Root Cause Fix:** Address the underlying problem
2. **Similar Instances:** Fix all occurrences at once
3. **Side Effects:** Consider impact on related code
4. **Prevention:** Add safeguards to prevent recurrence
5. **Testing:** Plan how to verify the fix

**Design Principles:**
- Prefer structural fixes over workarounds
- Use TypeScript to enforce correctness
- Follow existing patterns in codebase
- Keep changes minimal but thorough

**Example Solution Design:**
```markdown
## Proposed Solution

### Approach
Refactor custom hook from useState to useReducer to eliminate closure issues

### Changes Required
1. Convert useNavigation hook to useReducer pattern
2. Update all components using the hook (3 files)
3. Add TypeScript types for state/actions
4. Add unit tests for reducer logic

### Files to Modify
- hooks/useNavigation.ts (main change)
- components/Navigation.tsx (update usage)
- components/Header.tsx (update usage)
- components/MobileMenu.tsx (update usage)

### Side Effects
- None - hook API remains the same

### Prevention
- TypeScript strict mode enforces correct typing
- Reducer pattern prevents closure issues
```

---

### Step 4: Get Approval & Document

**Objective:** Ensure plan is solid before implementation

**Actions:**
1. Document complete plan
2. Review against requirements
3. Check for edge cases
4. Get approval (automated or user)
5. Add plan to CONTEXT.md

**Plan Template:**
```markdown
## Planning Summary: [TASK-ID]

### Problem
[Clear description of issue]

### Root Cause
[Why it's happening]

### Similar Issues
[Other instances found]

### Solution Design
[Detailed approach]

### Files to Change
- file1.tsx (what changes)
- file2.tsx (what changes)

### Testing Strategy
[How to verify fix]

### Risks
[Potential issues to watch for]

### Estimated Complexity
[Low/Medium/High]
```

---

## Bug Fixing Protocol

### Never Do This ❌

```markdown
User: "Navigation is broken"

Bad Response:
"I'll add a useEffect to reset the state"
[Quick patches the symptom]
```

### Always Do This ✅

```markdown
User: "Navigation is broken"

Good Response:
"Let me investigate the root cause first."

1. [Reads navigation code]
2. [Finds stale closure in custom hook]
3. [Searches for similar patterns]
4. [Designs comprehensive fix]
5. [Documents plan]
6. [Gets approval]
7. [Implements fix for ALL instances]
```

---

## Planning for New Features

### Feature Planning Template

```markdown
## Feature Planning: [TASK-ID]

### Requirements
[What user wants]

### Acceptance Criteria
- [ ] Criterion 1
- [ ] Criterion 2

### Architecture Design
**Components:**
- ComponentA (purpose)
- ComponentB (purpose)

**Data Flow:**
User Input → ComponentA → API → Database → ComponentB

**State Management:**
[Where state lives, how it's shared]

### API Design
**Endpoints:**
- POST /api/feature (creates X)
- GET /api/feature (retrieves Y)

**Request/Response Types:**
[TypeScript interfaces]

### Database Changes
**Tables:**
- table_name (columns)

**Migrations:**
- migration_001.sql

### UI/UX Design
**Layout:**
[Component structure]

**User Flow:**
1. User does X
2. System responds with Y
3. User sees Z

### Dependencies
**New Packages:** [List or "None"]
**Existing Utilities:** [What we'll use]

### Testing Plan
- Unit tests for utilities
- Integration tests for API
- E2E tests for user flow

### Rollout Plan
1. Create database migration
2. Build API endpoints
3. Create UI components
4. Integration testing
5. Deploy

### Risks & Mitigations
**Risk:** [Potential issue]
**Mitigation:** [How to handle]
```

---

## Example: Complete Planning Session

### Scenario: Fix Navigation Bug

```markdown
## Bug Report
User: "When I click links in the mobile menu, sometimes the menu stays open"

## Step 1: Root Cause
Investigated mobile menu component:
- File: components/MobileMenu.tsx:47
- Issue: State update race condition
- Root Cause: Component closes menu before navigation completes
- onClick handler doesn't wait for navigation before setting state

## Step 2: Similar Issues
Searched for similar patterns:
- components/Sidebar.tsx:89 - Same pattern, likely same bug
- components/DropdownMenu.tsx:112 - Different pattern, safe
- Found: 2 instances of the same issue

## Step 3: Solution Design

### Approach
Use Next.js router events to close menu AFTER navigation completes

### Changes
1. Add router event listener for 'routeChangeComplete'
2. Remove immediate setState from onClick
3. Set isNavigating state to show loading feedback
4. Close menu when navigation finishes

### Files to Modify
- components/MobileMenu.tsx
  - Add useRouter hook
  - Add event listener
  - Update onClick handler
- components/Sidebar.tsx
  - Apply same pattern

### Prevention
- Create shared useNavigationMenu hook
- Reuse across all menu components
- Add TypeScript types for safety

### Testing
- Test menu close after navigation
- Test menu state during navigation
- Verify loading state appears
- Test on slow network (throttle)

## Step 4: Approval

Plan reviewed:
- ✓ Addresses root cause
- ✓ Fixes all instances
- ✓ Adds prevention mechanism
- ✓ Thorough testing plan

APPROVED - Ready for implementation
```

---

## Planning Mode Agent Protocol

### As Planning Agent

**Token Budget:** 40-60k

**Context to Load:**
- Task description
- Related code files only
- Error logs/messages
- Recent git changes (if relevant)
- Existing patterns for reference

**Steps:**
1. Announce entering planning mode
2. Execute 4-step planning process
3. Document plan in structured format
4. Get approval
5. Log plan in CONTEXT.md
6. Return to Orchestrator
7. DO NOT implement - Implementation Agent does that

**Output Format:**
```markdown
Entering planning mode for [TASK-ID]...

[Execute Steps 1-4]

Planning complete. Summary:
- Root cause: [X]
- Similar issues: [Y]
- Solution: [Z]
- Files affected: [N]
- Complexity: [Low/Medium/High]

Documented in CONTEXT.md.
Ready for implementation.
```

---

## Integration with Workflow

### In `/do-all` Orchestration

```
Orchestrator identifies task type
    ↓
Is it a bug fix OR unclear feature?
    ↓ YES
Spawn Planning Agent (40-60k tokens)
    ↓
Planning Agent:
- Loads task + related code
- Executes 4-step process
- Documents plan
- Returns to Orchestrator
    ↓
Orchestrator compacts chat
    ↓
Spawn Implementation Agent with plan
    ↓
Implementation follows documented plan
```

---

## Critical Rules

1. **NO QUICK PATCHES:** Always find root cause
2. **SCAN FOR SIMILAR:** Never fix just one instance
3. **PLAN COMPREHENSIVELY:** Consider all aspects
4. **DOCUMENT THOROUGHLY:** Future reference matters
5. **GET APPROVAL:** Don't assume plan is correct
6. **PREVENT RECURRENCE:** Add safeguards
7. **TEST THOROUGHLY:** Verify the fix works

---

## Common Planning Patterns

### Pattern 1: State Management Bug
1. Find where state is defined
2. Trace all state updates
3. Identify timing issues
4. Design state machine or reducer
5. Add TypeScript types

### Pattern 2: Styling Issues
1. Check Tailwind classes applied
2. Verify CSS specificity
3. Check responsive breakpoints
4. Test in different viewports
5. Ensure dark mode compatibility

### Pattern 3: API/Database Issues
1. Check database schema first
2. Verify permissions/RLS policies
3. Test query performance
4. Check error handling
5. Verify TypeScript types match schema

### Pattern 4: Performance Issues
1. Profile the slow operation
2. Identify bottleneck
3. Check unnecessary re-renders
4. Optimize queries/algorithms
5. Add memoization if needed

---

## Success Criteria

Planning is complete when:

- ✅ Root cause clearly identified
- ✅ All similar instances found
- ✅ Comprehensive solution designed
- ✅ All affected files listed
- ✅ Testing strategy defined
- ✅ Side effects considered
- ✅ Plan documented in CONTEXT.md
- ✅ Approval obtained

Only then should implementation begin.

---

**Remember:** Time spent planning saves time in implementation and prevents technical debt.

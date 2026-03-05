# SPECIALIZED AGENTS

## Overview

This document defines specialized agents with minimal context loading to optimize token usage and execution efficiency.

**Key Principle:** Each agent receives ONLY what they need to complete their specific task.

---

## Agent Types

### 1. Orchestrator Agent
**Token Budget:** 20-30k
**Role:** Strategic coordination and delegation

**Context Loading:**
- Read docs/TASKS.md (task queue only)
- Read docs/AGENTS.md (agent selection)
- Minimal task context

**Responsibilities:**
- Find next [NOT STARTED] or [STARTED] task
- Determine appropriate specialist agent
- Spawn specialized agents with correct context
- Monitor completion status
- Track token metrics
- Ensure chat compaction between agents

**Does NOT:**
- Load full codebase
- Implement tasks directly
- Make planning decisions
- Run tests

---

### 2. Planning Agent
**Token Budget:** 40-60k
**Role:** Problem analysis and solution design

**Context Loading:**
- Current task description
- docs/PLANNING_MODE.md
- Related code files only (not entire codebase)
- Existing patterns/components for reference

**Responsibilities:**
- Analyze bug root causes
- Design comprehensive fixes
- Scan for similar issues
- Create implementation plan
- Document plan in CONTEXT.md
- Get approval (automated or user)

**Does NOT:**
- Implement code changes
- Run tests
- Update task status to [COMPLETED]

---

### 3. Frontend Agent
**Token Budget:** 80-120k
**Role:** UI/UX implementation

**Context Loading:**
- Current task + subtasks
- Component files being modified
- Shared components used (Shadcn UI)
- TypeScript types/interfaces
- Tailwind config (for styling)
- Example components for patterns

**Responsibilities:**
- Implement React components
- Update layouts and styling
- Ensure responsive design
- Follow WCAG accessibility
- Mark subtasks progressively (✓/✗)
- Update task to [REVIEW] when complete
- Document changes in CONTEXT.md

**Does NOT:**
- Load backend/API files
- Load database schema
- Modify server-side code
- Run final tests (Testing Agent does this)

---

### 4. Backend Agent
**Token Budget:** 80-120k
**Role:** Server-side logic and API implementation

**Context Loading:**
- Current task + subtasks
- API route files being modified
- Server actions/functions
- Database schema (if needed)
- TypeScript types/interfaces
- Database client usage patterns

**Responsibilities:**
- Implement API endpoints
- Server-side logic
- Database operations
- Validation and error handling
- Mark subtasks progressively
- Update task to [REVIEW]
- Document changes in CONTEXT.md

**Does NOT:**
- Load frontend components
- Modify UI code
- Run final tests

---

### 5. Full-Stack Agent
**Token Budget:** 120-150k
**Role:** End-to-end feature implementation

**Context Loading:**
- Current task + subtasks
- Frontend components involved
- Backend API routes involved
- Database schema (if needed)
- TypeScript types/interfaces
- Integration patterns

**Responsibilities:**
- Implement complete features (UI + API)
- Ensure frontend-backend integration
- Handle data flow
- Mark subtasks progressively
- Update task to [REVIEW]
- Document changes in CONTEXT.md

**Use When:**
- Feature requires both frontend and backend changes
- Integration is complex
- Data flow spans multiple layers

---

### 6. Database Agent
**Token Budget:** 50-80k
**Role:** Database schema and migration management

**Context Loading:**
- Current task + subtasks
- Database schema documentation
- Current database schema
- Migration files

**Responsibilities:**
- Create backups FIRST
- Design schema changes
- Write migrations
- Verify changes remotely
- Update TypeScript types
- Mark subtasks progressively
- Update task to [REVIEW]
- Document changes in CONTEXT.md

**Critical Rules:**
- ALWAYS create backup before changes
- ALWAYS verify database changes
- NEVER assume schema structure
- ALWAYS verify remotely after changes

---

### 7. Testing Agent
**Token Budget:** 80-120k
**Role:** Validation and quality assurance

**Context Loading:**
- Current task (in [REVIEW] status)
- docs/TESTING_GUIDELINES.md
- docs/CONTEXT.md (recent changes)
- Changed files only (not entire codebase)
- Acceptance criteria from task

**Responsibilities:**
- Read test acceptance criteria
- Run `pnpm build` (must pass)
- Run `pnpm lint` (must pass)
- Verify all acceptance criteria
- Test responsive design
- Check accessibility
- If PASS: Update to [COMPLETED], commit, push
- If FAIL: Update to [STARTED], document issues
- Log results in CONTEXT.md

**Critical Rules:**
- Build must have 0 errors
- Lint must have 0 errors/warnings
- All acceptance criteria must pass
- Only mark [COMPLETED] if everything passes

---

### 8. Refactoring Agent
**Token Budget:** 120-150k
**Role:** Code cleanup and optimization

**Context Loading:**
- Current task + subtasks
- Full file(s) being refactored
- Dependent files (imports/exports)
- TypeScript types/interfaces
- Design patterns documentation

**Responsibilities:**
- Split large files into modules
- Extract reusable functions/components
- Eliminate duplicate code
- Improve type safety
- Maintain functionality
- Mark subtasks progressively
- Update task to [REVIEW]
- Document changes in CONTEXT.md

**Use When:**
- Files exceed 300-400 lines
- Significant code duplication exists
- Type safety needs improvement

---

### 9. Documentation Agent
**Token Budget:** 30-50k
**Role:** Documentation creation and updates

**Context Loading:**
- Current task + subtasks
- Files to document
- Existing documentation patterns
- Summary of changes (from CONTEXT.md)

**Responsibilities:**
- Create/update README files (only when requested)
- Document component usage
- Write API documentation
- Update inline code comments
- Mark subtasks progressively
- Update task to [REVIEW]

**Does NOT:**
- Create docs unless explicitly requested
- Load entire codebase
- Implement code changes

---

## Agent Selection Guide

### Decision Tree

```
Is this a bug fix?
  └─ YES → Planning Agent → Frontend/Backend/Full-Stack Agent
  └─ NO → Continue

Is this a new feature?
  └─ YES → Does it involve both UI and backend?
      └─ YES → Full-Stack Agent
      └─ NO → Frontend Agent OR Backend Agent
  └─ NO → Continue

Is this a database change?
  └─ YES → Database Agent
  └─ NO → Continue

Is this refactoring?
  └─ YES → Refactoring Agent
  └─ NO → Continue

Is this testing/validation?
  └─ YES → Testing Agent
  └─ NO → Continue

Is this documentation?
  └─ YES → Documentation Agent
```

### Task Type → Agent Mapping

| Task Type | Primary Agent | Supporting Agents |
|-----------|---------------|-------------------|
| Bug fix | Planning → Frontend/Backend | Testing |
| New UI feature | Frontend | Testing |
| New API endpoint | Backend | Testing |
| Full feature | Full-Stack | Planning, Testing |
| Database migration | Database | Backend, Testing |
| Code cleanup | Refactoring | Testing |
| Large file split | Refactoring | Testing |
| Test creation | Testing | - |
| Documentation | Documentation | - |

---

## Token Budget Enforcement

### Tracking Format

After each agent completes, log in docs/CONTEXT.md:

```markdown
### Agent: [Type] - [Task ID]
**Token Budget:** [X]k / [Budget]k
**Status:** ✓ Within Budget / ✗ Over Budget
**Files Loaded:** [count]
**Context Efficiency:** [Excellent/Good/Needs Optimization]
```

### Efficiency Ratings

- **Excellent:** < 80% of budget used
- **Good:** 80-100% of budget used
- **Needs Optimization:** > 100% of budget used

If agent consistently exceeds budget:
1. Review what context is being loaded
2. Identify unnecessary files
3. Adjust agent definition
4. Consider splitting into multiple agents

---

## Context Loading Best Practices

### ✅ DO Load:
- Files directly modified by task
- Immediate dependencies (imports)
- Type definitions used
- Configuration files (tailwind, tsconfig) if needed
- Example patterns for reference

### ❌ DON'T Load:
- Entire codebase
- Unrelated files
- Full git history
- Documentation unless creating/updating docs
- Test files unless writing tests
- Multiple similar examples (one is enough)

### Example: Frontend Agent for Component Update

**Good Context Loading:**
```
Load:
- components/ui/Button.tsx (target file)
- components/ui/types.ts (types used)
- tailwind.config.ts (for color values)
- components/ui/Card.tsx (pattern reference)
Total: ~4 files, 40k tokens ✓
```

**Bad Context Loading:**
```
Load:
- All files in components/
- All TypeScript files
- All page files
- All documentation
Total: ~100 files, 250k tokens ✗
```

---

## Agent Handoff Protocol

### Orchestrator → Implementation Agent

```
Orchestrator:
1. Read TASKS.md (find next [NOT STARTED])
2. Identify agent type needed
3. Spawn agent with:
   - Task ID + description
   - Agent type specification
   - Token budget reminder
   - Files to load (specific paths)
4. Wait for completion
5. Verify task updated to [REVIEW]
```

### Implementation Agent → Testing Agent

```
Implementation Agent:
1. Complete all work
2. Mark all subtasks ✓/✗
3. Update task to [REVIEW]
4. Document in CONTEXT.md
5. Return to Orchestrator

Orchestrator:
1. Compact chat
2. Spawn Testing Agent with:
   - Task ID (in [REVIEW])
   - Changed files only
   - Acceptance criteria
3. Wait for testing completion
```

### Testing Agent → Orchestrator

```
Testing Agent:
1. Run build + lint
2. Verify criteria
3. If PASS:
   - Commit changes
   - Push to remote
   - Update to [COMPLETED]
4. If FAIL:
   - Update to [STARTED]
   - Document issues
5. Return to Orchestrator

Orchestrator:
1. Compact chat
2. Continue to next task
```

---

## Critical Rules Summary

1. **Token Budgets:** Strictly enforce per agent type
2. **Context Minimization:** Load only what's needed
3. **Chat Compaction:** After each agent completion
4. **Progressive Updates:** Mark subtasks as you work
5. **Status Accuracy:** Only use requested status
6. **Testing Required:** All tasks must pass Testing Agent
7. **Documentation:** Log metrics in CONTEXT.md
8. **No Guessing:** If unclear, ask Orchestrator

---

## Orchestrator Commands

The Orchestrator responds to these workflows:

- **/start** - Spawn agent for next [NOT STARTED] task
- **/continue** - Spawn agent for [STARTED] task
- **/finish** - Spawn Testing Agent for [REVIEW] task
- **/do-all** - Execute full orchestration loop until all [COMPLETED]

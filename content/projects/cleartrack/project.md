---
title: ClearTrack Equipment Readiness Portal
slug: cleartrack
status: Planning
description: A client-style internal web application for tracking clinic equipment readiness, inspections, maintenance status, and operational history.
featured: false
stack:
  - TypeScript
  - Next.js
  - React
  - PostgreSQL
  - Prisma
  - Tailwind CSS
  - Vitest
  - Playwright
  - Vercel
---

# Client Project Brief: ClearTrack Equipment Readiness Portal

**Client:** Northstar Community Care Network *(fictional client exercise)*  
**Prepared for:** Diane Larsen  
**Project type:** Internal web application  
**Status:** Discovery / portfolio build

## Client request

Northstar Community Care Network operates several outpatient clinics. Staff currently track shared clinical equipment readiness in spreadsheets, paper binders, and memory—the three traditional pillars of "we will definitely remember that." This makes it difficult to know whether equipment is available, inspected, overdue for maintenance, or temporarily out of service.

Northstar needs a small internal web application that gives authorized staff one trustworthy place to see equipment readiness and record operational updates.

![Prototype image of ClearTrack Dashboard](/images/projects/cleartrack/prototype-iamge.png)

## The problem to solve

Clinic staff need to answer these questions quickly:

- What equipment is assigned to my clinic?
- Is it ready to use right now?
- Which items need inspection or preventive maintenance soon?
- Who changed an item’s status, and why?
- Can supervisors see readiness risks across their clinics without reconstructing the story from five spreadsheets?

The first release must focus on readiness tracking—not inventory purchasing, device telemetry, repair-vendor management, or a full CMMS. Those are how a sensible project becomes a multiyear enterprise software incident.

## Users and roles

| Role | Primary needs | Permissions |
| --- | --- | --- |
| Clinic Technician | Find equipment, record inspections, update readiness | View assigned clinic; create inspections and status updates |
| Clinic Supervisor | Monitor clinic readiness and resolve exceptions | Technician permissions plus view clinic dashboard and history |
| System Administrator | Maintain clinics, users, equipment types, and assignments | Manage all records and view all clinics |

## Release 1 goals

1. Securely sign in a user and restrict data to their clinic unless they are an administrator.
2. Show a dashboard with equipment totals by readiness status and urgent work.
3. Let authorized users create equipment records and assign them to a clinic.
4. Record a readiness update: `Ready`, `Needs Inspection`, `Out of Service`, or `Under Maintenance`.
5. Record an inspection with date, result, notes, and the person who completed it.
6. Automatically flag equipment with an overdue or upcoming inspection date.
7. Preserve an audit history for readiness changes and inspections.
8. Support filtering, sorting, and pagination on the equipment list.

## Out of scope for Release 1

- Real patient data, PHI, or connection to clinical systems
- Device telemetry or automatic status updates
- Procurement, purchasing approval, or vendor invoices
- SMS/email notification delivery
- Native mobile app
- Barcode scanning hardware integration
- Multi-organization tenancy beyond a small set of clinics

## Core workflow

1. A technician signs in and lands on their clinic’s readiness dashboard.
2. They see an item marked **Needs Inspection** and open its details.
3. They perform the inspection, record a passing result and notes, and set the item to **Ready**.
4. The application records the user, timestamp, prior status, new status, and reason.
5. The clinic dashboard updates so the supervisor can see the equipment is usable again.

## Suggested data model

| Entity | Key fields |
| --- | --- |
| User | id, name, email, role, clinicId |
| Clinic | id, name, location, active |
| EquipmentType | id, name, category, defaultInspectionIntervalDays |
| Equipment | id, assetTag, serialNumber, equipmentTypeId, clinicId, readinessStatus, nextInspectionDueAt |
| Inspection | id, equipmentId, completedByUserId, completedAt, result, notes, nextDueAt |
| StatusHistory | id, equipmentId, changedByUserId, changedAt, previousStatus, newStatus, reason |

## Non-functional expectations

- **Security:** authenticated access; role- and clinic-based authorization enforced on the server.
- **Data integrity:** validation for required fields, valid status transitions, and dates.
- **Traceability:** readiness changes cannot silently overwrite history.
- **Usability:** the urgent work should be visible without opening every record.
- **Quality:** automated tests for important business rules and authorization boundaries.
- **Delivery:** source control, meaningful commits, pull request(s), CI checks, and a deployed demo environment.

## Acceptance criteria

The client will consider Release 1 complete when:

- A technician can view only equipment for their assigned clinic.
- An administrator can view and manage equipment across all clinics.
- A technician can record an inspection and a readiness update for an assigned item.
- Every readiness update appears in an immutable history list with actor and timestamp.
- Overdue and due-soon inspection items appear on the dashboard.
- Invalid input and unauthorized requests receive useful, safe error responses.
- Automated tests cover the status-change rules and clinic-access rules.
- A reviewer can run the project locally from documented setup instructions and use a deployed demo.

## Suggested delivery plan

| Milestone | Deliverable |
| --- | --- |
| 1. Discovery and design | User stories, wireframes, schema diagram, API/UI plan |
| 2. Foundation | Project setup, authentication, database, roles, seed data |
| 3. Equipment workflows | Equipment list/detail, creation, filtering, pagination |
| 4. Readiness and inspections | Status changes, inspection records, history, business rules |
| 5. Dashboard and polish | Readiness summary, overdue work, error states, accessibility pass |
| 6. Ship and explain | Tests, CI, deployment, README, case study, short demo video |

## Decisions to make during discovery

- Exact readiness status rules: which transitions are allowed, and who may make them?
- What counts as “due soon” for the dashboard: 7, 14, or 30 days?
- Should an inspection automatically set an item to `Ready`, or should status remain an explicit technician decision?
- What minimal equipment fields are useful without turning this into a database for every screw in the building?

## Portfolio framing

This is a self-directed client simulation, not paid client work. The portfolio case study should say that plainly and focus on how requirements were translated into a working, tested, deployable application.

Document decisions as they happen: the original requirement, the options considered, the decision, and what changed after testing. That evidence is the point of the exercise.

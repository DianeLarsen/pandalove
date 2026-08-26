---
title: ClearTrack Equipment Readiness Portal
slug: cleartrack
status: In Progress
description: A self-directed client simulation for tracking clinic equipment readiness, inspections, maintenance status, and operational history.
featured: true
stack:
  - TypeScript
  - Next.js
  - React
  - PostgreSQL
  - Prisma
  - Tailwind CSS
  - Microsoft Entra ID
  - Vitest
  - Playwright
  - Vercel
---

# ClearTrack Equipment Readiness Portal

**Project type:** Self-directed client simulation  
**Status:** In Progress

ClearTrack is an internal equipment-readiness portal for a fictional outpatient clinic network. It turns a paper-and-spreadsheet workflow into a traceable system for equipment status, inspections, and upcoming maintenance. No patient data or PHI is used.

## What I have built so far

- Designed the relational data model for clinics, users, equipment types, equipment, inspections, and readiness-status history.
- Connected the application to Neon PostgreSQL with Prisma and verified database access.
- Built the initial dashboard interface for equipment readiness status.
- Configured Microsoft Entra ID sign-in for staff access.
- Defined clinic technician, clinic supervisor, and system administrator roles.

## Engineering decisions

- **Auditability first:** readiness changes are modeled as history records rather than silent overwrites.
- **Server-enforced access:** clinic and role boundaries belong in the application logic, not only in the interface.
- **No PHI:** the project uses fictional equipment and clinic data so the design can be demonstrated safely.

## Next steps

Build the equipment list and inspection workflow, add authorization boundaries and automated tests, then deploy a demo with documented setup.

## Project brief

Northstar Community Care Network is a fictional client exercise. Staff need one trustworthy place to see whether shared equipment is ready, needs inspection, is under maintenance, or is out of service. The first release focuses on readiness tracking, inspection records, and history—not purchasing, telemetry, or a full enterprise CMMS.

## Core workflow

A clinic technician signs in, identifies equipment that needs inspection, records the result, explicitly updates its readiness state, and leaves a timestamped history record for supervisors to review.

## Planned quality checks

- Role- and clinic-based authorization
- Validation of status changes and inspection data
- Automated tests for business rules and access boundaries
- CI checks and a deployed demo before calling the project complete

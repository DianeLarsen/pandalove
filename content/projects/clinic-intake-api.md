---
title: Clinic Intake API
slug: clinic-intake-api
status: In progress
description: A healthcare-focused backend API built to practice the production concerns behind a reliable clinical intake system.
featured: true
stack:
  - C#
  - ASP.NET Core
  - Entity Framework Core
  - SQLite
  - Azure
---

## Project goals

Build a clear, testable API for managing clinic intake requests while learning the engineering work that lives outside the happy-path endpoint: authentication, authorization, validation, logging, health checks, tests, CI, and deployment.

## What it does

- Creates and manages clinic intake requests.
- Uses JWT authentication and role-based access.
- Includes validation, structured request logging, exception handling, and liveness/readiness health checks.
- Has unit and integration tests plus GitHub Actions CI.

## Why it matters

This is deliberately more than a CRUD demo. It is practice for the ordinary-but-critical work of making a backend safe to change and useful when it misbehaves.

## Next steps

Continue expanding real workflow features and document the deployment decisions and tradeoffs.

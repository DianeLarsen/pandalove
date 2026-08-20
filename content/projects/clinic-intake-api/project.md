---
title: Clinic Intake API
slug: clinic-intake-api
status: Built
description: A production-deployed ASP.NET Core API that demonstrates secure, clinic-scoped intake workflows and the backend practices behind reliable healthcare services.
featured: true
stack:
  - C#
  - ASP.NET Core
  - Entity Framework Core
  - SQLite
  - SQL Server
  - Azure SQL
  - xUnit
  - GitHub Actions
---

## The problem

Clinical intake information is sensitive, changes state over time, and needs to be visible only to the right clinic. A basic create-read-update-delete demo is not enough to show how a backend should behave when access boundaries, validation, failures, and operational support matter.

## What I built

Clinic Intake API manages patients and intake requests through versioned REST endpoints. It models clinics, patients, and requests as related data; supports request creation, filtering, sorting, paging, status updates, status history, and completed-request cleanup.

It uses SQLite for local development and testing, with SQL Server/Azure SQL for production. Version 1.0 is deployed to Azure App Service with production health checks; the project is a learning build, but the concerns are real rather than decorative.

## Engineering focus

- JWT authentication with user roles and a clinic claim.
- Authorization and clinic-scoped queries so users cannot view another clinic's requests.
- Entity Framework Core migrations, database seeding, and a deliberate SQLite-to-SQL Server production strategy.
- DTO validation and clear error responses at the API boundary.
- Structured request logging, trace IDs, and centralized exception handling.
- Liveness and readiness health endpoints for deployment checks.
- Unit and integration tests using xUnit, Moq, and `WebApplicationFactory`.
- GitHub Actions CI that builds and runs tests on pull requests and `main`.
- Azure App Service deployment with Azure SQL, SQL connection retry handling, and live/readiness health checks.

## Interesting challenges

The project forced me to separate what an endpoint wants to do from what it is allowed to do. The useful question was not only “can this request update a record?” but “does this authenticated user belong to the clinic that owns it?” That became the foundation for the service and repository behavior.

I also learned the dull-but-essential parts of backend work: making errors diagnosable, proving behavior with integration tests, and checking that a deployed application is truly ready rather than merely awake enough to answer HTTP.

## What this demonstrates

This is my strongest relational-data and backend portfolio example: C#, API design, authentication and authorization, Entity Framework Core, SQL, testing, logging, CI, and an Azure deployment path—all tied together in one coherent service.

## Explore the project

- [View the source code on GitHub](https://github.com/DianeLarsen/clinic-intake-api)
- [View the live API readiness check](https://clinic-intake-api-dlarsen-2026-dhdmdmesgkgygpbz.westus-01.azurewebsites.net/health/ready)

## Version 1.0 and post-release work

Version 1.0 is complete. Future tickets are deliberately post-release learning and production-readiness work, not unfinished core scope:

- Filter intake requests by status and date.
- Expand the request-status-history workflow.
- Add Application Insights monitoring and alerting.
- Practice safe production schema migrations.
- Continue with the normal backend-engineering loop: bug fixes, tests, code review, and operational investigation.

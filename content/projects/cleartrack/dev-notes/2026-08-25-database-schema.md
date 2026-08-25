---
date: "2026-08-25"
type: "progress"
title: "Designed and migrated the initial database schema"
---

## Goal

Create the initial ClearTrack database structure for warehouse service work, equipment history, and audit tracking.

## Plan

- Model ClearTrack employees, customer clinics, and clinic contacts.
- Define equipment types, individual equipment, calibration requirements, and inspection requirements.
- Create service requests with RMA numbers.
- Track inbound and outbound shipments.
- Record warehouse locations and immutable equipment custody events.
- Create and apply the first Prisma migration.

## Completed

- Added employee users authenticated through Microsoft Entra SSO.
- Added clinics, clinic contacts, equipment types, and individual equipment records.
- Added calibration requirements, calibration measurements, and pass/fail results.
- Added inspection requirements, inspections, and individual inspection checks.
- Added service requests with RMAs, shipment tracking, and service-status history.
- Added warehouse locations for receiving, repair, QA, shipping, and quarantine.
- Added immutable custody events to track equipment movement and responsibility.
- Validated the Prisma schema and applied the initial database migration.

## Next

- Seed the database with representative clinics, equipment, locations, and active service requests.
- Replace dashboard placeholder data with live database queries.

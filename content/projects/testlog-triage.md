---
title: TestLog Triage
slug: testlog-triage
status: In Progress
description: A Python command-line tool that analyzes medical-device test logs and surfaces reliability signals for faster engineering review.
featured: false
stack:
  - Python
  - pytest
  - Ruff
  - CSV
  - GitHub Actions
startedAt: "2026-08-24"
repoUrl: "https://github.com/DianeLarsen/testlog-triage"
---

# TestLog Triage

TestLog Triage is a Python command-line tool for turning device-test logs into a concise reliability summary. It was designed around a familiar engineering problem: a log file may contain the evidence, but extracting the failure pattern should not require a ceremonial hour of scrolling.

## What it does

- Reads device test-log data from CSV files.
- Reports the total, passed, and failed checks for a device.
- Groups recurring error codes to reveal repeated failure signals.
- Produces structured JSON output that can feed a later dashboard or review workflow.

## Example result

For a sample device log, the tool identifies eight checks, five passing checks, three failures, and recurring ECG lead-disconnect errors.

## Engineering approach

The first version is deliberately deterministic: the parser and counts are calculated from the source log rather than inferred by an AI model. Automated pytest coverage verifies the analyzer, and Ruff checks keep the project consistent.

## Next steps

Extend the tool into an AI-assisted reliability-review workflow. The planned AI layer will draft a source-linked incident summary while keeping deterministic evidence, test evaluation, and final review under human control.

[View the source on GitHub](https://github.com/DianeLarsen/testlog-triage).

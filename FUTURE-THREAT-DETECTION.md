# Future research: account threat detection

## Status and scope

**Research proposal only.** Automatic threat detection is not part of the current CyberShield MVP. This document records questions to investigate before any future implementation is considered. It does not describe a working detector, antivirus scanner, or account-control feature.

## Problem to investigate

People may find it difficult to interpret security notifications, unfamiliar sign-ins, phishing messages, or changes to account settings. Future research could examine whether carefully explained, user-reviewed warnings would help people decide what to do next.

## Research questions

1. Which account-security signals can a user safely and legitimately obtain from an official service?
2. How can unfamiliar sign-ins, unexpected recovery-detail changes, and suspicious messages be explained without presenting an unverified event as a confirmed attack?
3. What false-positive and false-negative risks would a warning system create?
4. What consent, data-minimization, retention, and deletion controls would be required?
5. How can every recommendation link to an official service workflow and remain understandable to a beginner?

## Possible future directions to evaluate

- **User-reported warning review:** let a user describe a notification without entering passwords, verification codes, or recovery secrets.
- **Official security-event guidance:** investigate whether supported account-provider security notifications or APIs can be used with explicit permission.
- **Explainable risk indicators:** study simple indicators such as an unfamiliar device or a changed recovery method, while clearly showing the source and uncertainty.
- **Phishing education:** evaluate safe, non-executing examples that teach users to inspect senders and links. Do not open or fetch suspicious links automatically.
- **Human confirmation:** require the user to review advice and take any account action themselves through the provider’s official app or website.

## Safety, privacy, and ethical requirements

- Never request or store account passwords, one-time passcodes, recovery codes, private keys, or security-question answers.
- Do not attempt to log in to a user's account, bypass provider controls, or change account settings automatically.
- Obtain informed, revocable consent before accessing any account-related data.
- Collect the minimum data needed; document purpose, storage location, retention period, and deletion method.
- Prefer provider-supported authorization and read-only access if a future provider integration is approved.
- Protect any collected data in transit and at rest; do not treat browser local storage as secure storage for sensitive information.
- Make uncertainty visible. A warning must not claim that an account is hacked unless a reliable source establishes that fact.
- Provide accessible explanations, a way to dismiss or report incorrect warnings, and a clear route to official help.

## Research and evaluation plan

1. Review current guidance from recognized cybersecurity organizations and account providers.
2. Compare provider-supported security alerts and authorization options; record limitations and permission requirements.
3. Create a threat model covering misuse, data exposure, false alarms, and unauthorized access.
4. Test proposed warning wording with users using fictional examples only.
5. Measure comprehension, false-alarm rates, missed-risk scenarios, and whether users can identify the official next step.
6. Review privacy, accessibility, and legal requirements before proposing a technical prototype.
7. Present findings and obtain project-team approval before creating a separate implementation issue.

## Explicitly out of scope for the current MVP

- Automatic hacking or compromise detection
- Antivirus or malware scanning
- Background device or network monitoring
- Automatic password resets, sign-outs, or account-setting changes
- Collecting credentials or connecting to accounts without explicit provider-supported authorization

**Current MVP behavior remains educational:** CyberShield uses the answers selected in its four-question assessment to show guidance. It does not scan or verify accounts.

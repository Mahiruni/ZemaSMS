# ZemaSMS

**Every Message Matters.**

Enterprise SMS communications platform for Ethiopia. ZemaSMS is an independent brand with an original customer experience, messaging API, campaign management, OTP, and administration platform.

## Status

Milestone 1: project initialization. **Not production ready.** No real SMS provider, payment processor, or telecom connectivity is configured.

## Planned architecture

- Next.js / TypeScript public website and customer dashboard
- NestJS authenticated API
- PostgreSQL transactional database and outbox
- Persistent message workers and Redis-backed queue
- Approved third-party SMS provider adapter
- ETB prepaid billing ledger and tenant isolation

## Security rules

No production SMS transmission until contractual approval, provider credentials, approved sender identities, and consent controls are verified. Do not commit secrets.

## Brand

ZemaSMS — Every Message Matters.

Proudly Sponsored by [Hisab Tech](https://www.hisabtechnologies.com).

## Delivery milestones

1. Repository and architecture
2. Premium public website
3. Authentication and database
4. Messaging API and sandbox worker
5. Campaigns and dashboard
6. OTP and developer portal
7. Billing and administration
8. Security and reliability
9. Approved provider integration
10. Production release verification

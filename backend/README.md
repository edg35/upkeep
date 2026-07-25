# Upkeep — Backend

NestJS + Prisma + PostgreSQL backend for the Upkeep household management app.

## Data Model

```mermaid
erDiagram
    User {
        string user_id PK
        string email
        string name
        DateTime updated_at
    }
    Household {
        string household_id PK
        string name
        string created_by FK
        DateTime updated_at
    }
    HouseholdMember {
        string household_id PK "FK"
        string user_id PK "FK"
        Role role
    }
    HouseholdInvitation {
        string invitation_id PK
        string household_id FK
        string code
        string invited_by FK
        string email
        DateTime created_at
        DateTime expires_at
        InvitationStatus status
    }
    HouseholdJoinRequest {
        string household_id PK "FK"
        string requested_by PK "FK"
        JoinRequestStatus status
        DateTime created_at
    }
    Category {
        string category_id PK
        string household_id FK
        string name
        string description
        string icon
        string color
    }
    Item {
        string item_id PK
        string name
        string category_id FK
        string icon
        ItemType item_type
        string notes
        string purchase_link
        DateTime created_at
        DateTime updated_at
        string created_by FK
    }
    ItemSchedule {
        string item_id PK "FK"
        TrackingMode tracking_mode
        int interval_days
        DateTime fixed_due_date
        string recurrence_rule
        int lead_time_days
        DateTime last_completed_at
        DateTime next_due_date
        DateTime updated_at
    }
    ItemHistory {
        string history_id PK
        string item_id FK
        DateTime completed_at
        string completed_by FK
        string notes
    }
    Reminder {
        string reminder_id PK
        string item_id FK
        string user_id FK
        DateTime remind_at
    }

    User ||--o{ Household : "creates"
    User ||--o{ HouseholdMember : "member of"
    User ||--o{ HouseholdInvitation : "sends"
    User ||--o{ HouseholdJoinRequest : "requests"
    User ||--o{ Item : "creates"
    User ||--o{ ItemHistory : "completes"
    User ||--o{ Reminder : "receives"
    Household ||--o{ HouseholdMember : "has"
    Household ||--o{ HouseholdInvitation : "has"
    Household ||--o{ HouseholdJoinRequest : "has"
    Household ||--o{ Category : "has"
    Category ||--o{ Item : "contains"
    Item ||--o| ItemSchedule : "scheduled by"
    Item ||--o{ ItemHistory : "has"
    Item ||--o{ Reminder : "triggers"
```

## Description

[Nest](https://github.com/nestjs/nest) + [Prisma](https://www.prisma.io/) backend.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

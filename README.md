# EliteA Documentation Demo

## Overview

EliteA Documentation Demo is a REST API for managing customer information.

The application provides HTTP endpoints for creating, retrieving, updating,
and deleting customer records. It is intended as a demonstration project
for automated technical documentation generation.

## Technology Stack

- Node.js
- Express
- PostgreSQL
- Docker
- Jest

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /health | Check application health |
| GET | /api/customers | Retrieve customers |
| POST | /api/customers | Create a customer |
| GET | /api/customers/:id | Retrieve a customer |
| DELETE | /api/customers/:id | Delete a customer |

## Configuration

The application uses environment variables for configuration.

Required environment variables are documented in `.env.example`.

## Running the Application

Install dependencies:

```bash
npm install

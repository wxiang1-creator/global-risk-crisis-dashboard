# Developer Manual

## Project Overview

The Global Risk & Crisis Intelligence Dashboard is a React, Vite, Node.js, and Supabase web application. It collects public crisis-related data from external APIs, normalizes the data into a consistent event structure, displays it through maps and charts, and allows users to save selected events into a Supabase database.

This document is intended for future developers who may continue maintaining or extending the project.

---

## Technology Stack

### Front End

- React
- Vite
- React Router DOM
- React Leaflet
- Leaflet
- Recharts
- CSS

### Back End

- Node.js serverless API routes through Vercel
- Supabase JavaScript client
- Dotenv for local environment variable loading

### Database

- Supabase PostgreSQL

### Deployment

- Vercel

---

## Installation Instructions

To install the project locally, clone the GitHub repository:

```bash
git clone https://github.com/wxiang1-creator/global-risk-crisis-dashboard.git
cd global-risk-crisis-dashboard

# Global Risk & Crisis Intelligence Dashboard

## Project Description

The Global Risk & Crisis Intelligence Dashboard is a full-stack web application that aggregates public crisis and environmental risk data from multiple APIs and presents it through an interactive dashboard.

The project focuses on the problem that global disaster and crisis data is often fragmented across different public platforms. This application helps users view recent earthquake events, natural hazard events, event category summaries, geographic event distribution, selected event details, and weather context for selected locations.

## Target Browsers

This application is designed for contemporary desktop browsers, including:

- Google Chrome
- Microsoft Edge
- Firefox
- Safari

The layout is responsive and can also be viewed on tablet and mobile browsers, but the primary target environment is a modern desktop browser.

## Live Deployment

Vercel deployment link:

(https://global-risk-crisis-dashboard-xiang-eew3rffxe.vercel.app/)

## Developer Manual

The full developer manual is located here:

[Developer Manual](docs/developer-manual.md)

## Main Features

- Interactive global event map using React Leaflet
- Event category summary chart using Recharts
- External crisis data from USGS Earthquake API and NASA EONET API
- Weather context from Open-Meteo API
- Saved event storage using Supabase
- Backend API routes for fetching external data, saving events, and reading saved events

## APIs Used

- USGS Earthquake API
- NASA EONET API
- Open-Meteo API
- Supabase Database

## JavaScript Libraries Used

- React Router DOM
- React Leaflet
- Leaflet
- Recharts
- Supabase JavaScript Client
- Dotenv


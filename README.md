# Weather Dashboard

A basic weather dashboard built using Shadcn-UI, React, TypeScript, and bulletproof-react architecture. This project utilizes Vite for a fast and efficient development environment.

## Installation

To install the required packages, run:

```bash
npm install
```

## Usage

To run the local server, use:

```bash
npm run dev
```

To compile tailwind classes to css in watch mode, use:

```bash
npm run tailwind
```

To build the project, use:

```bash
npm run build
```

## Configuration

Before running the project, ensure you have a `.env` file at the root of the directory with the following sample configuration:

```plaintext
VITE_API_KEY=<YOUR-OPENWEATHERMAP-API-KEY>
VITE_API_URL="https://api.openweathermap.org/data/2.5"
VITE_GEO_URL="https://api.openweathermap.org/geo/1.0/direct"
VITE_ICON_URL="https://openweathermap.org/img/w"
```

Replace `<YOUR-OPENWEATHERMAP-API-KEY>` with your actual OpenWeatherMap API key.

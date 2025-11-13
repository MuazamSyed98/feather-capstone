# Feather - Next-Day Market Insights

A production-quality web application providing next-day market insights using ML baseline (SVR/RF) and optional LLM-based sentiment features.

## Quick Start

### Prerequisites
- Node.js 18+
- Python 3.11+
- Git

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

### Frontend Setup
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

### Docker Setup
```bash
docker-compose up --build
```

## Project Structure

```
feather/
├── frontend/          # React + TypeScript + Vite
├── backend/           # FastAPI + SQLAlchemy
├── docs/             # Documentation
└── .github/workflows/ # CI/CD
```

## API Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/login` | User authentication |
| GET | `/auth/me` | Get current user |
| GET | `/api/tickers/{symbol}/prediction` | Get prediction for symbol |
| GET | `/api/tickers/{symbol}/news` | Get news for symbol |
| GET | `/api/news` | Get global news feed |
| GET | `/api/watchlist` | Get user watchlist |
| POST | `/api/watchlist` | Add symbol to watchlist |
| DELETE | `/api/watchlist/{symbol}` | Remove symbol from watchlist |
| GET | `/api/alerts` | Get user alerts |
| POST | `/api/alerts` | Create new alert |

## Development

### Backend Scripts
- `uvicorn app.main:app --reload` - Start development server
- `pytest` - Run tests
- `ruff check` - Lint code
- `black .` - Format code

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Lint code

## Documentation

- [API Contracts](docs/api-contracts.md)
- [Architecture](docs/architecture.md)
- [Runbook](docs/runbook.md)

## Contributing

This project uses Conventional Commits. Please follow the format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks


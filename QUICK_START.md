# 🚀 Feather App - Quick Start Guide

## ⚡ Get Started in 5 Minutes

### **Prerequisites**
- Node.js 18+ ([Download](https://nodejs.org/))
- Python 3.11+ ([Download](https://python.org/))
- Git ([Download](https://git-scm.com/))
- Docker (Optional) ([Download](https://docker.com/))

### **Option 1: Docker Setup (Recommended)**
```bash
# 1. Clone the repository
git clone <your-repository-url>
cd FeatherApp

# 2. Start all services
docker-compose up -d

# 3. Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:8000
# API Docs: http://localhost:8000/docs
```

### **Option 2: Manual Setup**
```bash
# 1. Clone the repository
git clone <your-repository-url>
cd FeatherApp

# 2. Start Backend
cd backend
python -m venv venv
# Windows: venv\Scripts\activate
# macOS/Linux: source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload

# 3. Start Frontend (in new terminal)
cd frontend
npm install
npm run dev

# 4. Access the application
# Frontend: http://localhost:5173
# Backend: http://localhost:8000
```

## 🎯 What You'll See

### **Frontend Features**
- **Dashboard**: Market overview, portfolio summary, AI insights
- **Market**: Real-time market data, indices, sectors, global markets
- **Portfolio**: Track investments, performance metrics, allocation
- **Charts**: Advanced charting with technical indicators
- **Risk**: Risk analysis, portfolio optimization, scenarios
- **Backtesting**: Strategy testing and optimization
- **Recommendations**: AI-powered investment recommendations
- **News**: Professional news interface with sentiment analysis

### **Backend Features**
- **Authentication**: JWT-based user authentication
- **Market Data**: Stock predictions, real-time data
- **Portfolio**: Watchlist and portfolio management
- **Alerts**: Price and market alerts
- **Risk Management**: Portfolio risk analysis
- **Strategy Testing**: Backtesting framework

## 🔧 Development Commands

### **Frontend Commands**
```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build

# Lint code
npm run lint

# Format code
npm run format
```

### **Backend Commands**
```bash
cd backend

# Create virtual environment
python -m venv venv
# Windows: venv\Scripts\activate
# macOS/Linux: source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start development server
uvicorn app.main:app --reload

# Run tests
pytest

# Run linting
ruff check .
black .

# Database migrations
alembic upgrade head
```

### **Docker Commands**
```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild containers
docker-compose up --build
```

## 📁 Key Files to Know

### **Frontend Key Files**
```
frontend/src/
├── components/           # UI components
│   ├── AdvancedChart.tsx    # Professional charting
│   ├── MarketOverview.tsx   # Market data display
│   ├── PortfolioTracker.tsx # Portfolio management
│   ├── RiskManagement.tsx    # Risk analysis
│   └── AIRecommendations.tsx # AI insights
├── pages/                # Page components
├── hooks/                # Custom React hooks
├── store/                # State management
└── lib/api.ts            # API client
```

### **Backend Key Files**
```
backend/app/
├── api/                  # API endpoints
│   ├── auth.py              # Authentication
│   ├── tickers.py           # Market data
│   ├── news.py              # News endpoints
│   └── watchlist.py         # Portfolio
├── models/               # Database models
├── services/             # Business logic
└── core/                 # Core functionality
```

## 🎯 Your Role & Next Steps

### **Frontend Developer**
1. **Start with**: `frontend/src/components/` - understand component structure
2. **Key files**: `DashboardPage.tsx`, `MarketOverview.tsx`, `PortfolioTracker.tsx`
3. **Focus on**: React components, TypeScript, Tailwind CSS
4. **Next task**: Add new UI components or improve existing ones

### **Backend Developer**
1. **Start with**: `backend/app/api/` - understand API structure
2. **Key files**: `auth.py`, `tickers.py`, `services/`
3. **Focus on**: FastAPI, SQLAlchemy, Python
4. **Next task**: Add new API endpoints or improve existing ones

### **AI/ML Engineer**
1. **Start with**: `backend/app/services/` - understand ML services
2. **Key files**: `prediction_service.py`, `sentiment_service.py`
3. **Focus on**: Machine learning, data processing, model optimization
4. **Next task**: Improve prediction models or add new AI features

### **DevOps Engineer**
1. **Start with**: `docker-compose.yml`, `Dockerfile` - understand deployment
2. **Key files**: `.github/workflows/`, deployment configs
3. **Focus on**: Docker, CI/CD, monitoring, security
4. **Next task**: Improve deployment pipeline or add monitoring

## 🐛 Common Issues & Solutions

### **Frontend Issues**
```bash
# Port already in use
npm run dev -- --port 5174

# Module not found
npm install

# Build errors
npm run build
```

### **Backend Issues**
```bash
# Port already in use
uvicorn app.main:app --reload --port 8001

# Database connection
# Check DATABASE_URL in .env file

# Import errors
pip install -r requirements.txt
```

### **Docker Issues**
```bash
# Container won't start
docker-compose down
docker-compose up --build

# Permission issues
sudo docker-compose up -d
```

## 📚 Learning Resources

### **Quick Learning Path**
1. **Day 1**: Set up environment, run the app
2. **Day 2**: Understand codebase structure
3. **Day 3**: Make small changes, test locally
4. **Day 4**: Create your first feature
5. **Day 5**: Code review and collaboration

### **Essential Documentation**
- [React Documentation](https://react.dev/)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Docker Documentation](https://docs.docker.com/)

## 🆘 Need Help?

### **Common Questions**
- **Q**: How do I add a new feature?
- **A**: Create a feature branch, implement changes, create PR

- **Q**: How do I debug issues?
- **A**: Check browser console (frontend), check backend logs

- **Q**: How do I deploy changes?
- **A**: Push to main branch, CI/CD pipeline handles deployment

### **Team Communication**
- **Slack**: #feather-dev channel
- **GitHub**: Create issues for bugs, discussions for features
- **Daily Standups**: 15-minute daily meetings
- **Code Reviews**: All changes require review

## 🎯 Success Metrics

### **Week 1 Goals**
- [ ] Set up development environment
- [ ] Run the application locally
- [ ] Understand your role and responsibilities
- [ ] Make your first code contribution

### **Week 2 Goals**
- [ ] Understand the codebase structure
- [ ] Fix a bug or add a small feature
- [ ] Participate in code reviews
- [ ] Contribute to documentation

### **Week 3 Goals**
- [ ] Lead a feature development
- [ ] Mentor other team members
- [ ] Improve code quality
- [ ] Optimize performance

---

**Welcome to the Feather team! 🚀**

*This guide will help you get started quickly. For detailed information, see the full documentation.*

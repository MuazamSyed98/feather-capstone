import { Routes, Route } from 'react-router-dom'
import { AuthGuard } from '@/components/AuthGuard'
import { AppLayout } from '@/components/AppLayout'
import { LoginPage } from '@/pages/LoginPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { TickerPage } from '@/pages/TickerPage'
import { NewsPage } from '@/pages/NewsPage'
import { AlertsPage } from '@/pages/AlertsPage'
import { ScreenerPage } from '@/pages/ScreenerPage'
import { AnalyticsPage } from '@/pages/AnalyticsPage'
import { SocialPage } from '@/pages/SocialPage'
import { ProfessionalNewsPage } from '@/pages/ProfessionalNewsPage'
import { MarketPage } from '@/pages/MarketPage'
import { PortfolioPage } from '@/pages/PortfolioPage'
import { RecommendationsPage } from '@/pages/RecommendationsPage'
import { ChartsPage } from '@/pages/ChartsPage'
import { RiskPage } from '@/pages/RiskPage'
import { BacktestingPage } from '@/pages/BacktestingPage'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/*"
        element={
          <AuthGuard>
            <AppLayout>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/ticker/:symbol" element={<TickerPage />} />
                <Route path="/news" element={<ProfessionalNewsPage />} />
                <Route path="/alerts" element={<AlertsPage />} />
                <Route path="/screener" element={<ScreenerPage />} />
                <Route path="/analytics" element={<AnalyticsPage />} />
                <Route path="/social" element={<SocialPage />} />
                <Route path="/market" element={<MarketPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/recommendations" element={<RecommendationsPage />} />
                <Route path="/charts" element={<ChartsPage />} />
                <Route path="/risk" element={<RiskPage />} />
                <Route path="/backtesting" element={<BacktestingPage />} />
              </Routes>
            </AppLayout>
          </AuthGuard>
        }
      />
    </Routes>
  )
}

export default App


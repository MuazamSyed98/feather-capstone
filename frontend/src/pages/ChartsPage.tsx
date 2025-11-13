import { AdvancedChart } from '@/components/AdvancedChart'

export const ChartsPage = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Advanced Charts
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Professional charting with technical indicators and drawing tools
        </p>
      </div>

      {/* Advanced Chart */}
      <AdvancedChart symbol="AAPL" />
    </div>
  )
}

import { useQuery } from '@tanstack/react-query'
import { tickerApi } from '@/lib/api'

export const usePrediction = (symbol: string, window = '1d') => {
  return useQuery({
    queryKey: ['prediction', symbol, window],
    queryFn: () => tickerApi.getPrediction(symbol, window),
    enabled: !!symbol,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

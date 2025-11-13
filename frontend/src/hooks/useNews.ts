import { useQuery } from '@tanstack/react-query'
import { newsApi } from '@/lib/api'

export const useSymbolNews = (symbol: string, limit = 20) => {
  return useQuery({
    queryKey: ['news', 'symbol', symbol, limit],
    queryFn: () => newsApi.getSymbolNews(symbol, limit),
    enabled: !!symbol,
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}

export const useGlobalNews = (limit = 50, symbol?: string) => {
  return useQuery({
    queryKey: ['news', 'global', limit, symbol],
    queryFn: () => newsApi.getGlobalNews(limit, symbol),
    staleTime: 2 * 60 * 1000, // 2 minutes
  })
}

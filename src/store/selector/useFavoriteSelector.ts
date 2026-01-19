import { useAppSelector } from '../../hooks/hooks'
import type { RootState } from '../../types/root-state'

export const useFavoriteSelector = () => {
  return useAppSelector((state: RootState) => state.favorite.favorite)
}

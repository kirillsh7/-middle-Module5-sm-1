import { useAppSelector } from '../../hooks/hooks'
import type { RootState } from '../store'

export const useFavoriteSelector = () => {
  return useAppSelector((state: RootState) => state.favorite.favorite)
}

import { RehydrateErrorType } from 'redux-persist'

import { BannerState } from './features/banner/types'
import { PlaceState } from './features/place/types'
import { MissionState } from './features/mission/types'
import { NewsState } from './features/news/types'

export interface RootState {
  banner: BannerState
  place: PlaceState
  mission: MissionState
  news: NewsState
}

export interface RehydrateAction {
  type: 'persist/REHYDRATE'
  key: string
  payload?: RootState | null
  err?: RehydrateErrorType | null
}

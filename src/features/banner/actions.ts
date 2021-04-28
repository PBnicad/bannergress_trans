import { Dispatch } from 'redux'
import { RootState } from '../../storeTypes'
import { Place } from '../place'
import {
  BannerActionTypes,
  BROWSE_BANNERS,
  LOAD_BANNER,
  LOAD_BANNER_ERROR,
  LOAD_RECENT_BANNERS,
  LOAD_RECENT_BANNERS_ERROR,
  RESET_BROWSED_BANNERS,
  SEARCH_BANNERS,
  RESET_SEARCH_BANNERS,
  CREATE_BANNER,
  REMOVE_CREATED_BANNER,
} from './actionTypes'
import * as api from './api'
import { getCreatedBanner } from './selectors'
import { Banner, BannerOrder, BannerOrderDirection } from './types'

export const loadBannerAction = (id: string) => async (
  dispatch: Dispatch<BannerActionTypes>
) => {
  const response = await api.getBanner(id)
  if (response.ok && response.data !== undefined) {
    dispatch({
      type: LOAD_BANNER,
      payload: response.data,
    })
  } else {
    dispatch({
      type: LOAD_BANNER_ERROR,
    })
  }
}

export const loadRecentBannersAction = () => async (
  dispatch: Dispatch<BannerActionTypes>
) => {
  const response = await api.getRecentBanners(10)
  if (response.ok && response.data !== undefined) {
    dispatch({
      type: LOAD_RECENT_BANNERS,
      payload: response.data,
    })
  } else {
    dispatch({
      type: LOAD_RECENT_BANNERS_ERROR,
    })
  }
}

export const loadBrowsedBannersAction = (
  place: Partial<Place> | null,
  order: BannerOrder,
  orderDirection: BannerOrderDirection,
  page: number
) => async (dispatch: Dispatch<BannerActionTypes>) => {
  if (page === 0) {
    dispatch({
      type: RESET_BROWSED_BANNERS,
    })
  }
  const response = await api.getBanners(place?.id, order, orderDirection, page)
  if (response.ok && response.data !== undefined) {
    dispatch({
      type: BROWSE_BANNERS,
      payload: {
        banners: response.data,
        hasMore: response.data && response.data.length === api.PAGE_SIZE,
      },
    })
  } else {
    // dispatch({
    //   type: BROWSE_BANNERS_ERROR,
    // })
  }
}

export const loadSearchBannersAction = (
  searchTerm: string,
  order: BannerOrder,
  orderDirection: BannerOrderDirection,
  page: number
) => async (dispatch: Dispatch<BannerActionTypes>) => {
  if (page === 0) {
    dispatch({
      type: RESET_SEARCH_BANNERS,
    })
  }
  const response = await api.searchBanners(
    searchTerm,
    order,
    orderDirection,
    page
  )
  if (response.ok && response.data !== undefined) {
    dispatch({
      type: SEARCH_BANNERS,
      payload: {
        banners: response.data,
        hasMore: response.data && response.data.length === api.PAGE_SIZE,
      },
    })
  } else {
    // dispatch({
    //   type: BROWSE_SEARCH_ERROR,
    // })
  }
}

export const createBannerAction = (banner: Banner) => (
  dispatch: Dispatch<BannerActionTypes>
) => {
  dispatch({
    type: CREATE_BANNER,
    payload: banner,
  })
}

export const submitBanner = () => async (
  dispatch: Dispatch<BannerActionTypes>,
  getState: () => RootState
) => {
  const banner: Partial<Banner> = getCreatedBanner(getState())!
  banner.uuid = undefined
  banner.width = 6
  banner.type = 'sequential'
  const response = await api.postBanner(banner!)
  if (response.ok) {
    dispatch({
      type: REMOVE_CREATED_BANNER,
    })
    return response.data!.uuid
  }
  return Promise.reject()
}

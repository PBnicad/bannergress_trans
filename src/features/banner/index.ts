import * as actionTypes from './actionTypes'
import {
  getBanner,
  getFullBanner,
  getRecentBanners,
  getBrowsedBanners,
  getHasMoreBrowsedBanners,
  getSearchBanners,
  getHasMoreSearchBanners,
  getAgentBanners,
  getHasMoreAgentBanners,
  getUserBannerListBanners,
  getHasMoreUserBannerListBanners,
  getCreatedBanner,
  getMapBanners,
} from './selectors'
import {
  loadBannerAction,
  loadRecentBannersAction,
  loadBrowsedBannersAction,
  loadSearchBannersAction,
  loadAgentBannersAction,
  loadUserBannerListBannersAction,
  createBannerAction,
  submitBannerAction,
  loadMapBannersAction,
  loadMapOfficialBannersAction,
  removePendingBannerAction,
  editBannerAction,
  deleteBannerAction,
  changeBannerSettingsAction,
} from './actions'
import {
  Banner,
  BannerType,
  BannerListType,
  BannerState,
  NumDictionary,
  ApiOrder,
  ApiOrderDirection,
} from './types'
import {
  getBannerBounds,
  extend,
  extendSorted,
  getBannerListTypeText,
  isBannerFullyOnline,
} from './helpers'

export { default as BannerReducer } from './reducer'
export { actionTypes }
export {
  getBanner,
  getFullBanner,
  getRecentBanners,
  getBrowsedBanners,
  getHasMoreBrowsedBanners,
  getSearchBanners,
  getHasMoreSearchBanners,
  getAgentBanners,
  getHasMoreAgentBanners,
  getUserBannerListBanners,
  getHasMoreUserBannerListBanners,
  getCreatedBanner,
  getMapBanners,
}
export {
  loadBannerAction as loadBanner,
  loadRecentBannersAction as loadRecentBanners,
  loadBrowsedBannersAction as loadBrowsedBanners,
  loadSearchBannersAction as loadSearchBanners,
  loadAgentBannersAction as loadAgentBanners,
  loadUserBannerListBannersAction as loadUserBannerListBanners,
  createBannerAction as createBanner,
  submitBannerAction as submitBanner,
  loadMapBannersAction as loadMapBanners,
  loadMapOfficialBannersAction as loadMapOffcialBanners,
  removePendingBannerAction as removePendingBanner,
  editBannerAction as editBanner,
  deleteBannerAction as deleteBanner,
  changeBannerSettingsAction as changeBannerSettings,
}
export type {
  Banner,
  BannerType,
  BannerListType,
  BannerState,
  NumDictionary,
  ApiOrder as BannerOrder,
  ApiOrderDirection as BannerOrderDirection,
  ApiOrder,
  ApiOrderDirection,
}
export {
  getBannerBounds,
  extend,
  extendSorted,
  getBannerListTypeText,
  isBannerFullyOnline,
}

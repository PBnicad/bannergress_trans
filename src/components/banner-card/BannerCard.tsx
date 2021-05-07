import { Button } from 'antd'
import React, { FC } from 'react'

import { Banner } from '../../features/banner'
import { ReactComponent as SVGExplorer } from '../../img/icons/explorer.svg'
import { ReactComponent as SVGPointer } from '../../img/icons/pointer.svg'

import './banner-card.less'
import BannerPicture from './BannerPicture'

const baseUrl = process.env.REACT_APP_API_BASE_URL

const getDistance = (distance: number) => `${(distance / 1000).toFixed(1)} km`

const BannerCard: FC<BannerCardProps> = ({
  banner,
  selected,
  showFullImage,
  onDetails,
}) => {
  const url = banner && banner.picture && new URL(banner.picture, baseUrl).href
  const className = selected ? 'banner-card selected' : 'banner-card'

  return (
    <div className={className}>
      <div className="banner-card-title">{banner?.title}</div>
      {banner && url && (
        <BannerPicture
          url={url}
          title={banner.title}
          showFullImage={showFullImage}
        />
      )}
      <div className="banner-info-item">
        <SVGExplorer fill="#1DA57A" className="icon" />
        {banner?.numberOfMissions} Missions,{' '}
        {banner && banner.lengthMeters
          ? getDistance(banner?.lengthMeters)
          : null}
      </div>
      <div className="banner-info-item">
        <SVGPointer fill="#1DA57A" className="icon" />
        {banner?.formattedAddress}
      </div>
      {selected && (
        <div className="banner-info-details">
          <Button onClick={onDetails}>Details</Button>
        </div>
      )}
    </div>
  )
}

export interface BannerCardProps {
  banner: Banner | undefined
  selected: boolean
  showFullImage?: boolean
  onDetails?: () => void
}

export default BannerCard

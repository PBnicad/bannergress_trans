import React, { FC } from 'react'

import { Mission } from '../../features/mission'
import { Agent } from '../agent/Agent'
import MissionImage from '../mission-image/MissionImage'

import './search-mission-card.less'

const SearchMissionCard: FC<SearchMissionCardProps> = ({
  mission,
  icon,
  onSelectMission,
  missionEditor,
}) => {
  return (
    <div className="search-mission-card">
      <MissionImage mission={mission} />
      <div className="mission-title-and-author">
        <div className="mission-title">{mission?.title}</div>
        {mission.author && (
          <div className="mission-agent">
            <Agent agent={mission.author} />
          </div>
        )}
      </div>
      {missionEditor && missionEditor()}
      <button
        type="button"
        onClick={() => onSelectMission(mission)}
        onKeyPress={() => onSelectMission(mission)}
        className="mission-button"
        tabIndex={0}
      >
        {icon}
      </button>
    </div>
  )
}

export interface SearchMissionCardProps {
  mission: Mission & { index?: number }
  onSelectMission: (mission: Mission & { index?: number }) => void
  icon: JSX.Element
  missionEditor?: () => JSX.Element | undefined
}

export default SearchMissionCard

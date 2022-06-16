import React from 'react'
import { CardContainer, IconEllipsis, LastTime, Time, TitleCard, WrapperInfos, WrapperTime, WrapperTitleCard } from './CardItemStyles'
import ellipsis from '../../../assets/icon-ellipsis.svg'
import dataDashboard from "../../../data.json"

export default function CardItem(props) {
  let isTablet = window.innerWidth <= 880;
  let isMobile = window.innerWidth <= 630;
  const timeFrameSelect = props.timeFrameSelect;

  return dataDashboard?.map((card, index) => {

    let timeFrame;
    let columnSwitch;
    let rowSwitch;

    window.onresize = () => {
      if (isTablet) {
        columnSwitch = card.tablet.column;
        rowSwitch = card.tablet.row;
      } else if (isMobile) {
        columnSwitch = card.mobile.column;
        rowSwitch = card.mobile.row;
      } else {
        columnSwitch = card.desktop.column;
        rowSwitch = card.desktop.row;
      }
    }

    timeFrameSelect === "daily" ? (timeFrame = card.timeframes.daily)
      : timeFrameSelect === "weekly" ? (timeFrame = card.timeframes.weekly)
        : (timeFrame = card.timeframes.monthly);

    return (
      <CardContainer key={index} column={columnSwitch} row={rowSwitch} backgroundImage={card.image} backgroundColor={card.backgroundColor}>
        <WrapperInfos>
          <WrapperTitleCard>
            <TitleCard>{card.title}</TitleCard>
            <IconEllipsis src={ellipsis} alt="" />
          </WrapperTitleCard>
          <WrapperTime>
            <Time>{timeFrame.current}hrs</Time>
            <LastTime>Last week - {timeFrame.previous}hrs</LastTime>
          </WrapperTime>
        </WrapperInfos>
      </CardContainer>
    )
  })
}

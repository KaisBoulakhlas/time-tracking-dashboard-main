import React from 'react'
import { CardProfileContainer, FullName, ProfileImg, ReportedByText, SwitchViewing, View, Wrapper, WrapperInfosReportedBy } from './CardProfileStyles'
import imgJeremy from "../../../assets/image-jeremy.png"

export default function CardProfile(props) {

  const handleSwitch = (e) => {
    return props.setTimeFrameSelect(e.currentTarget.dataset.switch);
  } 
  
  return (
    <CardProfileContainer>
        <WrapperInfosReportedBy>
            <ProfileImg src={imgJeremy} alt="jeremy" />
            <Wrapper>
                <ReportedByText>Report for</ReportedByText>
                <FullName>Jeremy Robson</FullName>
            </Wrapper>
        </WrapperInfosReportedBy>
        <SwitchViewing>
            <View data-switch="daily" active={props.timeFrameSelect === "daily"} onClick={handleSwitch}>Daily</View>
            <View data-switch="weekly" active={props.timeFrameSelect === "weekly"} onClick={handleSwitch}>Weekly</View>
            <View data-switch="monthly" active={props.timeFrameSelect === "monthly"} onClick={handleSwitch}>Monthly</View>
        </SwitchViewing>
    </CardProfileContainer>
  )
}

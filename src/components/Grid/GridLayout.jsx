import React, { useState } from 'react'
import CardItem from '../Cards/CardItem/CardItem'
import CardProfile from '../Cards/CardProfile/CardProfile'
import { DashboardGrid } from './GridLayoutStyles'

export default function GridLayout() {
  const [timeFrameSelect, setTimeFrameSelect] = useState("weekly");
  return (
    <DashboardGrid>
        <CardProfile timeFrameSelect={timeFrameSelect} setTimeFrameSelect={setTimeFrameSelect}/>
        <CardItem timeFrameSelect={timeFrameSelect} />
    </DashboardGrid>
  )
}

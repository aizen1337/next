'use client'

import { Spin } from "antd"

export default function Loading() {
  return (
    <div style={{
        width: '100vw',
        height: '100vh',
        background: "#262626",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: "99999999999"
    }}>
        <Spin size="large"/>
        <h1 color="limegreen">Loading</h1>
    </div>
  )
}
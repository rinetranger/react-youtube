import React from 'react'
import Layout from '../components/Layout/Layout'
import SideList from '../components/SideList/SideList'
import VideoDetail from '../components/VideoDetail/VideoDetail'

const Watch = () => {
    return (
        <div>
            <Layout>
                <VideoDetail />
                <SideList />
            </Layout>
        </div>
    )
}

export default Watch;

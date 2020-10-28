import React,{useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import {fetchPopularData} from '../apis/index'

const Top = () => {
    useEffect(()=>{
        fetchPopularData().then((res)=>{
            console.log('data',res)
        })
    },[])
    return (
        <div>
            <Layout>
            Toppage
            </Layout>
        </div>
    )
}

export default Top;

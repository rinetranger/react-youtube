import React,{useContext, useEffect} from 'react'
import {Store} from '../store/index'
import Layout from '../components/Layout/Layout'
import {fetchPopularData} from '../apis/index'


const Top = () => {
    const {globalState,setGlobalState}=useContext(Store)
    useEffect(()=>{
        fetchPopularData().then((res)=>{
            console.log('data',res)
            setGlobalState({type:'SET_POPULAR',payload:{popular: res.data.items}
            })
        })
    // eslint-disable-next-line
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

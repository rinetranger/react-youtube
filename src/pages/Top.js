import React,{useContext, useEffect} from 'react'
import {Store} from '../store/index'
import Layout from '../components/Layout/Layout'
import {fetchPopularData} from '../apis/index'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem'


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
            <VideoGrid>
                {globalState.popular && globalState.popular.map((popular)=>{
                    return(
                        <VideoGridItem
                            id={popular.id}
                            key={popular.id}
                            src={popular.snippet.thumbnails.default.url}
                            title={popular.snippet.title}
                         />
                    )
                })}
            </VideoGrid>
            </Layout>
        </div>
    )
}

export default Top;

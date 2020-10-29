import axios from 'axios'


const KEY ='AIzaSyAvOID2x1PpuCHTKPkuEk5pt3Iyl1SB-jQ'

const youtube=axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3'}
)
const params={
    part:'snippet',
    maxResults:40,
    key:KEY,
    regionCode:'JP',
    type:'video'

}

export const fetchPopularData =async()=>{
    return await youtube.get('/videos',{
        params:{
           ...params,
            chart:'mostPopular'
        }
    })
}

export const fetchSelectedData =async(id)=>{
    return await youtube.get('/videos',{
        params:{
            ...params,
            id
        }
    })
}

export const fetchRelatedData=async(id)=>{
    return await youtube.get('/search',{
        params:{
            ...params,
            relatedToVideoId:id
        }
    })
}
import hyRequest from './index'

export function getTopMV(offset, limit = 10) {
  return hyRequest.get("/top/mv", {
    offset,
    limit
  })
}
/*
请求mv的播放地址
@param {number} id MV的id
*
*/ 
export function getMVURL(id){
  return hyRequest.get('/mv/url',{
    id
  })
}
/***
 * @param {*} mvid
 */
export function getMVDetail(mvid){
  return hyRequest.get('/mv/detail',{
    mvid
  })
}

/**
 * 
 * @param {*} id 
 */

export function getRelatedVideo(id){
  return hyRequest.get('/related/allvideo',{
   id
  })
}

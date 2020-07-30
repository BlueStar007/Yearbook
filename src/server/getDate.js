import axios from "axios"

export async function getPd() {

    var data = await axios({
        method: 'get',
        url: 'http://ali-news.showapi.com/channelList',
        headers: {
            Authorization: 'APPCODE be7cd12bdd0d4e04ad42835ea0c57475'
        }
    })
    return data.data.showapi_res_body.channelList;


}

export async function ChannelId(id, num) {

    var data = await axios({
        method: 'get',
        url: 'http://ali-news.showapi.com/newsList',
        headers: {
            Authorization: 'APPCODE be7cd12bdd0d4e04ad42835ea0c57475'
        },
        params: {
            channelId: id,
            needAllList: 'allList',
            needContent: 1,
            maxResult: '10',
            page: num
        }
    })
    return data.data.showapi_res_body.pagebean.contentlist;


}


export async function listData(id, index) {

    var data = await axios({
        method: 'get',
        url: 'http://ali-news.showapi.com/newsList',
        headers: {
            Authorization: 'APPCODE be7cd12bdd0d4e04ad42835ea0c57475'
        },
        params: {
            channelId: id,
            needAllList: 'allList',
            needContent: 1,
            maxResult: '10',
            page: index
        }
    })
    return data.data.showapi_res_body


}
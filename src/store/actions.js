/**
 * 通过 mutation 间接跟新 state 的多个方法的对象
 */

import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS} from './mutation-types'
import {reqAddress, reqFoodCategory, reqShops} from '../api'

export default {
    //异步获取地址
    async getAddress ({commit, state}) {
        //发送异步 ajax 请求
        const geohash = state.latitude +','+ state.longitude
        const result =await reqAddress(geohash)
        //根据结果提交一个 mutation
        if  (result.code === 0) {
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    //异步获取地址
    async getCategorys ({commit}) {
        //发送异步 ajax 请求
        const result =await reqFoodCategory();
        //根据结果提交一个 mutation
        if  (result.code === 0) {
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }
    },
    //异步获取地址
    async getShops ({commit, state}) {
        //发送异步 ajax 请求
        const {longitude, latitude} = state
        const result =await reqShops(longitude, latitude)
        //根据结果提交一个 mutation
        if  (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    },
}
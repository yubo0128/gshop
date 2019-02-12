/**
 * 包含 n 个接口请求的函数模块
 */
import ajax from "./ajax"
const BASE_URL = '/api'
//1. 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
//2.  获取食物的分类列表
export const reqFoodCategory = () => ajax(BASE_URL + '/index_category')
// 3. 获取商家列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL + "/shops", {longitude, latitude})
//4. 根据经纬度和关键词搜索商铺列表

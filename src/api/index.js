/**
 * 包含 n 个接口请求的函数模块
 */
import ajax from "./ajax"
//1. 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
//2.  获取食物的分类列表
export const reqFoodTypes = () => ajax('/index_category')
// 3. 获取商家列表
export const reqShops = (longitude, latitude) => ajax("/shops", {longitude, latitude}, "POST")
//4. 根据经纬度和关键词搜索商铺列表

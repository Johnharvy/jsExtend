/**
 *   location对象的扩展
 *   @extends location
 *   @module  Location/base
 */
const  LocationExtend =  {}
/**
 *  @todo 获取Url上相应字段的参数
 *  @name getQueryParam
 *  @param {string} target - 目标属性名
 *  @param {string} url - 目标字符串
 *  @return {string|null} 
 */
LocationExtend.getQueryParam = (target, url) => {
    const reg = new RegExp(`(^|&)${target}=([^&]*)(&|$)`, "i");
    const r = (url ? (`?${url}`) : location.search).substr(1).match(reg);
    if (r != null) {
      return unescape(decodeURIComponent(r[2])).replace(/\/$/i, '');
    }
    return null;
}




export default LocationExtend

/**
 *   原对象的扩展
 *   @extends Object
 *   @module  Object/base
 */
const  ObjectExtend =  {}
    /**
     *  @todo 检测基本数据类型数据集合是否包含某项基本类型数据检测目标对象和自己是否某属性值相同
     *  @name  compareInprop
     *  @param {object}  target - 目标对象
     *  @param {string}  prop -   目标属性
     *  @return {boolean} 
     */
    ObjectExtend.compareInprop = function(target, prop){
       if(this[prop] && target[prop] && this[prop] === target[prop]){
           return true
       }
       return false
    }

    /**
     *  @todo 检测目标值是否是对象类型
     *  @name isObject
     *  @param {Object} target - 目标数据
     *  @return {boolean} 
     */
    ObjectExtend.isObject = (target) => {
        if (Object.prototype.toString.call(target) === '[object Object]') return true
        return false
    }
    
 export default ObjectExtend
 
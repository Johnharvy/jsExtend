/**
 *   数组对象的扩展
 *   @extends Array
 *   @module Array/base
 */
  const  ArrayExtend =  {}
   /**
    *  @todo 检测基本数据类型数据集合是否包含某项基本类型数据
    *  @name contains
    *  @param {string|number|boolean|null|undefined} target - 目标数据
    *  @return {boolean} 
    */
   ArrayExtend.contains = (target) => {
      return this.some(item => {
          return item === target
      })  
   }

   /**
    *  @todo 检测目标值是否是数组类型
    *  @name isArray
    *  @param {Array} target - 目标数据
    *  @return {boolean} 
    */
   ArrayExtend.isArray = (target) => {
      if (Object.prototype.toString.call(target) === '[object Array]') return true
      return false
   }
   
export default ArrayExtend

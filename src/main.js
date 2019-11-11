import  ArrayExtend  from  './Array/base.js' //数组
import  ObjectExtend  from  './Object/base.js' //对象
import  LocationExtend  from  './Location/base.js' //location对象


/* 扩展配置进来,所有配置在这里按照固定格式配进来就好 */
const MapConfigs = [
   [Array,  ArrayExtend],  //数组
   [Object, ObjectExtend], //object
   [Location, LocationExtend] //浏览器环境的location对象
]

/* 原生映射 */
MapConfigs.map(native => {
    if(typeof native[0] === 'function' && typeof native[1] === 'object'){
      extendJsNative(native[0],native[1])
    }
})

/**
 * @todo  扩展js的原生对象
 * @param {object} nativeObject  - 原生的对象
 * @param {object} objExtend   - 扩展的对象
 */
function extendJsNative(nativeObject, objExtend){
   if( nativeObject && nativeObject.prototype){
      Object.assign(nativeObject.prototype, objExtend)
   }
}



 


import  ArrayExtend  from  './Array/base.js' //数组
import  ObjectExtend  from  './Object/base.js' //对象

/* 数组对象扩展 */
if(Array && Array.prototype){
   Object.assign(Array.prototype, ArrayExtend)
}

/* 原对象扩展 */
if( Object && Object.prototype){
    Object.assign(Object.prototype, ObjectExtend)
 }


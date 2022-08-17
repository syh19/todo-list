/*
 * @Author: 
 * @Date: 2022-08-17 18:44:24
 * @LastEditors: 
 * @LastEditTime: 2022-08-17 18:44:39
 * @Description: 
 */
declare module 'uuid' {
  const content: any
  /// 这里的 content 可以根据自己的需要，添加需要的类型，这的话可以让 ts 更好的提示
  /**
  type content = {
    test: string
  }
 */
  export = content
}
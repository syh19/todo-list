/*
 * @Author: 
 * @Date: 2022-08-17 18:58:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-17 19:02:36
 * @Description: 
 */

/**
 * @description: 生成指定长度的随机字符串
 * @param {number} e  字符串的长度
 * @return {*}
 * @author: 
 */
export function randomString(e: number = 32): string {
  var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
    a = t.length,
    n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n
}
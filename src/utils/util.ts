/**
 * @description: 生成指定长度的随机字符串
 * @param {number} num  字符串的长度
 * @return {*}
 * @author: 
 */
export function randomString(num: number = 32): string {
  let t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"
  let len = t.length
  let str = ""
  for (let i = 0; i < num; i++) {
    str += t.charAt(Math.floor(Math.random() * len));
  }
  return str
}
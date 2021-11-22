// 获取当前时间
export function getTime (fmt) {
  const date = new Date()
  // 1、获取年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

// 时间格式
// date 时间戳
export function formatDate (date, fmt) {
  // 1、获取年份
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
};

// 当前时间递减
export function getDecrease (heaven, fmt) {
  const year = getTime('yyyy')
  const month = getTime('dd') - heaven > 0 ? getTime('MM') : (getTime('MM') - 1) >= 10 ? (getTime('MM') - 1) : '0' + (getTime('MM') - 1)
  // let month = getTime('dd') - heaven > 0 ? getTime('MM') + '-' + (getTime('dd') - heaven) : (('0' + (getTime('MM') - 1)) + '-' + ((getTime('MM') % 2 == 0 ? (getTime('MM') != 8 ? 30 : 31) : 31) + (getTime('dd') - heaven)))
  const day = getTime('dd') - heaven > 0 ? (getTime('dd') - heaven) : ((getTime('MM') % 2 === 0 ? (getTime('MM') !== 8 || getTime('MM') !== 10 || getTime('MM') !== 12 ? 30 : 31) : 31) + (getTime('dd') - heaven))

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (year + '').substr(4 - RegExp.$1.length))
  }

  const o = {
    'M+': month,
    'd+': day
  }

  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, str)
    }
  }
  // return (year + '-' + month + '-' + day)
  return fmt
}

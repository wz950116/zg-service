import gcoord from 'gcoord'

export function isJSON(val) {
  if (typeof val !== 'string') {
    return false
  }
  try {
    const obj = JSON.parse(val)
    if (Object.prototype.toString.call(obj) === '[object Object]') {
      return true
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}

export function isEmptyObject(obj) {
  for (var str in obj) {
    return false
  }
  return true
}
export function debounce(func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * 时间格式化。年：yyyy；月：M|MM；日：d|dd；时：h|hh；分：m|mm；秒：s|ss
 * @param {Date|String|Number} time 可以通过new Date转换成时间的数据
 * @param {String} pattern 年月日格式字符串。例：yyyy年MM月dd => 2010年05月25； yyyy-M-d => 2010-5-25
 */
export function formatTime(time, pattern) {
  const _pattern = pattern || 'yyyy-MM-dd hh:mm:ss'
  const date = typeof time === 'string' ? new Date(time) : time
  if (!date || date.toString() === 'Invalid Date') {
    // console.error('日期转换失败')
    return ''
  }
  const timeObj = {
    yyyy: date.getFullYear(),
    MM: `0${date.getMonth() + 1}`.slice(-2),
    M: date.getMonth() + 1,
    dd: `0${date.getDate()}`.slice(-2),
    d: date.getDate(),
    hh: `0${date.getHours()}`.slice(-2),
    h: date.getHours(),
    mm: `0${date.getMinutes()}`.slice(-2),
    m: date.getMinutes(),
    ss: `0${date.getSeconds()}`.slice(-2),
    s: date.getSeconds()
  }
  const timeStr = _pattern.replace(/(yyyy|MM|M|dd|d|hh|h|mm|m|ss|s)+/g, function(match, p) {
    const value = timeObj[p]
    return value
  })
  return timeStr
}

/**
 * 将数组转换成符合组件需求的新数组
 * @param {Array} arr 要转换成符合picker组件数据格式的数组
 * @param {Object} alias 字段别名
 */
export function arrToOptions(arr, alias = {}) {
  if (!(arr instanceof Array)) {
    return
  }
  const textKey = alias.text || 'text'
  const valueKey = alias.value || 'value'
  return arr.map(item => {
    return {
      [textKey]: item[textKey] || item,
      [valueKey]: item[valueKey] || item
    }
  })
}

// 地图坐标转换
export function transformPoint(target, type = 'WGS84', targetType = 'AMap') {
  return gcoord.transform(target, gcoord[type], gcoord[targetType])
}

// 获取当月天数
export function monthDays() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return new Date(year, month, 0).getDate()
}

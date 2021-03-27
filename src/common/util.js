export function debounce(fun, delay) {
    var timer = null;
    return function(...pramas) {
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        fun.apply(this, ...pramas)
      }, delay)
    }
  }

export function formatDate(date, fmt) {
  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  let obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (let k in obj) {
    if(new RegExp(`(${k})`).test(fmt)) {
      const str = obj[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)? str: addLeftZero(str));
    }
  }

  function addLeftZero(str) {
    return ('00' + str).substr(str.length);
  }

  return fmt;
}
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const cutTime = date => {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const minutes = hour * 60 + minute
}

const setArray = minutes => {
  let hour = ''
  let minute = ''
  for (let i = 0; i <= minutes/15; i++) {
    
  }
}

module.exports = {
  formatTime: formatTime
}

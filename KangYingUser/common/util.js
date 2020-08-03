export const friendlyDate = (timestamp) => {
	var formats = {
		'year': '%n% 年前',
		'month': '%n% 月前',
		'day': '%n% 天前',
		'hour': '%n% 小时前',
		'minute': '%n% 分钟前',
		'second': '%n% 秒前',
	};

	var now = Date.now();
	var seconds = Math.floor((now - timestamp) / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	var months = Math.floor(days / 30);
	var years = Math.floor(months / 12);

	var diffType = '';
	var diffValue = 0;
	if (years > 0) {
		diffType = 'year';
		diffValue = years;
	} else {
		if (months > 0) {
			diffType = 'month';
			diffValue = months;
		} else {
			if (days > 0) {
				diffType = 'day';
				diffValue = days;
			} else {
				if (hours > 0) {
					diffType = 'hour';
					diffValue = hours;
				} else {
					if (minutes > 0) {
						diffType = 'minute';
						diffValue = minutes;
					} else {
						diffType = 'second';
						diffValue = seconds === 0 ? (seconds = 1) : seconds;
					}
				}
			}
		}
	}
	return formats[diffType].replace('%n%', diffValue);
}


export const formatDate = (e, sign) => {
	sign = sign || '-'
	const time = new Date(e)
	let str = ''
	str += time.getFullYear()
	str += sign
	const month = time.getMonth() + 1
	str += month < 10 ? '0' + month : month
	const date = time.getDate()
	str += sign
	str += date < 10 ? '0' + date : date
	return str
}

export const formatMinute = (e, sign) => {
	sign = sign || ':'
	const time = new Date(e)
	let str = ''
	const h = time.getHours()
	str += h < 10 ? '0' + h : h
	const m = time.getMinutes()
	str += sign
	str += m < 10 ? '0' + m : m
	return str
}

export const saveLoginMessage = (uni, e = {}) => {
	/* e = object */
	uni.setStorageSync('LOGIN_MESSAGE', e)
}

export const readLoginMessage = (uni) => {
	return (uni.getStorageSync('LOGIN_MESSAGE') || {})
}
// 存储药品搜索历史
export const saveSearchKey = (uni, e = '') => {
	/* e = string */
	let array = uni.getStorageSync('SEARCH_KEY') || []
	let hasThisKey = false
	array.forEach(item => {
		if (item === e) {
			hasThisKey = true
		}
	})
	if (!hasThisKey) {
		array.push(e)
	}
	if (array.length > 15) {
		array = array.splice(array.length - 15, 15)
	}
	uni.setStorageSync('SEARCH_KEY', array)
}
// 读取药品搜索历史
export const readSearchKey = (uni) => {
	return (uni.getStorageSync('SEARCH_KEY') || [])
}
// 清空药品搜索历史
export const clearSearchKey = (uni) => {
	uni.setStorageSync('SEARCH_KEY', [])
}

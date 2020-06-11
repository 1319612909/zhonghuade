import myRequest from '../utils/request.js'
// api 请求方法
export const getBill = (data) => {
	return myRequest({
		url: "",
		data,
		method:"POST"
	})
}
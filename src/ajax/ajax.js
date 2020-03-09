import '../mock'
export default {
	getUser(params = {}){
		let url = '/user/getUser'
		let method = 'GET'
		return axios(url,method,params)
	},
	getBanner(params = {}){
		let url = '/first/getBanner'
		let method = 'GET'
		return axios(url,method,params)
	},
	getTabbar(params = {}){
		let url = '/first/getTabbar'
		let method = 'GET'
		return axios(url,method,params)
	},
	getCourse(params = {}){
		let url = '/first/getCourse'
		let method = 'GET'
		return axios(url,method,params)
	},
}

function axios(url,method,params){
	return new Promise((reslove,reject)=>{
		wx.request({
			method: method,
			url: url,
			data: params,
			success(res) {
				console.log(res.data);
				reslove(res.data)
			},
			fail(err) {
				console.log(err);
				reject(err)
			},
			complete(res) {
				console.log(res);
				
			}
		})
	})
}
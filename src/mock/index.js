// import {Mock} from './wbMock'
var {Mock} = require('./WxMock.js')
export default {
  getUser: Mock.mock('/user/getUser',{
    code: '200',
    data: {
      userName: 'kim',
      userId: '1',
      userFace: ''
    }
  }),
  getBanner: Mock.mock('/first/getBanner',{
    code: '200',
    data: [
      {
        id: 1,
        url:
          "http://n.sinaimg.cn/sinacn12/780/w500h280/20180507/a4b2-hacuuvu3304564.jpg"
      },
      {
        id: 2,
        url:
          "http://5b0988e595225.cdn.sohucs.com/images/20181207/de4f91e931be46638408ae96fed99077.jpeg"
      },
      {
        id: 3,
        url: "http://pic.87g.com/upload/2017/0727/2017072714203407.jpg"
      },
      {
        id: 4,
        url:
          "http://img5.imgtn.bdimg.com/it/u=2087733867,4014555066&fm=26&gp=0.jpg"
      }
    ]
  }),
  getTabbar: Mock.mock('/first/getTabbar',{
    code: '200',
    data: [
      {name: '精品课', id: 1},
      {name: '职场', id: 2},
      {name: '管理', id: 3},
      {name: '心灵', id: 4},
      {name: '家庭', id: 5},
      {name: '人文', id: 6},
      {name: '经济', id: 7},
      {name: '体育', id: 8}
    ]
  }),
  getCourse: Mock.mock('/first/getCourse',{
    code: '200',
    data: [
      {
        name: 'PHP从入门到放弃',
        teach: 'kim',
        total: 30,
        price: 21,
        person: 82,
        id: 1
      },
      {
        name: 'JavaScript高级程序设计',
        teach: 'tom',
        total: 72,
        price: 45,
        person: 34,
        id: 2
      }
    ]
  })
}
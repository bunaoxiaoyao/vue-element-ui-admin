import request from '@/utils/request'

export function myExample(data) {
  return request({
    url: '/TestApi/Api/WeChat/MyExample',
    method: 'post',
    data
  })
}

// 获取类目
export function getListerDetail() {
  return request({
    url: 'http://localhost:6029/Lister/GetListerDetail',
    method: 'get',
    params: {
      listerId: 1213631
    }
  })
}

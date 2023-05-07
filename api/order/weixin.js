import request from '@/utils/request'

const api_name = `/api/order/weixin`

export default {
  // 生成微信支付二维码
  createNative(orderId) {
    return request({
      url: `${api_name}/createNative/${orderId}`,
      method: 'get'
    })
  },
  queryPayStatus(orderId) {
    return request({
      url: `${api_name}/queryPayStatus/${orderId}`,
      method: 'get'
    })
  }
}

//logs.js
import { formatTime } from '../../providers/util'

Page({
  data: {
    logs: [] as string[]
  },
  //事件处理函数
  bindViewClick() {
    wx.navigateTo({
      url: '../news/news'
    })
  },
  onLoad() {
    this.setData!({
      logs: (wx.getStorageSync('logs') || []).map((log: number) => {
        return formatTime(new Date(log))
      })
    })
  },
})

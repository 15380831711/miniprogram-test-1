//logs.js
import { formatTime } from '../../providers/util';

import { AlterServiceProvider } from '../../providers/alert-service/alter-service';
const appService = new AlterServiceProvider();

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
  onLoad(option:any) {
    console.log("接收参数：");
    console.log(option);
    this.setData!({
      logs: (wx.getStorageSync('logs') || []).map((log: number) => {
        return formatTime(new Date(log))
      })
    })
  },

  useAppSrv(){
      appService.alert(" AppService.alert() ");
  }
  
})

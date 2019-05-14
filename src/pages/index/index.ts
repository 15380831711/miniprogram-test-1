//index.js
//获取应用实例
import { IMyApp } from '../../app';

import { AppServiceProvider } from '../../providers/app-service/app-service';

const app = getApp<IMyApp>();

const appService = new AppServiceProvider();

Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },

    //事件处理函数
    bindViewTap() {
        // wx.navigateTo({
        //     url: '../news/news?id=666666'
        // })
        //appService.push("../news/news?id=666666",{name:'ty','sex':'难'});
        appService.push("../news/news");
    },

    switchTab() {
        wx.switchTab({
            url: '../logs/logs'
        })
    },

    onLoad() {
        if (app.globalData.userInfo) {
            this.setData!({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = (res) => {
                this.setData!({
                    userInfo: res,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData!({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },

    getUserInfo(e: any) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData!({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },

    httpTest: function () {
        //发起网络请求
        // wx.request({ url: 'http://192.168.2.222/base_jfinal_maven/api/mall/product', 
        // header: { 'content-type': 'application/json' }, data: { name: 'ty' }, success(res: any) { console.log(res.data) } });
        appService.get('http://192.168.2.222/base_jfinal_maven/api/mall/product', ret => {
            console.log(ret);
        }, true);
    },

    httpTest2() {
        this.httpTest();
    },

    startRefresh() {
        wx.startPullDownRefresh()
    },
    stopRefresh() {
        wx.stopPullDownRefresh()
    },

    onPullDownRefresh() {
        console.log("onPullDownRefresh....");
        wx.showNavigationBarLoading() //在标题栏中显示加载
        setTimeout(function () {
            wx.hideNavigationBarLoading() //完成停止标题栏中的加载
            wx.stopPullDownRefresh() //停止下拉刷新
        }, 15000);
    },

    onReachBottom() {
        console.log("监听用户上拉触底事件，用于上拉加载更多...");
        wx.showNavigationBarLoading() //在标题栏中显示加载
        setTimeout(function () {
            wx.hideNavigationBarLoading() //完成停止标题栏中的加载
        }, 1500);
    },

    startScroll() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        })
    },
    showTip() {
        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
        })
    },
    showToast() {
        wx.showToast({
            title: '成功',
            icon: 'none',
            duration: 2000
        })
    },
    showLoading() {
        wx.showLoading({
            title: '加载中...',
        })
        setTimeout(function () {
            wx.hideLoading()
        }, 2000)
    },
    showModal() {
        wx.showModal({
            title: '提示',
            content: '这是一个模态弹窗',
            showCancel: true,
            success(res) {
                if (res.confirm) {
                    console.log('用户点击确定')
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }
            }
        })
    },
})
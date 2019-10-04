//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name:'复制的内容'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  calling: function () {
    //  微信自带一件拨打电话
    //微信小程序自带  wx 代表微信小程序封装好的方法
    //makePhoneCall  跳转手机拨号页 可以自带参数 phoneNumber  是自带参数
    wx.makePhoneCall({

      phoneNumber: '17744524232',//手机号
      //成功回调
      success: function () {

        console.log("拨打电话成功！")

      },
      //失败回调
      fail: function () {

        console.log("拨打电话失败！")

      }

    })
  },

  copyText: function (e) {
    //e 是刚才往方法里传的参数
    console.log(e)
    // wx.setClipboardData  微信小程序里自带方法 复制 
    // data 是需要复制的内容
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      // 成功回调
      success: function (res) {
        //wx.getClipboardData  微信小程序自带方法 弹出框 
        wx.getClipboardData({
          success: function (res) {
            console.log(res)
            // wx.showToast 显示 微信小程序自带方法 tiltle 内容
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },

  
  //onShareAppMessage  触发微信自转发
  onShareAppMessage: function (ops) {
    // 判断是否 是页面的buttom 转发按钮
    if (ops.from === 'button') {
      // 来自页面内转发按钮
      console.log(ops)
    }
    // 弹出框 内容设置
    return {
      title: '转发dom',
      path: `pages/index/index`,
      success: function (res) {
        // 转发成功
        console.log(res)
        console.log("转发成功:" + JSON.stringify(res));
        var shareTickets = res.shareTickets;
        // if (shareTickets.length == 0) {
        //   return false;
        // }
        // //可以获取群组信息
        // wx.getShareInfo({
        //   shareTicket: shareTickets[0],
        //   success: function (res) {
        //     console.log(res)
        //   }
        // })
      },
      //转发失败 回调
      fail: function (res) {
        // 转发失败
        console.log("转发失败:" + JSON.stringify(res));
      }
    }
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

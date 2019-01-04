// pages/lanya/lanya.js www.vxzsk.com V型知识库原创
Page({

  /**
     * 页面的初始数据
     */
  data: {
    connectionStatus:'成功'
  },

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
  },

  /**
     * 生命周期函数--监听页面初次渲染完成
     */
  onReady: function () {
  },

  /**
     * 生命周期函数--监听页面显示
     */
  onShow: function () {
  },

  /**
     * 生命周期函数--监听页面隐藏
     */
  onHide: function () {
  },

  /**
     * 生命周期函数--监听页面卸载
     */
  onUnload: function () {
  },

  /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
  onPullDownRefresh: function () {
  },

  /**
     * 页面上拉触底事件的处理函数
     */
  onReachBottom: function () {
  },

  /**
     * 用户点击右上角分享
     */
  onShareAppMessage: function () {
  },
  // 初始化蓝牙适配器
  lanya1: function () {
    var that = this;
    wx.openBluetoothAdapter({
      success: function (res) {
        console.log('初始化蓝牙适配器返回' + JSON.stringify(res))
        //页面日志显示
        that.setData({
          msg: JSON.stringify(res)
        })
      },
      fail: function (res) {
        console.log('初始化蓝牙适配器失败' + JSON.stringify(res))
      }
    })
  },
  // 本机蓝牙适配器状态
  lanya2: function () {
    var that = this;
    wx.getBluetoothAdapterState({
      success: function (res) {
        //页面日志显示
        that.setData({
          msg: "本机蓝牙适配器状态" + "/" + JSON.stringify(res.errMsg) + "==是否可用：" + res.available

        })
      },
      fail: function (res) {
        //页面日志显示
        that.setData({
          msg: "本机蓝牙适配器状态" + "/" + JSON.stringify(res.errMsg) + "==是否可用：" + res.available


        })

      }
    })
  },
  //搜索设备
  lanya3: function () {
    var that = this;
    wx.startBluetoothDevicesDiscovery({
      success: function (res) {
        that.setData({
          msg: "搜索设备" + JSON.stringify(res),
        })
        console.log('搜索设备返回' + JSON.stringify(res))
      }
    })
  },
  // 获取所有已发现的设备
  lanya4: function () {
    var that = this;
    wx.getBluetoothDevices({
      success: function (res) {
        that.setData({
          msg: "搜索设备" + JSON.stringify(res.devices),
          devices: res.devices
        })
        console.log('搜到的蓝牙设备数目：' + res.devices.length)
        console.log('获取到周边搜到的设备信息：' + JSON.stringify(res.devices))
      }
    })
  }
})
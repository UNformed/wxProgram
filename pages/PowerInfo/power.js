// pages/PowerInfo/power.js
const format = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    power: "",
    powerTypes: ["当日正向总电量", "当日正向峰电量", "当日正向平电量", "当日正向谷电量", "当日反向总电量", "当日反向峰电量", "当日反向平电量", "当日反向谷电量"],
    powerTypesValue: [{
      time: "当日正向总电量",
      value: 'value'
    },
    {
      name: "当日正向峰电量",
      value: 'value'
    },
    {
      name: "当日正向平电量",
      value: 'value'
    },
    {
      name: "当日正向谷电量",
      value: 'value'
    },
    {
      name: "当日反向总电量",
      value: 'value'
    },
    {
      name: "当日反向峰电量",
      value: 'value'
    },
    {
      name: "当日反向平电量",
      value: 'value'
    },
    {
      name: "当日反向谷电量",
      value: 'value'
    }],
    powerIndex: 0,
    currentTime: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentTime: format.formatTimes(new Date())
    })
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
  bindPowerTypeChange: function (e) {
    this.setData({
      powerIndex: e.detail.value
    })
  }
})
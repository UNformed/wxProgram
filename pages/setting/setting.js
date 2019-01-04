// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ammeterType: 'singleType',             // 电表类型

    singlePrice: 0.4983,                   // 单费率电价
    peakPrice: 0.4983,                     // 峰电价
    levelPrice: 0.4983,                    // 平电价
    valleyPrice: 0.4983,                   // 谷电价

    prepaid: false,                         // 是否预付费
    rates: "single",                        // 默认单费率

    ammeterNums: [1, 2, 3, 4, 5, 6],        // RT倍率范围
    ammeterIndex: 0,                        // 默认第一个
    ammeterNum: 1,                          // 电表数量

    ctRates: ['1', '50/5', '100/5', '自定义'],     // CT倍率范围
    ctRatesIndex: 0,                              // 默认第一个
    ctRatesShow: true,                            // 是否显示选择框
    ctRate: 1,                                    // CT倍率默认为1

    rtRates: ['1', '50/5', '100/5', '自定义'],     // RT倍率范围
    rtRatesIndex: 0,                              // 默认第一个
    rtRatesShow: true,                            // 是否显示选择框
    rtRate: 1,                                    // RT倍率默认为1
    ammeterName: ''
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
  // 电表类型改变
  ammeterTypeChange: function (e) {
    this.setData({
      ammeterType: e.detail.value
    })
    console.log(this.data.ammeterType)
  },
  // 是否预付费
  prepaidChange: function (e) {
    if (e.detail.value == 'prepaid') {
      this.setData({
        prepaid: true
      })
    } else {
      this.setData({
        prepaid: false
      })
    }
    console.log(this.data.prepaid)
  },
  // 选择单费率或复费率
  ratesChange: function (e) {
    if (e.detail.value == 'singleRates') {
      this.setData({
        rates: "single"
      })
    } else {
      this.setData({
        rates: "complex"
      })
    }
    console.log(this.data.rates)
  },
  // 输入电表数量
  bindtAmmeterNumChange: function (e) {
    this.setData({
      ammeterIndex: e.detail.value,
      ammeterNum: this.data.ammeterNums[e.detail.value]
    })
    console.log(this.data.ammeterNum)
  },
  // 改变CT倍率
  bindctRatesChange: function (e) {
    if (e.detail.value == this.data.rtRates.length - 1) {
      this.setData({
        ctRatesShow: false
      })
    } else {
      this.setData({
        ctRatesIndex: e.detail.value,
        ctRate: this.data.ctRates[e.detail.value]
      })
    }
    console.log(this.data.ctRate)
  },
  // 改变RT倍率
  bindrtRatesChange: function (e) {
    if (e.detail.value == this.data.rtRates.length-1) {
      this.setData({
        rtRatesShow: false
      })
    } else {
      this.setData({
        rtRatesIndex: e.detail.value,
        rtRate: this.data.rtRates[e.detail.value]
      })
    }
    console.log(this.data.rtRate)
  },
  // 输入自定义的RT倍率
  rtRateInput: function (e) {
    this.setData({
      rtRate: e.detail.value
    })
    console.log(this.data.rtRate)
  },
  // 输入自定义的CT倍率
  ctRateInput: function (e) {
    this.setData({
      ctRate: e.detail.value
    })
    console.log(this.data.ctRate)
  },
  // 输入电表名称
  ammeterNameInput: function (e) {
    this.setData({
      ammeterName: e.detail.value
    })
    console.log(this.data.ammeterName)
  },
  // 输入单费率电价
  singlePriceInput: function (e) {
    this.setData({
      singlePrice: e.detail.value
    })
    console.log(this.data.singlePrice)
  },
  // 输入峰值电价
  peakPriceInput: function (e) {
    this.setData({
      peakPrice: e.detail.value
    })
    console.log(this.data.peakPrice)
  },
  // 输入平值电价
  levelPriceInput: function (e) {
    this.setData({
      levelPrice: e.detail.value
    })
    console.log(this.data.levelPrice)
  },
  // 输入谷值电价
  valleyPriceInput: function (e) {
    this.setData({
      valleyPrice: e.detail.value
    })
    console.log(this.data.valleyPrice)
  },
  validate: function (value) {
    if(String(value).split('.').length > 2) {
      return false
    } else {
      return true
    }
  }
})
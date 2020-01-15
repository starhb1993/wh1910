// pages/home/home.js
Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    count:2020,
    list: ["付雨田","华晟","何长健","王磊","何博"],
    flag:!!0,
    "bnrUrl": [{
      "url": "https://zuozhaoxi.com/base/img/1.jpg"
    }, {
        "url": "https://zuozhaoxi.com/base/img/2.jpg"
    }, {
        "url": "https://zuozhaoxi.com/base/img/3.jpg"
    }, {
        "url": "https://zuozhaoxi.com/base/img/4.jpg"
    }]
  },
  changeFlag(){
    this.setData({
      flag:!this.data.flag
    })
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

  }
})
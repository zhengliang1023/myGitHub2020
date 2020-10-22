// pages/menu/menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    phone:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接收参数 20020930
    console.log("options中的数据："+JSON.stringify(options));
    this.setData({
      name:options.name,
      phone:options.phone
    });

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
/**
   * 自定义跳转方法
   */
  intro: function () {
    console.log("----intro----");
    wx.navigateTo({
      url: '../intro/intro',
    })
  },

  rule: function () {
    console.log("----rule----");
    wx.navigateTo({
      url: '../rule/rule',
    })
  },

  study: function () {
    console.log("----study----");
    wx.navigateTo({
      url: '../study/study',
    })
  },

  test: function () {
    console.log("----test----");
    wx.navigateTo({
      url: '../test/test',
    })
  },

  rank: function () {
    console.log("----rank----");
    wx.navigateTo({
      url: '../rank/rank',
    })
  },

  selReward: function () {
    console.log("----selReward----");
    wx.navigateTo({
      url: '../selReward/selReward',
    })
  },

  setup: function () {
    console.log("----setup----");
    wx.navigateTo({
      url: '../setup/setup',
    })
  },

  statistics: function () {
    console.log("----statistics----");
    wx.navigateTo({
      url: '../statistics/statistics',
    })
  },

  insert: function () {
    console.log("----insert----");
    wx.navigateTo({
      url: '../insert/insert',
    })
  },



})
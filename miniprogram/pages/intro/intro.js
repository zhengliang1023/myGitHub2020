// pages/intro/intro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
      /************ 实现文字逐个显示 ************/
      var that=this;
      var story="让大家拥有一款自己的抽奖软件*******";
      var i=0;
      var time=setInterval(function(){
          var text = story.substring(0, i);
          i++;
          that.setData({
              text: text
          });
          if (text.length == story.length) {
            //   console.log("定时器结束！");
              clearInterval(time);
          }
      },300)
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
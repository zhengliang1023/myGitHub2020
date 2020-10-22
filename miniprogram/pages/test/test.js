// pages/test/test.js
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

    this.getTestList();
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
  
  getTestList:function(){
    console("---getTestList---");
    var that=this;
    var mdata = {
      statYm: '202009',
    };
    wx.request({
      url: 'http://192.168.43.150:8000/selectPhoto',
      //url: comurl.basePath + 'bmw/shop/miniSelect',
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      data: mdata,
      success: function (res) {
        //console.log("-----" + JSON.stringify(res));
        //对数据换行进行处理
        console.log("-----len" + res.data.slist.length);
        that.setData({
          slist: res.data.slist
        });
        //console.log("-----bbb:" + that.data.slist);

      },
      
      fail: function (res) {
        console.log("error*****" + JSON.stringify(res));
      }

    });
  }


})
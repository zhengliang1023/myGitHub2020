// pages/download/download.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    by: "1000",
    bn: "999",
    hb: "+5%",
    dbl: "99%",
    tqzs: "1000",
    dbs: "999",
    wdbs: "1",
    arr: ['离离原上草', '一岁一枯荣'],
    list: [
      {
        orgNo: '银川', tgName: '小李', tgNo: '0001', pjzs: '100', paiming: '1'
      },
      {
        orgNo: '固原', tgName: '小张', tgNo: '0002', pjzs: '100', paiming: '2'
      }
    ],
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

  /*自定义方法*/
  getfilelist: function () {
    console.log("------query");
    var that = this;
    var mdata = {
      name: '11111'
    };
    wx.request({
      //url: 'http://192.168.1.4:8000/miniSelect',
      url: comurl.basePath + 'bmw/shop/miniSelect',
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      data: mdata,
      success: function (res) {
        console.log("-----" + JSON.stringify(res));
        if (res.data.data.returnCode == '1000') {
          that.setData({
            by: res.data.data.by,
            bn: res.data.data.bn,
            hb: res.data.data.hb,
            dbl: res.data.data.dbl,
            tqzs: res.data.data.tqzs,
            dbs: res.data.data.dbs,
            wdbs: res.data.data.wdbs,
            list: res.data.data.list
          });
        }
      },
      fail: function (res) {
        console.log("*****" + JSON.stringify(res));
      }

    });

  }




})
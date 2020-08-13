// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    password:"",
    info:"",
    url:"",
    tfile:""
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

  getName:function(e){
    var name=e.detail.value;
    this.setData({
      name:name
    });

  },
  getPass: function (e) {
    var pass = e.detail.value;
    this.setData({
      password: pass
    });

  },
  getFile: function (){
    var openid=wx.getStorageSync("openid");
    var that=this;
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths=res.tempFilePaths;
        console.log("getFile-------" + tempFilePaths[0]);
        that.setData({
          url: tempFilePaths
        });

        /*选择完立马上传*/
        /*
        wx.uploadFile({
          url: 'http://192.168.43.150:8000/setUpload',////此处换上你的接口地址
          filePath: tempFilePaths[0],
          name: 'imgFile1',
          header: {
            "Content-Type": "multipart/form-data",
            'accept': 'application/json'
          },
          formData: {
            "name": "name",
            "password": "password",
            "info": "info",
            "url": "tfile.name",
            "tfile": "bs"
          },
          success: function (res) {
            console.log(res);
          }
        })
        */


      },
    })

  },
  getMess: function (e) {
    var mess = e.detail.value;
    this.setData({
      info: mess
    });

  },

  upload:function(){
    console.log("----upload");
    var that = this;
    var mdata = {
      "name": that.data.name,
      "password": that.data.password,
      "info": that.data.info,
      "url": that.data.url[0],
      "tfile": that.data.tfile
    };
    var tempFilePaths = that.data.url;

    wx.uploadFile({
      url: 'http://192.168.43.150:8000/miniUploadFile',////此处换上你的接口地址
      filePath: tempFilePaths[0],
      name: 'imgFile1',
      header: {
        "Content-Type": "multipart/form-data",
        'accept': 'application/json'
      },
      formData:{
        "name": that.data.name,
        "password": that.data.password,
        "info": that.data.info,
        "url": that.data.url[0],
        "tfile": that.data.tfile
      },
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log("*****" + JSON.stringify(res));
      }

    })
  },


  reset: function(){
    console.log("----reset");
  }





})
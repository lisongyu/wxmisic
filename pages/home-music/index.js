// pages/home-music/index.js
import { getBanners } from '../../service/api_music'
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'
import { rankingStore } from '../../store/index'

const throttleQueryRect = throttle(queryRect, 1000)

Page({
  data: {
    swiperHeight: 0,
    banners: []
  },

  onLoad: function (options) {
    // 获取页面数据
    this.getPageData()


      // 发起共享数据的请求
      rankingStore.dispatch("getRankingDataAction")

      // 从store获取共享的数据
      rankingStore.onState("hotRanking", (res) => {
        if (!res.tracks) return
        const recommendSongs = res.tracks.slice(0, 6)
        this.setData({ recommendSongs })
      })
  },

  // 网络请求
  getPageData: function() {
    getBanners().then(res => {
      this.setData({ banners: res.banners })
    })
  },

  // 事件处理
  handleSearchClick: function() {
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },

  handleSwiperImageLoaded: function() {
    // 获取图片的高度(如果去获取某一个组件的高度)
    throttleQueryRect(".swiper-image").then(res => {
      const rect = res[0]
      this.setData({ swiperHeight: rect.height })
    })
  },

  onUnload: function () {

  }
})
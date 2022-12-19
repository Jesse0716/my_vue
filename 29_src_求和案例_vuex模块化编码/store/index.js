// 该文件用于创建vuex中最核心的store

// 引入Vuex
import Vuex from 'vuex'
import Vue from 'vue'

import countOptions from './count'
import personOptions from './person'
// 使用vuex
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
  modules: {
    countAbout: countOptions,
    personAbout: personOptions
  }
})

// 该文件用于创建vuex中最核心的store

// 引入Vuex
import Vuex from 'vuex'
import Vue from 'vue'
// 使用vuex
Vue.use(Vuex)

// 准备actions-用于响应组件中的动作
const actions = {
  add(context, value) {
    console.log('actions中的add被调用了', context, value)
    context.commit('ADD', value)
  },
  dec(context, value) {
    console.log('actions中的dec被调用了', context, value)
    context.commit('DEC', value)
  },
  addOdd(context, value) {
    console.log('actions中的addOdd被调用了', context, value)
    if (context.state.sum % 2) {
      context.commit('ADD', value)
    }
  },
  addWait(context, value) {
    console.log('actions中的addWait被调用了', context, value)
    setTimeout(() => {
      context.commit('ADD', value)
    }, 500)
  }
}
// 准备mutations-用于操作数据(state)
const mutations = {
  ADD(state, value) {
    console.log('mutations中的ADD被调用了', state, value)
    state.sum += value
  },
  DEC(state, value) {
    console.log('mutations中的DEC被调用了', state, value)
    state.sum -= value
  },
  ADD_PERSON(state, value) {
    console.log('mutations中的ADD_PERSON被调用了', state, value)
    state.personList.unshift(value)
  }
}
// 准备state-用于存储数据
const state = {
  sum: 0,
  school: '尚硅谷',
  subject: '前端',
  personList: [
    { id: '001', name: '张三' }
  ]
}
// 用于对state中数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10
  }
}
// 创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})

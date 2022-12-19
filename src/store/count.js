export default {
  namespaced: true,
  actions: {
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
  },
  mutations: {
    ADD(state, value) {
      console.log('mutations中的ADD被调用了', state, value)
      state.sum += value
    },
    DEC(state, value) {
      console.log('mutations中的DEC被调用了', state, value)
      state.sum -= value
    }
  },
  state: {
    sum: 0,
    school: '尚硅谷',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  },
}
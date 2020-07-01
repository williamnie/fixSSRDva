/*
 * @Description:
 * @Author: xiaobei
 * @Date: 2020-06-04 16:52:55
 * @LastEditTime: 2020-07-01 11:31:29
 */

const fs = require('fs')

let tep = (i) => {
  return `
  export default {
    namespace: 'global${i}' ,

    state: {
      profile:null,
      data: null,
    data2: null
    },

    effects: {
      * getPerson({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'getPersonSuccess', payload: { data: 111 } });
      },
      * getPerson1({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'getPersonSuccess1', payload: { data: 111 } });
      },
      * getPerson2({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'getPersonSuccess2', payload: { data: 111 } });
      },
      * getPerson3({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'getPersonSuccess3', payload: { data: 111 } });
      },
    },

    reducers: {
      getPersonSuccess(state, { payload: { data } }) {
        state.data = {
          title: 'Hello World',
        }
      },
      getPersonSuccess1(state, { payload: { data } }) {
        state.data2 = {
          title: 'Hello data2',
        };
      },
      getPersonSuccess2(state, { payload: { data } }) {
        state.profile = 111;
      },
      getPersonSuccess3(state, { payload: { data } }) {
        state.profile = 111;
      },
    },
  };
  `

}
const md = []
let im = ''
for (let i = 0; i < 100; i++) {
  te = tep(i)
  md.push(`global${i}`)
  im = im + `import global${i} from './global${i}.js';\n`
  fs.writeFileSync(`./web/models/global${i}.js`, te)
}

const itp = `${im}\nexport default [${md}]`;
fs.writeFileSync(`./web/models/index.js`, itp)

// const im = `
// import page from './page'
// import news from './news'

// export default [
//   page,
//   news
// ]

// `
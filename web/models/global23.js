
  export default {
    namespace: 'global23' ,

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
  
/*
 * @Description: 
 * @Author: xiaobei
 * @Date: 2020-06-30 22:07:52
 * @LastEditTime: 2020-07-01 15:05:00
 */
import dva from 'dva'
import models from './models'
import dvaImmer from 'dva-immer'
import { cloneDeep } from 'lodash'
import { stat } from 'fs'

let dvaT = null
let model = null

const originModelsData = {}


const initDva = (options) => {
    console.time('initDva')
    if (dvaT) {
        console.time('claer')
        dvaT._store.dispatch({ type: 'RESET' });
        console.timeEnd('claer')
        /**
         *  dvaT._store.getState()这里出来的值就不对了，
         *  也就是说我要找到getState是从哪里拿到的数据，把那部分数据给他清空
         */
        // console.log('-----dvaT', dvaT._store.getState());
        return dvaT
    }
    const app = dva({
        ...options,
        onReducer: reducer => {
            return (state, action) => {
                const newState = action.type === 'RESET' ? originModelsData : reducer(state, action);
                return { ...newState, routing: newState.routing };
            };
        }
    })
    models.forEach((m) => {
        originModelsData[`${m.namespace}`] = m.state;
        app.model(m)
    })
    app.use(dvaImmer())
    // app.use(onReducer(clear))
    app.router(() => { })
    app.start()
    // console.log('app', app);
    // model = cloneDeep(app._models)
    dvaT = app
    console.timeEnd('initDva')
    return app
}

export default initDva;
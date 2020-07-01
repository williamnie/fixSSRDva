/*
 * @Description: 
 * @Author: xiaobei
 * @Date: 2020-06-30 22:26:33
 * @LastEditTime: 2020-07-01 14:36:24
 */
import React from 'react';
import { connect } from 'dva'
const Home = (props) => {
  const { data2 } = props;
  // console.log('------------render', props.data);
  return (
    <div>
      ddddd
      <div> {data2 && data2.title}</div >
    </div>

  )
}
Home.getInitialProps = async ({ store }) => {
  // if (!ctx.isServer) {
  //   return
  // }
  await store.dispatch({ type: 'global0/getPerson1' })
  const { global0 } = store.getState();
  return { global0 };
}

export default connect((store) => ({
  data2: store.global0.data2
}))(Home);

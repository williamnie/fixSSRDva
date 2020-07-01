import React from 'react';
import { connect } from 'dva'
const Home = (props) => {
  const { data } = props;
  // console.log('------------render', props.data);
  return (
    <div>
      ddddd
      <div> {data && data.title}</div >
    </div>

  )
}
Home.getInitialProps = async ({ store }) => {
  // if (!ctx.isServer) {
  //   return
  // }
  await store.dispatch({ type: 'global0/getPerson' })
  const { global0 } = store.getState();
  return { global0 };
}

export default connect((store) => ({
  data: store.global0.data
}))(Home);

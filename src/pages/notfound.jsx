import React, { Component, useState, useEffect } from 'react';

class Pertamax extends Component {
  constructor(props) {
    super(props);
    // console.log(props.countz);
    // const [todo, setTodo] = useState({});
    this.state = {
      todo: {},
    };
  }

  componentDidMount() {
    // api call
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todo !== {}) {
      // mau melakukan sesuatu
    }
  }

  componentWillUnmount() {
    console.log('hit unmount');
    clearInterval(this.timerID);
  }

  tick = () => {
    console.log('tu');
  }

  render() {
    return (
      <div>Component Pertamax</div>
    );
  }
}

const Keduax = () => (
  <div>Component Keduax</div>
);

const NotFound = () => {
  // eslint-disable-next-line prefer-const
  let [count, setCount] = useState(0);
  const [iShow, setIsShow] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('state berubah');
    // Update the document title using the browser API
    // mengulang-ulang state yg berubah
    if (count === 0) {
      console.log('state seolah - olah did mount');
      document.title = `You clicked ${count} times`;
      setInterval(
        () => {
          if (count === 10) {
            setIsShow(false);
          } else {
            // componentdidmount 1x update count = 0
            // -> setInterval selama per 1 detik
            // -> count === 10 isShow = true jadi false
            // -> count < 10 dia akan tambah nilai countnya
            setCount(count + 1);
          }
        },
        1000,
      );
    }
    // console.log('COUNT++')
    // if (count === 10) {
    //   setIsShow(iShow)
    // }
  });

  // useEffect(() => {
  //   console.log('COUNT++')
  //   if (count === 10) {
  //     setIsShow(iShow)
  //   }
  // },[count,]);

  return (
    <div>
      React not found
      {iShow ? <Pertamax countz={count} /> : <Keduax />}
    </div>
  );
};

export default NotFound;

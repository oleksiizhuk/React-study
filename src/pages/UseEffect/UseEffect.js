import React, { useEffect, useState } from 'react';
import UseEffectView from './UseEffectView';

const UseEffect = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setState((val) => val + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    setState(1);
    console.log('component did mount');
  }, []);
  useEffect(() => {
    console.log('component did update');
  }, [state]);
  useEffect(() => {
    return () => {
      console.log('component will unmount');
    };
  }, []);
  return <UseEffectView />;
};

export default UseEffect;

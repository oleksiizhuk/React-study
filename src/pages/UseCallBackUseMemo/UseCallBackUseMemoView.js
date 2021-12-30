import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';
import Button from './component/Button';
import Text from './component/Text';
import Number from './component/Number';

const UseCallBackUseMemoView = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((val) => val + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const result = useMemo(() => {
    let res = 0;
    // eslint-disable-next-line for-direction
    for (let i = 0; i < 100; i += 1) {
      // eslint-disable-next-line no-console
      console.log(i);
      res += i;
    }
    return res;
  }, []);

  const onClick = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('num', num);
    // setNum(num);
    setNum((val) => {
      // eslint-disable-next-line no-console
      console.log(val);
      return val;
    });
  }, []);
  // const test = (val) => {
  //   setNum(val);
  // };
  // const cars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const item = useMemo(() => ({ name: 'Name', age: 100 }), []);
  // console.log(num);
  return (
    <div>
      <p>{num}</p>
      <Button onClick={onClick} />
      <Button onClick={setNum} />
      <Text item={item} />
      <Number number={result} />
    </div>
  );
};

export default UseCallBackUseMemoView;

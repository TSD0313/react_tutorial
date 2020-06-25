import React from 'react';
import { render } from "react-dom";
import FuncHello from './funcComponent';
import FuncCounter from './counter';

const app = ()=>{
  return(
    <>
      <FuncHello name={"hoge"} age={20} />
      <FuncCounter />
    </>
  );
};

render(
  app(),
  document.getElementById('sample')
);
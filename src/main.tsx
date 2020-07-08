import React from 'react';
import { render } from "react-dom";
import FuncHello from './funcComponent';
import FuncCounter from './counter';
import { SampleSpringA, SampleSpringB } from './SpringSample';
import { CardFlip } from './cardFlip';
import { Card3D } from './card3D';

const app = ()=>{
  return(
    <>
      <FuncHello name={"hoge"} age={20} />
      <FuncCounter />
      <SampleSpringA />
      <SampleSpringB />
    </>
  );
};

const cardFlip = ()=>{
  return(
    <>
      <CardFlip />
      <Card3D />
    </>
  );
};

const card3D = ()=>{
  return(
    <>
      <Card3D />
    </>
  );
};

render(
  app(),
  document.getElementById('sample')
);

render(
  cardFlip(),
  document.getElementById('cardFlip')
);

render(
  card3D(),
  document.getElementById('3D')
);
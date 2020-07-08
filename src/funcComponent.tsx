import React from 'react';
interface profile{
    name:string;
    age:number;
}

const Hello: React.FC<profile> = ({name,age}) => {
  return (
    <>
        <h1> React練習中</h1>
        <div> 関数コンポーネント name:{name} age:{age}</div>
    </>
  );
};

export default Hello;
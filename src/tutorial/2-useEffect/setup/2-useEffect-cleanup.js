import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("useEffect");
    console.log("Hello World");
    window.addEventListener("resize", checkSize); // 画面の幅を変更する度にcheckSizeメソッドを走らせる
    return () => { // cleanup関数はuseEffectを使用する際には忘れずにつける。そうしないと処理がループしてしまってメモリリークが起きる
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  console.log("render");
  return (
    <>
      <h1>window</h1>
      <h2>{size}PX</h2>
    </>
  );
};

export default UseEffectCleanup;

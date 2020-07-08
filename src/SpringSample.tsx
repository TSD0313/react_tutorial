import React, { useState } from "react";
import { useSpring, useSprings, animated, config } from "react-spring";

export const SampleSpringA = () => {
  const [enter, setEnter] = useState(false);
  const spring = useSpring({
    fontSize: enter ? "48pt" : "24pt",
    color: enter ? "red" : "green"
  });
  return (
    <animated.div
      style={spring}
      onMouseEnter={e => setEnter(true)}
      onMouseLeave={e => setEnter(false)}
    >
      MouseOver Animation SumpleA
    </animated.div>
  );
};

export const SampleSpringB = () => {
  const msg = "MouseOver Animation SumpleB";
  const [springs, set] = useSprings(msg.length, (idx) => ({
    config: config.wobbly,
    fontSize: "24pt",
    color: "black"
  }));
  return (
    <div style={{ fontSize: "24pt" }}>
      {springs.map((item, idx) => (
        <animated.span
          onMouseEnter={e => set(i => (i === idx ? { fontSize: "48pt", color: "red" } : {}))}
          onMouseLeave={e => set(i => (i === idx ? { fontSize: "24pt", color: "black" } : {}))}
          style={{ verticalAlign: "top", ...item }}
        >
          {msg[idx]}
        </animated.span>
      ))}
    </div>
  );
};
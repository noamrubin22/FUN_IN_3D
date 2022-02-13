import { DistortionText } from "react-text-fun";

export const Distortion = ({ text, speed }) => {
  return (
    <DistortionText
      text={text}
      //   fontSize={290}
      fontSize={40}
      speed={speed}
      rotation={45}
      distortX={0.2}
      fill={"darkgreen"}
      distortY={0.1}
      noiseAmplitude={0.4}
      noiseVolatility={1.2}
      fontFamily={"Source Code Pro"}
      appendTo={"container"}
    />
  );
};

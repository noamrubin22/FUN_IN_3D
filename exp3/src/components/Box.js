import * as ml5 from "ml5";
import P5 from "p5";
import "../../node_modules/p5/lib/addons/p5.sound";

export function sketch(p5) {
  console.log(p5);
  console.log(P5);
  p5.setup = () => {
    p5.createCanvas(300, 300, p5.WEBGL);
    const mySound = p5.loadSound("../../public/infinity.mp3");
    // console.log(mySound);
  };

  p5.draw = () => {
    // mySound.play();
  };
}

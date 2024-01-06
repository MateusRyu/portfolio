import { IconProps } from "./IconProps";

export default function Close({color, className, size}: IconProps) {
  size = (size===undefined)?"normal":size.toLowerCase();
  let width: number;
  let height: number;

  if (size == "normal") {
    width = 20;
    height = 20;
  } else if (size == "small") {
    width = 16;
    height = 16;
  }

  return <svg className={className?className:""} xmlns="http://www.w3.org/2000/svg" x="0px" y = "0px" width={width} height={height} viewBox = "0 0 24 24">
    <path fill={color} d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
  </svg> 
}

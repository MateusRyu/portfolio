export type HamburgerProps = {
  color: string;
  size?: string;
}

export default function Hamburger({color, size}: HamburgerProps) {
  size = (size===undefined)?"normal":size.toLowerCase();
  if (size == "normal") {
    size = 20;
  } else if (size == "small") {
    size = 16;
  }

  return <svg xmlns="http://www.w3.org/2000/svg" x="0px" y = "0px" width = {size} height = {size} viewBox = "0 0 32 32">
    <path fill={color} d="M 4 7 L 4 9 L 28 9 L 28 7 L 4 7 z M 4 15 L 4 17 L 28 17 L 28 15 L 4 15 z M 4 23 L 4 25 L 28 25 L 28 23 L 4 23 z"></path>
  </svg>

}

import { HeadingProps } from "./HeadingProps";

export type GenericHeadingProps = HeadingProps & {
  level: "1" | "2" | "3" | "4";
};

export type FontSizeType = {
  [key in "h1" | "h2" | "h3" | "h4"]: {
    fontSize: string;
    lineHeight: string;
  };
};

export const fontSize: FontSizeType = {
  h1: { fontSize: "4.25rem", lineHeight: "4.5rem" },
  h2: { fontSize: "2.625rem", lineHeight: "3rem" },
  h3: { fontSize: "1.75rem", lineHeight: "3rem" },
  h4: { fontSize: "1.25rem", lineHeight: "1.5rem" },
};

function Heading({ level, children, className, id }: GenericHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const fontSizeStyle = `text-[${fontSize[`h${level}`]["fontSize"]}]`;
  const lineHeight = `leading-[${fontSize[`h${level}`]["lineHeight"]}]`;
  const style = `font-primary ${fontSizeStyle} ${lineHeight} ${
    className || ""
  }`;

  return (
    <Tag className={style} {...(id && { id })}>
      {children}
    </Tag>
  );
}
export default Heading;

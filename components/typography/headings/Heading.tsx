import { HeadingProps } from "./HeadingProps";

export type GenericHeadingProps = HeadingProps & {
  level: "1" | "2" | "3" | "4";
};

function Heading({ level, children, className, id }: GenericHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const style = `font-primary text-h${level} ${className || ""}`;

  return (
    <Tag className={style} {...(id && { id })} >
      {children}
    </Tag>
  );
}
export default Heading;

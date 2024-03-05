import { HeadingProps } from "./HeadingProps";

export type GenericHeadingProps = HeadingProps & {
  level: "1" | "2" | "3" | "4";
};

export default function Heading({
  level,
  children,
  className,
  id,
}: GenericHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`font-primary text-h${level} ${className || ""}`}
      {...(id && { id })}
    >
      {children}
    </Tag>
  );
}

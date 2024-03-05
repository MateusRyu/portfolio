import Heading from "./Heading";
import { HeadingProps } from "./HeadingProps";

export default function H1({ className, children, id }: HeadingProps) {
  return (
    <Heading level="1" className={className} {...(id && { id })}>
      {children}
    </Heading>
  );
}

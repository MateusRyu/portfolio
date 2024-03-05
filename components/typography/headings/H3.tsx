import Heading from "./Heading";
import { HeadingProps } from "./HeadingProps";

export default function H3({ className, children, id }: HeadingProps) {
  return (
    <Heading level="3" className={className} {...(id && { id })}>
      {children}
    </Heading>
  );
}

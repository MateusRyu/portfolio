import Heading from "./Heading";
import { HeadingProps } from "./HeadingProps";

export default function H2({ className, children, id }: HeadingProps) {
  return (
    <Heading level="2" className={className} {...(id && { id })}>
      {children}
    </Heading>
  );
}

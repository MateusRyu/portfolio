import Heading from "./Heading";
import { HeadingProps } from "./HeadingProps";

export default function H4({ className, children, id }: HeadingProps) {
  return (
    <Heading level="4" className={className} {...(id && { id })}>
      {children}
    </Heading>
  );
}

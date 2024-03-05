export type HeadingProps = {
  className?: string;
  children: string;
  id?: string;
};


export const BasicProps: HeadingProps = {
  children: "Heading",
};


export const BasicPropsWithClassName: HeadingProps = {
  children: "Heading with Class Name",
  className: "text-red-500",
};


export const BasicPropsWithID: HeadingProps = {
  children: "Heading with ID",
  id: "Heading",
};


export const AllProps: HeadingProps = {
  children: "Heading with all his props",
  className: "text-red-500",
  id: "Heading",
};

import { CSSProperties, ReactNode } from 'react';

interface SectionProps {
  style?: CSSProperties;
  divStyle?: CSSProperties;
  children?: ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
  id?: string | null;
  padding?: boolean;
}

const Section = ({
  style = {},
  divStyle = {},
  children = null,
  sectionClassName = '',
  containerClassName = '',
  id = null,
  padding = true,
}: SectionProps) => {
  return (
    <section
      className={`w-full  ${sectionClassName}`}
      style={style}
      id={id ?? undefined}
    >
      <div
        className={`${
          padding ? 'px-4' : ''
        } ${containerClassName} mx-auto! max-w-480`}
        style={divStyle}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;

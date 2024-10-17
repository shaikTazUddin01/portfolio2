import "./title.css";

const SectionTitle = ({
  headerText,
  title,
}: {
  headerText?: string;
  title?: string;
}) => {
  return (
    <div className="relative z-10 text-center">
      {headerText && (
        <span className="text-8xl font-extrabold absolute header-text leading-4 tracking-widest left-1/2 transform top-1/2 -translate-x-1/2">
          {headerText}
        </span>
      )}
      {title && (
        <div className="">
          {title && (
            <p className=" text-primaryColor uppercase text-4xl font-bold tracking-wider">
              {title}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionTitle;

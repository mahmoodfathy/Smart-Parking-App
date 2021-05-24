const RightHeader = ({ src, tagline, title, explanation }) => {
  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container flex flex-col items-start px-5 py-16 mx-auto lg:items-center md:flex-row lg:px-28">
          <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={src}
            />
          </div>
          <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
            <h2 className="mb-1 text-xs font-medium tracking-widest text-black title-font">
              {tagline}
            </h2>
            <h1 className="mb-8 text-2xl font-bold tracking-tighter text-left text-black title-font">
              {title}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-700">
              {explanation}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default RightHeader;

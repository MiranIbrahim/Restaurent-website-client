const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="text-center mx-auto my-10 w-1/2">
      <p className="text-yellow-600">--- {subTitle} ---</p>
      <h2 className='text-4xl border-y-4 my-4 py-4 '>{title}</h2>
    </div>
  );
};

export default SectionTitle;

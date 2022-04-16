function Testimonial({ testimonial }) {
  const { picture, name, text } = testimonial;
  return (
    <div className="flex flex-col items-center p-6 my-8 space-y-6 rounded-lg bg-veryLightGray md:w-1/3 md:my-0">
      <img src={`./images/${picture}`} className="w-16 -mt-14" alt={picture} />
      <h5 className="text-lg font-bold">{name}</h5>
      <p className="text-sm text-darkGrayishBlue">{text}</p>
    </div>
  );
}

export default Testimonial;

import Button from "./Button";
import { testimonials } from "../content";
import Testimonial from "./Testimonial";

function Testimonials() {
  return (
    <section id="testimonials">
      {/* Container to heading and testimonial blocks */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
        {/* Testimonials Container */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
        {/* Button */}
        <div className="flex justify-center mb-16 md:my-16">
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

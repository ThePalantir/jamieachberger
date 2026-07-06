export function Reviews() {
  const testimonials = [
    {
      quote: "Quick and effortless!",
      author: "Recent Lehigh Valley seller",
    },
    {
      quote: "Jamie made the entire process smooth and transparent.",
      author: "Buyer, Allentown",
    },
    {
      quote: "The best experience we could have asked for.",
      author: "Sellers, Bethlehem",
    },
  ];

  return (
    <section className="reviews">
      <div className="reviews__inner">
        <h2 className="reviews__heading">What Our Clients Say About Us!</h2>
        <div className="testimonials">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial">
              <p className="testimonial__quote">"{testimonial.quote}"</p>
              <p className="testimonial__author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

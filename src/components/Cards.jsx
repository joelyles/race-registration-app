import testimonials from "../testimonials.json";
import Card from "./Card";

const Cards = () => {
  const reviews = testimonials;

  return (
    <section className="py-12 px-12 mx-auto mb-56 max-w-7xl">
      <div className="m-auto">
        <h4 className="text-2xl md:text-3xl sm:text-slate-200 text-left my-4">Testimonials</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-4">
            { reviews.map((data) => (
              <Card key={ data.id } data={ data }/>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Cards

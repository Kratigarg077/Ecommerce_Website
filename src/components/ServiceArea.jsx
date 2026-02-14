import carIcon from '../assets/images/icon-img/car.png';
import timeIcon from '../assets/images/icon-img/time.png';
import dollarIcon from '../assets/images/icon-img/dollar.png';
import discountIcon from '../assets/images/icon-img/discount.png';

const services = [
  {
    id: 1,
    title: "Free Shipping",
    desc: "Free shipping on all order",
    image: carIcon,
    delay: 200,
  },
  {
    id: 2,
    title: "Support 24/7",
    desc: "Support 24 hours a day",
    image: timeIcon,
    delay: 400,
  },
  {
    id: 3,
    title: "Money Return",
    desc: "Back Guarantee Under",
    image: dollarIcon,
    delay: 600,
  },
  {
    id: 4,
    title: "Order Discount",
    desc: "On orders over 2500",
    image: discountIcon,
    delay: 800,
  },
];

export default function ServiceArea() {
  return (
    <div className="service-area">
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div key={service.id} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-30">
              <div className="service-wrap" data-aos="fade-up" data-aos-delay={service.delay}>
                <div className="service-img">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

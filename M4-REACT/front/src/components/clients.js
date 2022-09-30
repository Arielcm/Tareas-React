import Carousel from 'react-bootstrap/Carousel';
import ceogoogle from "../assets/img/clients/ceo-google.jpg"
import ceoapple from "../assets/img/clients/ceo-apple.jpeg"
import ceomeli from "../assets/img/clients/ceo-meli.jpeg"
import ceomicrosoft from "../assets/img/clients/ceo-microsoft.jpeg"
import ceotesla from "../assets/img/clients/ceo-tesla.jpeg"
const Clients = () => (
        <>
        <section id="testimonials" class="testimonials">
            <div class="container">
                <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">

                    <Carousel class="swiper-wrapper">
                        <Carousel.Item class="swiper-slide">
                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <img src={ceoapple} class="testimonial-img" alt="" />
                                    <Carousel.Caption class="testimonial-item">
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item class="swiper-slide">
                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <img src={ceogoogle} class="testimonial-img" alt="" />
                                    <Carousel.Caption class="testimonial-item">
                                        <h3>Homer Wilsson</h3>
                                        <h4>Designer</h4>
                                        <p>
                                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item class="swiper-slide">
                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <img src={ceomeli} class="testimonial-img" alt="" />
                                    <Carousel.Caption class="testimonial-item">
                                        <h3>Karl Karlis</h3>
                                        <h4>Store Owner</h4>
                                        <p>
                                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item class="swiper-slide">
                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <img src={ceomicrosoft} class="testimonial-img" alt="" />
                                    <Carousel.Caption class="testimonial-item">
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                        <p>
                                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item class="swiper-slide">
                            <div class="swiper-slide">
                                <div class="testimonial-item">
                                    <img src={ceotesla} class="testimonial-img" alt="" />
                                    <Carousel.Caption class="testimonial-item">
                                        <h3>John Larson</h3>
                                        <h4>Entrepreneur</h4>
                                        <p>
                                            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                            <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                    </Carousel.Caption>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
    </>
)
export default Clients
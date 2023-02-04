/** @format */
import React from 'react';
import { Typewriter, Cursor } from 'react-simple-typewriter';
import Slider from 'react-slick';
import HeroSlider from '../components/UI/HeroSlider';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import FindCarForm from '../components/UI/FindCarForm';
import AboutSection from '../components/UI/AboutSection';
import ServicesList from '../components/UI/ServicesList';
import CarItem from '../components/UI/CarItem';
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import Testimonial from '../components/UI/Testimonial';
import BlogList from '../components/UI/BlogList';
import { useSelector } from 'react-redux';
import { Zoom, Slide } from 'react-awesome-reveal';
import Skeleton from '@mui/material/Skeleton';
const Accueil = () => {
  const productItems = useSelector((state) => state.productItem.productItem);
  const excelProduct = productItems.filter((item) => item.category === 'excel');
  const otherProduct = productItems.filter((item) => item.category !== 'excel');
  const productLoading = useSelector(
    (state) => state.productItem.productLoading
  );

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Helmet title='Accueil'>
      {/* ============= hero section =========== */}
      <section className='pt-2 hero__slider-section w-100'>
        <HeroSlider />
        <Zoom>
          <div className='hero__form '>
            <Container className=' w-100'>
              <Row className='form__row  '>
                <Col
                  lg='4'
                  md='4'
                  style={{ paddingLeft: 0, height: 'auto' }}
                  className='h-100'>
                  <div className='find__cars-left'>
                    <h3>Rechercher dans notre catalogue de produits</h3>
                  </div>
                </Col>

                <Col lg='8' md='8' sm='12' className='pt-1'>
                  <FindCarForm />
                </Col>
              </Row>
            </Container>
          </div>
        </Zoom>
      </section>
      {/* =========== about section ================ */}
      <AboutSection />
      {/* ========== services section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center mt-5'>
              <Zoom direction='top'>
                <span className=' demotext2 section__subtitle'>
                  Visitez Nos{' '}
                </span>{' '}
                <br />
                <span className='w-full pb-0 m-0 mt-3 text-center demotext section__subtitle font-extrabold text-3xl  md:text-4xl  lg:text-5xl uppercase xl:pb-4 section__title'>
                  Services populaires
                </span>
              </Zoom>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* =========== car offer section ============= */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5 mt-5'>
              <Zoom direction='top'>
                <span className=' demotext2 section__subtitle'>
                  Consultez Nos{' '}
                </span>{' '}
                <br />
                <span className='w-full pb-0 m-0 mt-3 text-center demotext section__subtitle font-extrabold text-3xl  md:text-4xl  lg:text-5xl uppercase xl:pb-4 section__title'>
                  Produits populaires
                </span>
              </Zoom>
            </Col>
            <span className='h-[40px] demotext3 font-extrabold text-xl  xl:text-3xl uppercase section__title'>
              Excel Dashboard :{' '}
              <span
                style={{ color: 'black', fontWeight: '500' }}
                className='demotext4 shadow-transparent'>
                <Typewriter
                  words={[
                    'TB QHSE.',
                    'TB RH.',
                    'TB Comptable.',
                    'TB Financier.',
                    'TB Gestion.',
                  ]}
                  loop={0}
                  typeSpeed={50}
                  deleteSpeed={100}
                  delaySpeed={3000}
                />
              </span>{' '}
              <Cursor cursorStyle='' />
            </span>
            <Slide direction='right'>
              <Slider {...settings}>
                {productLoading
                  ? new Array(3).fill(null).map((el, index) => {
                      return (
                        <div key={index} className='min-h-[460px]'>
                          <Skeleton
                            variant='rectangular'
                            width='90%'
                            height={204}
                          />
                          <Skeleton width='90%' height={40} />
                          <Skeleton width='90%' height={90} />

                          <Skeleton width='90%' height={40} />
                        </div>
                      );
                    })
                  : excelProduct.map((item) => (
                      <CarItem item={item} key={item.id} />
                    ))}
              </Slider>
            </Slide>
            <span className='h-[40px] demotext3 font-extrabold text-xl  xl:text-3xl uppercase section__title mt-5'>
              Autres Produits :{' '}
              <span
                style={{ color: 'black', fontWeight: '500' }}
                className='demotext4 shadow-transparent'>
                <Typewriter
                  words={[
                    'Power Point.',
                    'Power BI.',
                    'Kit Documentaire.',
                    'Applications QHSE.',
                  ]}
                  loop={0}
                  typeSpeed={50}
                  deleteSpeed={100}
                  delaySpeed={3000}
                />
              </span>{' '}
              <Cursor cursorStyle='' />
            </span>
            <Slide direction='left'>
              <Slider {...settings}>
                {productLoading
                  ? new Array(3).fill(null).map((el, index) => {
                      return (
                        <div key={index} className='min-h-[460px]'>
                          <Skeleton
                            variant='rectangular'
                            width='90%'
                            height={204}
                          />
                          <Skeleton width='90%' height={40} />
                          <Skeleton width='90%' height={90} />

                          <Skeleton width='90%' height={40} />
                        </div>
                      );
                    })
                  : otherProduct.map((item) => (
                      <CarItem item={item} key={item.id} />
                    ))}
              </Slider>
            </Slide>
          </Row>
        </Container>
      </section>
      {/* =========== become a driver section ============ */}
      <BecomeDriverSection />
      {/* =========== testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-4 text-center mt-5'>
              <Zoom direction='top'>
                <span className=' demotext2 text-4xl section__subtitle'>
                  Que disent Nos Clients{' '}
                </span>{' '}
                <br />
                <span className='w-full pb-0 m-0 mt-3 text-center demotext section__subtitle font-extrabold text-3xl  md:text-4xl  lg:text-5xl uppercase xl:pb-4section__title'>
                  Testimonials
                </span>
              </Zoom>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>
      {/* =============== blog section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <Zoom direction='top'>
                <span className=' demotext2 section__subtitle mt-5'>
                  Explorez Notre Blog{' '}
                </span>{' '}
                <br />
                <span className='w-full pb-0 m-0 mt-3 text-center demotext section__subtitle font-extrabold text-3xl  md:text-4xl  lg:text-5xl uppercase xl:pb-4 section__title'>
                  Derniers Posts
                </span>
              </Zoom>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Accueil;

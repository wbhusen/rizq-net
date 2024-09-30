import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { colours } from '../../Utils/Colours';
import { useEffect, useRef, useState } from 'react';

const IndustriesWeServe = () => {
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setSwiperReady(true);
    }
  }, [prevRef.current, nextRef.current]);
  
      const industries = [
        {
            id: 1,
            title: 'Custom Software Development',
            description: 'We prioritize user experience, scalability, and security to ensure your software meets business objectives.',
            image: '../../../resources/images/industries/industry-2.jpg',
            link: '/services/software-development',
        },
        {
            id: 2,
            title: 'Healthcare IT Solutions',
            description: 'Offering tailored IT services to enhance patient care and streamline hospital management.',
            image: '../../../resources/images/industries/industry-1.jpg',
            link: '/services/healthcare-it',
        },
        {
            id: 3,
            title: 'E-commerce Development',
            description: 'Empowering businesses with scalable and secure e-commerce platforms to grow their online presence.',
            image: '../../../resources/images/industries/industry-3.jpg',
            link: '/services/ecommerce-development',
        },
        {
            id: 4,
            title: 'Artificial Intelligence Solutions',
            description: 'Implement AI technologies to automate processes, enhance decision-making, and drive innovation.',
            image: '../../../resources/images/industries/industry-4.jpg',
            link: '/services/ai-solutions',
        },
        {
            id: 5,
            title: 'Financial Technology (FinTech)',
            description: 'Providing cutting-edge solutions to streamline financial services and improve customer experiences.',
            image: '../../../resources/images/industries/industry-5.jpg',
            link: '/services/fintech-solutions',
        },
        {
            id: 6,
            title: 'Blockchain Development',
            description: 'Leverage blockchain technology to improve security, transparency, and efficiency in your business processes.',
            image: '../../../resources/images/industries/industry-6.jpg',
            link: '/services/blockchain-development',
        },
        {
            id: 7,
            title: 'Education & E-Learning',
            description: 'Building innovative digital learning solutions that enhance student engagement and provide flexible learning opportunities.',
            image: '../../../resources/images/industries/industry-2.jpg',
            link: '/services/elearning-solutions',
        },
        {
            id: 8,
            title: 'Retail & Supply Chain Solutions',
            description: 'Optimizing your retail operations with solutions that integrate supply chain management and customer experience.',
            image: '../../../resources/images/industries/industry-1.jpg',
            link: '/services/retail-supplychain',
        },
    ];
  return (
      <>
      <div className="container">
        <div className="mb30 mb-md-6 row">
          <div className="lg-5 md-6">
            <h3 className="mb0 common-title"><span className='relative z-10'>Industries<span className="position-absolute industry-circle"><svg width="188" height="53" viewBox="0 0 188 53" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill={colours.primary} d="M3.50843 26.6791C5.35764 34.7553 19.176 38.9851 26.7629 41.4254C47.5981 47.4215 69.586 48.7695 91.2825 49.6062C107.583 50.0478 123.91 49.7573 140.135 48.1885C154.13 46.7243 169.469 45.5158 180.691 36.9051C185.618 33.0239 185.82 27.2834 181.324 22.9954C169.418 11.8166 138.589 7.57514 121.756 4.98378C103.226 2.36919 84.4557 3.171 65.8116 4.27494C77.9834 4.49573 90.1553 5.19295 102.238 6.57578C107.406 7.27301 112.802 8.35371 117.032 11.3053C113.093 10.457 109.015 10.4338 105 10.1084C76.8182 7.19166 47.1675 4.62355 19.9233 13.5713C13.9704 15.8256 2.97647 19.5442 3.50843 26.6791ZM0 25.7727C1.06393 10.1897 39.758 5.03027 53.3231 4.43763C51.1192 4.29818 48.9154 4.07739 46.7242 3.78688C50.3846 2.79915 54.121 2.04382 57.9081 1.60224C65.5583 0.939879 73.2464 0.753952 80.9092 0.323997C94.0944 -0.349987 107.305 0.0102456 120.414 1.56738C136.816 4.10063 197.384 11.3983 186.757 34.918C184.554 38.8573 180.399 41.4603 176.27 43.5403C166.163 48.6068 154.523 49.8618 143.263 51.1285C126.456 52.7902 109.559 53.3131 92.6631 52.825C67.7368 51.907 42.1772 50.501 18.6947 42.1459C11.1586 39.1943 0.126658 34.3834 0 25.7727Z"></path></svg></span></span> We Serve</h3>
          </div>
          <div className="ms-auto lg-4 md-6">
            <p className='common-desc'>Our team of experts specializes in delivering tailored services designed to propel your organization forward in today's fast-paced digital landscape.</p>
            <div className="flex gap-3 relative mt30">
              {/* Custom Previous Button */}
              <button ref={prevRef} className="btn btn-white border btn-arrow rounded-circle mb-0">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"></path>
                </svg>
              </button>
              {/* Custom Next Button */}
              <button ref={nextRef} className="btn btn-white border btn-arrow rounded-circle mb-0">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Swiper
            className="swiper-outside-end-n20"
            spaceBetween={20}
            slidesPerView={4.5}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            modules={[Navigation, Autoplay]}
            loop={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            breakpoints={{
                250: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                479: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                },
                768: {
                slidesPerView: 2.5,
                spaceBetween: 20,
                },
                1024: {
                slidesPerView: 3.5,
                spaceBetween: 20,
                },
                1400: {
                    slidesPerView: 4.5,
                    spaceBetween: 20,
                },
            }}
            >
            {industries.map((industry) => (
                <SwiperSlide key={industry.id}>
                    <div className="card-img-scale bg-white overflow-hidden card">
                        <div className="card-img-scale-wrapper">
                            <img src={industry.image} className="card-img-top img-scale" alt={industry.title} />
                        </div>
                        <div className="p-4 card-body">
                            <h3 className='card-title pt10'><a href={industry.link}>{industry.title}</a></h3>
                            <p className="mb-0 card-desc pt10">{industry.description}</p>
                        </div>
                        <div className="border-t p-4 card-footer">
                            <a className="card-icon-link" href={industry.link}>
                                Explore this service
                                <svg stroke={colours.primary} fill={colours.primary} strokeWidth="0" viewBox="0 0 16 16" className="bi" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
      </div>
      </>
  );
};

export default IndustriesWeServe;
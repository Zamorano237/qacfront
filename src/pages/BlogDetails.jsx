/** @format */
import { toast } from 'react-toastify';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Input } from 'reactstrap';
import { useSelector } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { useParams } from 'react-router-dom';
import Helmet from '../components/Helmet/Helmet';
import { Link } from 'react-router-dom';
import style from '../styles/markdown-styles.module.css';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import ShareIcon from '@mui/icons-material/Share';
import { Zoom } from 'react-awesome-reveal';
import BlogList from '../components/UI/BlogList';
import Skeleton from '@mui/material/Skeleton';
import '../styles/blog-details.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const BlogDetails = () => {
  const postItem = useSelector((state) => state.postItem.postItem);
  const postLoading = useSelector((state) => state.postItem.postLoading);
  const saveComment = (e) => {
    e.preventDefault();
    toast.success('votre commentaire a été enregistré.', {
      position: 'top-center',
      autoClose: 2000,
    });
    setName('');
    setEmail('');
    setText('');
  };
  let content;
  let blogData;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const { slug } = useParams();
  let blog;

  function handleClick(event) {
    event.preventDefault();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  if (postLoading) {
    content = (
      <>
        <div className='min-h-[460px] min-w-[250px] my-6  flex justify-center flex-col items-center mt-[80px]'>
          <Skeleton variant='rectangular' width='90%' height={304} />
          <Skeleton width='90%' height={60} />
          <Skeleton width='90%' height={80} />
          <Skeleton width='85%' height={70} />
          <Skeleton width='90%' height={60} />
        </div>
      </>
    );
  } else {
    blogData = postItem.filter((blog) => blog.category === 'SST');
    blog = postItem.find((blog) => blog.id === slug);
    content = (
      <>
        <Helmet title={blog.title}>
          <section className='mt-[15px] lg:mt-12 pt-5 relative '>
            <Container className='relative'>
              <div role='presentation' onClick={handleClick} className='mb-1'>
                <Breadcrumbs aria-label='breadcrumb'>
                  <Link
                    to={'/blogs'}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }>
                    Blogs
                  </Link>
                  <Link
                    to={'/blogs'}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    }>
                    {blog.category}
                  </Link>
                </Breadcrumbs>
              </div>
              <Row>
                <Col lg='8' md='8'>
                  <div className='blog__details'>
                    <img
                      src={blog.imageURL}
                      alt=''
                      className='w-100'
                      style={{ height: '350px' }}
                    />
                    <h2 className='section__title mt-4'>{blog.title}</h2>

                    <div className='blog__publisher d-flex align-items-center gap-4 mb-4'>
                      <span className='blog__author'>
                        <i className='ri-user-line'></i> {blog.author}
                      </span>

                      <span className=' d-flex align-items-center gap-1 section__description'>
                        <i className='ri-calendar-line'></i> {blog.date}
                      </span>

                      <span className=' d-flex align-items-center gap-1 section__description'>
                        <i className='ri-time-line'></i> {blog.time}
                      </span>
                    </div>
                    <div className='w-100'>
                      <ReactMarkdown
                        className={style.reactMarkDown}
                        rehypePlugins={[rehypeRaw]}
                        children={blog.content}
                      />
                    </div>
                  </div>

                  <div className='comment__list mt-5'>
                    {/* =============== comment form ============ */}
                    <div className='leave__comment-form mt-5'>
                      <h4>Laissez un commentaire</h4>
                      <p className='section__description'>
                        Vous devez vous connectez pour pouvoir faire un
                        commentaire
                      </p>

                      <Form>
                        <FormGroup className=' d-flex gap-3'>
                          <Input
                            type='text'
                            placeholder='Nom complet'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          <Input
                            type='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </FormGroup>

                        <FormGroup>
                          <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            rows='5'
                            className='w-100 py-2 px-3'
                            placeholder='Comment...'></textarea>
                        </FormGroup>

                        <button
                          className='btn comment__btn mt-3'
                          onClick={(e) => saveComment(e)}>
                          Publiez
                        </button>
                      </Form>
                    </div>
                  </div>
                </Col>

                <Col lg='4' md='4'>
                  <div className='sticky left-0 top-0 '>
                    <div className='recent__post mb-4  top-0'>
                      <h5 className=' fw-bold'>Postes récents</h5>
                    </div>
                    {blogData.slice(0, 5).map((item) => (
                      <div
                        className='recent__blog-post mb-4'
                        onClick={() =>
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        key={item.id}>
                        <div className='recent__blog-item d-flex gap-3 '>
                          <img
                            src={item.imageURL}
                            alt=''
                            className='w-50 rounded-2 h-[100px]'
                          />
                          <Link to={`/blogs/${item.id}`}>
                            <h6 className='text-[14px]'>{item.title}</h6>
                            <span className='blog__author text-[14px] '>
                              <i className='ri-user-line'></i> {item.author}
                            </span>

                            <span className=' d-flex align-items-center gap-1 text-yellow-500 section__description text-[14px]'>
                              <i className='ri-calendar-line'></i> {item.date}
                            </span>
                          </Link>
                        </div>
                      </div>
                    ))}
                    <div className='recent__post'>
                      <h5 className=' fw-bold'>
                        Nous rejoindre{' '}
                        <Button
                          variant='text'
                          startIcon={<ShareIcon />}></Button>
                      </h5>
                    </div>
                    <div className='mb-2'>
                      <Button
                        variant='text'
                        color='error'
                        startIcon={<YouTubeIcon />}>
                        <a
                          href='https://www.youtube.com/@qhseacademie1043'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='normal-case'>
                          Youtube
                        </a>
                      </Button>
                    </div>
                    <div className='mb-2'>
                      <Button variant='text' startIcon={<FacebookIcon />}>
                        <a
                          href='https://www.facebook.com/qhse.academie'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='capitalize'>
                          Facebook
                        </a>
                      </Button>
                    </div>
                    <div className='mb-2'>
                      <Button
                        variant='text'
                        color='success'
                        startIcon={<WhatsAppIcon />}>
                        <a
                          href='http://wa.me/+237694289819'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='normal-case'>
                          WhattsApp
                        </a>
                      </Button>
                    </div>
                    <div className='mb-2'>
                      <Button variant='text' startIcon={<LinkedInIcon />}>
                        <a
                          href='https://www.linkedin.com/company/qhse-academie-and-consulting/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='capitalize'>
                          Linked
                        </a>
                      </Button>
                    </div>
                    <div className='recent__post mb-4'>
                      <h5 className=' fw-bold'>
                        Abonnez-Vous{' '}
                        <Button
                          variant='text'
                          startIcon={<AddAlertIcon />}></Button>
                      </h5>
                      <img
                        src='https://www.officiel-prevention.com/uploads/bannieres/7/5f919450432f8.png'
                        alt=''
                        className='w-80 rounded-2 h-[500px]'
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            <section>
              <Container>
                <Row>
                  <Col lg='12' className='mb-5 text-center'>
                    <Zoom direction='top'>
                      <span className=' demotext2 text-blue-800 section__subtitle mt-5'>
                        Ces articles peuvent vous interessez{' '}
                      </span>{' '}
                      <br />
                    </Zoom>
                  </Col>

                  <BlogList />
                </Row>
              </Container>
            </section>
          </section>
        </Helmet>
      </>
    );
  }

  return <>{content}</>;
};

export default BlogDetails;

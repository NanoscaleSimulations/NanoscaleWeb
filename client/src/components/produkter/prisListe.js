/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Card, Form, Image, ListGroup, ListGroupItem, Modal } from 'react-bootstrap';
import { BsArrowRight, BsFillCheckCircleFill } from 'react-icons/bs';
import { FaWindowClose, FaRegWindowClose } from "react-icons/fa";
import { MdCancel } from "react-icons/md";



export default function Prisliste() {

    const [academicShow, setAcademicShow] = useState(false);
    const [researchShow, setResearchShow] = useState(false);
    const [freeShow, setFreeShow] = useState(false);


    const [academicorder, setAcademicorder] = useState({
        navn: '',
        email: '',
    })
    const PostAcademicorder = async(e)=>{
        e.preventDefault()
        
        const {navn, email}=academicorder;

        const res = await fetch("https://nanoscale-simulations-website-default-rtdb.europe-west1.firebasedatabase.app/academiclist.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
            navn,
            email,

            })
            
        })
    }


    const [researchorder, setResearchorder] = useState({
        navn: '',
        email: '',
    })
    const PostResearchorder = async(e)=>{
        e.preventDefault()
        
        const {navn, email}= researchorder;

        const res = await fetch("https://nanoscale-simulations-website-default-rtdb.europe-west1.firebasedatabase.app/researchlist.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
            navn,
            email,

            })
            
        })
    }




    return (
        <div className=''>
            <Modal
            size="lg"
            show={academicShow}
            onHide={() => setAcademicShow(false)}
            aria-labelledby="Academic modal"
            animation="fadeIn"
            >
            <Modal.Header closeButton>
                <Modal.Title id="Academic modal">
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="text-center mb-2-8 mb-lg-6">
                        <h2 className="display-18 display-md-16 display-lg-14 font-weight-700">Why choose <strong className="text-primary font-weight-700">Academic</strong></h2>
                        <span>The trusted source for why choose Academic</span>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
                            <div className="pr-md-3">
                                <div className="text-center text-sm-right mb-2-9">
                                    <div className="mb-4">
                                        <img src={require('../../img/vr-glasses-man.png')} alt="..." className="rounded-circle" style={{maxWidth:'80px', maxHeight:'80px'}}/>
                                    </div>
                                    <h4 className="sub-info">Backup</h4>
                                    <p className="display-30 mb-0">Roin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                                <hr></hr>
                                <div className="text-center text-sm-right">
                                    <div className="mb-4">
                                        <img src={require('../../img/free.jpg')} alt="..." className="rounded-circle" style={{maxWidth:'80px', maxHeight:'80px'}}/>
                                    </div>
                                    <h4 className="sub-info">Support</h4>
                                    <p className="display-30 mb-0">Gravida roin nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="why-choose-center-image">
                                <Image roundedCircle alt="2pacShakur" src={require('../../img/academic.jpg')}></Image>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="pl-md-3">
                                <div className="text-center text-sm-left mb-2-9">
                                    <div className="mb-4">
                                        <img src={require('../../img/research.jpg')} alt="..." className="rounded-circle" style={{maxWidth:'80px', maxHeight:'80px'}}/>
                                    </div>
                                    <h4 className="sub-info">VR performance</h4>
                                    <p className="display-30 mb-0">Nibh roin gravida vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                                <hr></hr>
                                <div className="text-center text-sm-left">
                                    <div className="mb-4">
                                        <img src={require('../../img/academic.jpg')} alt="..." className="rounded-circle" style={{maxWidth:'80px', maxHeight:'80px'}}/>
                                    </div>
                                    <h4 className="sub-info">AR functionality</h4>
                                    <p className="display-30 mb-0">Vel proin gravida nibh velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Form>
                    <div className="row justify-content-between text-left contactform pt-4 mt-2">
                        <div className="form-group col-sm-6 flex-column d-flex"> 
                            <Form.Control type="text" id="name" name="name" placeholder="Fornavn og efternavn" onChange={(e)=> setAcademicorder({...academicorder,navn:e.target.value})}/> 
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> 
                            <Form.Control type="email" id="email" name="email" placeholder="Barack@Obama.com" onChange={(e)=> setAcademicorder({...academicorder,email:e.target.value})}/> 
                        </div>
                    </div>
                </Form>
                <Card.Body className='py-2' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button className="text-center" type="submit" style={{maxWidth:200, width:200, borderRadius:30, padding:6, fontSize:18, background:'linear-gradient(305deg, rgba(127,24,212,1) 19%, rgba(22,143,223,1) 71%, rgba(60,159,225,1) 100%)'}}  onClick={ PostAcademicorder }>
                        BESTIL HER
                        </Button>
                </Card.Body>
            </Modal.Body>
            </Modal>


            <Modal
                size="lg"
                show={researchShow}
                onHide={() => setResearchShow(false)}
                aria-labelledby="Research modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="Research modal">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="container">
                    <div className="text-center mb-2-8 mb-lg-6">
                        <h2 className="display-18 display-md-16 display-lg-14 font-weight-700">Why choose <strong className="text-primary font-weight-700">Research</strong></h2>
                        <span>The trusted source for why choose Research</span>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
                            <div className="pr-md-3">
                                <div className="text-center text-sm-right mb-2-9">
                                    <div className="mb-4">
                                        <img src={require('../../img/research.jpg')} alt="..." className="rounded-circle" style={{maxWidth:'80px', maxHeight:'80px'}} />
                                    </div>
                                    <h4 className="sub-info">Backup</h4>
                                    <p className="display-30 mb-0">Roin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                                <hr></hr>
                                <div className="text-center text-sm-right">
                                    <div className="mb-4">
                                        <img src={require('../../img/free.jpg')} alt="..." className="rounded-circle" style={{maxWidth:'80px', maxHeight:'80px'}}/>
                                    </div>
                                    <h4 className="sub-info">Support</h4>
                                    <p className="display-30 mb-0">Gravida roin nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="why-choose-center-image">
                                <Image roundedCircle alt="2pacShakur" src={require('../../img/research.jpg')}></Image>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="pl-md-3">
                                <div className="text-center text-sm-left mb-2-9">
                                    <div className="mb-4">
                                        <img src={require('../../img/vr-glasses.png')} alt="..." className="rounded-circle" style={{maxWidth:'80px', maxHeight:'80px'}}/>
                                    </div>
                                    <h4 className="sub-info">VR performance</h4>
                                    <p className="display-30 mb-0">Nibh roin gravida vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                                <hr></hr>
                                <div className="text-center text-sm-left">
                                    <div className="mb-4">
                                        <img src={require('../../img/open-book.png')} alt="..." className="rounded-circle" style={{maxWidth:'80px', maxHeight:'80px'}}/>
                                    </div>
                                    <h4 className="sub-info">AR functionality</h4>
                                    <p className="display-30 mb-0">Vel proin gravida nibh velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Form>
                    <div className="row justify-content-between text-left contactform pt-4 mt-2">
                        <div className="form-group col-sm-6 flex-column d-flex"> 
                            <Form.Control type="text" id="name" name="name" placeholder="Fornavn og efternavn" onChange={(e)=> setResearchorder({...researchorder,navn:e.target.value})}/> 
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> 
                            <Form.Control type="email" id="email" name="email" placeholder="Barack@Obama.com" onChange={(e)=> setResearchorder({...researchorder,email:e.target.value})}/> 
                        </div>
                    </div>
                </Form>
                <Card.Body className='py-2' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button className="text-center" type="submit" style={{maxWidth:200, width:200, borderRadius:30, padding:6, fontSize:18, background:'linear-gradient(305deg, rgba(127,24,212,1) 19%, rgba(22,143,223,1) 71%, rgba(60,159,225,1) 100%)'}}  onClick={ PostResearchorder }>
                        BESTIL HER
                        </Button>
                </Card.Body>
                </Modal.Body>
            </Modal>



            <Modal
                size="lg"
                show={freeShow}
                onHide={() => setFreeShow(false)}
                aria-labelledby="Free modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="Free modal">
                        Free modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="container">
                    <div className="text-center mb-2-8 mb-lg-6">
                        <h2 className="display-18 display-md-16 display-lg-14 font-weight-700">Why choose <strong className="text-primary font-weight-700">Free version</strong></h2>
                        <span>The trusted source for why choose Free version</span>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-sm-6 col-lg-4 mb-2-9 mb-sm-0">
                            <div className="pr-md-3">
                                <div className="text-center text-sm-right mb-2-9">
                                    <div className="mb-4">
                                        <img src={require('../../img/vr-glasses-man.png')} alt="..." className="rounded-circle" style={{maxWidth:'80px', maxHeight:'80px'}}/>
                                    </div>
                                    <h4 className="sub-info">Backup</h4>
                                    <p className="display-30 mb-0">Roin gravida nibh vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="why-choose-center-image">
                                <Image roundedCircle alt="2pacShakur" src={require('../../img/free.jpg')}></Image>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="pl-md-3">
                                <div className="text-center text-sm-left mb-2-9">
                                    <div className="mb-4">
                                        <img src={require('../../img/research.jpg')} alt="..." className="rounded-circle" style={{maxWidth:'80px', maxHeight:'80px'}}/>
                                    </div>
                                    <h4 className="sub-info">VR performance</h4>
                                    <p className="display-30 mb-0">Nibh roin gravida vel velit auctor aliquetenean sollicitudin, lorem qui bibendum auctor.</p>
                                </div>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
                <Form>
                    <div className="row justify-content-between text-left contactform pt-4 mt-2">
                        <div className="form-group col-sm-6 flex-column d-flex"> 
                            <Form.Control type="text" id="name" name="name" placeholder="Fornavn og efternavn" onChange={(e)=> setAcademicorder({...academicorder,navn:e.target.value})}/> 
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex"> 
                            <Form.Control type="email" id="email" name="email" placeholder="Barack@Obama.com" onChange={(e)=> setAcademicorder({...academicorder,email:e.target.value})}/> 
                        </div>
                    </div>
                </Form>
                <Card.Body className='py-2' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Button className="text-center" type="submit" style={{maxWidth:200, width:200, borderRadius:30, padding:6, fontSize:18, background:'linear-gradient(305deg, rgba(127,24,212,1) 19%, rgba(22,143,223,1) 71%, rgba(60,159,225,1) 100%)'}}  onClick={ PostAcademicorder }>
                        BESTIL HER
                        </Button>
                </Card.Body>
                </Modal.Body>
            </Modal>

            <div className="container">
                <div className="tab-content wow fadeIn">
                    <div role="tabpanel" className="tab-pane fade show active" id="yearly">
                        <div className="row justify-content-center">

                        <div className="col-md-6 col-lg-4 mb-4">
                                <div className="price-item text-center popular">
                                    <div className="price-top">
                                        <div className="pricing-badge">
                                            <div className="badge">Free version</div>
                                        </div>
                                        <div className="prisliste-img text-center" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Image roundedCircle alt="2pacShakur" src={require('../../img/free.jpg')} style={{height:130}}></Image>
                                        </div>
                                        <h4 className='pt-2'>Personal</h4>
                                        <Card.Subtitle className="text-center mt-2">
                                            <p className='text-dark'>2 User Licenses</p>            
                                        </Card.Subtitle>
                                        <h2 className="mb-0"><sup>$</sup>0</h2>
                                        <span className="text-capitalize">per year</span>
                                    </div>
                                    <div className="price-content">
                                        <div className="border-bottom mb-4 mt-md-4 pb-3 text-left text-light" style={{listStyle:'none'}}>
                                            <h5>Features</h5>
                                            <li>
                                                <i className="zmdi zmdi-check mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Target Audience</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-check mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>1:</b> User Account</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-check mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>100+:</b> Video Tuts</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-close mr-2"></i>
                                                <p className="mb-2"><MdCancel color='#fb7179'/> <b>100+:</b> Video Tuts</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-close mr-2"></i>
                                                <p className="mb-2"><MdCancel color='#fb7179'/> <b>100+:</b> Video Tuts</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-close mr-2"></i>
                                                <p className="mb-2"><MdCancel color='#fb7179'/> <b>100+:</b> Video Tuts</p>
                                            </li>
                                        </div>
                                        <Card.Body>
                                            <div className="prem-policy text-center">
                                                <ListGroup >
                                                    <ListGroupItem className="text-dark"><BsArrowRight/> For government and academic labs only</ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </Card.Body>
                                        <div className="text-center mt-4">
                                            <Button className="free-btn" variant='outline-light' onClick={() => setFreeShow(true)} style={{fontWeight:'bold', letterSpacing:1}}>Anmod om køb</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="price-item text-center">
                                    <div className="price-top">
                                        <div className="prisliste-img text-center" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Image roundedCircle alt="2pacShakur" src={require('../../img/academic.jpg')} style={{height:130}}></Image>
                                        </div>
                                        <h4 className='pt-2'>Academic</h4>
                                        <Card.Subtitle className="text-center mt-2">
                                            <p>2 User Licenses</p>
                                        </Card.Subtitle>
                                        <h2 className="mb-0"><sup>$</sup>99</h2>
                                        <span className="text-capitalize">per year</span>
                                    </div>
                                    <div className="price-content">
                                        <div className="border-bottom mb-4 mt-md-4 pb-3 text-left" style={{listStyle:'none'}}>
                                        <h5>Features</h5>
                                            <li>
                                                <i className="zmdi zmdi-check mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Target Audience</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-check mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>3:</b> User Account</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-check mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>100+:</b> Video Tuts</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-close mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Backup</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-close mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Support</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-close mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>Free:</b> Storage</p>
                                            </li>
                                        </div>
                                        <Card.Body>
                                            <div className="prem-policy text-center">
                                                <ListGroup >
                                                    <ListGroupItem className="text-light" style={{backgroundColor:'#3C9FE1'}}><BsArrowRight/> For government and academic labs only</ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </Card.Body>
                                        <div className="text-center mt-4">
                                            <Button className="prem-btn" variant='outline-primary' onClick={() => setAcademicShow(true)} style={{fontWeight:'bold', letterSpacing:1, color:'#3C9FE1'}}>Anmod om køb</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="price-item text-center">
                                    <div className="price-top">
                                        <div className="prisliste-img text-center" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                            <Image roundedCircle alt="2pacShakur" src={require('../../img/research.jpg')} style={{height:130}}></Image>
                                        </div>
                                        <h4 className='pt-2'>Research</h4>
                                        <Card.Subtitle className="text-center mt-2">
                                            <p>2 User Licenses</p>
                                                
                                        </Card.Subtitle>
                                        {/*<div className="price-label text-light">Best version</div>*/}
                                        <h2 className="mb-0"><sup>$</sup>149</h2>
                                        <span className="text-capitalize">per year</span>
                                    </div>
                                    <div className="price-content">
                                        <div className="border-bottom mb-4 mt-md-4 pb-3 text-left" style={{listStyle:'none'}}>
                                            <h5>Features</h5>
                                            <li>
                                                <i className="zmdi zmdi-check mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Target Audience</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-check mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>5:</b> User Account</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-check mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>100+:</b> Video Tuts</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-close mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Backup</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-close mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>Unlimited:</b> Support</p>
                                            </li>
                                            <li>
                                                <i className="zmdi zmdi-close mr-2"></i>
                                                <p className="mb-2"><BsFillCheckCircleFill color='green'/> <b>Free:</b> Storage</p>
                                            </li>
                                        </div>
                                        <Card.Body>
                                            <div className="prem-policy text-center">
                                                <ListGroup >
                                                    <ListGroupItem className="text-light" style={{backgroundColor:'#3C9FE1'}}><BsArrowRight/> For government and academic labs only</ListGroupItem>
                                                </ListGroup>
                                            </div>
                                        </Card.Body>
                                        <div className="text-center mt-4">
                                            <Button className="prem-btn" variant='outline-primary' onClick={() => setResearchShow(true)} style={{fontWeight:'bold', letterSpacing:1, color:'#3C9FE1'}}>Anmod om køb</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
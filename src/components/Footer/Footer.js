import React from 'react';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
// import { faIdCard } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    // library.add(fab, faFacebookSquare, faTwitterSquare, faInstagramSquare, faYoutubeSquare, faGoogle, faIdCard)

    return (
        <div className=" bg-primary p-5 mt-5">
            <Row xs={1} md={2}>
            <div>
                <h2 className="text-white">Stay Updated</h2>
                <InputGroup className="mb-3 mx-5">
                <FormControl
                    placeholder="Email Eddress"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
                <Button className="fw-bold bg-primary border border-1 rounded-1 text-white p-3"> Subscribe Now</Button>
                </InputGroup>
                <Row xs={2} md={2} className="">
                <div className="text-white">
                <h5 className="my-4 pb-4">About Us</h5>
                <p>Online Learning</p>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Center</p>
                <p>Become An Instructor</p>
                </div>
                <div className="text-white">
                <h5 className="my-4 pb-4">Campus</h5>
                <p>Our Plans</p>
                <p>Free Trial</p>
                <p>Academic Solutions</p>
                <p>Business Solutions</p>
                <p>Government Solutions</p>
                </div>
                </Row>
            </div>
            <div className="mt-5">
                <Row xs={2} md={2}>
                <div className="text-white mt-5">
                <h5 className="my-5">Information</h5>
                <p>Admissions Policy</p>
                <p>Getting Started</p>
                <p>Online Application</p>
                <p>Visa Information</p>
                <p>Tuition Calculator</p>
                </div>
                <div className="text-white mt-5">
                <h5 className="my-5">Support</h5>
                <p>Support</p>
                <p>Contact Us</p>
                <p>System Requirements</p>
                <p>Register Activation Key</p>
                <p>Site Feedback</p>
                </div>
                </Row>
            </div>
        </Row>
                <div className="justify-content-center bg-dark fw-bold text-white p-3 mt-3 w-50">
                    <p>Copyright ©2021 All rights reserved | This site is made with Md Irfan
                    </p>
                </div>
        </div>
    );
};

export default Footer;
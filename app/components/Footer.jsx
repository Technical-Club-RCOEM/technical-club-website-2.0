import React from 'react';
import './footer.css'; 
export default function Footer () {
    return (
        <div className="box">
                <div className="rectangle" id='rect'>
                    <div className='contact-us'>
                        <h3>
                            Contact Us
                        </h3>
                </div>

                    <div className='colab'>
                        <p>
                            WANT TO COLLABORATE
                        </p>
                    </div>

                    <div className='email'>
                        <p>
                        technicalclub@rknec.edu
                        </p>

                    </div>

                    <div className='call'>
                        <h3> CALL US </h3>
                    </div>

                    <div className='num'>
                        <h3>
                        0712 258 0011
                        </h3>
                    </div>

                    <div className='social'>
                        <h3>
                            Social
                        </h3>
                    </div>

                    <div class="socials">
                        <ul>
                            <li><a href="#"> INSTAGRAM</a></li>
                            <li><a href="#"> FACEBOOK </a></li>
                            <li><a href="#"> LINKEDIN</a></li>
                            <li><a href="#"> TWITTER</a></li>
                        </ul>
                    </div>


                    <div className='circle'>

                        <div>
                            <h3>
                                Get in Touch
                            </h3>
                        </div>

                    </div>

                    <div className='location'>
                        <h3>
                            LOCATION
                        </h3>
                    </div>

                    <div className='address'>
                        <p>
                        Shri Ramdeobaba College of Engineering and Management, Katol Rd, Lonand, Gittikhadan, Nagpur, Maharashtra 440013
                        </p>
                    </div>
                </div>
        </div>

    );
};
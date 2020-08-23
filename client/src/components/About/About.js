import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from 'react-bootstrap/Container'

const About = () => {
    return(
<div style={{marginTop:'100px'}} className="container-fluid text-center d-none d-lg-block">

<Typography variant="h6" noWrap>
                   ABOUT LA PENDULE   
                  </Typography>
                  <div className="container-fluid text-center d-none d-lg-block">
                    <p> At La Pendule  your satisfaction is our priority and <br />
                    we want to ensure we always provide you with the best services and support.<br />
                    It is a one stop shop for all the luxury and well-known brands of watches.<br />
                    If you are looking for easy payment methods and an interactive environment 
                    this site is the right place for you <br />
                     </p>
                   </div>
                   <Typography variant="h6" noWrap>
                   CONTACT US:   
                  </Typography>
                   <div className="container-fluid text-center d-none d-lg-block">
                      
                       <p>
                        SYED AUN HUSSAIN HASHMI<br />
                        Email:syed@gmail.com
                       </p>
                       <p>
                        LAIBA OVAIS<br />
                        Email:laibaovais05@gmail.com
                       </p>
                       <p>
                        BISMA MANSOOR<br />
                        Email:bisma.mansoor@gmail.com
                       </p>
                       <p>
                        AREEBA KHAN<br />
                        Email:areebakhan@gmail.com
                       </p>
                       
                   </div>
                   
    </div>
    );
}




export default About;
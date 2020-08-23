import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function FooterPage ()  {
  return (
    <MDBFooter color="white" className="font-small pt-4 mt-4">
      
      
      <div style={{background: '#343a40'}} className="footer-copyright text-center py-3">
        <MDBContainer fluid color="white">
          &copy; {new Date().getFullYear()} Copyright: <a href="/" > La Pendule</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;
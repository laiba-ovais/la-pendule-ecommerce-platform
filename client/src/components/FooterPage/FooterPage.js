import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function FooterPage ()  {
  return (
    <footer color="white" position="bottom" className="fixed-bottom">
      
      
      <div style={{background: '#343a40', color: 'white'}} className="footer-copyright text-center py-3">
        <MDBContainer fluid color="white">
          &copy; {new Date().getFullYear()} Copyright: <a href="/" > La Pendule</a>
        </MDBContainer>
      </div>
    </footer>
  );
}

export default FooterPage;
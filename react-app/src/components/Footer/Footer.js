import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque imperdiet consectetur dolor in elementum.
            </p>
          </div>
          <div class="col-md-2 list">
            <ul>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2 list">
            <ul>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
              <li>
                <a href="#">Lorem Ipsum</a>
              </li>
            </ul>
          </div>
          <div class="col-md-2" />
          <div class="col-md">
            <h5>
              <strong>Contact Info</strong>
            </h5>
            <p>
              <strong>Adress:</strong> 410 Grand Street New York NY 10002
            </p>
            <p>
              <strong>Email:</strong> josephxwf@gmail.com
            </p>
            <p>
              <strong>Tel.:</strong> (888) 888 8888
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

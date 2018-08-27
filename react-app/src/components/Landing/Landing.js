import React, { Component } from "react";
import { Link } from "react-router-dom";
import Scrollchor from "react-scrollchor";
import "./Landing.css";
// Material UI componenets

import "./Landing.css";
const styles = {
  teamName: {
    letterSpacing: ".5px",
    fontWeight: 700
  },
  root: {
    marginBottom: "4em",
    height: "100%",
    marginTop: "0em"
  }
};

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      textIdx: 0,
      products: [
        {
          title: "title1",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque",
          code: "1"
        },
        {
          title: "title2",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque",
          code: "2"
        },
        {
          title: "title3",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque",
          code: "3"
        },
        {
          title: "title4",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque",
          code: "4"
        },
        {
          title: "title5",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque",
          code: "5"
        },
        {
          title: "title6",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque",
          code: "6"
        },
        {
          title: "title7",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque",
          code: "7"
        },
        {
          title: "title8",
          desc:
            "Lorem ipsum dolor sit amet consectetur adipiscing elit Pellentesque",
          code: "8"
        }
      ]
    };
  }

  render() {
    const productCards = this.state.products.map((product, index) => {
      return (
        <div
          class="card text-center bg-light mb-3 col-lg-3 col-md-6 col-sm-6 col-11"
          href={"/product/" + product.code}
          style={{
            padding: "0em 1em"
          }}
        >
          <a
            href={"/product/" + product.code}
            style={{
              textDecoration: "none",
              color: "black"
            }}
          >
            <img
              class="card-img-top"
              src={`/images/icons/${product.code}.png`}
              style={{ width: "50%" }}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <p class="card-text">{product.desc}</p>
            </div>
          </a>
        </div>
      );
    });

    return (
      <div>
        <section id="section1">
          <div class="jumbotron section1">
            <div class="container">
              <h1 class="display-4">Hey!</h1>

              <p>this is a react redux django mysql start program</p>

              <div
                class="btn-group mr-2"
                role="group"
                aria-label="Second group"
              >
                <Link to="/coach">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    href={"/coach"}
                  >
                    See a product
                  </button>
                </Link>
              </div>

              <div>
                <Scrollchor
                  to="#section2"
                  animate={{ offset: -80, duration: 600 }}
                >
                  <i
                    class="fa fa-arrow-circle-down"
                    style={{
                      fontSize: "48px",
                      color: "gray",
                      position: "absolute",
                      bottom: "0",
                      left: "48%"
                    }}
                  />
                </Scrollchor>
              </div>
            </div>
          </div>
        </section>

        <section id="section2" className="container text-center">
          <div>
            <h3> See all the products</h3>
          </div>
          <div class="row" style={{ position: "relative" }}>
            {productCards}
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;

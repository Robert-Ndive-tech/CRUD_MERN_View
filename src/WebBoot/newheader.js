import React from 'react';

const CarouselTemplate = () => {
  const currentYear = new Date().getFullYear(); // For dynamic year

  return (
    <>
      <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Carousel</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="placeholder" style={{ background: 'var(--bs-secondary-color)', height: '100%' }}></div>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="placeholder" style={{ background: 'var(--bs-secondary-color)', height: '100%' }}></div>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Some representative placeholder content for the second slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="placeholder" style={{ background: 'var(--bs-secondary-color)', height: '100%' }}></div>
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <div className="rounded-circle placeholder" style={{ background: 'var(--bs-secondary-color)', width: '140px', height: '140px' }}></div>
              <h2 className="fw-normal">Heading</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <div className="rounded-circle placeholder" style={{ background: 'var(--bs-secondary-color)', width: '140px', height: '140px' }}></div>
              <h2 className="fw-normal">Heading</h2>
              <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <div className="rounded-circle placeholder" style={{ background: 'var(--bs-secondary-color)', width: '140px', height: '140px' }}></div>
              <h2 className="fw-normal">Heading</h2>
              <p>And lastly this, the third column of representative placeholder content.</p>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-body-secondary">It’ll blow your mind.</span></h2>
              <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            </div>
            <div className="col-md-5">
              <div className="bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', background: 'green', color: 'var(--bs-secondary-color)' }}></div>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span></h2>
              <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <div className="bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', background: 'green', color: 'var(--bs-secondary-color)' }}></div>
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
              <p className="lead">And yes, this is the last block of representative placeholder content.</p>
            </div>
            <div className="col-md-5">
              <div className="bd-placeholder-img-lg featurette-image img-fluid mx-auto" style={{ width: '500px', height: '500px', background: 'var(--bs-secondary-bg)', color: 'var(--bs-secondary-color)' }}></div>
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>

        <footer className="container">
          <p className="float-end"><a href="#">Back to top</a></p>
          <p>&copy; 2017–{currentYear} Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>
      </main>
    </>
  );
};

export default CarouselTemplate;

const PPApp = () => {
  const currentYear = new Date().getFullYear(); // Dynamic year
  
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="aperture" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
        </symbol>
        <symbol id="cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </symbol>
        <symbol id="chevron-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
        </symbol>
      </svg>

      <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand d-md-none" href="#">
            <svg className="bi" width="24" height="24"><use xlinkHref="#aperture" /></svg>
            Aperture
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">Aperture</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 justify-content-between">
                <li className="nav-item"><a className="nav-link" href="#">
                  <svg className="bi" width="24" height="24"><use xlinkHref="#aperture" /></svg>
                </a></li>
                <li className="nav-item"><a className="nav-link" href="#">Tour</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Product</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Features</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Enterprise</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Support</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
                <li className="nav-item"><a className="nav-link" href="#">
                  <svg className="bi" width="24" height="24"><use xlinkHref="#cart" /></svg>
                </a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <div className="col-md-6 p-lg-5 mx-auto my-5">
            <h1 className="display-3 fw-bold">Designed for engineers</h1>
            <h3 className="fw-normal text-muted mb-3">Build anything you want with Aperture</h3>
            <div className="d-flex gap-3 justify-content-center lead fw-normal">
              <a className="icon-link" href="#">
                Learn more
                <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
              </a>
              <a className="icon-link" href="#">
                Buy
                <svg className="bi"><use xlinkHref="#chevron-right" /></svg>
              </a>
            </div>
          </div>
          <div className="product-device shadow-sm d-none d-md-block"></div>
          <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>

        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 py-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-body-tertiary shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
          </div>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-3 p-3">
              <h2 className="display-5">Another headline</h2>
              <p className="lead">And an even wittier subheading.</p>
            </div>
            <div className="bg-dark shadow-sm mx-auto" style={{ width: '80%', height: '300px', borderRadius: '21px 21px 0 0' }}></div>
          </div>
        </div>

        {/* Repeat the structure for additional sections */}

      </main>

      <footer className="container py-5">
        <div className="row">
          <div className="col-12 col-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mb-2" role="img" viewBox="0 0 24 24">
              <title>Product</title>
              <circle cx="12" cy="12" r="10" />
              <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94" />
            </svg>
            <small className="d-block mb-3 text-muted">© {currentYear}</small>
          </div>
          {/* Additional footer columns */}
        </div>
      </footer>
    </>
  );
};



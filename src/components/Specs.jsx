import React from 'react'

const Specs = () => {
  return (
    <section className="showcase container">
    <div className="container-fluid p-0">
        <div className="row g-0">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" >
                <img 
                className='spec-image'
                src="https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="iphone" />
            </div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Fully Responsive Design</h2>
                <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
            </div>
        </div>
        <div className="row g-0">
            <div className="col-lg-6 text-white showcase-img" >
                <img 
                className='spec-image'
                src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="code" />
            </div>
            <div className="col-lg-6 my-auto showcase-text">
                <h2>Updated For Bootstrap 5</h2>
                <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
            </div>
        </div>
        <div className="row g-0">
            <div className="col-lg-6 order-lg-2 text-white showcase-img" >
                <img 
                className='spec-image'
                src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Easy to Use &amp; Customize</h2>
                <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Specs
import React from 'react'

const Testimonials = () => {
  return (
    <section className="testimonials text-center bg-light">
   
    <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
            <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img className="img-fluid testimonial-img rounded-circle mb-3" src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    <h5>Margaret E.</h5>
                    <p className="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img className="img-fluid testimonial-img rounded-circle mb-3" src="https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    <h5>Fred S.</h5>
                    <p className="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img className="img-fluid testimonial-img rounded-circle mb-3" src="https://images.unsplash.com/photo-1529665730773-4f3fda31a5f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="..." />
                    <h5>Sarah W.</h5>
                    <p className="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                </div>
            </div>
        </div>
    </div>
    <br />
  
</section>
  )
}

export default Testimonials
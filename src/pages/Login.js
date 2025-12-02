import React from 'react'

const Login = () => {
  return (
    <div className="content mt-8">
    <div className="container">
      <div className="row">
        {/* Left Column with Image */}
        <div className="col-md-6">
          <img
            src="assets/images/undraw_remotely_2j6y.svg"
            alt="Image"
            className="img-fluid"
          />
        </div>

        {/* Right Column with Form */}
        <div className="col-md-6 contents">
          <div className="row justify-content-center">
            <div className="col-md-8">
              {/* Header Section */}
              <div className="mb-4">
                <h3>Log In</h3>
                <p className="mb-4">
                  Chaliye App ko shuru karte hai 
                </p>
              </div>

              {/* Form Section */}
              <form action="#" method="post">
                <div className="form-group first">
                  <label htmlFor="username">Email</label>
                  <input type="text" className="form-control" id="username" />
                </div>

                <div className="form-group last mb-4">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>

                <div className="d-flex mb-5 align-items-center">
                  <label className="control control--checkbox mb-0">
                    <span className="caption">Remember me</span>
                    <input type="checkbox" defaultChecked />
                    <div className="control__indicator"></div>
                  </label>
                  <span className="ml-auto">
                    <a href="/signup" className="forgot-pass">Create New Accout</a>
                  </span>
                </div>

                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-block btn-primary"
                />

                <span className="d-block text-left my-4 text-muted">
                  &mdash; or login with &mdash;
                </span>

                {/* Social Login Section */}
                <div className="social-login">
  <a href="#" className="facebook">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-facebook mr-3"
      viewBox="0 0 16 16"
    >
      <path d="M8.94 6.674H7.6V5.353c0-.308.213-.38.364-.38h.894V3.128L8 3.123C6.579 3.123 6 3.983 6 5.091v1.583H4.966v1.61H6v4.704h1.6v-4.704h1.327l.174-1.61z" />
    </svg>
  </a>
  <a href="#" className="twitter">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-twitter mr-3"
      viewBox="0 0 16 16"
    >
      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14-.003-.282-.01-.422A6.676 6.676 0 0 0 16 3.539a6.575 6.575 0 0 1-1.889.518A3.301 3.301 0 0 0 15.555 2c-.64.379-1.348.655-2.102.803a3.284 3.284 0 0 0-5.596 2.994 9.325 9.325 0 0 1-6.766-3.431 3.284 3.284 0 0 0 1.015 4.381A3.301 3.301 0 0 1 .64 6.575v.041a3.284 3.284 0 0 0 2.633 3.218 3.203 3.203 0 0 1-.865.115c-.21 0-.415-.02-.615-.058a3.284 3.284 0 0 0 3.067 2.281A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.046 9.344 9.344 0 0 0 5.026 1.465" />
    </svg>
  </a>
  <a href="#" className="google">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      className="bi bi-google mr-3"
      viewBox="0 0 16 16"
    >
      <path d="M8.16 6.227V8.02h4.383c-.207 1.1-.974 2.03-2.074 2.503V11.56h3.372c1.193-1.1 1.874-2.714 1.874-4.567 0-.254-.017-.502-.048-.746H8.16z" />
      <path d="M6.907 7.312c-.064-.184-.101-.382-.101-.584 0-.202.037-.4.101-.584H3.872v2.34h3.035z" />
    </svg>
  </a>
</div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login

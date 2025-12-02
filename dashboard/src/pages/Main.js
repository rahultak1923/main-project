import React, { useEffect, useState } from 'react'
import { JewelleryData } from '../api/jewelleryapi'

const Main = () => {
  const [data, setData]= useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      const result = await JewelleryData();
      setData(result.jewellery || [])

    }
    fetchData();

  },[])
  return (
<>

      <main class="main-content position-relative border-radius-lg " style={{marginLeft: "17.125rem"}}>
      <nav class="navbar navbar-main navbar-expand-lg custom-navbar " id="navbarBlur">
  <div class="container-fluid py-1 px-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb custom-breadcrumb">
        <li class="breadcrumb-item"><a href="javascript:;">Pages</a></li>
        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
      </ol>
      <h6 class="dashboard-title">Dashboard</h6>
    </nav>
    
    <div class="collapse navbar-collapse justify-content-end" id="navbar">
      <div class="search-container">
        <div class="input-group">
          <span class="input-group-text"><i class="fas fa-search"></i></span>
          <input type="text" class="form-control" placeholder="Type here..."/>
        </div>
      </div>

      {/* <ul class="navbar-nav navbar-right">
        <li class="nav-item">
          <a href="javascript:;" class="nav-link sign-in-link">
            <i class="fa fa-user"></i> <span class="d-sm-inline d-none">Sign In</span>
          </a>
        </li>
        <li class="nav-item d-xl-none">
          <a href="javascript:;" class="nav-link sidenav-toggler" id="iconNavbarSidenav">
            <div class="sidenav-toggler-inner">
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
              <i class="sidenav-toggler-line"></i>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a href="javascript:;" class="nav-link settings-link">
            <i class="fa fa-cog"></i>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a href="javascript:;" class="nav-link notification-link" id="dropdownMenuButton" data-bs-toggle="dropdown">
            <i class="fa fa-bell"></i>
          </a>
          <ul class="dropdown-menu notification-dropdown" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">New message from Laur</a></li>
            <li><a class="dropdown-item" href="#">New album by Travis Scott</a></li>
            <li><a class="dropdown-item" href="#">Payment successfully completed</a></li>
          </ul>
        </li>
      </ul> */}
    </div>
  </div>
</nav>
    <div class="container-fluid py-4">
    <div class="row">
  <div class="col-xl-3 col-sm-6">
    <div class="card custom-card">
      <div class="card-body">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="card-title">Total's Jewellery</p>
              <h5 class="card-value">{data.length}</h5>
              {/* <p class="card-status">
                <span class="text-success">+55%</span> since yesterday
              </p> */}
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon-box primary">
              <i class="ni ni-money-coins"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <div class="col-xl-3 col-sm-6">
    <div class="card custom-card">
      <div class="card-body">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="card-title">Today's Users</p>
              <h5 class="card-value">2,300</h5>
              
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon-box danger">
              <i class="ni ni-world"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-3 col-sm-6">
    <div class="card custom-card">
      <div class="card-body">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="card-title">New Clients</p>
              <h5 class="card-value">+3,462</h5>
              
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon-box success">
              <i class="ni ni-paper-diploma"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-xl-3 col-sm-6">
    <div class="card custom-card">
      <div class="card-body">
        <div class="row">
          <div class="col-8">
            <div class="numbers">
              <p class="card-title">Sales</p>
              <h5 class="card-value">$103,430</h5>
              
            </div>
          </div>
          <div class="col-4 text-end">
            <div class="icon-box warning">
              <i class="ni ni-cart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
</div>

{/* <div class="row mt-4">
    <div class="col-lg-7 mb-lg-0 mb-4">
      <div class="card z-index-2 h-100">
        <div class="card-header pb-0 pt-3 bg-transparent">
          <h6 class="text-capitalize">Sales overview</h6>
          <p class="text-sm mb-0">
            <i class="fa fa-arrow-up text-success"></i>
            <span class="font-weight-bold">4% more</span> in 2021
          </p>
        </div>
        <div class="card-body p-3">
          <div class="chart">
            <canvas id="chart-line" class="chart-canvas" height="300"></canvas>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5">
      <div class="card card-carousel overflow-hidden h-100 p-0">
        <div id="carouselExampleCaptions" class="carousel slide h-100" data-bs-ride="carousel">
          <div class="carousel-inner border-radius-lg h-100">
            <div class="carousel-item h-100 active carousel-img-1">
              <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                  <i class="ni ni-camera-compact text-dark opacity-10"></i>
                </div>
                <h5 class="text-white mb-1">Get started with Argon</h5>
                <p>There’s nothing I really wanted to do in life that I wasn’t able to get good at.</p>
              </div>
            </div>
            <div class="carousel-item h-100 carousel-img-2">
              <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                  <i class="ni ni-bulb-61 text-dark opacity-10"></i>
                </div>
                <h5 class="text-white mb-1">Faster way to create web pages</h5>
                <p>That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
              </div>
            </div>
            <div class="carousel-item h-100 carousel-img-3">
              <div class="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                <div class="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                  <i class="ni ni-trophy text-dark opacity-10"></i>
                </div>
                <h5 class="text-white mb-1">Share with us your design tips!</h5>
                <p>Don’t be afraid to be wrong because you can’t learn anything from a compliment.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div> */}

     
    </div>
  </main>

</>
   
  )
}

export default Main

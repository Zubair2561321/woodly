import React from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <section className="home_banner_sec">
        <div className="home_video_holder">
          <div className="banner_img">
            <div className="banner_cont">
              <h2 className="bnr_subhd">How much is your property worth?</h2>
              <a
                className="rm_btn"
                href="/request_valuation"
                title="Book a valuation today"
              >
                Book a valuation today
              </a>
            </div>
          </div>
          <video autoPlay="" muted="" loop="" playsInline="" id="backgroundvid">
            <source
              src="https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/website/woodleys/79d8eb7b04e488d6bddf9816a1dcbdd1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>
      <section
        id="next_sec"
        className="as_home_search as_full_container bg-transparent"
      >
        <div className="as_container">
          <div className="search_sec col col_300px_re ">
            <form className="search-form">
              <div className="search_form_grid">
                <div className="search_form_item">
                  <span
                    id="hint"
                    style={{
                      position: "absolute",
                      top: "-23px",
                      color: "red",
                      display: "none",
                    }}
                  >
                    {" "}
                    Select Category
                  </span>
                  <select className="form-control" id="propertytype">
                    <option selected="" value="">
                      Select Category
                    </option>
                    <option value="44|46|48">Lettings</option>
                    <option value="43|45">Sales</option>
                  </select>
                </div>
                <div className="search_form_item">
                  <div id="property_type_outer">
                    <select
                      id="filter_attribute_1"
                      name="filter_attribute[categorical][1]"
                      className="field_item  drop-down form-control "
                    >
                      <option value="">Choose Property Type</option>
                      <option value="Barn" lang="en">
                        Barn
                      </option>
                      <option value="Barn Conversion" lang="en">
                        Barn Conversion
                      </option>
                      <option value="Bedsit" lang="en">
                        Bedsit
                      </option>
                      <option value="Block Of Flats" lang="en">
                        Block Of Flats
                      </option>
                      <option value="Bungalow" lang="en">
                        Bungalow
                      </option>
                      <option value="Business Park" lang="en">
                        Business Park
                      </option>
                      <option value="Chalet" lang="en">
                        Chalet
                      </option>
                      <option value="Chateau" lang="en">
                        Chateau
                      </option>
                      <option value="Commercial" lang="en">
                        Commercial
                      </option>
                      <option value="Cottage" lang="en">
                        Cottage
                      </option>
                      <option value="Country House" lang="en">
                        Country House
                      </option>
                      <option value="Detached" lang="en">
                        Detached
                      </option>
                      <option value="Detached Bungalow" lang="en">
                        Detached Bungalow
                      </option>
                      <option value="End Terrace" lang="en">
                        End Terrace
                      </option>
                      <option value="Equestrian" lang="en">
                        Equestrian
                      </option>
                      <option value="Farm" lang="en">
                        Farm
                      </option>
                      <option value="Farmhouse" lang="en">
                        Farmhouse
                      </option>
                      <option value="Finca" lang="en">
                        Finca
                      </option>
                      <option value="Flat" lang="en">
                        Flat
                      </option>
                      <option value="Garage" lang="en">
                        Garage
                      </option>
                      <option value="Hotel" lang="en">
                        Hotel
                      </option>
                      <option value="Houseboat" lang="en">
                        Houseboat
                      </option>
                      <option value="Industrial" lang="en">
                        Industrial
                      </option>
                      <option value="Land" lang="en">
                        Land
                      </option>
                      <option value="Leisure" lang="en">
                        Leisure
                      </option>
                      <option value="Light Industrial" lang="en">
                        Light Industrial
                      </option>
                      <option value="Link Detached" lang="en">
                        Link Detached
                      </option>
                      <option value="Lodge" lang="en">
                        Lodge
                      </option>
                      <option value="Longere" lang="en">
                        Longere
                      </option>
                      <option value="Maisonette" lang="en">
                        Maisonette
                      </option>
                      <option value="Mews" lang="en">
                        Mews
                      </option>
                      <option value="Mobile Home" lang="en">
                        Mobile Home
                      </option>
                      <option value="Office" lang="en">
                        Office
                      </option>
                      <option value="Other" lang="en">
                        Other
                      </option>
                      <option value="Park Home" lang="en">
                        Park Home
                      </option>
                      <option value="Parking" lang="en">
                        Parking
                      </option>
                      <option value="Pub Bar" lang="en">
                        Pub Bar
                      </option>
                      <option value="Restaurant" lang="en">
                        Restaurant
                      </option>
                      <option value="Retail" lang="en">
                        Retail
                      </option>
                      <option value="Retirement" lang="en">
                        Retirement
                      </option>
                      <option value="Riad" lang="en">
                        Riad
                      </option>
                      <option value="Room - Flat share" lang="en">
                        Room - Flat share
                      </option>
                      <option value="Room - House share" lang="en">
                        Room - House share
                      </option>
                      <option value="Semi Detached" lang="en">
                        Semi Detached
                      </option>
                      <option value="Semi Detached Bungalow" lang="en">
                        Semi Detached Bungalow
                      </option>
                      <option value="Studio" lang="en">
                        Studio
                      </option>
                      <option value="Terraced" lang="en">
                        Terraced
                      </option>
                      <option value="Terraced Bungalow" lang="en">
                        Terraced Bungalow
                      </option>
                      <option value="Town House" lang="en">
                        Town House
                      </option>
                      <option value="Villa" lang="en">
                        Villa
                      </option>
                      <option value="Warehouse" lang="en">
                        Warehouse
                      </option>
                    </select>{" "}
                  </div>
                </div>
                <div className="search_form_item">
                  <select
                    className="form-control"
                    id="min-beds"
                    name="filter_attribute[numeric][2][min]"
                  >
                    <option value="" selected="selected">
                      Min Beds
                    </option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                  </select>
                </div>
                <div className="search_form_item">
                  <select
                    className="form-control"
                    id="min_price"
                    name="min_price"
                  >
                    <option value="" selected="selected" hidden="">
                      Min Price
                    </option>
                    <option className="" value="" hidden="">
                      Min Price
                    </option>
                    <option className="rent-price" value={50}>
                      £50
                    </option>
                    <option className="rent-price" value={100}>
                      £100
                    </option>
                    <option className="rent-price" value={200}>
                      £200
                    </option>
                    <option className="rent-price" value={300}>
                      £300
                    </option>
                    <option className="rent-price" value={400}>
                      £400
                    </option>
                    <option className="rent-price" value={500}>
                      £500
                    </option>
                    <option className="rent-price" value={600}>
                      £600
                    </option>
                    <option className="rent-price" value={700}>
                      £700
                    </option>
                    <option className="rent-price" value={800}>
                      £800
                    </option>
                    <option className="rent-price" value={900}>
                      £900
                    </option>
                    <option className="rent-price" value={1000}>
                      £1,000
                    </option>
                    <option className="rent-price" value={1250}>
                      £1,250
                    </option>
                    <option className="rent-price" value={1500}>
                      £1,500
                    </option>
                    <option className="rent-price" value={1750}>
                      £1,750
                    </option>
                    <option className="rent-price" value={2000}>
                      £2,000
                    </option>
                    <option className="rent-price" value={2250}>
                      £2,250
                    </option>
                    <option className="rent-price" value={2500}>
                      £2,500
                    </option>
                    <option className="rent-price" value={2750}>
                      £2,750
                    </option>
                    <option className="rent-price" value={3000}>
                      £3,000
                    </option>
                    <option className="rent-price" value={3500}>
                      £3,500
                    </option>
                    <option className="rent-price" value={4000}>
                      £4,000
                    </option>
                    <option className="rent-price" value={5000}>
                      £5,000
                    </option>
                    <option className="rent-price" value={7500}>
                      £7,500
                    </option>
                    <option className="rent-price" value={10000}>
                      £10,000
                    </option>
                    <option className="sale-price" value={50000}>
                      £50,000
                    </option>
                    <option className="sale-price" value={60000}>
                      £60,000
                    </option>
                    <option className="sale-price" value={70000}>
                      £70,000
                    </option>
                    <option className="sale-price" value={80000}>
                      £80,000
                    </option>
                    <option className="sale-price" value={90000}>
                      £90,000
                    </option>
                    <option className="sale-price" value={100000}>
                      £100,000
                    </option>
                    <option className="sale-price" value={110000}>
                      £110,000
                    </option>
                    <option className="sale-price" value={120000}>
                      £120,000
                    </option>
                    <option className="sale-price" value={125000}>
                      £125,000
                    </option>
                    <option className="sale-price" value={130000}>
                      £130,000
                    </option>
                    <option className="sale-price" value={140000}>
                      £140,000
                    </option>
                    <option className="sale-price" value={150000}>
                      £150,000
                    </option>
                    <option className="sale-price" value={160000}>
                      £160,000
                    </option>
                    <option className="sale-price" value={170000}>
                      £170,000
                    </option>
                    <option className="sale-price" value={175000}>
                      £175,000
                    </option>
                    <option className="sale-price" value={180000}>
                      £180,000
                    </option>
                    <option className="sale-price" value={190000}>
                      £190,000
                    </option>
                    <option className="sale-price" value={200000}>
                      £200,000
                    </option>
                    <option className="sale-price" value={210000}>
                      £210,000
                    </option>
                    <option className="sale-price" value={220000}>
                      £220,000
                    </option>
                    <option className="sale-price" value={230000}>
                      £230,000
                    </option>
                    <option className="sale-price" value={240000}>
                      £240,000
                    </option>
                    <option className="sale-price" value={250000}>
                      £250,000
                    </option>
                    <option className="sale-price" value={260000}>
                      £260,000
                    </option>
                    <option className="sale-price" value={270000}>
                      £270,000
                    </option>
                    <option className="sale-price" value={280000}>
                      £280,000
                    </option>
                    <option className="sale-price" value={290000}>
                      £290,000
                    </option>
                    <option className="sale-price" value={300000}>
                      £300,000
                    </option>
                    <option className="sale-price" value={325000}>
                      £325,000
                    </option>
                    <option className="sale-price" value={350000}>
                      £350,000
                    </option>
                    <option className="sale-price" value={375000}>
                      £375,000
                    </option>
                    <option className="sale-price" value={400000}>
                      £400,000
                    </option>
                    <option className="sale-price" value={425000}>
                      £425,000
                    </option>
                    <option className="sale-price" value={450000}>
                      £450,000
                    </option>
                    <option className="sale-price" value={475000}>
                      £475,000
                    </option>
                    <option className="sale-price" value={500000}>
                      £500,000
                    </option>
                    <option className="sale-price" value={550000}>
                      £550,000
                    </option>
                    <option className="sale-price" value={600000}>
                      £600,000
                    </option>
                    <option className="sale-price" value={650000}>
                      £650,000
                    </option>
                    <option className="sale-price" value={700000}>
                      £700,000
                    </option>
                    <option className="sale-price" value={800000}>
                      £800,000
                    </option>
                    <option className="sale-price" value={900000}>
                      £900,000
                    </option>
                    <option className="sale-price" value={1000000}>
                      £1,000,000
                    </option>
                    <option className="sale-price" value={1250000}>
                      £1,250,000
                    </option>
                    <option className="sale-price" value={1500000}>
                      £1,500,000
                    </option>
                    <option className="sale-price" value={1750000}>
                      £1,750,000
                    </option>
                    <option className="sale-price" value={2000000}>
                      £2,000,000
                    </option>
                    <option className="sale-price" value={2500000}>
                      £2,500,000
                    </option>
                    <option className="sale-price" value={3000000}>
                      £3,000,000
                    </option>
                  </select>
                </div>
                <div className="search_form_item">
                  <select
                    className="form-control"
                    id="max-price"
                    name="max_price"
                  >
                    <option value="" selected="selected" hidden="">
                      Max Price
                    </option>
                    <option className="" value="" hidden="">
                      Max Price
                    </option>
                    <option className="rent-price" value={50}>
                      £50
                    </option>
                    <option className="rent-price" value={100}>
                      £100
                    </option>
                    <option className="rent-price" value={200}>
                      £200
                    </option>
                    <option className="rent-price" value={300}>
                      £300
                    </option>
                    <option className="rent-price" value={400}>
                      £400
                    </option>
                    <option className="rent-price" value={500}>
                      £500
                    </option>
                    <option className="rent-price" value={600}>
                      £600
                    </option>
                    <option className="rent-price" value={700}>
                      £700
                    </option>
                    <option className="rent-price" value={800}>
                      £800
                    </option>
                    <option className="rent-price" value={900}>
                      £900
                    </option>
                    <option className="rent-price" value={1000}>
                      £1,000
                    </option>
                    <option className="rent-price" value={1250}>
                      £1,250
                    </option>
                    <option className="rent-price" value={1500}>
                      £1,500
                    </option>
                    <option className="rent-price" value={1750}>
                      £1,750
                    </option>
                    <option className="rent-price" value={2000}>
                      £2,000
                    </option>
                    <option className="rent-price" value={2250}>
                      £2,250
                    </option>
                    <option className="rent-price" value={2500}>
                      £2,500
                    </option>
                    <option className="rent-price" value={2750}>
                      £2,750
                    </option>
                    <option className="rent-price" value={3000}>
                      £3,000
                    </option>
                    <option className="rent-price" value={3500}>
                      £3,500
                    </option>
                    <option className="rent-price" value={4000}>
                      £4,000
                    </option>
                    <option className="rent-price" value={5000}>
                      £5,000
                    </option>
                    <option className="rent-price" value={7500}>
                      £7,500
                    </option>
                    <option className="rent-price" value={10000}>
                      £10,000
                    </option>
                    <option className="sale-price" value={50000}>
                      £50,000
                    </option>
                    <option className="sale-price" value={60000}>
                      £60,000
                    </option>
                    <option className="sale-price" value={70000}>
                      £70,000
                    </option>
                    <option className="sale-price" value={80000}>
                      £80,000
                    </option>
                    <option className="sale-price" value={90000}>
                      £90,000
                    </option>
                    <option className="sale-price" value={100000}>
                      £100,000
                    </option>
                    <option className="sale-price" value={110000}>
                      £110,000
                    </option>
                    <option className="sale-price" value={120000}>
                      £120,000
                    </option>
                    <option className="sale-price" value={125000}>
                      £125,000
                    </option>
                    <option className="sale-price" value={130000}>
                      £130,000
                    </option>
                    <option className="sale-price" value={140000}>
                      £140,000
                    </option>
                    <option className="sale-price" value={150000}>
                      £150,000
                    </option>
                    <option className="sale-price" value={160000}>
                      £160,000
                    </option>
                    <option className="sale-price" value={170000}>
                      £170,000
                    </option>
                    <option className="sale-price" value={175000}>
                      £175,000
                    </option>
                    <option className="sale-price" value={180000}>
                      £180,000
                    </option>
                    <option className="sale-price" value={190000}>
                      £190,000
                    </option>
                    <option className="sale-price" value={200000}>
                      £200,000
                    </option>
                    <option className="sale-price" value={210000}>
                      £210,000
                    </option>
                    <option className="sale-price" value={220000}>
                      £220,000
                    </option>
                    <option className="sale-price" value={230000}>
                      £230,000
                    </option>
                    <option className="sale-price" value={240000}>
                      £240,000
                    </option>
                    <option className="sale-price" value={250000}>
                      £250,000
                    </option>
                    <option className="sale-price" value={260000}>
                      £260,000
                    </option>
                    <option className="sale-price" value={270000}>
                      £270,000
                    </option>
                    <option className="sale-price" value={280000}>
                      £280,000
                    </option>
                    <option className="sale-price" value={290000}>
                      £290,000
                    </option>
                    <option className="sale-price" value={300000}>
                      £300,000
                    </option>
                    <option className="sale-price" value={325000}>
                      £325,000
                    </option>
                    <option className="sale-price" value={350000}>
                      £350,000
                    </option>
                    <option className="sale-price" value={375000}>
                      £375,000
                    </option>
                    <option className="sale-price" value={400000}>
                      £400,000
                    </option>
                    <option className="sale-price" value={425000}>
                      £425,000
                    </option>
                    <option className="sale-price" value={450000}>
                      £450,000
                    </option>
                    <option className="sale-price" value={475000}>
                      £475,000
                    </option>
                    <option className="sale-price" value={500000}>
                      £500,000
                    </option>
                    <option className="sale-price" value={550000}>
                      £550,000
                    </option>
                    <option className="sale-price" value={600000}>
                      £600,000
                    </option>
                    <option className="sale-price" value={650000}>
                      £650,000
                    </option>
                    <option className="sale-price" value={700000}>
                      £700,000
                    </option>
                    <option className="sale-price" value={800000}>
                      £800,000
                    </option>
                    <option className="sale-price" value={900000}>
                      £900,000
                    </option>
                    <option className="sale-price" value={1000000}>
                      £1,000,000
                    </option>
                    <option className="sale-price" value={1250000}>
                      £1,250,000
                    </option>
                    <option className="sale-price" value={1500000}>
                      £1,500,000
                    </option>
                    <option className="sale-price" value={1750000}>
                      £1,750,000
                    </option>
                    <option className="sale-price" value={2000000}>
                      £2,000,000
                    </option>
                    <option className="sale-price" value={2500000}>
                      £2,500,000
                    </option>
                    <option className="sale-price" value={3000000}>
                      £3,000,000
                    </option>
                  </select>
                </div>
                <div className="search_form_item">
                  <a
                    href="javascript:;"
                    className="search cmn_btn hover btn"
                    onclick="submit_search_form();"
                  >
                    {" "}
                    Search Property
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="about_us_sec as_full_container padd bg-gray">
        <div className="as_container ">
          <div className="about_grid">
            <div className="about_grid_item animate animate--fade-right animate--start">
              <img
                src="https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/website/woodleys/20a877e8d7a28f7861e9b14fe23ca839.png"
                className="about_img"
              />
            </div>
            <div className="about_grid_item animate animate--fade-left animate--start">
              <h2 className="sub_head">
                Welcome to{" "}
                <span className="text_clr">Woodleys Estate Agents</span>{" "}
              </h2>
              <p>
                The business is owned and run by Billy Roberts, who has a wealth
                of local knowledge, experience and expertise. Billy and his team
                will always ensure that the service their clients receive is
                second to none.
              </p>
              <p>
                Using Woodleys to sell your home means your property will
                benefit from the latest marketing tools available, including
                maximum exposure to potential buyers via the latest Internet
                Property Portals, regular advertising in the local papers as
                well as having access to a large selection of local buyers who
                have registered with us in order to find a property.
              </p>
              <a href="page/1-about-us.php" className="cmn_btn hover mt_20 btn">
                Read more
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="quick_access as_full_container  padding_50">
        <div className="as_container">
          <div className="as_title col col_100">
            <div className="col col_100 animate animate--fade-right animate--start">
              <h2 className="sub_head">
                Our<span className="text_clr"> Service</span>{" "}
              </h2>
            </div>
          </div>
        </div>
        <div className="as_container asset" style={{ marginTop: 20 }}>
          <div className="col col_50 animate animate--fade-right animate--start">
            <a title="Sales" href="/sales">
              <div className="quick_access_img col pull-left first-sec">
                <figure className="effect-layla">
                  <figcaption>
                    <h2>Sales</h2>
                    {/*<p>Personalised Approach</p>*/}
                  </figcaption>
                </figure>
              </div>
            </a>
          </div>
          <div className="col col_50 animate animate--fade-left animate--start">
            <a title="Lettings" href="/lettings">
              <div className="quick_access_img col pull-right second-sec">
                <figure className="effect-layla">
                  <figcaption>
                    <h2>Lettings</h2>
                    {/*<p>Committed to Excellence</p>*/}
                  </figcaption>
                </figure>
              </div>
            </a>
          </div>
          <div className="col col_50 animate animate--fade-right animate--start">
            <a title="Register" href="/user_register">
              <div className="quick_access_img col pull-left third-sec">
                <figure className="effect-layla">
                  <figcaption>
                    <h2>Register</h2>
                    {/*<p>Exceeding Expectations</p>*/}
                  </figcaption>
                </figure>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section
        id=""
        className="feature_sec as_full_container bg-gray padd dis_block"
      >
        <div className="as_container ">
          <div className="as_title col col_100">
            <div className="col col_80">
              <h2 className="sub_head">
                Featured<span className="text_clr"> Properties</span>{" "}
              </h2>
            </div>
            <div className="col col_20">
              <div className="col col_40 detail_page_sec">
                <button
                  className="slick-prev rent_prev slick-arrow slick-hidden"
                  aria-disabled="true"
                  tabIndex={-1}
                />
                <button
                  className="slick-next rent_next slick-arrow slick-hidden"
                  aria-disabled="true"
                  tabIndex={-1}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="as_container feature_prop_slider animate animate--fade-down slick-initialized slick-slider slick-dotted animate--start"
          style={{ marginTop: 20, display: "block" }}
        >
          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: 395,
                transform: "translate3d(0px, 0px, 0px)",
              }}
            >
              <div
                className="col col_33 slick-slide slick-current slick-active"
                data-slick-index={0}
                aria-hidden="false"
                style={{ width: 395 }}
                tabIndex={0}
                role="tabpanel"
                id="slick-slide00"
                aria-describedby="slick-slide-control00"
              >
                <div className="col feature_div bg_fff float_left">
                  <a
                    href="property/6858-48-granby-gardens"
                    className="feature_img"
                    style={{
                      backgroundImage:
                        'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6858/c75be711dfac26916e50931c45ebf3f5.jpg")',
                    }}
                    tabIndex={0}
                  >
                    <div className="img_overlay">
                      <div className="ribbon_text">Available / For Sale</div>
                    </div>
                  </a>
                  <a href="property/6858-48-granby-gardens" tabIndex={0}>
                    <div className="feature_content">
                      <h4 className="fe_title">Asking Price £280,000</h4>
                      <div className="fe_location">
                        <i class="fa-solid fa-location-dot me-3"></i> Reading,
                        RG1
                      </div>
                      <div className="fe_price">48 Granby Gardens</div>
                      <div className="col pro_description">
                        <p>
                          {" "}
                          &nbsp;Offered to market with no onward chain is this
                          two plus one bedroom period property with&nbsp;good
                          access for town centre buses and trains, conveniently
                          located between Reading Town Centre, Royal Berkshire
                          Hospital, and Reading University, and several public
                          transport links are within walking distance of the
                          property.&nbsp;The property comprises of two reception
                          rooms, kitchen, bathroom. To the first floor there are
                          two bedrooms with a third room of a bedroom. To the
                          rear there is a private enclosed garden. Parking
                          permits can be applied for from the local council.
                          Further benefits include an annual boiler gas
                          certification.
                        </p>
                      </div>
                    </div>
                    <div className="col col_100 bg-blue amenities">
                      <div className="col col_33">
                        <i class="fa-solid fa-bed"></i> 2{" "}
                      </div>
                      <div className="col col_33">
                        <i class="fa-solid fa-bath"></i> 1{" "}
                      </div>
                      <div className="col col_33">
                        <i class="fa-solid fa-couch"></i> 2{" "}
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <ul className="slick-dots" role="tablist">
            <li className="slick-active" role="presentation">
              <button
                type="button"
                role="tab"
                id="slick-slide-control00"
                aria-controls="slick-slide00"
                aria-label="1 of 1"
                tabIndex={0}
                aria-selected="true"
              >
                1
              </button>
            </li>
          </ul>
        </div>
      </section>
      <section className="app_sec as_full_container padd">
        <div className="as_container ">
          <div className="app_grid">
            <div className="app_grid_item">
              <div className="app_title title_sec">
                Download{" "}
                <span className="text_clr">Woodleys Estate Agents App</span>{" "}
                from App Store / Google Play.
              </div>
              <div className="app_content_list">
                <div className="app_icon_sec">
                  <i class="fa-brands fa-app-store-ios"></i>
                  <span>App Store</span>
                </div>
                <p>
                  Click on the below icon to download Woodleys Estate Agents App
                  from the App Store.
                </p>
                <a
                  href="https://apps.apple.com/us/app/woodleys-estate-agents/id6502690427?platform=iphone"
                  target="_blank"
                >
                  <div className="app_store" />
                </a>
              </div>
              <div className="app_content_list">
                <div className="app_icon_sec">
                  <i class="fa-brands fa-google-play"></i>
                  <span>Google Play</span>
                </div>
                <p>
                  Click on the below icon to download Woodleys Estate Agents App
                  from the Google Play.
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=woodleys.gnbproperty.com"
                  target="_blank"
                >
                  <div className="android_app" />
                </a>
              </div>
            </div>
            <div className="app_grid_item">
              <img
                className="app_image animate animate--fade-left animate--start"
                src="https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/website/woodleys/77d5ede397a6b49fd60c1160cdea17b5.png"
                alt="Woodleys  Estate Agents App image"
                title="Woodleys  Estate Agents App image"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="valuation_id" className=" as_full_container padding_80">
        <div className="as_container">
          <div className="section row">
            <div className="image_1 col-md-5 animate animate--fade-right animate--start">
              <img src="https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/website/woodleys/f4292a6225d0e697c0da4047d8e34863.jpg" />
            </div>
            <div className="col-md-7 animate animate--fade-left animate--start">
              <h2>How much is your property worth?</h2>
              <p>Request a free property valuation from Woodleys</p>
              <a className="cmn_btn hover mt_20 btn" href="request_valuation">
                Request free valuation
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="register_id"
        className="register_class as_full_container padding_80"
      >
        <div className="as_container">
          <div className="section row">
            <div className="col-md-7 animate animate--fade-left animate--start">
              <h2>Register with us</h2>
              <p>We can help set up email alerts about new properties...</p>
              <a className="cmn_btn hover mt_20 btn" href="/user_register">
                Register with us
              </a>
            </div>
            <div className="image_1 col-md-5 animate animate--fade-right animate--start">
              <img src="https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/website/woodleys/f4292a6225d0e697c0da4047d8e34863.jpg" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;

import React from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";

const Lettings = () => {
  return (
    <>
      <Header />
      <section
        id="detaild_page"
        className="as_home_search as_full_container bottom-65 position-relative"
      >
        <div className="background_texture" />
        <div className="as_container">
          <div className="find_sec col col_300px animate animate--fade-right animate--start">
            <div className="text_center">
              <div className="text_upper">Find Your</div>
              <div className="t_e_cap">Properties</div>
            </div>
          </div>
          <div className="col col_300px_re animate animate--fade-left animate--start">
            <form className="search-form">
              <div className="col col_100">
                <div className="col  col_33">
                  <span
                    id="hint"
                    style={{
                      position: "absolute",
                      top: 15,
                      color: "red",
                      display: "none",
                    }}
                  >
                    {" "}
                    Select Category{" "}
                  </span>
                  <select className="form-control" id="propertytype">
                    <option selected="" value="43|45">
                      Sales
                    </option>
                    <option value="44|46|48">Lettings</option>
                  </select>
                </div>
                <div className="col  col_33">
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
                <div className="col  col_33">
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
                <div className="col  col_33">
                  <select
                    className="form-control"
                    id="min_price"
                    name="min_price"
                  >
                    <option className="" value="" selected="">
                      Min Price
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
                    <option className="sale-price" value={120000}>
                      £120,000
                    </option>
                    <option className="sale-price" value={140000}>
                      £140,000
                    </option>
                    <option className="sale-price" value={160000}>
                      £160,000
                    </option>
                    <option className="sale-price" value={180000}>
                      £180,000
                    </option>
                    <option className="sale-price" value={200000}>
                      £200,000
                    </option>
                    <option className="sale-price" value={250000}>
                      £250,000
                    </option>
                    <option className="sale-price" value={300000}>
                      £300,000
                    </option>
                    <option className="sale-price" value={350000}>
                      £350,000
                    </option>
                    <option className="sale-price" value={400000}>
                      £400,000
                    </option>
                    <option className="sale-price" value={500000}>
                      £500,000
                    </option>
                    <option className="sale-price" value={600000}>
                      £600,000
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
                    <option className="sale-price" value={4000000}>
                      £4,000,000
                    </option>
                    <option className="sale-price" value={4500000}>
                      £4,500,000
                    </option>
                    <option className="sale-price" value={5000000}>
                      £5,000,000
                    </option>
                    <option className="sale-price" value={6000000}>
                      £6,000,000
                    </option>
                    <option className="sale-price" value={7000000}>
                      £7,000,000
                    </option>
                    <option className="sale-price" value={8000000}>
                      £8,000,000
                    </option>
                    <option className="sale-price" value={9000000}>
                      £9,000,000
                    </option>
                    <option className="sale-price" value={10000000}>
                      £10,000,000
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
                  </select>
                </div>
                <div className="col  col_33">
                  <select
                    className="form-control"
                    id="max-price"
                    name="max_price"
                  >
                    <option className="" value="" selected="">
                      Max Price
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
                    <option className="sale-price" value={120000}>
                      £120,000
                    </option>
                    <option className="sale-price" value={140000}>
                      £140,000
                    </option>
                    <option className="sale-price" value={160000}>
                      £160,000
                    </option>
                    <option className="sale-price" value={180000}>
                      £180,000
                    </option>
                    <option className="sale-price" value={200000}>
                      £200,000
                    </option>
                    <option className="sale-price" value={250000}>
                      £250,000
                    </option>
                    <option className="sale-price" value={300000}>
                      £300,000
                    </option>
                    <option className="sale-price" value={350000}>
                      £350,000
                    </option>
                    <option className="sale-price" value={400000}>
                      £400,000
                    </option>
                    <option className="sale-price" value={500000}>
                      £500,000
                    </option>
                    <option className="sale-price" value={600000}>
                      £600,000
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
                    <option className="sale-price" value={4000000}>
                      £4,000,000
                    </option>
                    <option className="sale-price" value={4500000}>
                      £4,500,000
                    </option>
                    <option className="sale-price" value={5000000}>
                      £5,000,000
                    </option>
                    <option className="sale-price" value={6000000}>
                      £6,000,000
                    </option>
                    <option className="sale-price" value={7000000}>
                      £7,000,000
                    </option>
                    <option className="sale-price" value={8000000}>
                      £8,000,000
                    </option>
                    <option className="sale-price" value={9000000}>
                      £9,000,000
                    </option>
                    <option className="sale-price" value={10000000}>
                      £10,000,000
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
                  </select>
                </div>
                <div className="col  col_33">
                  <a
                    href="javascript:;"
                    className="search cmn_btn hover btn"
                    onclick="submit_search_form();"
                    style={{ width: "100%" }}
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
      <section className="feature_sec as_full_container bg_fff padding_50 mt-120">
        <div className="as_container">
          <div className="as_title col col_100 animate animate--fade-left animate--start">
            <div className="left_sec">
              <h1 className="title_sec animate animate--fade-down animate--start">
                Lettings
              </h1>
              <div className="arrow_pagination" style={{ padding: "28px 0" }}>
                <a className="col arrow_bg arrow_bg_right" href="javascript:;">
                  <i className="arrow left" />
                  <div className="img_overlay" />
                </a>
                <a
                  className="col arrow_bg arrow_bg_left active"
                  href="javascript:;"
                  onclick="go_to_properties_list_page(2)"
                >
                  <i className="arrow right" />
                </a>
              </div>
            </div>
            <div className="right_sec views">
              <div className="co_col co_col_100 search_result">
                Search results: <span id="cout">1 - 12 of 93 Properties </span>
              </div>
              <br />
              <a className="active" href="javascript:;" onclick="viewtype(1)">
                <i className="icon gnbicon-grid grid_icon_sept" /> &nbsp; Grid
                View
              </a>
              <a className="" href="javascript:;" onclick="viewtype(2)">
                <i className="icon gnbicon-list grid_icon_sept" /> &nbsp; List
                View
              </a>
            </div>
          </div>
        </div>
        <div className="as_container " style={{ marginTop: 40 }}>
          <div id="main-content" style={{}}>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6867-a-fully-refurbished-one-bedroom-property-set-within-the-heart-of-reading-town-centre"
                  title="A fully refurbished one bedroom property set within the heart of Reading town centre"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6867/b4e0e465b9a99db00c7622bd06db390e.png")',
                  }}
                >
                  <div className="ribbon_text">Available / For Let</div>{" "}
                </a>
                <a
                  href="property/6867-a-fully-refurbished-one-bedroom-property-set-within-the-heart-of-reading-town-centre"
                  title="A fully refurbished one bedroom property set within the heart of Reading town centre"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">
                      A fully refurbished one bedroom property set within the
                      heart of Reading town centre
                    </h2>
                    <div className="fe_location" title="64-72 Kings Road, Q">
                      <i className="fa fa-map-marker" /> 64-72 Kings Road, Q
                    </div>
                    <div className="fe_price">£1,450 pcm</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        A fully refurbished one bedroom property set within the
                        heart of Reading town centre. Comprises entrance hall,
                        open-plan lounge and kitchen/diner with fitted storage
                        space, one double bedroom and modern fitted bathroom.
                        Please note this property is now furnished and available
                        from 23rd September 2024.Please note- no parking
                        included.&nbsp;This property is managed by landlord Mr
                        Russell Property LTD.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 1{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-bath" /> 1{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6865-3bedroom-semi-detached-for-rent"
                  title="3 Bedroom Semi Detached for Rent"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6865/1bd565adb03b2a749dd25a7aa88cdc0b.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Let</div>{" "}
                </a>
                <a
                  href="property/6865-3bedroom-semi-detached-for-rent"
                  title="3 Bedroom Semi Detached for Rent"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">
                      3&nbsp;Bedroom Semi Detached for Rent
                    </h2>
                    <div
                      className="fe_location"
                      title="Campbell Road, Woodley, RG5"
                    >
                      <i className="fa fa-map-marker" /> Campbell Road, Woodley,
                      RG5
                    </div>
                    <div className="fe_price">£1,995 pcm</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Well presented extended three bedroom semi-detached
                        house within Southlake Primary School catchement. The
                        property comprises entrance hall, lounge/dining room,
                        kitchen/breakfast room, conservatory, downstairs WC,
                        three first floor bedrooms and family bathroon. The
                        property benefits from double glazing, gas central
                        heating, enclosed rear garden and driveway leading to
                        garage. The property is currently being redecorated and
                        is available to move in from 10th August 2024. More
                        pictures to follow after redecoration.&nbsp;
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 3{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-bath" /> 1{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-couch" /> 2{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6857-1-bedroom-flat-for-rent"
                  title="Room- house share"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6857/b4915f92446bae389f74002396d41c36.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Let</div>{" "}
                </a>
                <a
                  href="property/6857-1-bedroom-flat-for-rent"
                  title="Room- house share"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">Room- house share</h2>
                    <div
                      className="fe_location"
                      title="Kentwood Hill, Tilehurst, Reading, RG31"
                    >
                      <i className="fa fa-map-marker" /> Kentwood Hill,
                      Tilehurst, Reading, RG31
                    </div>
                    <div className="fe_price">£550 pcm</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        A room to let in a first floor apartment. Communal
                        Lounge/kitchen area and shower room.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 1{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6854-1-bedroom-flat-for-rent"
                  title="1 bedroom Flat for rent"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6854/f4faf8e0f5b80889e4a41c0b01140df7.jpg")',
                  }}
                >
                  <div className="ribbon_text">2 / 2 Available</div>{" "}
                </a>
                <a
                  href="property/6854-1-bedroom-flat-for-rent"
                  title="1 bedroom Flat for rent"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">1 bedroom Flat for rent</h2>
                    <div
                      className="fe_location"
                      title="Kentwood Hill, Tilehurst, Reading, RG31"
                    >
                      <i className="fa fa-map-marker" /> Kentwood Hill,
                      Tilehurst, Reading, RG31
                    </div>
                    <div className="fe_price">£ 550 - £ 650 pcm</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        A room to let in a first floor apartment. Communal
                        Lounge/kitchen area and shower room.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities"></div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6824-3-bedroom-terraced-for-rent"
                  title="3 bedroom Terraced for rent"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6824/cfa147c14211ab03b9d160015ee38056.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Let</div>{" "}
                </a>
                <a
                  href="property/6824-3-bedroom-terraced-for-rent"
                  title="3 bedroom Terraced for rent"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">3 bedroom Terraced for rent</h2>
                    <div
                      className="fe_location"
                      title="Burlsdon Way, Bracknell, RG12"
                    >
                      <i className="fa fa-map-marker" /> Burlsdon Way,
                      Bracknell, RG12
                    </div>
                    <div className="fe_price">£1,500 pcm</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Three bedroom property that has been redecorated
                        throughout. The property comprises entrance hall,
                        downstairs cloakroom, lounge/dining room, kitchen, three
                        first floor bedrooms and family bathroom with shower
                        over. The property benefits from gas central heating,
                        double glazed windows and enclosed rear garden. This
                        property is unfurnished and available 1st October 2024.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 3{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6807-barn-conversion-for-rent"
                  title="Four bedroom detached house"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6807/fedf348ec13c27e2daba17ea154431b9.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Let</div>{" "}
                </a>
                <a
                  href="property/6807-barn-conversion-for-rent"
                  title="Four bedroom detached house"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">Four bedroom detached house</h2>
                    <div
                      className="fe_location"
                      title="Chaffey Close, Woodley, Reading, RG5"
                    >
                      <i className="fa fa-map-marker" /> Chaffey Close, Woodley,
                      Reading, RG5
                    </div>
                    <div className="fe_price">£2,550 pcm</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Well presented four bedroom detached house available
                        from 4th September 2024. The property comprises entrance
                        hall, downstairs WC, lounge, dining room/study,
                        Kitchen/breakfast room, doors leading to enclosed rear
                        garden. The first floor conists four bedrooms (ensuite
                        to primary bedroom) and family bathroom. The property
                        benefits from double glazing, gas central heating and
                        driveway leading to garage. The property is located
                        close to Woodley Town Centre and offers good links to
                        the A329 and M4. This house is unfurnished and available
                        from 4th September 2024.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 4{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-bath" /> 3{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-couch" /> 2{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6771-2-bedroom-apartment-for-rent"
                  title="2 bedroom Apartment for rent"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6771/f79eb7e9c80a06daf7ab22700e3d569d.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Let</div>{" "}
                </a>
                <a
                  href="property/6771-2-bedroom-apartment-for-rent"
                  title="2 bedroom Apartment for rent"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">2 bedroom Apartment for rent</h2>
                    <div
                      className="fe_location"
                      title="Beech Close, Flackwell Heath, High Wycombe, HP10"
                    >
                      <i className="fa fa-map-marker" /> Beech Close, Flackwell
                      Heath, High Wycombe, HP10
                    </div>
                    <div className="fe_price">£1,450 pcm</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        A well presented, modern &amp; spacious two double
                        bedroom second floor apartment. The property comprises
                        entrance hall with storage cupboard, lounge/dining room,
                        kitchen with whitegoods, two double bedrooms with
                        south-facing balcony, bathroom with shower over bath.
                        The property benefits from newly installed UPVC double
                        glazing, communal gardens and ample residents parking.
                        The property is situated in the popular village of
                        Flackwell Heath which provides lots of amenities
                        including, shops, restaurants &amp; cafe's. This
                        apartment is available unfurnished and is available to
                        move in from 31st August 2024.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 2{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-bath" /> 1{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-couch" /> 1{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6630-2-bedroom-apartment-for-rent"
                  title="2 bedroom Apartment for rent"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6630/925a80b98b175916dbbc1dc47100592d.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Let</div>{" "}
                </a>
                <a
                  href="property/6630-2-bedroom-apartment-for-rent"
                  title="2 bedroom Apartment for rent"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">2 bedroom Apartment for rent</h2>
                    <div
                      className="fe_location"
                      title="Addington Road, Reading, RG1"
                    >
                      <i className="fa fa-map-marker" /> Addington Road,
                      Reading, RG1
                    </div>
                    <div className="fe_price">£1,500 pcm</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Two double bedroom flat located close to Reading
                        University and Royal Berkshire Hospital. Property
                        comprises lounge, kitchen/breakfast room, bathroom with
                        shower, two double bedrooms with built in wardrobes. The
                        property benefits from double glazing, gas central
                        heating and parking. The property is part furnished and
                        is available from 1st October 2024.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 2{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-bath" /> 1{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-couch" /> 1{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6621-1-bedroom-end-terrace-for-rent"
                  title="1 bedroom End Terrace for rent"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6621/33aa0b62d601de699e51c7c8a0cef4fb.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Let</div>{" "}
                </a>
                <a
                  href="property/6621-1-bedroom-end-terrace-for-rent"
                  title="1 bedroom End Terrace for rent"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">1 bedroom End Terrace for rent</h2>
                    <div
                      className="fe_location"
                      title="Grovelands Road, Reading, RG30"
                    >
                      <i className="fa fa-map-marker" /> Grovelands Road,
                      Reading, RG30
                    </div>
                    <div className="fe_price">£950 pcm</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        One bedroom house located in West Reading and close to
                        local amenities and transport links. The property
                        comprises lounge, kitchen with appliances, double
                        bedroom with wardrobes, bathroom with shower over. The
                        property benefits from double glazing, underfloor
                        heating and off road parking. This property is
                        unfurnished and available from 16th September 2024.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 1{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-bath" /> 1{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-couch" /> 1{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6427-2-bedroom-end-terrace-for-rent"
                  title="2 bedroom End Terrace for rent"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6427/b331cd5c696a8b779d20b14279573b94.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Let</div>{" "}
                </a>
                <a
                  href="property/6427-2-bedroom-end-terrace-for-rent"
                  title="2 bedroom End Terrace for rent"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">2 bedroom End Terrace for rent</h2>
                    <div
                      className="fe_location"
                      title="Barley Gardens, Winnersh, Wokingham, Berkshire, RG41"
                    >
                      <i className="fa fa-map-marker" /> Barley Gardens,
                      Winnersh, Wokingham, Berkshire, RG41
                    </div>
                    <div className="fe_price">£1,500 pcm</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        A modern two bedroom house located in a quiet
                        cul-del-sac and within easy walking distance to Winnersh
                        Train Station. The property comprises lounge, kitchen
                        with whitegoods, downstairs cloakroom, two double
                        bedrooms with build in wardrobes, family bathroom with
                        shower over bath and a lovely rear garden. The property
                        benefits from uPVC Double Glazing, gas central heating
                        and allocated parking. The property is unfurnished and
                        is available from 16th September 2024.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 2{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-bath" /> 2{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6322-4-bedroom-semi-detached-for-rent"
                  title="4 bedroom Semi Detached for rent"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6322/2be2bdeda2fb315e145ec5b867444087.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Let</div>{" "}
                </a>
                <a
                  href="property/6322-4-bedroom-semi-detached-for-rent"
                  title="4 bedroom Semi Detached for rent"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">
                      4 bedroom Semi Detached for rent
                    </h2>
                    <div
                      className="fe_location"
                      title="Godstow Close, Woodley, Reading, Berkshire, RG5"
                    >
                      <i className="fa fa-map-marker" /> Godstow Close, Woodley,
                      Reading, Berkshire, RG5
                    </div>
                    <div className="fe_price">£2,000 pcm</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Situated on a corner plot is this four double bedroom
                        semi-detached property located within North Woodley.
                        This property offers lounge/dining room,
                        kitchen/breakfast room, utility room, ground floor
                        bedroom, downstairs wc, three first floor bedrooms and a
                        bathroom. Outside there is driveway parking that leads
                        to a covered car port. This property is to be let
                        un-furnished and available from 7th October 2024.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 4{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-bath" /> 1{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-couch" /> 1{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6301-3-bedroom-semi-detached-for-rent"
                  title="3 bedroom Semi Detached for rent"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6301/7c912b6ff4bb19390af58037459f3f9c.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Let</div>{" "}
                </a>
                <a
                  href="property/6301-3-bedroom-semi-detached-for-rent"
                  title="3 bedroom Semi Detached for rent"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">
                      3 bedroom Semi Detached for rent
                    </h2>
                    <div
                      className="fe_location"
                      title="Stonehaven Drive, Woodley, Reading, Berkshire, RG5"
                    >
                      <i className="fa fa-map-marker" /> Stonehaven Drive,
                      Woodley, Reading, Berkshire, RG5
                    </div>
                    <div className="fe_price">£1,850 pcm</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        A lovely example of a three bedroom semi-detached house
                        on Woodley Airfield. The property is modern throughout
                        and comprises lounge, kitchen/dining room, three
                        bedrooms and family bathroom with separate power shower
                        cubicle. The property benefits from gas central heating
                        system, double glazing, driveway parking for several
                        vehicles and garage. The property also benefits from a
                        lovely rear garden. The property is unfurnished and is
                        available from 21st September 2024.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 3{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-bath" /> 1{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>{" "}
        </div>

        <div className="as_container">
          <div className="arrow_pagination" style={{ padding: "28px 0" }}>
            <a className="col arrow_bg arrow_bg_right" href="javascript:;">
              <i className="arrow left" />
              <div className="img_overlay" />
            </a>
            <a
              className="col arrow_bg arrow_bg_left active"
              href="javascript:;"
              onclick="go_to_properties_list_page(2)"
            >
              <i className="arrow right" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Lettings;

import React from "react";
import Header from "../Section/Header";
import Footer from "../Section/Footer";

const Sales = () => {
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
                Sales
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
                  href="property/6864-34-bingley-grove"
                  title="34 Bingley Grove"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6864/ce7bafcac8d96f4a7d14f9bbc37bd01d.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Sale</div>{" "}
                </a>
                <a
                  href="property/6864-34-bingley-grove"
                  title="34 Bingley Grove"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">34 Bingley Grove</h2>
                    <div
                      className="fe_location"
                      title="Bingley Grove Woodley, RG5"
                    >
                      <i className="fa fa-map-marker" /> Bingley Grove Woodley,
                      RG5
                    </div>
                    <div className="fe_price">Asking Price £500,000</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Situated in a quiet North Woodley location is this well
                        presented three bedroom detached family home that
                        subject to the relevant building and planning
                        regulations offers the possibility for extension. The
                        main accommodation comprises of lounge/dining room,
                        family room with utilty area room, kitchen, downstairs
                        cloakroom. to the first floor there are three bedrooms,
                        family bathroom with shower, To the rear there is a well
                        presernted enclosed rear garden and driveway parking to
                        the front. Bingley Grove is within walking distance of
                        Willow Bank Primary and Waingels College catchment
                        areas. Viewings are highly recommended
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
                  href="property/6862-32-wheble-drive"
                  title="32 Wheble Drive"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6862/505ce6b3905916b179538dc893c6b72b.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Sale</div>{" "}
                </a>
                <a href="property/6862-32-wheble-drive" title="32 Wheble Drive">
                  <div className="feature_content">
                    <h2 className="fe_title">32 Wheble Drive</h2>
                    <div
                      className="fe_location"
                      title="Wheble Drive Woodley, RG5"
                    >
                      <i className="fa fa-map-marker" /> Wheble Drive Woodley,
                      RG5
                    </div>
                    <div className="fe_price">Asking Price £450,000</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Offered to the market is this well presented and
                        extended three bedroom terraced family home, the
                        property comprises of a good sized lounge, re-fitted
                        kitchen/diner and to the first floor there are three
                        bedrooms and a family shower room. To the rear there is
                        a well presented garden with patio area and driveway
                        parking to the front of the property, this property is
                        just a short walk from the popular Woodley Shopping
                        Precinct and Woodford Park. Viewings are highly
                        recommended.
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
                  href="property/6861-17-pitford-road"
                  title="17 Pitford Road"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6861/9e63a21b14816df71bb7deee774fab7d.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Sale</div>{" "}
                </a>
                <a href="property/6861-17-pitford-road" title="17 Pitford Road">
                  <div className="feature_content">
                    <h2 className="fe_title">17 Pitford Road</h2>
                    <div className="fe_location" title="Woodley, RG5">
                      <i className="fa fa-map-marker" /> Woodley, RG5
                    </div>
                    <div className="fe_price">Asking Price £435,000</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        ‘Woodleys Estate Agents are delighted to offer onto the
                        market this three/four bedroom mid terrace property to
                        be sold with no onward chain. Situated in a quiet
                        cul-de-sac location in the popular North Woodley area,
                        close to shops and amenities and within the Waingels
                        College and Willowbank Primary School catchment areas.
                        Having been extended and improved by the current owners,
                        the property comprises, entrance porch, entrance hall,
                        downstairs wc, kitchen, lounge, separate dining room,
                        downstairs 4th&nbsp;bedroom/large study, three good
                        sized bedrooms, family bathroom and large walk-in airing
                        cupboard. There is also spacious loft-storage. To the
                        rear of the property there is a lovely private garden
                        with direct access to the garage which has light and
                        power with an up and over door. Offering flexible
                        accommodation, viewings are strongly recommended to
                        avoid disappointment.’&nbsp;&nbsp;
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
                      <i className="fa-solid fa-couch" /> 2{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/6859-1-hudson-road"
                  title="1 Hudson road"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6859/b49eece09160d60db8d00aa38c926e76.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Sale</div>{" "}
                </a>
                <a href="property/6859-1-hudson-road" title="1 Hudson road">
                  <div className="feature_content">
                    <h2 className="fe_title">1 Hudson road</h2>
                    <div className="fe_location" title="Woodley, RG5">
                      <i className="fa fa-map-marker" /> Woodley, RG5
                    </div>
                    <div className="fe_price">Asking Price £525,000</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Offered to the market is this three bedroom
                        semi-detached family home which benefits from a larger
                        than average plot subject to the usual planning
                        requirements would be ideal for development. This three
                        bedroom property comprises of lounge, conservatory,
                        kitchen and to the first floor there are three bedrooms
                        and a shower room. To the front of the property there is
                        a garden with side access to a generous garden which
                        wraps round the property. This property also benefits
                        from a garage with driveway parking.
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
                  href="property/6858-48-granby-gardens"
                  title="48 Granby Gardens"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/6858/c75be711dfac26916e50931c45ebf3f5.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Sale</div>{" "}
                </a>
                <a
                  href="property/6858-48-granby-gardens"
                  title="48 Granby Gardens"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">48 Granby Gardens</h2>
                    <div className="fe_location" title="Reading, RG1">
                      <i className="fa fa-map-marker" /> Reading, RG1
                    </div>
                    <div className="fe_price">Asking Price £280,000</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        &nbsp;Offered to market with no onward chain is this two
                        plus one bedroom period property with&nbsp;good access
                        for town centre buses and trains, conveniently located
                        between Reading Town Centre, Royal Berkshire Hospital,
                        and Reading University, and several public transport
                        links are within walking distance of the
                        property.&nbsp;The property comprises of two reception
                        rooms, kitchen, bathroom. To the first floor there are
                        two bedrooms with a third room of a bedroom. To the rear
                        there is a private enclosed garden. Parking permits can
                        be applied for from the local council. Further benefits
                        include an annual boiler gas certification.
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
                      <i className="fa-solid fa-couch" /> 2{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/5318-2-bedroom-maisonette-for-sale"
                  title="2 bedroom maisonette for sale"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/5318/71664555796e8a4fb3593bb05ded532d.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Sale</div>{" "}
                </a>
                <a
                  href="property/5318-2-bedroom-maisonette-for-sale"
                  title="2 bedroom maisonette for sale"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">2 bedroom maisonette for sale</h2>
                    <div className="fe_location" title="Reading, RG5">
                      <i className="fa fa-map-marker" /> Reading, RG5
                    </div>
                    <div className="fe_price">Asking Price £264,500</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Offered to the market with no onward chain is this first
                        floor two bedroom maisonette, which is situated in the
                        popular Southlake area. The property comprises of
                        lounge, kitchen, two double bedrooms and a bathroom.
                        This maisonette also benefits from gas central heating
                        and a garage which is situated close by.
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
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/5313-3-bedroom-semi-detached-for-sale"
                  title="3 bedroom Semi Detached for sale"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/5313/0a05820e36d76212b2180e523564cd08.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Sale</div>{" "}
                </a>
                <a
                  href="property/5313-3-bedroom-semi-detached-for-sale"
                  title="3 bedroom Semi Detached for sale"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">
                      3 bedroom Semi Detached for sale
                    </h2>
                    <div
                      className="fe_location"
                      title="Duncan Road, Woodley, Reading, RG5"
                    >
                      <i className="fa fa-map-marker" /> Duncan Road, Woodley,
                      Reading, RG5
                    </div>
                    <div className="fe_price">Asking Price £499,950</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Woodleys Estate Agents are proud to present this three
                        bedroom semi-detached home to market for the first time
                        since 1962. Situated in a central Woodley location, with
                        good schools close by and Woodley Precinct within
                        walking distance this home comprises; entrance hall,
                        lounge, dining room, kitchen, three first floor
                        bedrooms, family bathroom and separate WC. The property
                        has driveway parking, garage and a beautiful rear garden
                        which is a credit to the owners. This lovely property is
                        to be sold with no onward chain and must be viewed to
                        fully appreciate itâ€™s location and wonderful garden.
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
                      <i className="fa-solid fa-couch" /> 1{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/5282-3-bedroom-detached-for-sale"
                  title="3 bedroom Detached for sale"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/5282/5ce4e3f4ab6542e2d1058885ff75e38b.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Sale</div>{" "}
                </a>
                <a
                  href="property/5282-3-bedroom-detached-for-sale"
                  title="3 bedroom Detached for sale"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">3 bedroom Detached for sale</h2>
                    <div
                      className="fe_location"
                      title="Willowside, Woodley, Reading, RG5"
                    >
                      <i className="fa fa-map-marker" /> Willowside, Woodley,
                      Reading, RG5
                    </div>
                    <div className="fe_price">Asking Price £530,000</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Woodleys Estate Agents are proud to present this lovely
                        three bedroom detached house - situated in the highly
                        desirable North Woodley, close to good schools and
                        access to local amenities, this property comprises;
                        entrance hall, downstairs WC, lounge, dining room,
                        kitchen, conservatory, three first floor bedrooms and
                        family shower room. There is driveway parking, private
                        garden, workshop and separate driveway with garage. In
                        our opinion this property is in fantastic condition and
                        must be viewed to fully appreciate it.
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
                      <i className="fa-solid fa-couch" /> 1{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/5201-4-bedroom-town-house-for-sale"
                  title="4 bedroom Town House for sale"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/5201/5a7cece4687e1e18c0e428ccfc53c768.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Sale</div>{" "}
                </a>
                <a
                  href="property/5201-4-bedroom-town-house-for-sale"
                  title="4 bedroom Town House for sale"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">4 bedroom Town House for sale</h2>
                    <div
                      className="fe_location"
                      title="Barn Croft Drive, Lower Earley, Reading, RG6"
                    >
                      <i className="fa fa-map-marker" /> Barn Croft Drive, Lower
                      Earley, Reading, RG6
                    </div>
                    <div className="fe_price">Asking Price £475,000</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Woodleys Estate Agents are proud to present this four
                        bedroom town house to market with no onward chain. Built
                        in 2006, this property comprises entrance hall,
                        downstairs WC, internal access to garage, kitchen
                        breakfast room, lounge, four bedrooms with two en
                        suites, and family bathroom. There is driveway parking
                        and a garden.
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
                  href="property/5143-3-bedroom-detached-bungalow-for-sale"
                  title="3 bedroom Detached Bungalow for sale"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/5143/21eacbed33399ed2022f83a97e21a604.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Sale</div>{" "}
                </a>
                <a
                  href="property/5143-3-bedroom-detached-bungalow-for-sale"
                  title="3 bedroom Detached Bungalow for sale"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">
                      3 bedroom Detached Bungalow for sale
                    </h2>
                    <div
                      className="fe_location"
                      title="Glendevon Road, Woodley, Reading, RG5"
                    >
                      <i className="fa fa-map-marker" /> Glendevon Road,
                      Woodley, Reading, RG5
                    </div>
                    <div className="fe_price">Asking Price £675,000</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Offered to the market with no onward chain is this
                        deceptively spacious extended detached bungalow.
                        Situated in a sought after North Woodley location close
                        to good schools. This property comprises of lounge,
                        dining room, Kitchen with breakfast room, with three
                        bedrooms one with en-suite shower room and a main family
                        shower room and an orangery to the rear of the property.
                        There is an enclosed rear garden, driveway, garage and
                        outside utility building. viewings are highly
                        recommended appreciate the property.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 3{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-bath" /> 2{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-couch" /> 3{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/5138-3-bedroom-apartment-for-sale"
                  title="3 bedroom Apartment for sale"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/5138/6161f2214d52f731821c8feaa7279670.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Sale</div>{" "}
                </a>
                <a
                  href="property/5138-3-bedroom-apartment-for-sale"
                  title="3 bedroom Apartment for sale"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">3 bedroom Apartment for sale</h2>
                    <div
                      className="fe_location"
                      title="Hurricane Way, Woodley, Reading, RG5"
                    >
                      <i className="fa fa-map-marker" /> Hurricane Way, Woodley,
                      Reading, RG5
                    </div>
                    <div className="fe_price">Asking Price £315,000</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Woodleys Estate Agents are proud to present this lovely
                        three bedroom apartment, that is located within the
                        popular Airfield area of Woodley. This stunning property
                        comprises of open plan kitchen / lounge, three bedrooms
                        and family bathroom. The property also offers its own
                        balcony areas, demised parking, gas radiator central
                        heating, fitted appliances and is to be sold with a 120
                        year lease.
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
                      <i className="fa-solid fa-couch" /> 1{" "}
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col col_25 property_div">
              <div className="col feature_div float_left">
                <a
                  href="property/5029-3-bedroom-detached-for-sale"
                  title="3 bedroom Detached for sale"
                  className="feature_img"
                  style={{
                    backgroundImage:
                      'url("https://cdn1.gnbproperty.com/gnb-user-uploads/cnb/images/woodleys/notices/5029/09682e5b91c3c91a03a790062da710a0.jpg")',
                  }}
                >
                  <div className="ribbon_text">Available / For Sale</div>{" "}
                </a>
                <a
                  href="property/5029-3-bedroom-detached-for-sale"
                  title="3 bedroom Detached for sale"
                >
                  <div className="feature_content">
                    <h2 className="fe_title">3 bedroom Detached for sale</h2>
                    <div
                      className="fe_location"
                      title="Triumph Close, Woodley, Reading, RG5"
                    >
                      <i className="fa fa-map-marker" /> Triumph Close, Woodley,
                      Reading, RG5
                    </div>
                    <div className="fe_price">Asking Price £495,000</div>
                    <div className="col prop_desc_main">
                      <p className="prop_desc">
                        Woodleys Estate Agents are proud to present this three
                        bedroom detached property to market. Situated in a sough
                        after location the property comprises entrance hall,
                        lounge, separate dining room, kitchen, utility room,
                        downstairs WC, three first floor bedrooms, family
                        bathroom and ensuite to master. There is driveway
                        parking, private garden and garage.
                      </p>
                    </div>
                  </div>
                  <div className="col col_100 amenities">
                    <div className="col col_33">
                      <i className="fa-solid fa-bed" /> 3{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-bath" /> 2{" "}
                    </div>
                    <div className="col col_33">
                      <i className="fa-solid fa-couch" /> 2{" "}
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

export default Sales;

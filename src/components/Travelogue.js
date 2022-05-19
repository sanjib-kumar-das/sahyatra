import React from "react";
import { useState } from "react";
import "./styles/travelogue.css";
import Fade from "react-reveal/Fade";

const Travelogue = () => {
  // States of Form

  const [data, setData] = useState({
    name: "",
    mail: "",
    gender: "",
    age: "",
    location: "",
    city: "",
    states: "",
    year: "",
    rating: "",
    crating: "",
    hrating: "",
    frating: "",
    reccomendation: "",
    avgBudget: "",
    dayStayed: "",
    eco: "",
    crime1: "",
    crime1txt: "",
    crime2: "",
    crime2txt: "",
    crime3: "",
    crime3txt: "",
    crime4: "",
    crime4txt: "",
    crime5: "",
    crime5txt: "",
    crime6: "",
    crime6txt: "",
    vehicle1: "",
    vehicle2: "",
    vehicle3: "",
    vehicle4: "",
    vehicle5: "",
    vehicle6: "",
    vehicle7: "",
    vehicleTxt: "",
    love: "",
    hate: "",
    comment: "",
    check: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setData({ ...data, [name]: value });
  };
  const [load, setLoad] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      mail,
      gender,
      age,
      city,
      year,
      rating,
      frating,
      crating,
      hrating,
      reccomendation,
      avgBudget,
      dayStayed,
      nightStayed,
      eco,
      crime1,
      crime1txt,
      crime2,
      crime2txt,
      crime3,
      crime3txt,
      crime4,
      crime4txt,
      crime5txt,
      crime5,
      crime6txt,
      crime6,
      crime7,
      crime7txt,
      crime8txt,
      vehicle1,
      vehicle2,
      vehicle3,
      vehicle4,
      vehicle5,
      vehicle6,
      vehicle7,
      vehicleTxt,
      vehicle8,
      vehicle9,
      love,
      hate,
      comment,
      check,
    } = data;
    setLoad(true);
    await fetch(
      "https://crowdsourcing-udvaban-default-rtdb.firebaseio.com/response-data.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          mail: mail,
          age: age,
          gender: gender,
          // location: location,
          city: city,
          // states: states,
          year: year,
          rating: rating,
          hrating: hrating,
          frating: frating,
          crating: crating,
          reccomendation: reccomendation,
          avgBudget: avgBudget,
          dayStayed: dayStayed,
          nightStayed: nightStayed,
          eco: eco,
          crime1: crime1,
          crime1txt: crime1txt,
          crime2: crime2,
          crime2txt: crime2txt,
          crime3: crime3,
          crime3txt: crime3txt,
          crime4: crime4,
          crime4txt: crime4txt,
          crime5: crime5,
          crime5txt: crime5txt,
          crime6: crime6,
          crime6txt: crime6txt,
          crime7: crime7,
          crime7txt: crime7txt,
          crime8txt: crime8txt,
          vehicle1: vehicle1,
          vehicle2: vehicle2,
          vehicle3: vehicle3,
          vehicle4: vehicle4,
          vehicle5: vehicle5,
          vehicle6: vehicle6,
          vehicle7: vehicle7,
          vehicleTxt: vehicleTxt,
          vehicle8,
          vehicle9,
          love: love,
          hate: hate,
          comment: comment,
          check: check,
        }),
      }
    );
    setLoad(false);
    alert("Form Submitted Successfully !!");
    window.location.reload(false);
  };

  // Return function
  return (
    <>
      <div className="container1">
        {/* <div className="row head">
          <h1 className="text-center mt-3 mb-3">
            <span className="p1"></span>
            <span className="p2"></span>
            &nbsp;
            <span className="p3"></span>
            <span className="p4"></span>
          </h1>
        </div> */}
      </div>

      <div className="container">
        {/* HEADING */}

        {/* HEADING END */}
        <form className="row g-4 mt-5" onSubmit={handleSubmit} method="POST">
          <Fade top>
            <div className="row d-flex justify-content-between mb-5">
              <div className="col-10 "></div>
              <div className="col-2 text-danger required1">Required fields</div>
            </div>
          </Fade>
          <Fade delay={100} top>
            <div className="row mb-5">
              {/* FULL NAME */}
              <div className="col-md-8">
                <label
                  htmlFor="validationDefault01"
                  className="form-label qfont text-dark"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Write 'Anonymous' in case you don't want to reveal your name"
                  className="form-control"
                  id="validationDefaultUsername"
                  name="name"
                  onChange={getUserData}
                  value={data.name}
                  autoComplete="off"
                />
              </div>
              {/* FULL NAME END */}

              {/* MAIL ID */}
              <div className="col-md-4">
                <label
                  htmlFor="validationDefault02"
                  className="form-label text-bold qfont required text-dark"
                >
                  Email ID
                </label>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="form-control"
                    id="validationDefaultMail"
                    aria-describedby="inputGroupPrepend2"
                    name="mail"
                    onChange={getUserData}
                    value={data.mail}
                    autoComplete="off"
                    required
                  />
                  {/* <span className="input-group-text" id="mail">
                  @gmail.com
                </span> */}
                </div>
              </div>
            </div>
          </Fade>

          {/* MAIL ID END */}

          {/* GENDER */}
          <Fade delay={200} top>
            <div className="row mb-5   d-flex justify-content-between">
              <div className="form-check form-check-inline col-6  ">
                <div className="mb-2 ">
                  <span className="qfont required text-dark">Your Gender</span>
                </div>
                <div className="form-check form-check-inline mt-2 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio501"
                    name="gender"
                    onChange={getUserData}
                    value={1}
                    autoComplete="off"
                    required
                  />
                  <label
                    className="form-check-label radfont text-dark"
                    htmlFor="inlineRadio1101"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio502"
                    name="gender"
                    onChange={getUserData}
                    // value={data.reccomendation.valueOf}
                    value={2}
                    autoComplete="off"
                    required
                  />
                  <label
                    className="form-check-label radfont text-dark"
                    htmlFor="inlineRadio1102"
                  >
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio503"
                    name="gender"
                    onChange={getUserData}
                    // value={data.reccomendation.valueOf}
                    value={3}
                    autoComplete="off"
                    required
                  />
                  <label
                    className="form-check-label radfont text-dark"
                    htmlFor="inlineRadio2"
                  >
                    Others
                  </label>
                </div>
              </div>
              {/* GENDER END */}

              {/* AGE */}
              <div className="col-md-4 ml-5">
                <label
                  htmlFor="validationDefault0701"
                  className="form-label qfont required text-dark"
                >
                  Your Age
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Present age in 2022"
                    id="validationDefaultUsername21"
                    aria-describedby="inputGroupPrepend2"
                    name="age"
                    onChange={getUserData}
                    value={data.age}
                    autoComplete="off"
                    required
                  />
                  <span className="input-group-text" id="years">
                    years
                  </span>
                </div>
              </div>
            </div>
          </Fade>

          {/* LOCATION */}
          <Fade delay={200} top>
            <div className="row mb-5">
              {/* <div className="col-md-4">
              <label
                htmlFor="validationDefault03"
                className="form-label  "
              >
                Tourist Spot
              </label>
              <input
                type="text"
                placeholder="Type full Location Name here"
                className="form-control"
                id="validationDefault03"
                name="location"
                onChange={getUserData}
                value={data.location}
                autoComplete="off"
              />
            </div> */}
              {/* LOCATION END */}
              {/* CITY */}
              <div className="col-md-12">
                <label
                  htmlFor="validationDefault03"
                  className="form-label qfont required text-dark"
                >
                  Location You Visited
                </label>
                <select
                  className="form-select"
                  id="validationDefault01"
                  name="city"
                  onChange={getUserData}
                  value={data.city}
                  required
                >
                  <option selected disabled value="">
                    Click Here to Choose
                  </option>

                  <option> Aaiyappa Mandir  </option>
                  <option> Aalo  </option>
                  <option> Abbey Falls  </option>
                  <option> Abbot mount  </option>
                  <option> Abu  </option>
                  <option> Achanakmar Wildlife Sanctuary  </option>
                  <option> Achyutaraya Temple  </option>
                  <option> Afzal Khan Tomb  </option>
                  <option> Aga Khan Palace  </option>
                  <option> Agara Lake  </option>
                  <option> Agartala  </option>
                  <option> Agonda Beach  </option>
                  <option> Agra  </option>
                  <option> Agrasen ki Baoli  </option>
                  <option> Agumbe  </option>
                  <option> Ahmadabad  </option>
                  <option> Ahmadnagar  </option>
                  <option> Ahmedabad  </option>
                  <option> Ahobilam temple  </option>
                  <option> Aizawl  </option>
                  <option> Ajaigarh Fort  </option>
                  <option> Ajanta Caves  </option>
                  <option> Ajgaibinath  </option>
                  <option> Ajmer  </option>
                  <option> Akkalkot Swami Maharaj Temple  </option>
                  <option> Akola  </option>
                  <option> Akshardham Temple  </option>
                  <option> Alappuzha  </option>
                  <option> Alappuzha Beach  </option>
                  <option> Alexander Point  </option>
                  <option> Alibaug Beach  </option>
                  <option> Aligarh  </option>
                  <option> Alipore  </option>
                  <option> Alipur Duar  </option>
                  <option> All Saints’ Church  </option>
                  <option> Almatti Dam  </option>
                  <option> Almora  </option>
                  <option> Alwar  </option>
                  <option> Amaravati  </option>
                  <option> Amarnath  </option>
                  <option> Amarpura  </option>
                  <option> Ambaji  </option>
                  <option> Ambala  </option>
                  <option> Ambalapuzha Srikrishna Temple  </option>
                  <option> Ambassa  </option>
                  <option> Ambikapur  </option>
                  <option> Amboli  </option>
                  <option> Amer  </option>
                  <option> Amravati  </option>
                  <option> Amreli  </option>
                  <option> Amritsar  </option>
                  <option> Amroha  </option>
                  <option> Anamudi Shola National Park  </option>
                  <option> Anandpur Sahib  </option>
                  <option> Anantapur  </option>
                  <option> Ananthagiri Hills  </option>
                  <option> Anantnag  </option>
                  <option> Andaman Museum  </option>
                  <option> Andro  </option>
                  <option> Anini  </option>
                  <option> Anjaneri Mountains  </option>
                  <option> Anjar  </option>
                  <option> Anjaw  </option>
                  <option> Anjuna Beach  </option>
                  <option> Annavaram  </option>
                  <option> Aquaserene Tourist Complex  </option>
                  <option> Ara  </option>
                  <option> Araku Valley  </option>
                  <option> Arambol Beach  </option>
                  <option> Archaeological Museum  </option>
                  <option> Arcot  </option>
                  <option> Arikamedu  </option>
                  <option> Arki  </option>
                  <option> Arvalem Waterfall  </option>
                  <option> Arwah Cave, Cherrapunji  </option>
                  <option> Asansol  </option>
                  <option> Ashoka Pillar  </option>
                  <option> Ashwem Beach  </option>
                  <option> Athirapally Waterfalls  </option>
                  <option> Attara Kacheri  </option>
                  <option> Attukal Bhagavathy Temple  </option>
                  <option> Auli  </option>
                  <option> Aurangabad  </option>
                  <option> Aurangabad Caves  </option>
                  <option> Auroville Beach  </option>
                  <option> Ayodhya  </option>
                  <option> Azamgarh  </option>
                  <option> Baba Baidyanath Temple  </option>
                  <option> Badami  </option>
                  <option> Badami Cave Temples  </option>
                  <option> Badrinath  </option>
                  <option> Baga Beach  </option>
                  <option> Bagdogra  </option>
                  <option> Bageshwar  </option>
                  <option> Bagh Caves  </option>
                  <option> Baghmara  </option>
                  <option> Baharampur  </option>
                  <option> Bahraich  </option>
                  <option> Baidadih  </option>
                  <option> Bakkhali  </option>
                  <option> Balaghat  </option>
                  <option> Balancing Rocks  </option>
                  <option> Balangir  </option>
                  <option> Baleshwar  </option>
                  <option> Ballari  </option>
                  <option> Ballia  </option>
                  <option> Bally  </option>
                  <option> Balpakram National Park  </option>
                  <option> Balurghat  </option>
                  <option> Bambolim Beach  </option>
                  <option> Banda  </option>
                  <option> Bandhavgarh National Park  </option>
                  <option> Bangalore Palace  </option>
                  <option> Bankura  </option>
                  <option> Baptist Church Of Mizoram  </option>
                  <option> Bara Banki  </option>
                  <option> Bara Bhangal  </option>
                  <option> Baramula  </option>
                  <option> Baramura Eco Park  </option>
                  <option> Baranagar  </option>
                  <option> Barasat  </option>
                  <option> Baratang Island  </option>
                  <option> Barauni  </option>
                  <option> Bardhaman  </option>
                  <option> Bareilly  </option>
                  <option> Bargi Dam  </option>
                  <option> Baripada  </option>
                  <option> Barmer  </option>
                  <option> Barnawapara Wildlife Sanctuary  </option>
                  <option> Barog  </option>
                  <option> Barot  </option>
                  <option> Barpeta  </option>
                  <option> Barrackpore  </option>
                  <option> Barren  </option>
                  <option> Barsana  </option>
                  <option> Baruni Hill  </option>
                  <option> Barwani  </option>
                  <option> Basilica of Bom Jesus  </option>
                  <option> Basilica of Our Lady of the Mount  </option>
                  <option> Basilica of the Sacred Heart of Jesus  </option>
                  <option> Basirhat  </option>
                  <option> Basti  </option>
                  <option> Basukinath  </option>
                  <option> Batala  </option>
                  <option> Bateshwar Temples  </option>
                  <option> Beas Kund  </option>
                  <option> Beawar  </option>
                  <option> Begusarai  </option>
                  <option> Bekal beach  </option>
                  <option> Belagavi  </option>
                  <option> Belur Math  </option>
                  <option> Belur-Halebid  </option>
                  <option> Bengaluru  </option>
                  <option> Beni Sagar Dam  </option>
                  <option> Benreu  </option>
                  <option> Ber Sahib Gurudwara  </option>
                  <option> Berhampur  </option>
                  <option> Betab valley  </option>
                  <option> Betalbatim Beach  </option>
                  <option> Betla National Park  </option>
                  <option> Bettiah  </option>
                  <option> Betul  </option>
                  <option> Bhadbhada Dam  </option>
                  <option> Bhadrakali Temple  </option>
                  <option> Bhadravati  </option>
                  <option> Bhagalpur  </option>
                  <option> Bhagwan Mahavir Wildlife Sanctuary  </option>
                  <option> Bhalukpong  </option>
                  <option> Bhandara  </option>
                  <option> Bhandarej  </option>
                  <option> Bhangarh Fort  </option>
                  <option> Bharat Dharshan Park  </option>
                  <option> Bharatpur  </option>
                  <option> Bharhut  </option>
                  <option> Bharuch  </option>
                  <option> Bhatia Park  </option>
                  <option> Bhatinda  </option>
                  <option> Bhatinda Fall  </option>
                  <option> Bhatpara  </option>
                  <option> Bhavani Island  </option>
                  <option> Bhavnagar  </option>
                  <option> Bhawani Mandir  </option>
                  <option> Bhedaghaat  </option>
                  <option> Bhilai  </option>
                  <option> Bhilwara  </option>
                  <option> Bhimbekta  </option>
                  <option> Bhimtal  </option>
                  <option> Bhind  </option>
                  <option> Bhiwani  </option>
                  <option> Bhojpur  </option>
                  <option> Bhopal  </option>
                  <option> Bhoramdeo Temple  </option>
                  <option> Bhrigu Lake  </option>
                  <option> Bhubaneshwar  </option>
                  <option> Bhubaneswar  </option>
                  <option> Bhuj  </option>
                  <option> Bhuntar  </option>
                  <option> Bhusawal  </option>
                  <option> Bhuvaneswari Temple  </option>
                  <option> Bibi Ka Maqbara  </option>
                  <option> Bid  </option>
                  <option> Bidar  </option>
                  <option> Bihar Sharif  </option>
                  <option> Bihu Loukon  </option>
                  <option> Bijapur  </option>
                  <option> Bijnor  </option>
                  <option> Bikaner  </option>
                  <option> Bilaspur  </option>
                  <option> Biligiriranga Hills  </option>
                  <option> Binsar  </option>
                  <option> Bir Billing  </option>
                  <option> Birla Mandir  </option>
                  <option> Birla Museum  </option>
                  <option> Birsa Munda Park  </option>
                  <option> Birsa Zoological Park  </option>
                  <option> Bishnupur  </option>
                  <option> Bithoor  </option>
                  <option> Bithur  </option>
                  <option> Bodh Gaya  </option>
                  <option> Bogamati  </option>
                  <option> Bokaro  </option>
                  <option> Bokaro Ispat Pustakalaya  </option>
                  <option> Bokaro Steel City  </option>
                  <option> Bolgatty Palace  </option>
                  <option> Bolpur  </option>
                  <option> Bomdila  </option>
                  <option> Bonacaud Bungalow, Trivandrum  </option>
                  <option> Bongaigaon  </option>
                  <option> Borra Caves  </option>
                  <option> Botanical Garden  </option>
                  <option> Brahmagiri Peak  </option>
                  <option> Brahmapur  </option>
                  <option> Brittos  </option>
                  <option> Budaun  </option>
                  <option> Buddhist Vihara  </option>
                  <option> Budge Budge  </option>
                  <option> Bulandshahr  </option>
                  <option> Buldhana  </option>
                  <option> Bundi  </option>
                  <option> Burdwan  </option>
                  <option> Burhanpur  </option>
                  <option> Butterfly Beach  </option>
                  <option> Buxar  </option>
                  <option> Bylakuppe  </option>
                  <option> Cabo de Rama Beach  </option>
                  <option> Calangute Beach  </option>
                  <option> Campbell Bay  </option>
                  <option> Canary Hills  </option>
                  <option> Candolim Beach  </option>
                  <option> Capitol Complex  </option>
                  <option> Cavelossim Beach  </option>
                  <option> Caves at Puilwa Village  </option>
                  <option> Cellular Jail - National Memorial  </option>
                  <option> Central Museum  </option>
                  <option> Chaibasa  </option>
                  <option> Chail  </option>
                  <option> Chakrata  </option>
                  <option> Chamba  </option>
                  <option> Champaner  </option>
                  <option> Champawat  </option>
                  <option> Champhai  </option>
                  <option> Chand Baori  </option>
                  <option> Chandannagar  </option>
                  <option> Chandel  </option>
                  <option> Chandernagore  </option>
                  <option> Chandigarh  </option>
                  <option> Chandipur  </option>
                  <option> Chandni Chowk  </option>
                  <option> Chandragiri  </option>
                  <option> Chandrapur  </option>
                  <option> Chandratal Baralacha  </option>
                  <option> Changlang  </option>
                  <option> Changsangmonko & Chilise  </option>
                  <option> Changtongya  </option>
                  <option> Chanshal Pass  </option>
                  <option> Chapora Fort  </option>
                  <option> Chapra  </option>
                  <option> Chapramari Wildlife Sanctuary  </option>
                  <option> Charak Pathar  </option>
                  <option> Charlotte Lake  </option>
                  <option> Charre Marre Waterfall  </option>
                  <option> Chas  </option>
                  <option> Chattris Cenotaphs  </option>
                  <option> Chaturbhuj Temple  </option>
                  <option> Chavakkad Beach  </option>
                  <option> Chembra Peak  </option>
                  <option> Chengalpattu  </option>
                  <option> Chennai  </option>
                  <option> Cherai Beach  </option>
                  <option> Cherrapunji  </option>
                  <option> Chettalli  </option>
                  <option> Chhappan Mahal Museum  </option>
                  <option> Chhatarpur  </option>
                  <option> Chhatarpur Mandir  </option>
                  <option> Chhatrapati Sahu Museum  </option>
                  <option>
                     Chhatrapati Shivaji Maharaj Vastu Sangrahalaya  
                  </option>
                  <option> Chhatrapati Shivaji Terminus  </option>
                  <option> Chhindwara  </option>
                  <option> Chicham Bridge  </option>
                  <option> Chidambaram  </option>
                  <option> Chikhaldara  </option>
                  <option> Chikkamagaluru  </option>
                  <option> Chikmagalur  </option>
                  <option> Chilka Lake  </option>
                  <option> Chinnar wildlife sanctuary  </option>
                  <option> Chintaman Ganesh Temple  </option>
                  <option> Chirala Beach  </option>
                  <option> Chirmiri  </option>
                  <option> Chitradurga  </option>
                  <option> Chitrakoot  </option>
                  <option> Chitrakote Falls  </option>
                  <option> Chittaurgarh  </option>
                  <option> Chittoor  </option>
                  <option> Chittorgarh  </option>
                  <option> Chopta  </option>
                  <option> Chottanikkara Devi Temple  </option>
                  <option> Chuchuyimlang  </option>
                  <option> Chui Village (Basti)  </option>
                  <option> Chumukedima Village  </option>
                  <option> Chunnambar Boat House  </option>
                  <option> Churachandpur  </option>
                  <option> Church of Our Lady  </option>
                  <option> Church of Our Lady Piety  </option>
                  <option> Churu  </option>
                  <option> City Park  </option>
                  <option> Coco Beach  </option>
                  <option> Coimbatore  </option>
                  <option> Colva Beach  </option>
                  <option> Connaught Place  </option>
                  <option> Cooch Behar  </option>
                  <option> Coochbehar  </option>
                  <option> Coorg  </option>
                  <option> Coringa Wildlife Sanctuary  </option>
                  <option> Cuddalore  </option>
                  <option> Cumbum Lake  </option>
                  <option> Cuttack  </option>
                  <option> Dagadusheth Halwai Ganapati.  </option>
                  <option> Dahl Lake  </option>
                  <option> Dainthlen Falls  </option>
                  <option> Dal Madol  </option>
                  <option> Dalhousie  </option>
                  <option> Dalma Hills  </option>
                  <option> Dalma Wildlife Sanctuary  </option>
                  <option> Daman  </option>
                  <option> Daman Ganga  </option>
                  <option> Damdama Lake  </option>
                  <option> Damoh  </option>
                  <option> Dampa Tiger Reserve  </option>
                  <option> Dampa Wildlife Sanctuary  </option>
                  <option> Dandi Beach  </option>
                  <option> Dantewada  </option>
                  <option> Daporijo  </option>
                  <option> Darang  </option>
                  <option> Darbhanga  </option>
                  <option> Daringbari  </option>
                  <option> Darjeeling  </option>
                  <option> Darrah National Park  </option>
                  <option> Dassam Falls  </option>
                  <option> Datia  </option>
                  <option> Daulatabad  </option>
                  <option> Davangere  </option>
                  <option> Dawki  </option>
                  <option> Deeg  </option>
                  <option> Deer Park  </option>
                  <option> Dehra Dun  </option>
                  <option> Dehradun  </option>
                  <option> Dehri  </option>
                  <option> Delhi  </option>
                  <option> Delhi Zoo  </option>
                  <option> Deo Tibba  </option>
                  <option> Deoghar  </option>
                  <option> Deoria  </option>
                  <option> Deputy Commissioner’s Bungalow  </option>
                  <option> Desert National Park  </option>
                  <option> Devari Temple  </option>
                  <option> Devgiri Fort  </option>
                  <option> Dewas  </option>
                  <option> Dhamtari  </option>
                  <option> Dhanaulti  </option>
                  <option> Dhanbad  </option>
                  <option> Dhar  </option>
                  <option> Dharamnagar  </option>
                  <option> Dharamshala  </option>
                  <option> Dharmapuri  </option>
                  <option> Dharmshala  </option>
                  <option> Dhauli  </option>
                  <option> Dhaulpur  </option>
                  <option> Dhemaji  </option>
                  <option> Dhenkanal  </option>
                  <option> Dholavira  </option>
                  <option> Dhoni Waterfalls  </option>
                  <option> Dhuandhar Waterfalls  </option>
                  <option> Dhubela Museum  </option>
                  <option> Dhuburi  </option>
                  <option> Dhule  </option>
                  <option> Diamond Harbour  </option>
                  <option> Dibru Saikhowa National Park  </option>
                  <option> Dibrugarh  </option>
                  <option> Diezephe Craft Village  </option>
                  <option> Digboi  </option>
                  <option> Digha  </option>
                  <option> Diglipur Island  </option>
                  <option> Dilli Haat  </option>
                  <option> Dimapur Ao Baptist Church  </option>
                  <option> Dimna Lake  </option>
                  <option> Dinapur Nizamat  </option>
                  <option> Dindigul  </option>
                  <option> Dinman Hardaul’s Palace  </option>
                  <option> Diphu  </option>
                  <option> Diphupar  </option>
                  <option> Dispur  </option>
                  <option> Diu  </option>
                  <option> Diu Museum  </option>
                  <option> Divar Island  </option>
                  <option> Doda  </option>
                  <option> Don Bosco Museum  </option>
                  <option> Dona Paula  </option>
                  <option> Dooars  </option>
                  <option> Double-decker Living Root Bridge  </option>
                  <option> Dowlaiswaram  </option>
                  <option> Doyang Hydro Project  </option>
                  <option> Doyang River  </option>
                  <option> Dr Bhau Daji Lad Mumbai City Museum  </option>
                  <option> Dr. Ambedkar Nagar (Mhow)  </option>
                  <option> Draksharamam  </option>
                  <option> Dubare Elephant Camp  </option>
                  <option> Dubbe Falls  </option>
                  <option> Dudhsagar Falls  </option>
                  <option> Dudhwa National park  </option>
                  <option> Dugarwadi waterfall  </option>
                  <option> Dum Dum  </option>
                  <option> Dumboor Lake  </option>
                  <option> Dumka  </option>
                  <option> Dumna Nature Reserve  </option>
                  <option> Dungarpur  </option>
                  <option> Durg  </option>
                  <option> Durgapur  </option>
                  <option> Dwarka  </option>
                  <option> Dzudu Lake/ Zanibu Peak  </option>
                  <option> Dzukou Valley  </option>
                  <option> Dzüleke  </option>
                  <option> Dzulekie  </option>
                  <option> Eastern Gateway  </option>
                  <option> Echo Point  </option>
                  <option> Eklingji Temple  </option>
                  <option> Elephant Falls  </option>
                  <option> Elephanta Caves  </option>
                  <option> Ellora Caves  </option>
                  <option> Eluru  </option>
                  <option> Eravikulam National Park  </option>
                  <option> Erode  </option>
                  <option> Etah  </option>
                  <option> Etawah  </option>
                  <option> Ettumanoor Mahadeva Temple  </option>
                  <option> Evangelical Church  </option>
                  <option> Fagu  </option>
                  <option> Faizabad  </option>
                  <option> Fakim Wildlife Sanctuary  </option>
                  <option> Falkawan Village  </option>
                  <option> Faridabad  </option>
                  <option> Faridkot  </option>
                  <option> Farrukhabad-cum-Fatehgarh  </option>
                  <option> Fatehpur  </option>
                  <option> Fatehpur Sikri  </option>
                  <option> Fatehpuri Sikri  </option>
                  <option> Firozpur  </option>
                  <option> Firozpur Jhirka  </option>
                  <option> Flora Fountain  </option>
                  <option> Fontainhas & Sao Tome  </option>
                  <option> Fort Aguada  </option>
                  <option> Fort Bassein  </option>
                  <option> Fort of Unchagaon  </option>
                  <option> Fortress of Panikotha  </option>
                  <option> Galtaji Temple  </option>
                  <option> Ganapatipule Beach  </option>
                  <option> Gandhinagar  </option>
                  <option> Gandikota  </option>
                  <option> Ganganagar  </option>
                  <option> Gangotri  </option>
                  <option> Gangtok  </option>
                  <option> Garadia Mahadev  </option>
                  <option> Garden of Caves  </option>
                  <option> Garga Dam  </option>
                  <option> Garhmukteshwar  </option>
                  <option> Gateway of India  </option>
                  <option> Gaya  </option>
                  <option> Gayatri Mandir  </option>
                  <option> Ghagar Buri Chandi Temple  </option>
                  <option> Ghatarani Waterfall  </option>
                  <option> Ghaziabad  </option>
                  <option> Ghazipur  </option>
                  <option> Ghoghla Beach  </option>
                  <option> Ghrishneshwar Temple  </option>
                  <option> Gir National Park  </option>
                  <option> Giridih  </option>
                  <option> Girnar  </option>
                  <option> Global Vipassana Pagoda  </option>
                  <option> Godhra  </option>
                  <option> Gohar Mahal  </option>
                  <option> Gokak Falls  </option>
                  <option> Gokarna  </option>
                  <option> Gol Gumbaz  </option>
                  <option> Gonda  </option>
                  <option> Gopachal Parvat  </option>
                  <option> Gopalpur  </option>
                  <option> Gorakhpur  </option>
                  <option> Gorichen Peak  </option>
                  <option> Gorumara  </option>
                  <option> Grande Island  </option>
                  <option> Great Indian Bustard Sanctuary  </option>
                  <option> Great Nicobar  </option>
                  <option> Green Park  </option>
                  <option> Guhagar Beach  </option>
                  <option> Gujari Mahal Archaeological Museum  </option>
                  <option> Gulbarga  </option>
                  <option> Gulmarg  </option>
                  <option> Guna  </option>
                  <option> Guntur  </option>
                  <option> Gupta Temple  </option>
                  <option> guptakshi  </option>
                  <option> Gurdaspur  </option>
                  <option> Gurez Valley  </option>
                  <option> Gurgaon  </option>
                  <option> Guru Ghasidas National Park  </option>
                  <option> Gurudwara Bangla Sahib  </option>
                  <option> Gurugram  </option>
                  <option> Guruvayoor Temple  </option>
                  <option> Guwahati  </option>
                  <option> Gwalior  </option>
                  <option> Gwalior Fort  </option>
                  <option> Gyalshing  </option>
                  <option> Haflong  </option>
                  <option> Hailakandi  </option>
                  <option> Haji Ali Shrine  </option>
                  <option> Hajipur  </option>
                  <option> Hajo  </option>
                  <option> Haldi  </option>
                  <option> Halebid  </option>
                  <option> Halisahar  </option>
                  <option> Hamirpur  </option>
                  <option> Hampi  </option>
                  <option> Hampi Bazaar  </option>
                  <option> Hampta Pass  </option>
                  <option> Hamsaladeevi  </option>
                  <option> Hansi  </option>
                  <option> Hanumangarh  </option>
                  <option> Haora  </option>
                  <option> Hapur  </option>
                  <option> Hardoi  </option>
                  <option> Haridwar  </option>
                  <option> Harihar Dham  </option>
                  <option> Harike Wetland  </option>
                  <option> Harila Jori  </option>
                  <option> Hassan  </option>
                  <option> Hastinapur  </option>
                  <option> Hathi Pahar  </option>
                  <option> Hathni Falls  </option>
                  <option> Hathras  </option>
                  <option> Hauz Khas Village  </option>
                  <option> Hazaribag  </option>
                  <option> Hazaribagh Lake  </option>
                  <option> Hazaribagh National Park  </option>
                  <option> Hazaribagh Wildlife Sanctuary  </option>
                  <option> Hebbe Falls  </option>
                  <option> Hemakuta Hill Temple  </option>
                  <option> Hijron Ka Khanqah1  </option>
                  <option> Himatnagr  </option>
                  <option> Hindola Mahal  </option>
                  <option> Hirakud Dam  </option>
                  <option> Hirwavan Garden  </option>
                  <option> Hisar  </option>
                  <option> Hivre Waterfall  </option>
                  <option> Hiyangthang Lairembi Temple  </option>
                  <option> Hmuifang  </option>
                  <option> Horsley Hills  </option>
                  <option> Hoshang Shah’s Tomb  </option>
                  <option> Hoshangabad  </option>
                  <option> Hoshiarpur  </option>
                  <option> Howrah  </option>
                  <option> Hubballi-Dharwad  </option>
                  <option> Hubli-Dharwad  </option>
                  <option> Hudco Lake  </option>
                  <option> Hugli  </option>
                  <option> Humayun's Tomb  </option>
                  <option> Hundru Falls  </option>
                  <option> Hyderabad  </option>
                  <option> Ibudhou Thangjing Temple  </option>
                  <option> Idukki  </option>
                  <option> Idukki Dam  </option>
                  <option> Igatpuri  </option>
                  <option> Ikop Pat  </option>
                  <option> Ikop Pat lake  </option>
                  <option> Ima Keithel Woman’s Market  </option>
                  <option> Imphal  </option>
                  <option> Imphal Barracks  </option>
                  <option> Imphal War Cemetery  </option>
                  <option> INA Martyr's Memorial  </option>
                  <option> INA Memorial Complex  </option>
                  <option> India Gate  </option>
                  <option> Indore  </option>
                  <option> Indore White Church  </option>
                  <option> Indrahar Pass  </option>
                  <option> Indravati National Park  </option>
                  <option> Ingraj Bazar  </option>
                  <option> INS Khukri  </option>
                  <option> Intangki Wildlife Sanctuary  </option>
                  <option> Iron Pillar  </option>
                  <option> Iruppu Falls  </option>
                  <option> Isco Rock Art  </option>
                  <option> Itanagar  </option>
                  <option> Itarsi  </option>
                  <option> Jabalpur  </option>
                  <option> Jagannath Puri Temple  </option>
                  <option> Jagannath Temple  </option>
                  <option> Jagdalpur  </option>
                  <option> Jai Vilas Palace Museum  </option>
                  <option> Jain Museum  </option>
                  <option> Jaipur  </option>
                  <option> Jaisalmer  </option>
                  <option> Jaisar Children’s Park  </option>
                  <option> Jal Mandir  </option>
                  <option> Jalandhar  </option>
                  <option> Jalaun  </option>
                  <option> Jaldapara  </option>
                  <option> Jaldhaka  </option>
                  <option> Jalgaon  </option>
                  <option> Jalor  </option>
                  <option> Jalori Pass  </option>
                  <option> Jalpaiguri  </option>
                  <option> Jama Masjid Delhi  </option>
                  <option> Jama Mosque  </option>
                  <option> Jamalpur  </option>
                  <option> Jammu  </option>
                  <option> Jamnagar  </option>
                  <option> Jampui Hills  </option>
                  <option> Jamshedpur  </option>
                  <option> Janjira Fort  </option>
                  <option> Jantar Mantar  </option>
                  <option> Japfu Peak  </option>
                  <option> Jaunpur  </option>
                  <option> Jawahar Toy Meuseum  </option>
                  <option> Jawaharlal Nehru Biological Park  </option>
                  <option> Jawai Dam  </option>
                  <option> Jawhar  </option>
                  <option> Jayanti Sarovar  </option>
                  <option> Jehangir Mahal  </option>
                  <option> Jeypore  </option>
                  <option> Jhabua  </option>
                  <option> Jhalawar  </option>
                  <option> Jhansi  </option>
                  <option> Jharia  </option>
                  <option> Jharia Coal Mines  </option>
                  <option> Jharkhandi Dham  </option>
                  <option> Jhunjhunu  </option>
                  <option> Jibhi  </option>
                  <option> Jim Corbett National Park  </option>
                  <option> Jind  </option>
                  <option> Jirawala Parshwanath  </option>
                  <option> Jivaji Rao Scindia Museum  </option>
                  <option> Jodhpur  </option>
                  <option> Jog Falls  </option>
                  <option> Jonha Falls  </option>
                  <option> Jorebangla Temple  </option>
                  <option> Jorhat  </option>
                  <option> Joshimath  </option>
                  <option> Jowai  </option>
                  <option> Jubilee Lake  </option>
                  <option> Jubilee Park  </option>
                  <option> Junagadh  </option>
                  <option> Jyotiba Temple  </option>
                  <option> Kabirvad  </option>
                  <option> Kachari Ruins  </option>
                  <option> Kadalekalu Ganesha  </option>
                  <option> Kadapa  </option>
                  <option> Kaigal Falls  </option>
                  <option> Kailashahar  </option>
                  <option> Kaina  </option>
                  <option> Kaina (Manipur)  </option>
                  <option> Kaina Hill  </option>
                  <option> Kaina Temple  </option>
                  <option> Kaithal  </option>
                  <option> Kakinada  </option>
                  <option> Kal Bhairav Temple  </option>
                  <option> Kalaburagi  </option>
                  <option> Kalaram Mandir  </option>
                  <option> Kalesar National Park  </option>
                  <option> Kalhatti Falls  </option>
                  <option> Kali Mandir  </option>
                  <option> Kalideh Palace  </option>
                  <option> Kalimpong  </option>
                  <option> Kalinjar Fort  </option>
                  <option> Kalpa  </option>
                  <option> Kalyan  </option>
                  <option> Kalyaneswari Temple  </option>
                  <option> kamalasagar Picnic Spot  </option>
                  <option> Kamarhati  </option>
                  <option> Kamjong  </option>
                  <option> Kanakeshwar Devasthan Temple  </option>
                  <option> Kanakeshwar Forest  </option>
                  <option> Kanatal  </option>
                  <option> Kanchipuram  </option>
                  <option> Kanchrapara  </option>
                  <option> Kandla  </option>
                  <option> Kanger Ghati National Park  </option>
                  <option> Kangla Fort  </option>
                  <option> Kangla Palace  </option>
                  <option> Kangojodi  </option>
                  <option> Kangpokpi  </option>
                  <option> Kangra  </option>
                  <option> Kanha National Park  </option>
                  <option> Kanke Dam  </option>
                  <option> Kannauj  </option>
                  <option> Kanniyakumari  </option>
                  <option> Kannur  </option>
                  <option> Kanpur  </option>
                  <option> Kapaleshwar temple  </option>
                  <option> Kappil Beach  </option>
                  <option> Kapurthala  </option>
                  <option> Karaikal  </option>
                  <option> Karauli  </option>
                  <option> Kargil  </option>
                  <option> Kariavattom, Trivandrum  </option>
                  <option> Karimganj  </option>
                  <option> Karimnagar  </option>
                  <option> Karjat  </option>
                  <option> Karli  </option>
                  <option> Karnal  </option>
                  <option> Kasauli  </option>
                  <option> Kasol  </option>
                  <option> Kathikund  </option>
                  <option> Kathua  </option>
                  <option> Katihar  </option>
                  <option> Kausani  </option>
                  <option> Kavaratti  </option>
                  <option> Kaza  </option>
                  <option> Kaziranga National Park  </option>
                  <option> Kedarnath  </option>
                  <option> Keibul Lamjao National Park  </option>
                  <option> Kendujhar  </option>
                  <option> Kesroli  </option>
                  <option> Keylong  </option>
                  <option> Khajjiar  </option>
                  <option> Khajuraho  </option>
                  <option> Khajuraho Temples  </option>
                  <option> Khambhat  </option>
                  <option> Khammam  </option>
                  <option> Khan Market  </option>
                  <option> Khandagiri Caves  </option>
                  <option> Khandala  </option>
                  <option> Khandoli Park  </option>
                  <option> Khandwa  </option>
                  <option> Kharagpur  </option>
                  <option> Khardung La  </option>
                  <option> Khargone  </option>
                  <option> Kheda  </option>
                  <option> Kheerganga  </option>
                  <option> Khimsar  </option>
                  <option> Khoh Ramhah  </option>
                  <option> Khongjom War Memorial Complex</option>
                  <option> Khonoma  </option>
                  <option> Khonoma Village  </option>
                  <option> Khonsa  </option>
                  <option> Khuldabad  </option>
                  <option> Khwairamband Bazar  </option>
                  <option> Kinnaur  </option>
                  <option> Kinnaur Kailash  </option>
                  <option> Kishangarh  </option>
                  <option> Kishtwar  </option>
                  <option> Kochi  </option>
                  <option> Kodaikanal  </option>
                  <option> Koel View Point  </option>
                  <option> Kohima  </option>
                  <option> Kohima State Museum  </option>
                  <option> Kohima War Cemetery  </option>
                  <option> Kohima Zoo  </option>
                  <option> Kolar  </option>
                  <option> Kolasib  </option>
                  <option> Kolhapur  </option>
                  <option> Kolkata  </option>
                  <option> Kollam  </option>
                  <option> Konar Dam  </option>
                  <option> Konark  </option>
                  <option> Konaseema  </option>
                  <option> Konthoujam Lairembi gi Khubam  </option>
                  <option> Koraput  </option>
                  <option> Kota  </option>
                  <option> Kottayam  </option>
                  <option> Kovalam Beach  </option>
                  <option> Kowdiar Palace  </option>
                  <option> Kozhikode  </option>
                  <option> Kozhikode Beach  </option>
                  <option> Krishna Raja Sagar (KRS) Dam  </option>
                  <option> Krishnanagar  </option>
                  <option> Krishnapura Chhatris  </option>
                  <option> Krishnapuram Palace  </option>
                  <option> Kuchesar  </option>
                  <option> Kufri  </option>
                  <option> Kuki Dolong Village  </option>
                  <option> Kullu  </option>
                  <option> Kumaon  </option>
                  <option> Kumbakonam  </option>
                  <option> Kumbhalgarh  </option>
                  <option> Kundeshwari  </option>
                  <option> Kurnool  </option>
                  <option> Kurseong  </option>
                  <option> Kurukshetra  </option>
                  <option> Kushinagar  </option>
                  <option> Kutch  </option>
                  <option> Kyllang Rock  </option>
                  <option> Kynrem Falls  </option>
                  <option> Lachung  </option>
                  <option> Lady Hydari Park  </option>
                  <option> Laitlum Canyon  </option>
                  <option> Lajpat Nagar  </option>
                  <option> Lakhimpur  </option>
                  <option> Lakhimpur Kheri  </option>
                  <option> Lakkidi Gateway, Wayanad  </option>
                  <option> Lal Baag Palace  </option>
                  <option> Lal Mahal  </option>
                  <option> Lalitpur  </option>
                  <option> Lambasingi  </option>
                  <option> Langza  </option>
                  <option> Lansdowne  </option>
                  <option> Lataguri  </option>
                  <option> Lauriya Nandangarh  </option>
                  <option> Laxmipuram Palace  </option>
                  <option> Leh  </option>
                  <option> Leimaram Waterfall  </option>
                  <option> Lengteng Wildlife Sanctuary  </option>
                  <option> Lepakshi  </option>
                  <option> Lilabari  </option>
                  <option> Liphanyan Governor’s camp  </option>
                  <option> Little Andaman  </option>
                  <option> Lodh Falls  </option>
                  <option> Lodhi Garden  </option>
                  <option> Lohawka Wildlife Sanctuary  </option>
                  <option> Khawnglung Wildlife Sanctuary </option>
                  <option> Loktak Lake  </option>
                  <option> Lolegaon  </option>
                  <option> Lonavala  </option>
                  <option> Long Island  </option>
                  <option> Longkhum  </option>
                  <option> Longwa Village  </option>
                  <option> Loni  </option>
                  <option> Lotus Temple  </option>
                  <option> Louisa Point  </option>
                  <option> Lower Ghaghri Falls  </option>
                  <option> Lower Ghaghri Water Falls  </option>
                  <option> Lower Lake  </option>
                  <option> Lucknow  </option>
                  <option> Ludhiana  </option>
                  <option> Lumbini Gardens  </option>
                  <option> Lunglei  </option>
                  <option> Machilipatnam  </option>
                  <option> Madan Mahal Fort  </option>
                  <option> Madgaon  </option>
                  <option> Madhav National Park  </option>
                  <option> Madhuban  </option>
                  <option> Madhubani  </option>
                  <option> Madhuri Lake  </option>
                  <option> Madhyamaheshwar  </option>
                  <option> Madikeri  </option>
                  <option> Madiwala Lake  </option>
                  <option> Madku Dweep  </option>
                  <option> Madurai  </option>
                  <option> Magnolia Sunset Point  </option>
                  <option> Mahabaleshwar  </option>
                  <option> Mahalakshmi Temple  </option>
                  <option> Mahalaxmi Temple  </option>
                  <option> mahamuni Biddha Mandir  </option>
                  <option> Mahbubnagar  </option>
                  <option> Mahe  </option>
                  <option> Mahesana  </option>
                  <option> Maheshwar  </option>
                  <option> Maibam Lokpa Ching </option>
                  <option> Mainpat  </option>
                  <option> Mainpuri  </option>
                  <option> Maithon Dam  </option>
                  <option> Majuli  </option>
                  <option> Malampuzha Dam  </option>
                  <option> Malana  </option>
                  <option> Malda  </option>
                  <option> Malegaon  </option>
                  <option> Malhar  </option>
                  <option> Mamallapuram  </option>
                  <option> Mambos  </option>
                  <option> Mamit  </option>
                  <option> Mamleshwar Temple  </option>
                  <option> Manali  </option>
                  <option> Manas National Park  </option>
                  <option> Mandalpatti View Point  </option>
                  <option> Mandawa  </option>
                  <option> Mandi  </option>
                  <option> Mandla  </option>
                  <option> Mandsaur  </option>
                  <option> Mandya  </option>
                  <option> Manesar  </option>
                  <option> Mangaluru  </option>
                  <option> Mangan  </option>
                  <option> Mangeshi Temple  </option>
                  <option> Manikaran Sahib  </option>
                  <option> Manipur State Museum  </option>
                  <option> Manipur Zoological Garden  </option>
                  <option> Mannarshala Nagaraja Temple  </option>
                  <option> Mantralayam  </option>
                  <option> Maredumilli  </option>
                  <option> Marine Drive  </option>
                  <option> Marine National Park  </option>
                  <option> Marleshwar Temple  </option>
                  <option> Mary Help of Christians Cathedral  </option>
                  <option> Mashobra  </option>
                  <option> Mathanga Temple  </option>
                  <option> Matheran  </option>
                  <option> Mathura  </option>
                  <option> Mattancheri  </option>
                  <option> Matthiketan Shola National Park  </option>
                  <option> Matunga Hill  </option>
                  <option> Mawkdok Dympep Valley  </option>
                  <option> Mawlynnong Village  </option>
                  <option> Mawphlang Sacred Forest  </option>
                  <option> Mawsmai Cave  </option>
                  <option> Mawsynram  </option>
                  <option> Mayabunder  </option>
                  <option> Mayapur  </option>
                  <option> Mayong Assam  </option>
                  <option> Mayurakshi River  </option>
                  <option> Mcleodganj  </option>
                  <option> Mechuka  </option>
                  <option> Medziphema  </option>
                  <option> Meenkunnu Beach  </option>
                  <option> Meenmutty Waterfalls  </option>
                  <option> Meerut  </option>
                  <option> Megaliths of Hazaribagh  </option>
                  <option> Mekhlipara Tea Estate  </option>
                  <option> Melaghar  </option>
                  <option> Merta  </option>
                  <option> Midnapore  </option>
                  <option> Mihki- the river of salt  </option>
                  <option> Mimi Village  </option>
                  <option> Minicoy Island  </option>
                  <option> Minto Hall  </option>
                  <option> Mirik  </option>
                  <option> Mirzapur-Vindhyachal  </option>
                  <option> Mizoram Presbyterian Church Synod  </option>
                  <option> Modhera  </option>
                  <option> Mokokchung Park  </option>
                  <option> Mokokchung Village  </option>
                  <option> Mollem National Park  </option>
                  <option> Mon  </option>
                  <option> Moradabad  </option>
                  <option> Morbi  </option>
                  <option> Morena  </option>
                  <option> Morigaon  </option>
                  <option> Morjim Beach  </option>
                  <option> Morni Hills  </option>
                  <option> Motihari  </option>
                  <option> Mount Abu  </option>
                  <option> Mount Koubru  </option>
                  <option> Mount Tiyi  </option>
                  <option> Mt. Kisa  </option>
                  <option> Mt. Paona  </option>
                  <option> Mt. Pauna Tourist Village  </option>
                  <option> Mughal Gardens  </option>
                  <option> Mukteshwar  </option>
                  <option> Muktidham Temple  </option>
                  <option> Mukutmanipur  </option>
                  <option> Mulamkuzhi Waterfalls  </option>
                  <option> Mullaperiyar Dam  </option>
                  <option> Mumbai  </option>
                  <option> Mundeshwari Temple  </option>
                  <option> Munger  </option>
                  <option> Munnar  </option>
                  <option> Munsiyari  </option>
                  <option> Murleng National Park  </option>
                  <option> Murshidabad  </option>
                  <option> Murthal  </option>
                  <option> Murwara  </option>
                  <option> Mussoorie  </option>
                  <option> Muzaffarnagar  </option>
                  <option> Muzaffarpur  </option>
                  <option> Mysuru  </option>
                  <option> Nabadwip  </option>
                  <option> Nabha  </option>
                  <option> Nadiad  </option>
                  <option> Naga Bazar  </option>
                  <option> Nagaland Science Centre  </option>
                  <option> Nagalapuram  </option>
                  <option> Nagaon  </option>
                  <option> Nagaon Beach  </option>
                  <option> Nagappattinam  </option>
                  <option> Nagarhole National Park  </option>
                  <option> Nagarjunakonda  </option>
                  <option> Nagarjunakoṇḍa  </option>
                  <option> Nagaur  </option>
                  <option> Nagercoil  </option>
                  <option> Nagger  </option>
                  <option> Nagoa Beach  </option>
                  <option> Nagpur  </option>
                  <option> Nahan  </option>
                  <option> Naimisharanya  </option>
                  <option> Nainital  </option>
                  <option> Nakshatra Garden  </option>
                  <option> Nakshatra Van  </option>
                  <option> Nalagarh  </option>
                  <option> Nalanda  </option>
                  <option> Nalbari  </option>
                  <option> Namdapha National Park  </option>
                  <option> Nameri National Park  </option>
                  <option> Nandan Pahar  </option>
                  <option> Nanded  </option>
                  <option> Nandi Hills  </option>
                  <option> Nargol Beach  </option>
                  <option> Narkanda  </option>
                  <option> Narmada Valley  </option>
                  <option> Narnaul  </option>
                  <option> Narsimhapur  </option>
                  <option> Narsinghgarh  </option>
                  <option> Nartiang Monoliths  </option>
                  <option> Narwar  </option>
                  <option> Nashik  </option>
                  <option> Nathdwara  </option>
                  <option> National Chambal Wildlife Sanctuary  </option>
                  <option> National Museum of Mankind  </option>
                  <option> Naukuchiatal  </option>
                  <option> Navlakha Palace  </option>
                  <option> Navsari  </option>
                  <option> Nawabganj Bird Sanctuary  </option>
                  <option> Nawalgarh  </option>
                  <option> Neel Island  </option>
                  <option> Neemrana  </option>
                  <option> Neemuch  </option>
                  <option> Neermahal Palace  </option>
                  <option> Nehru Park  </option>
                  <option> Nelliampathi  </option>
                  <option> Nellore  </option>
                  <option> Netarhat Hills  </option>
                  <option> New Delhi  </option>
                  <option> Neyyar Dam  </option>
                  <option> Ngengpui Wildlife Sanctuary  </option>
                  <option> Nicholson Cemetery1  </option>
                  <option> Nichuguard  </option>
                  <option> Ningthoukhong Gopinath Mandir  </option>
                  <option> Nisargadhama  </option>
                  <option> Nizamabad  </option>
                  <option> Nizamuddin Dargah  </option>
                  <option> Nohkalikai Falls  </option>
                  <option> Noida  </option>
                  <option> Nokrek National Park  </option>
                  <option> Noney  </option>
                  <option> Nongpoh  </option>
                  <option> Noori Masjid  </option>
                  <option> Nowgong  </option>
                  <option> Ntangki National Park  </option>
                  <option> Nubra Valley  </option>
                  <option> Nuh  </option>
                  <option> Nuranang Falls  </option>
                  <option> Nyayamakad Waterfalls  </option>
                  <option> Okha  </option>
                  <option> Old Mahabaleshwar  </option>
                  <option> Omkareshwar Temple  </option>
                  <option> One Tree Hill  </option>
                  <option> Orang National Park  </option>
                  <option> Orange Garden  </option>
                  <option> Oravakallu Rock Garden  </option>
                  <option> Orchha  </option>
                  <option> Orchha Fort  </option>
                  <option> Orchha Wildlife Sanctuary  </option>
                  <option> Osian  </option>
                  <option> Osmanabad  </option>
                  <option> Padmanabhapuram Palace  </option>
                  <option> Pahalgam  </option>
                  <option> Paharganj  </option>
                  <option> Pahari Mandir  </option>
                  <option> Pakhui Wildlife Sanctuary  </option>
                  <option> Palakkad  </option>
                  <option> Palampur  </option>
                  <option> Palamu Fort  </option>
                  <option> Palamu Wildlife Sanctuary  </option>
                  <option> Palanpur  </option>
                  <option> Palaruvi Waterfalls  </option>
                  <option> Palashi  </option>
                  <option> Palayamkottai  </option>
                  <option> Pali  </option>
                  <option> Palolem Beach  </option>
                  <option> Pampa Sarovar  </option>
                  <option> Pampadum Shola National Park  </option>
                  <option> Panaji  </option>
                  <option> Panch Gagh Falls  </option>
                  <option> Panchakki  </option>
                  <option> Panchet Dam  </option>
                  <option> Panchgani  </option>
                  <option> Panchkula  </option>
                  <option> Panchvati  </option>
                  <option> Pandavleni Caves  </option>
                  <option> Pandharpur  </option>
                  <option> Pandharpur Temple  </option>
                  <option> Pangi Valley  </option>
                  <option> Pangong Lake  </option>
                  <option> Panhala  </option>
                  <option> Panhala Fort  </option>
                  <option> Panihati  </option>
                  <option> Panipat  </option>
                  <option> Panna  </option>
                  <option> Panna National Park  </option>
                  <option> Panrra  </option>
                  <option> Paonta Sahib  </option>
                  <option> Paradip  </option>
                  <option> Paradise Beach  </option>
                  <option> Parambikulam Dam  </option>
                  <option> Parasnath Hill  </option>
                  <option> Parasnath Temple  </option>
                  <option> Parbhani  </option>
                  <option> Parsee Fire Temple  </option>
                  <option> Partapgarh  </option>
                  <option> Parvati Hill  </option>
                  <option> Parvati Valley  </option>
                  <option> Pasighat  </option>
                  <option> Patalpani Waterfall  </option>
                  <option> Patan  </option>
                  <option> Pathankot  </option>
                  <option> Patiala  </option>
                  <option> Patna  </option>
                  <option> Patnem Beach  </option>
                  <option> Patnitop  </option>
                  <option> Pattadakkal  </option>
                  <option> pauri Garhwal  </option>
                  <option> Pawapuri  </option>
                  <option> Payyambalam Beach  </option>
                  <option> Pehowa  </option>
                  <option> Pench National Park  </option>
                  <option> Peren  </option>
                  <option> Periyar wildlife sanctuary  </option>
                  <option> Perunthenaruvi Waterfalls  </option>
                  <option> Phalodi  </option>
                  <option> Phawngpui  </option>
                  <option> Phawngpui Peak  </option>
                  <option> Phek  </option>
                  <option> Pherzawl  </option>
                  <option> Phulabani  </option>
                  <option> Pilani  </option>
                  <option> Pilibhit  </option>
                  <option> Pin Bhaba Pass  </option>
                  <option> Pin Valley National Park  </option>
                  <option> Pin Valley Park  </option>
                  <option> Pipliyapala Regional Park  </option>
                  <option> Pirotan Island  </option>
                  <option> Pithoragarh  </option>
                  <option> Pobitora Wildlife Sanctuary  </option>
                  <option> Pondicherry Lighthouse  </option>
                  <option> Poovar Island  </option>
                  <option> Porbandar  </option>
                  <option> Port Blair  </option>
                  <option> Pragati Maidan  </option>
                  <option> Prashar lake  </option>
                  <option> Pratap Garden  </option>
                  <option> Pratapgarh Fort  </option>
                  <option> Prayagraj  </option>
                  <option> Promenade Beach  </option>
                  <option> Pualreng Wildlife Sanctuary  </option>
                  <option> Puducherry  </option>
                  <option> Pudukkottai  </option>
                  <option> Pulebadze Peak  </option>
                  <option> Pumlenpat  </option>
                  <option> Pumlenpat lake  </option>
                  <option> Punch  </option>
                  <option> Pune  </option>
                  <option> Pungro Town  </option>
                  <option> Purana Qila  </option>
                  <option> Puri  </option>
                  <option> Purkhauti Muktangan  </option>
                  <option> Purnia  </option>
                  <option> Purulia  </option>
                  <option> Pusa  </option>
                  <option> Pushkar  </option>
                  <option> Puttaparthi  </option>
                  <option> Quila Raipur  </option>
                  <option> Qutub Minar  </option>
                  <option> Quwwat-ul-Islam Mosque1  </option>
                  <option> Rae Bareli  </option>
                  <option> Raichak  </option>
                  <option> Raichur  </option>
                  <option> Raiganj  </option>
                  <option> Rail Museum, Delhi  </option>
                  <option> Rainbow Falls  </option>
                  <option> Raipur  </option>
                  <option> Raisen  </option>
                  <option> Raja Dinkar Kelkar Museum  </option>
                  <option> Raja Mahal  </option>
                  <option> Raja’s Seat  </option>
                  <option> Rajabhatkhawa  </option>
                  <option> Rajahmundry  </option>
                  <option> Rajaji National Park  </option>
                  <option> Rajapalayam  </option>
                  <option> Rajgad Fort  </option>
                  <option> Rajgarh  </option>
                  <option> Rajghat  </option>
                  <option> Rajgir  </option>
                  <option> Rajim  </option>
                  <option> Rajkot  </option>
                  <option> Rajmahal  </option>
                  <option> Rajnandgaon  </option>
                  <option> Rajouri  </option>
                  <option> Rajpath  </option>
                  <option> Rajrappa  </option>
                  <option> Rajsamand  </option>
                  <option> Ralamandal Wildlife Sanctuary  </option>
                  <option> Ram Kund  </option>
                  <option> Ramanathapuram  </option>
                  <option> Ramgarh  </option>
                  <option> Rampur  </option>
                  <option> Ranakpur  </option>
                  <option> Ranchi  </option>
                  <option> Ranchi Lake  </option>
                  <option> Rangapahar Reserve Forest  </option>
                  <option> Rangat  </option>
                  <option> Rani Durgavati Museum  </option>
                  <option> Ranikhet  </option>
                  <option> Rankala Lake  </option>
                  <option> Ranthambore  </option>
                  <option> Rashtrapati Bhavan  </option>
                  <option> Rasmancha  </option>
                  <option> Ratlam  </option>
                  <option> Ratnagiri  </option>
                  <option> Ratnagiri Lighthouse  </option>
                  <option> Ratnmahal Sloth Bear Sanctuary  </option>
                  <option> Rayadurg  </option>
                  <option> Rayagada  </option>
                  <option> Red Fort  </option>
                  <option> Reiek  </option>
                  <option> Rewa  </option>
                  <option> Rewa Kund  </option>
                  <option> Rewari  </option>
                  <option> Rikhia Yogashram  </option>
                  <option> Rishikesh  </option>
                  <option> Rishikonda Beach  </option>
                  <option> River Koel  </option>
                  <option> Rock Garden  </option>
                  <option> Rohtak  </option>
                  <option> Rohtang Pass  </option>
                  <option> Roing  </option>
                  <option> Rollapadu Wildlife Sanctuary  </option>
                  <option> Roman Catholic Church Mizoram  </option>
                  <option> Roopkund Trek  </option>
                  <option> Ropar Wetland  </option>
                  <option> Rourkela  </option>
                  <option> Rupayan Museum  </option>
                  <option> Rupmati Pavilion  </option>
                  <option> Rupnagar  </option>
                  <option> Russi Modi Centre of Excellence  </option>
                  <option> Ruzaphema  </option>
                  <option> Sabarimala Temple  </option>
                  <option> Sabarimala, Pathanamthitta  </option>
                  <option> Sacred Jackfruit Tree  </option>
                  <option> Sadar Hills  </option>
                  <option> Sadiya  </option>
                  <option> Sadni Falls  </option>
                  <option> Safdarjung Tomb  </option>
                  <option> Sagar  </option>
                  <option> Sagardwip Island  </option>
                  <option> Saharanpur  </option>
                  <option> Saharsa  </option>
                  <option> Saiha  </option>
                  <option> Sakchi Gurudwara  </option>
                  <option> Sakchi Masjid  </option>
                  <option> Salasar Balaji  </option>
                  <option> Salem  </option>
                  <option> Salim Ali Bird Sanctuary  </option>
                  <option> Salim Ali Lake & Bird Sanctuary  </option>
                  <option> Salomi Village  </option>
                  <option> Salparni  </option>
                  <option> Salvation Army Church  </option>
                  <option> Samalkot  </option>
                  <option> Samastipur  </option>
                  <option> Sambalpur  </option>
                  <option> Sambhal  </option>
                  <option> Sammed Shikharji  </option>
                  <option> Sanamahi Kiyong Temple  </option>
                  <option> Sanamahi Temple  </option>
                  <option> Sanasar  </option>
                  <option> Sanchi Museum  </option>
                  <option> Sangam  </option>
                  <option> Sangareddi  </option>
                  <option> Sangla  </option>
                  <option> Sangli  </option>
                  <option> Sangrur  </option>
                  <option> Sanjay Gandhi National Park  </option>
                  <option> Sanskriti Museum and Art Gallery  </option>
                  <option> Santa Cruz Church  </option>
                  <option> Santipur  </option>
                  <option> Saptashrungi  </option>
                  <option> Saputara  </option>
                  <option> Sar Pass  </option>
                  <option> Sarahan  </option>
                  <option> Saraikela  </option>
                  <option> Saramati Peak  </option>
                  <option> Sarangpur  </option>
                  <option> Sardar Patel Zoological Park  </option>
                  <option> Sardar Sarovar Dam  </option>
                  <option> Sariska National Park  </option>
                  <option> Sarnath  </option>
                  <option> Sarojini Market  </option>
                  <option> Sasaram  </option>
                  <option> Sasivekalu Ganesha  </option>
                  <option> Satabdi Park  </option>
                  <option> Satara  </option>
                  <option> Sathodi Falls  </option>
                  <option> Satkosia Tiger Reserve  </option>
                  <option> Satmalia Deer Sanctuary  </option>
                  <option> Satna  </option>
                  <option> Satsanga Ashram  </option>
                  <option> Sattal  </option>
                  <option> Sawai Madhopur  </option>
                  <option> Saza Wildlife Sanctuary  </option>
                  <option> Se Cathedral  </option>
                  <option> Seaside Promenade  </option>
                  <option> Sehore  </option>
                  <option> Sela Pass  </option>
                  <option> Senapati (Tahamzam)  </option>
                  <option> Seoni  </option>
                  <option> Sepahijola Wildlife Sanctuary  </option>
                  <option> Serchhip  </option>
                  <option> Serenity Beach  </option>
                  <option> Seshadri Iyer Memorial Hall  </option>
                  <option> Sethan Valley  </option>
                  <option> Sevagram  </option>
                  <option> Seven Sisters Falls  </option>
                  <option> Shahdol  </option>
                  <option> Shaheed Dweep  </option>
                  <option> Shahjahanpur  </option>
                  <option> Shahpura  </option>
                  <option> Shajapur  </option>
                  <option> Shangnyu Village  </option>
                  <option> Shanivar Wada  </option>
                  <option> Shankarpur  </option>
                  <option> Shanti Stupa Ladakh  </option>
                  <option> Shantiniketan  </option>
                  <option> Shekhawati  </option>
                  <option> Sheopur  </option>
                  <option> Sher-shah Suri Tomb  </option>
                  <option> Shilloi Lake  </option>
                  <option> Shillong  </option>
                  <option> Shimla  </option>
                  <option> Ship Palace  </option>
                  <option> Shirui Kashung Peak  </option>
                  <option> Shivamogga  </option>
                  <option> Shivasamudra Falls  </option>
                  <option> Shivganga  </option>
                  <option> Shivneri Fort  </option>
                  <option> Shivpuri  </option>
                  <option> Shoghi  </option>
                  <option> Shoja  </option>
                  <option> Shravanabelagola  </option>
                  <option> Shree Govindajee Temple  </option>
                  <option> Shree Govindajee Temple </option>
                  <option> Shri Devi Bhagwati Temple  </option>
                  <option> Shri Mahakaleshwar Temple  </option>
                  <option> Shri Omkareshwar Jyotiling  </option>
                  <option> Shri Radha Raman Temple, Kanchipur</option>
                  <option> Shri Siddheshwar Temple  </option>
                  <option> Shrirampur  </option>
                  <option> Shrirangapattana  </option>
                  <option> Siddhivinayak Temple  </option>
                  <option> Siju Cave  </option>
                  <option> Sikar  </option>
                  <option> Silchar  </option>
                  <option> Silent Valley  </option>
                  <option> silent Valley National Park  </option>
                  <option> Siliguri  </option>
                  <option> Silvassa  </option>
                  <option> Silwar  </option>
                  <option> Simlipal National Park  </option>
                  <option> Sinemon Wildlife Sanctuary  </option>
                  <option> Singda Dam  </option>
                  <option> Singhbhum Elephant Reserve  </option>
                  <option> Sinhagad Fort  </option>
                  <option> Sir Dorabji Tata Park  </option>
                  <option> Sirhind  </option>
                  <option> Sirmour  </option>
                  <option> Sirohi  </option>
                  <option> Sirohi National Park  </option>
                  <option> Sirpur  </option>
                  <option> Sirsa  </option>
                  <option> Sitamarhi  </option>
                  <option> Sitapur  </option>
                  <option> Siuri  </option>
                  <option> Sivasagar  </option>
                  <option> Siwan  </option>
                  <option> Siwandih  </option>
                  <option> Solan  </option>
                  <option> Solang Valley  </option>
                  <option> Solapur  </option>
                  <option> Solapur Fort  </option>
                  <option> Somnath Temple  </option>
                  <option> Sonipat  </option>
                  <option> Sonmarg  </option>
                  <option> Soochipara Waterfalls  </option>
                  <option> Spiti Valley  </option>
                  <option> Spread Eagle Falls  </option>
                  <option> Sree Padmanabhaswamy Temple  </option>
                  <option> Sri Digambar Jain Lal Mandir  </option>
                  <option> Sri Mahadeva Temple  </option>
                  <option> Srikakulam  </option>
                  <option> Srikalahasti  </option>
                  <option> Srinagar  </option>
                  <option> Srisailam  </option>
                  <option> St Paul's Church  </option>
                  <option> St. Augustine Church  </option>
                  <option> St. Cajetan Church  </option>
                  <option> St. Francis of Assisi Church  </option>
                  <option> St. Mary’s Church  </option>
                  <option> State Museum of Madhya Pradesh  </option>
                  <option> Statue of Unity  </option>
                  <option> Stupas  </option>
                  <option> Sualkuchi  </option>
                  <option> Sukhyap or Lover’s Paradise  </option>
                  <option> Sulabh International Museum of Toilets  </option>
                  <option> Sultanpur  </option>
                  <option> Sultanpur Bird Sanctuary  </option>
                  <option> Sun Temple  </option>
                  <option> Sunderban  </option>
                  <option> Sunset Point  </option>
                  <option> Supa Dam  </option>
                  <option> Suraj Kund  </option>
                  <option> Surat  </option>
                  <option> Surendranagar  </option>
                  <option> Swaraj Dweep  </option>
                  <option> Tadipatri  </option>
                  <option> Taj ul Masajid  </option>
                  <option> Talasari Beach  </option>
                  <option> Tamdil Lake  </option>
                  <option> Tamenglong  </option>
                  <option> Tamluk  </option>
                  <option> Tarapith  </option>
                  <option> Tarnga Hills  </option>
                  <option> Tata Steel Zoological Park  </option>
                  <option> Tattapani  </option>
                  <option> Tawang  </option>
                  <option> Tawi Wildlife Sanctuary  </option>
                  <option>Thorangtlang Wildlife Sanctuary</option>
                  <option> Teen Murti Bhavan  </option>
                  <option> Tehri  </option>
                  <option> Tehri Garhwal  </option>
                  <option> Teli Ka Mandir  </option>
                  <option> Tengnoupal  </option>
                  <option> Tezpur  </option>
                  <option> Tezu  </option>
                  <option> Thadlaskein Lake  </option>
                  <option> Thalassa  </option>
                  <option> Thalassery  </option>
                  <option> Thane  </option>
                  <option> Thanga island  </option>
                  <option> Thangjing Hill  </option>
                  <option> Thanjavur  </option>
                  <option> Tharon Cave  </option>
                  <option> The Fern For Dining  </option>
                  <option> The Great Bowl  </option>
                  <option> The Khawh Pawp Waterfall  </option>
                  <option> The Living Stones of Tuensang  </option>
                  <option> The Sacred Heart Church  </option>
                  <option> The Silva Store  </option>
                  <option> Theog  </option>
                  <option> Thiruvananthapuram  </option>
                  <option> Thol Bird Sanctuary  </option>
                  <option> Thomankuttu Waterfalls  </option>
                  <option> Thoothukudi  </option>
                  <option> Thrissur  </option>
                  <option> Thusharagiri Waterfalls  </option>
                  <option> Tigra Dam  </option>
                  <option> Tikarpada Wildlife Sanctuary  </option>
                  <option> Tincha Fall  </option>
                  <option> Tinsukia  </option>
                  <option> Tipu’s Palace  </option>
                  <option> Tiracol Fort  </option>
                  <option> Tirap  </option>
                  <option> Tirathgarh Falls  </option>
                  <option> Tirthan Valley  </option>
                  <option> Tiruchchirappalli  </option>
                  <option> Tirunelveli  </option>
                  <option> Tirupati  </option>
                  <option> Tiruppur  </option>
                  <option> Titagarh  </option>
                  <option> Tito’s Club  </option>
                  <option> Tonk  </option>
                  <option> Topchanchi Lake  </option>
                  <option> Toranmal  </option>
                  <option> Tosh  </option>
                  <option> Totsu Cliff  </option>
                  <option> Town Hall  </option>
                  <option> Toy train  </option>
                  <option> Tribal Culture Center  </option>
                  <option> Tribal Museum  </option>
                  <option> Trichur Forests  </option>
                  <option> Trikuta Hills  </option>
                  <option> Trimbakeshwar Temple  </option>
                  <option> Triund  </option>
                  <option> Tsadang  </option>
                  <option> Tseminyu  </option>
                  <option> Tso Moriri  </option>
                  <option> Tughlaqabad Fort  </option>
                  <option> Tuirihiau Falls  </option>
                  <option> Tumakuru  </option>
                  <option> Tungabhadra Dam  </option>
                  <option> Tungnath and Chandrashila  </option>
                  <option> Tura  </option>
                  <option> Tyrshi Falls  </option>
                  <option> Udaipur  </option>
                  <option> Udayagiri  </option>
                  <option> Udayagiri Caves  </option>
                  <option> Udaygiri Caves  </option>
                  <option> Udhagamandalam  </option>
                  <option> Udhampur  </option>
                  <option> Udhwa Lake Bird Sanctuary  </option>
                  <option> Ujjain  </option>
                  <option> Ujjayanta Palace  </option>
                  <option> Ukhrul  </option>
                  <option> Ulhasnagar  </option>
                  <option> Ulsoor Lake  </option>
                  <option> Umananda Island  </option>
                  <option> Umbergaon  </option>
                  <option> Umiam Lake  </option>
                  <option> Una  </option>
                  <option> Unakoti  </option>
                  <option> Unchalli Falls  </option>
                  <option> Ungma  </option>
                  <option> Unnao  </option>
                  <option> Upper Ghaghri Falls  </option>
                  <option> Upper Ghaghri Waterfalls  </option>
                  <option> Upper Lake  </option>
                  <option> Urban Haat  </option>
                  <option> Usri Falls  </option>
                  <option> Uttarkashi  </option>
                  <option> Vadakkunathan Temple  </option>
                  <option> Vadla  </option>
                  <option> Vadodara  </option>
                  <option> Vagator Beach  </option>
                  <option> Vaikom Mahadeva Temple  </option>
                  <option> Vaishali  </option>
                  <option> Vaishno Devi  </option>
                  <option> Valley of Flowers  </option>
                  <option> Valmiki National Park  </option>
                  <option> Valsad  </option>
                  <option> Van Vihar National Park  </option>
                  <option> Vani Vilasa Sagar  </option>
                  <option> Vankhosung  </option>
                  <option> Vantawng Falls  </option>
                  <option> Vantawng Waterfalls  </option>
                  <option> Varanasi  </option>
                  <option> Varansi  </option>
                  <option> Varkala Beach  </option>
                  <option> Vasai-Virar  </option>
                  <option> Vasona Lion Safari  </option>
                  <option> Vatakara  </option>
                  <option> Veda Peak  </option>
                  <option> Vellore  </option>
                  <option> Veraval  </option>
                  <option> Vidhan Soudha  </option>
                  <option> Vidisha  </option>
                  <option> Vijayapura  </option>
                  <option> Vijayawada  </option>
                  <option> Vikram Kirti Mandir Museum  </option>
                  <option> Vindhyachal  </option>
                  <option> Virupaksha Temple  </option>
                  <option> Visakhapatnam  </option>
                  <option> Vizianagaram  </option>
                  <option> Vrindavan  </option>
                  <option> Wah Kaba Falls  </option>
                  <option> Waithou Lake  </option>
                  <option> Wankaner  </option>
                  <option> War memorial  </option>
                  <option> Warangal  </option>
                  <option> Ward’s Lake  </option>
                  <option> Wardha  </option>
                  <option> Water Pool  </option>
                  <option> Wawade  </option>
                  <option> Wayanad  </option>
                  <option> Western Ghats  </option>
                  <option> Williamnagar  </option>
                  <option> Wilson Hills  </option>
                  <option> Wokha  </option>
                  <option> Yaganti  </option>
                  <option> Yamunotri  </option>
                  <option> Yanam  </option>
                  <option> Yavatmal  </option>
                  <option> Yemmiganur  </option>
                  <option> Yingkiong  </option>
                  <option> Yupia  </option>
                  <option> Yusmarg  </option>
                  <option> Zanzari Waterfalls  </option>
                  <option> Zarwani Falls  </option>
                  <option> Ziro  </option>
                  <option> Zunheboto  </option>
                </select>
              </div>

              {/* CITY END */}
              {/* STATE */}
              {/* <div className="col-md-4">
              <label
                htmlFor="validationDefault04"
                className="form-label  "
              >
                State (where the location is situated)
              </label>
              <select
                className="form-select"
                id="validationDefault04"
                name="states"
                onChange={getUserData}
                value={data.states}
              >
                <option selected disabled value="">
                  Click Here to Choose
                </option>
                <option className="optionselector" disabled="disabled">
                  ------------------------------------------------
                </option>
                <option
                  className="optionselector text-center"
                  disabled="disabled"
                >
                  States
                </option>
                <option className="optionselector" disabled="disabled">
                  ------------------------------------------------
                </option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>

                <option className="optionselector" disabled="disabled">
                  ------------------------------------------------
                </option>
                <option
                  className="optionselector text-center"
                  disabled="disabled"
                >
                  Union Territories
                </option>
                <option className="optionselector" disabled="disabled">
                  ------------------------------------------------
                </option>
                <option>Andaman and Nicobar Islands</option>
                <option>Chandigarh</option>
                <option>Dadra Nagar Haveli and Daman Diu</option>
                <option>Delhi</option>
                <option>Jammu and Kashmir</option>
                <option>Ladakh</option>
                <option>Lakshadweep</option>
                <option>Puducherry</option> */}

              {/* </select>
            </div> */}
            </div>
          </Fade>
          {/* STATE END */}
          {/* YEAR VISITED */}
          <Fade delay={300} top>
            <div className="row mb-5 d-flex justify-content-between">
              <div className="col-md-5">
                <label
                  htmlFor="validationDefault04"
                  className="form-label qfont required text-dark"
                >
                  When Did You Visit The Place?
                </label>
                <select
                  className="form-select"
                  id="validationDefault02"
                  name="year"
                  onChange={getUserData}
                  value={data.year}
                  required
                >
                  <option selected disabled value="">
                    Click Here to Choose
                  </option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                </select>
              </div>
              {/* YEAR END */}

              {/* RECCOMENDATION */}
              <div className="form-check form-check-inline col-5 mx-1">
                <div className="mb-2">
                  <span className="qfont required text-dark">
                    Would You Recommend This Place to Others?
                  </span>
                </div>
                <div className="form-check form-check-inline mt-2 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio1"
                    name="reccomendation"
                    onChange={getUserData}
                    value={1}
                    autoComplete="off"
                    required
                  />
                  <label
                    className="form-check-label radfont text-dark"
                    htmlFor="inlineRadio1"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio2"
                    name="reccomendation"
                    onChange={getUserData}
                    // value={data.reccomendation.valueOf}
                    value={0}
                    autoComplete="off"
                    required
                  />
                  <label
                    className="form-check-label radfont text-dark"
                    htmlFor="inlineRadio2"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </Fade>
          {/* RECCOMENDATION END */}
          {/* RATING */}
          <Fade delay={400} top>
            <div className="row mb-5 d-flex justify-content-between">
              <div className="col-md-5">
                <label
                  htmlFor="validationDefault05"
                  className="form-label qfont required text-dark"
                >
                  Hotel Ratings
                </label>
                <select
                  className="form-select"
                  id="validationDefault03"
                  name="hrating"
                  onChange={getUserData}
                  value={data.hrating}
                  required
                >
                  <option selected disabled value="">
                    Click Here
                  </option>
                  <option>Worst</option>
                  <option>Bad</option>
                  <option>Average</option>
                  <option>Good</option>
                  <option>Awesome</option>
                </select>
              </div>

              <div className="col-md-4">
                <label
                  htmlFor="validationDefault06"
                  className="form-label qfont required text-dark"
                >
                  Food Ratings
                </label>
                <select
                  className="form-select"
                  id="validationDefault04"
                  name="frating"
                  onChange={getUserData}
                  value={data.frating}
                  required
                >
                  <option selected disabled value="">
                    Click Here
                  </option>
                  <option value={1}>🍕</option>
                  <option value={2}>🍕 🍕</option>
                  <option value={3}>🍕 🍕 🍕</option>
                  <option value={4}>🍕 🍕 🍕 🍕</option>
                  <option value={5}>🍕 🍕 🍕 🍕 🍕</option>
                </select>
              </div>
              {/* RATING END */}
              {/* HOTEL PRICE */}
              <div className="col-md-3">
                <label
                  htmlFor="validationDefault07"
                  className="form-label qfont required text-dark"
                >
                  Average Budget
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="rupee">
                    ₹
                  </span>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Per person"
                    id="validationDefaultUsername21"
                    aria-describedby="inputGroupPrepend21"
                    name="avgBudget"
                    onChange={getUserData}
                    value={data.avgBudget}
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>
          </Fade>
          {/* HOTEL PRICE END */}
          {/* dayStayed FROM HOTEL */}
          <Fade delay={500} top>
            <div className="row mb-5 d-flex justify-content-between">
              <div className="col-md-5 me-5">
                <label
                  htmlFor="validationDefault08"
                  className="form-label qfont required text-dark"
                >
                  Number of Days of Stay
                </label>
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Days"
                    id="validationDefaultUsername3"
                    aria-describedby="inputGroupPrepend2"
                    name="dayStayed"
                    onChange={getUserData}
                    value={data.dayStayed}
                    autoComplete="off"
                    required
                  />
                  <span className="input-group-text" id="days">
                    Days
                  </span>
                  &nbsp;
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Nights"
                    id="validationDefaultUsername4"
                    aria-describedby="inputGroupPrepend2"
                    name="nightStayed"
                    onChange={getUserData}
                    value={data.nightStayed}
                    autoComplete="off"
                    required
                  />
                  <span className="input-group-text" id="nights">
                    Nights
                  </span>
                </div>
              </div>
              {/* dayStayed END */}

              {/* ECO AVAILABLE */}
              <div className="form-check form-check-inline col-5 mx-1">
                <div className="mb-2">
                  <span className="qfont required text-dark">
                    Is There Any Eco-friendly Vehicle Available?
                  </span>
                </div>
                <div className="form-check form-check-inline mt-2 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio3"
                    name="eco"
                    onChange={getUserData}
                    // value={data.reccomendation.valueOf}
                    value={1}
                    autoComplete="off"
                    required
                  />
                  <label
                    className="form-check-label radfont text-dark"
                    htmlFor="inlineRadio3"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineRadio4"
                    name="eco"
                    onChange={getUserData}
                    value={0}
                    autoComplete="off"
                    required
                  />
                  <label
                    className="form-check-label radfont text-dark"
                    htmlFor="inlineRadio4"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </Fade>
          {/* ECO AVAILABLE END */}
          {/* CRIME QUESTIONS */}
          <Fade delay={600} top>
            <div className="col-12">
              <label
                htmlFor="validationDefault9"
                className="form-label mb-3 qfont required text-dark"
              >
                Did You Encounter Any Such Situation(s) Mentioned Below ?
                (Select all the checkboxes applicable to you)
              </label>
            </div>
            <div className="row mt-2">
              <div className="col-6 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck1"
                  name="crime1"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-dark mx-2"
                  htmlFor="invalidCheck1"
                >
                  Overcharged
                </label>
              </div>
              <div className="col-6">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="1"
                  placeholder="Location Name"
                  name="crime1txt"
                  onChange={getUserData}
                  value={data.crime1txt}
                ></textarea>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck2"
                  name="crime2"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-dark mx-2 "
                  htmlFor="invalidCheck2"
                >
                  Theft
                </label>
              </div>
              <div className="col-6">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea2"
                  rows="1"
                  placeholder="Location Name"
                  name="crime2txt"
                  onChange={getUserData}
                  value={data.crime2txt}
                ></textarea>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck3"
                  name="crime3"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-dark mx-2"
                  htmlFor="invalidCheck3"
                >
                  Teased
                </label>
              </div>
              <div className="col-6">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea3"
                  rows="1"
                  placeholder="Location Name"
                  name="crime3txt"
                  onChange={getUserData}
                  value={data.crime3txt}
                ></textarea>
              </div>
            </div>
            <div className="row   mt-2">
              <div className="col-6 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck4"
                  name="crime4"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-dark mx-2"
                  htmlFor="invalidCheck4"
                >
                  Scammed
                </label>
              </div>
              <div className="col-6">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea4"
                  rows="1"
                  placeholder="Location Name"
                  name="crime4txt"
                  onChange={getUserData}
                  value={data.crime4txt}
                ></textarea>
              </div>
            </div>
            <div className="row   mt-2">
              <div className="col-6 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck5"
                  name="crime5"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-dark mx-2"
                  htmlFor="invalidCheck5"
                >
                  Safety Issue
                </label>
              </div>
              <div className="col-6">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea5"
                  rows="1"
                  placeholder="Location Name"
                  name="crime5txt"
                  onChange={getUserData}
                  value={data.crime5txt}
                ></textarea>
              </div>
            </div>
            <div className="row   mt-2">
              <div className="col-6 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck6"
                  name="crime6"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-dark mx-2"
                  htmlFor="invalidCheck6"
                >
                  Kidnapping
                </label>
              </div>
              <div className="col-6">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea6"
                  rows="1"
                  placeholder="Location Name"
                  name="crime6txt"
                  onChange={getUserData}
                  value={data.crime6txt}
                ></textarea>
              </div>
            </div>

            <div className="row   mt-2">
              <div className="col-6 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck7"
                  name="crime7"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-dark mx-2"
                  htmlFor="invalidCheck7"
                >
                  Others
                </label>
              </div>
              <div className="col-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea6"
                  rows="1"
                  placeholder="Type of crime"
                  name="crime7txt"
                  onChange={getUserData}
                  value={data.crime7txt}
                ></textarea>
              </div>
              <div className="col-3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea6"
                  rows="1"
                  placeholder="Happened at"
                  name="crime8txt"
                  onChange={getUserData}
                  value={data.crime8txt}
                ></textarea>
              </div>
            </div>
          </Fade>
          {/* QUESTIONS END */}

          {/* TRANSPORT QUESTIONS */}
          <Fade delay={700} top>
            <div className="col-12">
              <label
                htmlFor="validationDefault19"
                className="form-label mb-3 mt-4 qfont required text-dark"
              >
                Which of These Modes of Transportation Were Available There?
                (Select The Checkboxes & Provide Us With That Spot Name)
              </label>
            </div>

            <div className="row mt-2">
              <div className="col-2 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck20"
                  name="vehicle1"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-light mx-2 text-dark"
                  htmlFor="invalidCheck100"
                >
                  Train
                </label>
              </div>

              <div className="col-2 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck21"
                  name="vehicle2"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-light mx-2 text-dark"
                  htmlFor="invalidCheck101"
                >
                  Metro
                </label>
              </div>

              <div className="col-2 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck31"
                  name="vehicle3"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-light mx-2 text-dark"
                  htmlFor="invalidCheck102"
                >
                  Bus
                </label>
              </div>

              <div className="col-2 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck41"
                  name="vehicle4"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-light mx-2 text-dark"
                  htmlFor="invalidCheck103"
                >
                  Cab
                </label>
              </div>

              <div className="col-2 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck51"
                  name="vehicle5"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-light mx-2 text-dark"
                  htmlFor="invalidCheck104"
                >
                  Auto
                </label>
              </div>

              <div className="col-2 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck61"
                  name="vehicle7"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-light mx-2 text-dark"
                  htmlFor="invalidCheck105"
                >
                  Cycle
                </label>
              </div>
            </div>
            <div className="row   mt-4">
              <div className="col-2 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck61"
                  name="vehicle6"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-light mx-2 text-dark"
                  htmlFor="invalidCheck105"
                >
                  Toto
                </label>
              </div>
              <div className="col-2 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck601"
                  name="vehicle9"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-light mx-2 text-dark"
                  htmlFor="invalidCheck1051"
                >
                  Rickshaw
                </label>
              </div>
              <div className="col-4 mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="invalidCheck72"
                  name="vehicle8"
                  onChange={getUserData}
                  value={1}
                  autoComplete="off"
                />
                <label
                  className="form-check-label text-light mx-2 text-dark"
                  htmlFor="invalidCheck106"
                >
                  Others
                </label>
              </div>
              <div className="col-4">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea6"
                  rows="1"
                  placeholder="What was that vehicle?"
                  name="vehicleTxt"
                  onChange={getUserData}
                  value={data.vehicleTxt}
                ></textarea>
              </div>
            </div>
          </Fade>
          {/* TRANSPORT END */}

          {/* Love & Hate */}
          <Fade delay={800} top>
            <div className="row mt-5 d-flex justify-content-between mb-5">
              <div className="form-check form-check-inline col-5">
                <div className="form-group qfont">
                  <label
                    htmlFor="exampleFormControlTextarea10 "
                    className="required text-dark"
                  >
                    Things You Liked About This Place
                  </label>
                  <textarea
                    className="form-control mt-1"
                    id="exampleFormControlTextarea7"
                    rows="3"
                    placeholder="Share with us"
                    name="love"
                    onChange={getUserData}
                    value={data.love}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-check form-check-inline col-5">
                <div className="form-group qfont">
                  <label
                    htmlFor="exampleFormControlTextarea11 "
                    className="required text-dark"
                  >
                    Things You Didn't Like About This Place
                  </label>
                  <textarea
                    className="form-control mt-1"
                    id="exampleFormControlTextarea8"
                    rows="3"
                    placeholder="Share with us"
                    name="hate"
                    onChange={getUserData}
                    value={data.hate}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </Fade>
          {/* Love & Hate END */}

          {/* OVERALL RATING */}

          <div className="row d-flex justify-content-between">
            <Fade delay={900} top>
              <div className="col-md-5">
                <label
                  htmlFor="validationDefault05"
                  className="form-label qfont required text-dark"
                >
                  Cleanliness Ratings
                </label>
                <select
                  className="form-select"
                  id="validationDefault03"
                  name="crating"
                  onChange={getUserData}
                  value={data.crating}
                  required
                >
                  <option selected disabled value="">
                    Click Here
                  </option>
                  <option value={1}>⭐</option>
                  <option value={2}>⭐ ⭐</option>
                  <option value={3}>⭐ ⭐ ⭐</option>
                  <option value={4}>⭐ ⭐ ⭐ ⭐</option>
                  <option value={5}>⭐ ⭐ ⭐ ⭐ ⭐</option>
                </select>

                <div className="div mt-4">
                  <label
                    htmlFor="validationDefault005"
                    className="form-label qfont required text-dark"
                  >
                    Overall Ratings For This Location
                  </label>
                  <select
                    className="form-select"
                    id="validationDefault010"
                    name="rating"
                    onChange={getUserData}
                    value={data.rating}
                    required
                  >
                    <option selected disabled value="">
                      Click Here
                    </option>
                    <option value={1}>⭐</option>
                    <option value={2}>⭐ ⭐</option>
                    <option value={3}>⭐ ⭐ ⭐</option>
                    <option value={4}>⭐ ⭐ ⭐ ⭐</option>
                    <option value={5}>⭐ ⭐ ⭐ ⭐ ⭐</option>
                  </select>
                </div>
              </div>
            </Fade>
            {/* OVERALL RATING END */}
            {/* Comment */}
            <Fade delay={1000} top>
              <div className="form-check form-check-inline col-5">
                <div className="form-group qfont text-dark">
                  <label
                    htmlFor="exampleFormControlTextarea12"
                    className="text-dark"
                  >
                    Anything Else You Would Like to Share?
                  </label>
                  <textarea
                    className="form-control mt-1"
                    id="exampleFormControlTextarea9"
                    rows="5"
                    placeholder="We would love to hear about it"
                    name="comment"
                    onChange={getUserData}
                    value={data.comment}
                  ></textarea>
                </div>
              </div>
            </Fade>
          </div>
          {/* Comment END */}

          {/* 
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        */}
          {/* HR End */}
          <div className="dropdown-divider bg-muted mt-5"></div>
          {/* TERMS & CONDS */}
          <div className="row mt-3 row justify-content-between mb-1 ">
            <div className="col-10">
              <div className="form-check mt-4 mx-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="check"
                  id="invalidCheck10"
                  autoComplete="off"
                  onChange={getUserData}
                  value={1}
                  required
                />
                <label
                  className="form-check-label text-dark"
                  htmlFor="invalidCheck07"
                >
                  I allow the filled-in data to be used for research purpose. I
                  have filled this questionnaire with utmost sanctity
                </label>
              </div>
            </div>
            {/* TERMS & CONDS END */}

            {/* SUBMIT */}
            <div className="col-2 text-center">
              <button
                type="submit"
                className="btn btn-warning text-dark btn-lg mb-4 mt-3"
                // onClick={spin}
                disabled={load}
              >
                {load && (
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                &nbsp; Submit
              </button>
            </div>
          </div>

          {/* SUBMIT END */}

          {/* DISCLAIMER */}
          <span className="disclaimer mb-2 text-muted">
            ** Your personal data will be kept confidential and will be used for
            statistical analysis and research purpose only
          </span>
          {/* DISCLAIMER END */}
        </form>
      </div>
    </>
  );
};

export default Travelogue;

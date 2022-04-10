import React from "react";
import { useState } from "react";
import "./styles/home.css";

import Fade from "react-reveal/Fade";

export default function Home() {
  // Counter

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  return (
    <>
      <div className="container mb-3">
        <div className="accordion" id="accordionExample">
          {/* <h2 className="heading my-4">Home</h2> */}

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="true"
                aria-controls="collapse1"
              >
                <span>
                  #1
                  <strong>&nbsp; Goa</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        height={"100%"}
                        src={
                          "https://t4.ftcdn.net/jpg/04/89/84/21/240_F_489842188_KQ5JsZ7hS2BXou7Hn0vQ9Qoyd7uHlGhn.jpg"
                        }
                        alt="Baga Beach"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Baga Beach</h5>
                        <p className="card-text text-truncate">
                          One of the most popular beaches in North Goa, Baga
                          Beach is located close to Calangute beach, around 30
                          Km North of Panjim. Baga is the perfect destination to
                          witness the dazzling nightlife of Goa as signature
                          places such as Britto's, Tito's and Mambos are located
                          in the vicinity. Being one of the most visited beaches
                          in the North, Baga also offers a vast range of water
                          sports. Lined with an array of tattoo parlours, tarot
                          shops, palmistry shops, spas, sun decks and some
                          legendary shacks, it gives you a chance to live out
                          your perfect beach holiday.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 4.6 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop11"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 2 */}
                <Fade delay={500} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://t4.ftcdn.net/jpg/04/04/87/75/240_F_404877562_gx8uXjf7kynGIQ7AP3crvNzXzZ2Sl2gH.jpg"
                        }
                        alt="Madgaon"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Madgaon</h5>
                        <p className="card-text text-truncate">
                          There are a number of temples and churches in Margao
                          city The famous churches in Margao are the Holy Spirit
                          Church, the Grace Church, The St Sebastian Church in
                          Aquem (The Old St. Sebastian Chapel, popularly known
                          as the Pandava Copel still stands next to the modern
                          St. Sebastian Church) and the Monte Hill Chapel. The
                          famous temples are the 'Damodar Temple' (Saal), the
                          'Hari Mandir', the 'Maruti Mandir' at Davorlim the
                          'Saibaba Temple' at Davorlim, the 'Shiv Temple' (Ling)
                          at Fatorda near Nehru Stadium (which is the original
                          Temple of Damodara). Pandava Caves Located in Aquem
                          Behind St. Sebestian Church. There are two mosques in
                          Margao, one in the Malbhat area and one on the Monte
                          hill. There is also a Jain temple and a Jama'at Khana
                          for the Khoja faith in Pajifond.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 4.5 / 6</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐ </h6>

                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop12"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 3 */}
                <Fade delay={800} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://t4.ftcdn.net/jpg/03/33/95/99/240_F_333959940_RlovicM5b593e2Z94DzZMdPMoOoIiIa0.jpg"
                        }
                        height={"100%"}
                        alt="Panaji"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Panaji</h5>
                        <p className="card-text text-truncate">
                          This is the capital of Goa, and the North Goa
                          district. It is situated on the banks of the river
                          “Mandovi”. It is connected to the mainland by
                          bridges.Typical of a Goan town, Panaji is built around
                          a church facing a prominent square. The town has some
                          beautiful Portuguese Baroque style buildings and
                          enchanting old villas. The riverside, speckled with
                          brightly whitewashed houses with wrought iron
                          balconies, offers a fine view.There are some fine
                          government buildings along the riverside boulevard,
                          and the Passport Office is especially noteworthy. In
                          the 16th century, the edifice was the palace of Adil
                          Shah (the Sultan of Bijapur). The Portuguese took over
                          the palace and constructed the Viceregal Lodge in
                          1615.The Church Square is a fine illustration of the
                          awesome Portuguese Baroque style. The Church of the
                          Immaculate Conception is easily one of the most
                          elegant and picturesque monuments in Goa.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 4.7 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop13"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                <span>
                  #2
                  <strong>&nbsp; Odisha</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://t4.ftcdn.net/jpg/02/94/90/97/240_F_294909747_BaFKNTF7G5j0h9nEU2UjPixUXf1Xj8Qk.jpg"
                        }
                        alt="Bhubaneshwar"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Bhubaneshwar</h5>
                        <p className="card-text text-truncate">
                          Bhubaneswar, the temple city of India, once known for
                          its architecture and grand temples, is presently a
                          thriving centre for commerce and business.Bhubaneshwar
                          is an ancient city replete with beautiful historic
                          temples which attract pilgrims and tourists from all
                          over the country. Bhubaneshwar being the centre for
                          religious tourism has a number of majestic temples
                          built centuries ago which have still retained their
                          original over all these years. Among them the Lingaraj
                          temple and the Parasurameswara temple are must-visits.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 4.25 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop21"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 2 */}
                <Fade delay={500} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://c4.wallpaperflare.com/wallpaper/423/223/714/photography-india-temple-sun-wallpaper-preview.jpg"
                        }
                        alt="Konark"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Konark</h5>
                        <p className="card-text text-truncate">
                          Konark, in the state of Orissa is renowned world over
                          for the Sun Temple which is also a UNESCO World
                          Heritage Site, the Annual dance festival and its
                          beautiful sandy beaches. Konark's Sun Temple is an
                          architectural marvel and is one of the most beautiful
                          monuments of India. Konark sun temple is the must
                          visit place in your travel bucket list if you love to
                          explore the ancient histories.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 3.8 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop22"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 3 */}
                <Fade delay={800} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://t4.ftcdn.net/jpg/02/82/59/49/240_F_282594919_CouepmmPcYq10g5MjRBXswsAtPaTNXOQ.jpg"
                        }
                        height={"100%"}
                        alt="Puri"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Puri</h5>
                        <p className="card-text text-truncate">
                          Puri in Odisha is one of the four must-visit
                          pilgrimage sites for Hindus because of Jagannath
                          Temple that forms the part of Char Dham in India. Puri
                          is a beach city located on the coast of Bay of Bengal.
                          Known as the resting place of Lord Shiva, the majestic
                          history and heritage of Puri date back to the 3rd
                          century B. C. Puri, Konark and Bhubaneshwar complete
                          the Golden Triangle of Orissa, with their religious
                          significance and cultural heritage. There are a lot of
                          places near Puri that one must visit, like the Chilika
                          lake, Dhabal Giri, Uday Giri, Khanda Giri, Lingaraj
                          Temple, Raghurajpur - the artistic village.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 4 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop23"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                <span>
                  #3
                  <strong>&nbsp; Uttar Pradesh</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://t4.ftcdn.net/jpg/01/97/72/79/240_F_197727967_MSfGDL0XvgFDjsWnjM03pInQ2h3zu9C7.jpg"
                        }
                        height={"100%"}
                        alt="Agra"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Agra</h5>
                        <p className="card-text text-truncate">
                          Located on the banks of River Yamuna in Uttar Pradesh,
                          Agra is a popular tourist destination as it is home to
                          one of the 7 wonders of the world, the Taj Mahal. It
                          is a sneak peek into the architectural history and
                          legacy of the Mughal empire with other amazing
                          historical tourists spots Agra Fort, Fatehpur Sikri,
                          Akbar Tomb, Jama Masjid Agra, Mehtab Bagh, Anguri
                          Bagh, Taj Museum. History, architecture, romance all
                          together create the magic of Agra, and makes it a
                          must-visit for anyone living in or visiting India.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 3.5 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop31"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 2 */}
                <Fade delay={500} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://t3.ftcdn.net/jpg/04/89/19/60/240_F_489196024_mJbRZY4nHswsl94fhCnIMjEHOaWMRENK.jpg"
                        }
                        alt="Mathura"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Mathura</h5>
                        <p className="card-text text-truncate">
                          One of Hinduism's seven sacred cities, Mathura is the
                          birthplace of the very beloved Lord Krishna. Located
                          in the state of Uttar Pradesh, Mathura and Vrindavan
                          are often considered twin cities (located only 10km
                          away from each other). Mathura is a small town dotted
                          with temples from various ages and attracts a horde of
                          pilgrims from all over the world. One side of Mathura
                          is stretched across the Yamuna River, lined with 25
                          ghats. Shri Krishna Janmabhumi is the most famous
                          tourist attraction in Mathura, as this place is
                          believed to the be the exact place where Lord Krishna
                          was born, and the prison where he was born is now on
                          display for tourists to see.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 3.2 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop32"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 3 */}
                <Fade delay={800} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={"https://i.postimg.cc/4d9v9SdH/Varanasi.jpg"}
                        alt="Varanasi"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Varanasi</h5>
                        <p className="card-text text-truncate">
                          World's oldest living city, Varanasi - also known as
                          Kashi (City of Life) and Benaras, is the spiritual
                          capital of India. It is one of Hinduism's seven holy
                          cities. The old city of Varanasi lies along the
                          western banks of the Ganges, spread across a labyrinth
                          of narrow galis. There's a lot templates to visit but
                          the Kashi Vishwanath Temple is the most visited temple
                          in Varanasi. This divine city is also an important
                          destination for Buddhists. Gautam Buddha preached his
                          first sermon in Benaras, a part which is now in
                          Sarnath.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 3 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop33"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                <span>
                  #4
                  <strong>&nbsp; Uttarakhand</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse4"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={"https://i.postimg.cc/wxF8rfFd/Haridwar.jpg"}
                        height={"100%"}
                        alt="Haridwar"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Haridwar</h5>
                        <p className="card-text text-truncate">
                          Haridwar is one of the seven holiest cities in India,
                          situated in Uttarakhand. It is located where the
                          sacred river Ganga enters the Indo-Gangetic plains for
                          the first time. Dotted with temples, ashrams and
                          narrow lanes across the city, Haridwar is a famous
                          Hindu temple town where millions of devotees come to
                          take a dip in the holy Ganges. It's believed that
                          taking a dip in the sacred Har Ki Pauri relieves one
                          of all the sins. The highlight of Haridwar is the
                          famous Ganga Aarti held at the Har ki Pauri Ghat every
                          evening.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 4 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop41"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 2 */}
                <Fade delay={500} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={"https://i.postimg.cc/DZy54gGq/Mussoorie.jpg"}
                        alt="Mussoorie"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Mussoorie</h5>
                        <p className="card-text text-truncate">
                          Mussoorie is one of the most popular hill stations
                          located at a distance of 290 km from Delhi in the
                          Dehradun district of Uttarakhand. With a backdrop of
                          the Shivalik range of Himalayas and doon valley,
                          Mussoorie, also known as Queen of The Hills, stands at
                          an altitude of 7000 feet above sea level. With a cool
                          and pleasant climate throughout the year. The British
                          remnants can be seen in the city in the archaic
                          architecture of the hotels and churches. One of the
                          most popular tourist attractions in Mussoorie is The
                          Mall (also known as the Mall Road). Another major
                          highlight of Mussoorie is the Ropeway to Gun Hill.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 4.75 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop42"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 3 */}
                <Fade delay={800} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={"https://i.postimg.cc/sDVfQGH3/rishikesh.jpg"}
                        alt="Rishikesh"
                        height={"100%"}
                      />
                      <div className="card-body">
                        <h5 className="card-title">Rishikesh</h5>
                        <p className="card-text text-truncate">
                          Located in the foothills of the Himalayas along the
                          convergence of Ganga and Chandrabhaga River, Rishikesh
                          is a small town in the Dehradun district, located
                          close to Haridwar in Uttarakhand. Rishikesh (also
                          called as Hrishikesh) is known for its adventure
                          activities, ancient temples, popular cafes and as the
                          "Yoga Capital of the World". Rishikesh is divided into
                          two main areas - the downtown area known as Rishikesh
                          town which is where the popular Triveni Ghat is
                          situated. 2 km upstream from the popular Ram Jhula and
                          Lakshman Jhula is the other side of Rishikesh where
                          most of the popular ashrams, cafes, accommodation and
                          tourists can be found.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 4.1 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop43"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse5"
              >
                <span>
                  #5
                  <strong>&nbsp; West Bengal</strong>
                </span>
              </button>
            </h2>
            <div
              id="collapse5"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div className="row mt-2 mb-2">
                <Fade delay={200} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={"https://i.postimg.cc/rpYxPmKk/darjeeling.jpg"}
                        alt="Darjeeling"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Darjeeling</h5>
                        <p className="card-text text-truncate">
                          Darjeeling is one of the most sought after hill
                          stations in India located in West Bengal. This scenic
                          hill station is the perfect getaway for a Vacation.
                          Nestled amidst acres of tea plantations and exciting
                          toy train ride Darjeeling stands at the height of
                          2,050 meters above sea level, thus boasting a cool
                          climate all year round. The third highest peak in the
                          world and the highest in India, the Kanchenjunga peak,
                          is visible from here.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 4.6 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop51"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 2 */}
                <Fade delay={500} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={"https://i.postimg.cc/hj1gGJTF/Digha.jpg"}
                        alt="Digha"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Digha</h5>
                        <p className="card-text text-truncate">
                          Beach town situated on the shores of Bay of Bengal,
                          Digha is a popular tourist destination known for its
                          untouched beaches and scenic views, especially among
                          people in West Bengal. Digha is a one-stop destination
                          for families looking forward to spend a pleasurable
                          weekend.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 4 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop52"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
                {/* 3 */}
                <Fade delay={800} bottom>
                  <div className="col-md-4 d-flex justify-content-around">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src={
                          "https://c4.wallpaperflare.com/wallpaper/1022/798/409/lights-india-west-bengal-kolkata-wallpaper-preview.jpg"
                        }
                        height={"100%"}
                        alt="Kolkata"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Kolkata</h5>
                        <p className="card-text text-truncate">
                          Kolkata, India's second biggest city, is a perpetually
                          ongoing festival of human existence, concurrently
                          luxurious and squalid, refined and frantic, pointedly
                          futuristic, while beautifully in decay. It has the
                          glorious Victoria Memorial, holy Ganges, Vidyasagar
                          Setu, Princep Ghat, Kolkata Museum in its tourist spot
                          bucket list. Kolkata's streets are artistic, filled
                          with creativity and liveliness. It's the best place if
                          you want to experience the beauty of creativity and
                          art.
                        </p>
                        <hr className="dropdown-divider" />
                        <h6>Suraksha Score: 4.5 / 5</h6>
                        <h6>Swachhta Ratings: ⭐⭐⭐ </h6>
                        <p>
                          <button
                            type="button"
                            className="btn btn-primary mt-2"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop53"
                          >
                            Read More
                          </button>
                        </p>
                      </div>
                      {/* btn */}
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Start */}

      {/* Baga beach */}

      <div
        className="modal fade"
        id="staticBackdrop11"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Baga Beach
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t4.ftcdn.net/jpg/04/89/84/21/240_F_489842188_KQ5JsZ7hS2BXou7Hn0vQ9Qoyd7uHlGhn.jpg"
                alt=""
                width={"100%"}
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Baga Beach - "The Home of Nightlife"
                </h4>
                <p className="just">
                  One of the most popular beaches in North Goa, Baga Beach is
                  located close to Calangute beach, around 30 Km North of
                  Panjim. Baga is the perfect destination to witness the
                  dazzling nightlife of Goa as signature places such as
                  Britto's, Tito's and Mambos are located in the vicinity. Being
                  one of the most visited beaches in the North, Baga also offers
                  a vast range of water sports. Lined with an array of tattoo
                  parlours, tarot shops, palmistry shops, spas, sun decks and
                  some legendary shacks, it gives you a chance to live out your
                  perfect beach holiday.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score: <br /> 4.6 / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings: <br /> ⭐⭐⭐⭐
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Madgaon */}

      <div
        className="modal fade"
        id="staticBackdrop12"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Madgaon
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t4.ftcdn.net/jpg/04/04/87/75/240_F_404877562_gx8uXjf7kynGIQ7AP3crvNzXzZ2Sl2gH.jpg"
                alt=""
                width={"100%"}
                height={"263px"}
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">Margao</h4>
                <p className="just">
                  There are a number of temples and churches in Margao city The
                  famous churches in Margao are the Holy Spirit Church, the
                  Grace Church, The St Sebastian Church in Aquem (The Old St.
                  Sebastian Chapel, popularly known as the Pandava Copel still
                  stands next to the modern St. Sebastian Church) and the Monte
                  Hill Chapel. The famous temples are the 'Damodar Temple'
                  (Saal), the 'Hari Mandir', the 'Maruti Mandir' at Davorlim the
                  'Saibaba Temple' at Davorlim, the 'Shiv Temple' (Ling) at
                  Fatorda near Nehru Stadium (which is the original Temple of
                  Damodara). Pandava Caves Located in Aquem Behind St. Sebestian
                  Church. There are two mosques in Margao, one in the Malbhat
                  area and one on the Monte hill. There is also a Jain temple
                  and a Jama'at Khana for the Khoja faith in Pajifond.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter:</h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 4.5 / 5{" "}
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panaji */}

      <div
        className="modal fade"
        id="staticBackdrop13"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Panaji
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t4.ftcdn.net/jpg/03/33/95/99/240_F_333959940_RlovicM5b593e2Z94DzZMdPMoOoIiIa0.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">Panaji</h4>
                <p className="just">
                  This is the capital of Goa, and the North Goa district. It is
                  situated on the banks of the river “Mandovi”. It is connected
                  to the mainland by bridges.Typical of a Goan town, Panaji is
                  built around a church facing a prominent square. The town has
                  some beautiful Portuguese Baroque style buildings and
                  enchanting old villas. The riverside, speckled with brightly
                  whitewashed houses with wrought iron balconies, offers a fine
                  view.There are some fine government buildings along the
                  riverside boulevard, and the Passport Office is especially
                  noteworthy. In the 16th century, the edifice was the palace of
                  Adil Shah (the Sultan of Bijapur). The Portuguese took over
                  the palace and constructed the Viceregal Lodge in 1615.The
                  Church Square is a fine illustration of the awesome Portuguese
                  Baroque style. The Church of the Immaculate Conception is
                  easily one of the most elegant and picturesque monuments in
                  Goa.{" "}
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 4.7 / 5{" "}
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bhubaneshwar */}
      <div
        className="modal fade"
        id="staticBackdrop21"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Bhubaneshwar
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t4.ftcdn.net/jpg/02/94/90/97/240_F_294909747_BaFKNTF7G5j0h9nEU2UjPixUXf1Xj8Qk.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Bhubaneswar - "Temple City of India"
                </h4>
                <p className="just">
                  Bhubaneswar, the temple city of India, once known for its
                  architecture and grand temples, is presently a thriving centre
                  for commerce and business.Bhubaneshwar is an ancient city
                  replete with beautiful historic temples which attract pilgrims
                  and tourists from all over the country. Bhubaneshwar being the
                  centre for religious tourism has a number of majestic temples
                  built centuries ago which have still retained their original
                  over all these years. Among them the Lingaraj temple and the
                  Parasurameswara temple are must-visits.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 4.25 / 5{" "}
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Konark */}
      <div
        className="modal fade"
        id="staticBackdrop22"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Konark
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/423/223/714/photography-india-temple-sun-wallpaper-preview.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Konark - "The city of the Sun Temple"
                </h4>
                <p className="just">
                  Konark, in the state of Orissa is renowned world over for the
                  Sun Temple which is also a UNESCO World Heritage Site, the
                  Annual dance festival and its beautiful sandy beaches.
                  Konark's Sun Temple is an architectural marvel and is one of
                  the most beautiful monuments of India. Konark sun temple is
                  the must visit place in your travel bucket list if you love to
                  explore the ancient histories.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 3.8 / 5{" "}
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Puri */}
      <div
        className="modal fade"
        id="staticBackdrop23"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Puri
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t4.ftcdn.net/jpg/02/82/59/49/240_F_282594919_CouepmmPcYq10g5MjRBXswsAtPaTNXOQ.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Puri - "Rath Yatra and the Beaches"
                </h4>
                <p className="just">
                  Puri in Odisha is one of the four must-visit pilgrimage sites
                  for Hindus because of Jagannath Temple that forms the part of
                  Char Dham in India. Puri is a beach city located on the coast
                  of Bay of Bengal. Known as the resting place of Lord Shiva,
                  the majestic history and heritage of Puri date back to the 3rd
                  century B. C. Puri, Konark and Bhubaneshwar complete the
                  Golden Triangle of Orissa, with their religious significance
                  and cultural heritage. There are a lot of places near Puri
                  that one must visit, like the Chilika lake, Dhabal Giri, Uday
                  Giri, Khanda Giri, Lingaraj Temple, Raghurajpur - the artistic
                  village.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 4 / 5{" "}
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Agra */}
      <div
        className="modal fade"
        id="staticBackdrop31"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Agra
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t4.ftcdn.net/jpg/01/97/72/79/240_F_197727967_MSfGDL0XvgFDjsWnjM03pInQ2h3zu9C7.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Agra - "The city of Taj Mahal, the monument of eternal love"
                </h4>
                <p className="just">
                  Located on the banks of River Yamuna in Uttar Pradesh, Agra is
                  a popular tourist destination as it is home to one of the 7
                  wonders of the world, the Taj Mahal. It is a sneak peek into
                  the architectural history and legacy of the Mughal empire with
                  other amazing historical tourists spots Agra Fort, Fatehpur
                  Sikri, Akbar Tomb, Jama Masjid Agra, Mehtab Bagh, Anguri Bagh,
                  Taj Museum. History, architecture, romance all together create
                  the magic of Agra, and makes it a must-visit for anyone living
                  in or visiting India.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 3.5 / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mathura */}
      <div
        className="modal fade"
        id="staticBackdrop32"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Mathura
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://t3.ftcdn.net/jpg/04/89/19/60/240_F_489196024_mJbRZY4nHswsl94fhCnIMjEHOaWMRENK.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Mathura - "The hometown of Lord Krishna"
                </h4>
                <p className="just">
                  One of Hinduism's seven sacred cities, Mathura is the
                  birthplace of the very beloved Lord Krishna. Located in the
                  state of Uttar Pradesh, Mathura and Vrindavan are often
                  considered twin cities (located only 10km away from each
                  other). Mathura is a small town dotted with temples from
                  various ages and attracts a horde of pilgrims from all over
                  the world. One side of Mathura is stretched across the Yamuna
                  River, lined with 25 ghats. Shri Krishna Janmabhumi is the
                  most famous tourist attraction in Mathura, as this place is
                  believed to the be the exact place where Lord Krishna was
                  born, and the prison where he was born is now on display for
                  tourists to see.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 3.2 / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Varanasi */}
      <div
        className="modal fade"
        id="staticBackdrop33"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                varanasi
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/4d9v9SdH/Varanasi.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Varanasi - "The Spiritual Capital of India"
                </h4>
                <p className="just">
                  World's oldest living city, Varanasi - also known as Kashi
                  (City of Life) and Benaras, is the spiritual capital of India.
                  It is one of Hinduism's seven holy cities. The old city of
                  Varanasi lies along the western banks of the Ganges, spread
                  across a labyrinth of narrow galis. There's a lot templates to
                  visit but the Kashi Vishwanath Temple is the most visited
                  temple in Varanasi. This divine city is also an important
                  destination for Buddhists. Gautam Buddha preached his first
                  sermon in Benaras, a part which is now in Sarnath.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 3 / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Haridwar */}
      <div
        className="modal fade"
        id="staticBackdrop41"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Haridwar
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/wxF8rfFd/Haridwar.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Haridwar - "Gateway to God"
                </h4>
                <p className="just">
                  Haridwar is one of the seven holiest cities in India, situated
                  in Uttarakhand. It is located where the sacred river Ganga
                  enters the Indo-Gangetic plains for the first time. Dotted
                  with temples, ashrams and narrow lanes across the city,
                  Haridwar is a famous Hindu temple town where millions of
                  devotees come to take a dip in the holy Ganges. It's believed
                  that taking a dip in the sacred Har Ki Pauri relieves one of
                  all the sins. The highlight of Haridwar is the famous Ganga
                  Aarti held at the Har ki Pauri Ghat every evening.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 4 / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mussoorie */}
      <div
        className="modal fade"
        id="staticBackdrop42"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Mussoorie
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/DZy54gGq/Mussoorie.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Mussoorie - "The queen of hill-stations"
                </h4>
                <p className="just">
                  Mussoorie is one of the most popular hill stations located at
                  a distance of 290 km from Delhi in the Dehradun district of
                  Uttarakhand. With a backdrop of the Shivalik range of
                  Himalayas and doon valley, Mussoorie, also known as Queen of
                  The Hills, stands at an altitude of 7000 feet above sea level.
                  With a cool and pleasant climate throughout the year. The
                  British remnants can be seen in the city in the archaic
                  architecture of the hotels and churches. One of the most
                  popular tourist attractions in Mussoorie is The Mall (also
                  known as the Mall Road). Another major highlight of Mussoorie
                  is the Ropeway to Gun Hill.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 4.75 / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rishikesh */}
      <div
        className="modal fade"
        id="staticBackdrop43"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Rishikesh
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/sDVfQGH3/rishikesh.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Rishikesh - "Yoga Capital of the World"
                </h4>
                <p className="just">
                  Located in the foothills of the Himalayas along the
                  convergence of Ganga and Chandrabhaga River, Rishikesh is a
                  small town in the Dehradun district, located close to Haridwar
                  in Uttarakhand. Rishikesh (also called as Hrishikesh) is known
                  for its adventure activities, ancient temples, popular cafes
                  and as the "Yoga Capital of the World". Rishikesh is divided
                  into two main areas - the downtown area known as Rishikesh
                  town which is where the popular Triveni Ghat is situated. 2 km
                  upstream from the popular Ram Jhula and Lakshman Jhula is the
                  other side of Rishikesh where most of the popular ashrams,
                  cafes, accommodation and tourists can be found.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 4.1 / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Darjeeling */}
      <div
        className="modal fade"
        id="staticBackdrop51"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Darjeeling
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/rpYxPmKk/darjeeling.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Darjeeling - "Queen of The Himalayas"
                </h4>
                <p className="just">
                  Darjeeling is one of the most sought after hill stations in
                  India located in West Bengal. This scenic hill station is the
                  perfect getaway for a Vacation. Nestled amidst acres of tea
                  plantations and exciting toy train ride Darjeeling stands at
                  the height of 2,050 meters above sea level, thus boasting a
                  cool climate all year round. The third highest peak in the
                  world and the highest in India, the Kanchenjunga peak, is
                  visible from here.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 4.6 / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Digha */}
      <div
        className="modal fade"
        id="staticBackdrop52"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Digha
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://i.postimg.cc/hj1gGJTF/Digha.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Digha - "A blissful and untouched beach town"
                </h4>
                <p className="just">
                  Beach town situated on the shores of Bay of Bengal, Digha is a
                  popular tourist destination known for its untouched beaches
                  and scenic views, especially among people in West Bengal.
                  Digha is a one-stop destination for families looking forward
                  to spend a pleasurable weekend.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 4 / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Kolkata */}
      <div
        className="modal fade"
        id="staticBackdrop53"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Kolkata
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src="https://c4.wallpaperflare.com/wallpaper/1022/798/409/lights-india-west-bengal-kolkata-wallpaper-preview.jpg"
                alt=""
                width={"100%"}
                height="263px"
                className="modalimg mb-3"
              />
              <p>
                <h4 className="text-center mb-3">
                  Kolkata - "The City of Joy"
                </h4>
                <p className="just">
                  Kolkata, India's second biggest city, is a perpetually ongoing
                  festival of human existence, concurrently luxurious and
                  squalid, refined and frantic, pointedly futuristic, while
                  beautifully in decay. It has the glorious Victoria Memorial,
                  holy Ganges, Vidyasagar Setu, Princep Ghat, Kolkata Museum in
                  its tourist spot bucket list. Kolkata's streets are artistic,
                  filled with creativity and liveliness. It's the best place if
                  you want to experience the beauty of creativity and art.
                </p>
              </p>
              <hr className="dropdown-divider" />
              <div className="div row">
                <div className="div col">
                  <h6>Savdhaan Meter: </h6>
                  <p>🔴 Overcharging</p>
                  <p>🟠 Scam</p>
                  <p>🟡 Tease</p>
                  <p>🟢 Safety</p>
                </div>

                <div className="div col">
                  <h6>
                    Suraksha Score:
                    <br /> 4.5 / 5
                  </h6>
                  <p className="gap"></p>
                  <h6>
                    Swachhta Ratings:
                    <br /> ⭐⭐⭐{" "}
                  </h6>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <p className="text-muted">Updated 2 days ago</p>
              <div className="div">
                <button
                  type="button"
                  className="btn btn-primary position-relative"
                  onClick={() => setCounter1((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-up"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter1}
                  </span>
                </button>
                &nbsp; &nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-secondary position-relative"
                  onClick={() => setCounter2((prevCount) => prevCount + 1)}
                >
                  <i className="fa-solid fa-thumbs-down"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {counter2}
                  </span>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

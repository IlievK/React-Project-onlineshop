export default function Contacts(){
    return(
        <section className="contact_section ">
    <div className="container px-0">
      <div className="heading_container ">
        <h2 className="">Contact Us</h2>
      </div>
    </div>
    <div className="container container-bg">
      <div className="row">
        <div className="col-lg-7 col-md-6 px-0">
          <div className="map_container">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11739.242310650792!2d23.3755955!3d42.6441755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa87ebd8f5a671%3A0xdd4e7d792b4c7b32!2z0KjQuNCy0LDRiNC60L4g0LDRgtC10LvQuNC1IFBpbm9jY2hpYSBoYW5kbWFkZSBmYXNoaW9u!5e0!3m2!1sbg!2sbg!4v1703104305458!5m2!1sbg!2sbg"
                width={600}
                height={300}
                frameBorder={0}
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
              />
           
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-5 px-0">
          <form action="#">
            <div>
              <input type="text" placeholder="Name" />
            </div>
            <div>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <input type="text" placeholder="Phone" />
            </div>
            <div>
              <input
                type="text"
                className="message-box"
                placeholder="Message"
              />
            </div>
            <div className="d-flex ">
              <button>SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    )
}
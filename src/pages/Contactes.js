import React from "react";

const Input = ({ label, placeholder, type }) => {
  if (type !== "text") {
    return (
      <div style={{ flex: 1, margin: 5 }}>
        <label style={{ display: "block", marginBottom: 3 }}>{label}</label>
        <input
          style={{ width: 300, padding: 5, fontSize: 14 }}
          placeholder={placeholder}
          type={type}
        />
      </div>
    );
  } else {
    return (
      <div style={{ flex: 1, margin: 5 }}>
        <label style={{ display: "block", marginBottom: 3 }}>{label}</label>
        <textarea
          style={{ width: 300, height: 100, padding: 5, fontSize: 14 }}
          placeholder={placeholder}
          type={type}
        />
      </div>
    );
  }
};
export default class Contactes extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="page">
        <div className="content">
          <div style={{ marginBottom: 10 }}>
            <img
              alt=""
              src="http://bejaialogistique.com/file/img/block/naissance-de-la-sarl-bejaia-logistique-ifri-transport-routier.jpg"
            />
          </div>
          <div className="pane">
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <a>
                <img
                  alt=""
                  style={{ width: 251, margin: 5 }}
                  src="http://bejaialogistique.com/file/img/ban/contactez-nous-formulaire-en-envoyannant-un-email.jpg"
                />
              </a>
              <a>
                <img
                  alt=""
                  style={{ width: 251, margin: 5 }}
                  src="http://bejaialogistique.com/file/img/accueil/service-bejaia-logistique-manutention.jpg"
                />
              </a>
            </div>
            <div style={{ flex: 3, marginLeft: 10 }}>
              <h1>Tous les champs précédés d'une * doivent être complétés.</h1>
              <Input label="Nom *" placeholder="votre nom de famille" />
              <Input
                label="E-mail *"
                placeholder="votre adresse électronique"
              />
              <Input label="Mobile" placeholder="votre numéro de téléphone" />
              <Input
                label="Objet *"
                placeholder="veuillez préciser le sujet de votre message"
              />
              <Input
                label="Message *"
                placeholder="votre message"
                type="text"
              />
              <div style={{ flex: 1, margin: 5, marginTop: 15 }}>
                <button>Envoyer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

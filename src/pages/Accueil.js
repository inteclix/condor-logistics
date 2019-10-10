import React from "react";
import ImageGallery from "react-image-gallery";
import { Link, withRouter } from "react-router-dom";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/"
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/"
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/"
  }
];

class Accueil extends React.Component {
  render() {
    return (
      <div className="page">
        <ImageGallery items={images} />
        <div className="content">
          <h1>DECOUVRIR</h1>
          <div className="cards">
            <div
              onClick={() =>
                this.props.history.push("/nos-services#camions-semi-remorques")
              }
              className="card"
            >
              <img src="http://bejaialogistique.com/file/img/ban/marchandise-fourgon-livraison-transport-entreprise-cargot.jpg" />
              <label>Camions Semi-Remorques</label>
            </div>

            <div
              onClick={() =>
                this.props.history.push("/nos-services#camions-porteurs")
              }
              className="card"
            >
              <img src="http://bejaialogistique.com/file/img/ban/marchandise-fourgon-livraison-transport-entreprise-cargot.jpg" />
              <label>Camions Porteurs</label>
            </div>

            <div
              onClick={() =>
                this.props.history.push("/nos-services#camions-porte-engins")
              }
              className="card"
            >
              <img src="http://bejaialogistique.com/file/img/ban/marchandise-fourgon-livraison-transport-entreprise-cargot.jpg" />
              <label>Camions Porte Engins et Porte Conteneurs</label>
            </div>

            <div
              onClick={() =>
                this.props.history.push("/nos-services#camions-porte-engins")
              }
              className="card"
            >
              <img src="http://bejaialogistique.com/file/img/ban/marchandise-fourgon-livraison-transport-entreprise-cargot.jpg" />
              <label>Camions Porte Engins et Porte Conteneurs</label>
            </div>

            <div
              onClick={() =>
                this.props.history.push("/nos-services#camions-porte-engins")
              }
              className="card"
            >
              <img src="http://bejaialogistique.com/file/img/ban/marchandise-fourgon-livraison-transport-entreprise-cargot.jpg" />
              <label>Camions Porte Engins et Porte Conteneurs</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Accueil);

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
            <div className="card">
              <img src="http://bejaialogistique.com/file/img/ban/marchandise-fourgon-livraison-transport-entreprise-cargot.jpg" />
              <label className="title">Transport public de marchandis</label>
              <label >bla bla bla bla bla bla</label>
              <Link className="button" to="/transport-public-marchandises">
                En savoir plus
              </Link>
            </div>

            <div className="card">
              <img src="http://bejaialogistique.com/file/img/ban/marchandise-fourgon-livraison-transport-entreprise-cargot.jpg" />
              <label className="title">Trasport de personel</label>
              <label >bla bla bla bla bla bla</label>
              <Link className="button" to="/trasport-de-personel">
                En savoir plus
              </Link>
            </div>

            <div className="card">
              <img src="http://bejaialogistique.com/file/img/ban/marchandise-fourgon-livraison-transport-entreprise-cargot.jpg" />
              <label className="title">Location de tous les types de voitures et engins</label>
              <label >bla bla bla bla bla bla</label>
              <Link className="button" to="/location-de-tous-les-types-de-voitures-et-engins">
                En savoir plus
              </Link>
            </div>

            <div className="card">
              <img src="http://bejaialogistique.com/file/img/ban/marchandise-fourgon-livraison-transport-entreprise-cargot.jpg" />
              <label className="title">La maintenance des materiel roulant et engins</label>
              <label >bla bla bla bla bla bla</label>
              <Link className="button" to="/maintenance-des-materiel-roulant-et-engins">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Accueil);

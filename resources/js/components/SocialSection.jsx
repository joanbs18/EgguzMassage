import InstagramIcon from "../../icons/Instagram";
import WhatsappIcon from "../../icons/Whattsapp";


const SocialSection = () => {
  return (
    <section className="social">
      <div className="image-container">
        {/* <img src="/images/social.webp" alt="Imagen social" className="blurred-image" />  */}
        <div className="overlay">
          <h2>Transformación Corporal y Bienestar</h2>
          <p>¡Descubre Nuestras Promociones Exclusivas de Masajes y Fisioterapia!</p>
          <p>Síguenos en Nuestras Redes Sociales para Acceder a Ofertas Especiales y Novedades en Bienestar.</p>
          <div className="icons">
            <InstagramIcon/>
            <WhatsappIcon/>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;

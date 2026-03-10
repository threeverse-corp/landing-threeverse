const telefono = "59171679471";
const mensaje = "Hola, estoy interesado/a en recibir una cotización.";

const handleWhatsAppClick = () => {
  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
};

export default handleWhatsAppClick;

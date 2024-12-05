AOS.init();
// También puede pasar un objeto de configuración opcional
// a continuación se enumeran los ajustes por defecto
AOS.init({

  // Ajustes que pueden anularse por elemento, mediante atributos `data-aos-*`:
  offset: 120, // desplazamiento (en px) desde el punto de activación original
  delay: 0, // valores de 0 a 3000, con paso de 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // easing por defecto para animaciones AOS
  once: false, // si la animación debe ocurrir sólo una vez - mientras se desplaza hacia abajo
  mirror: false, // si los elementos deben animarse al pasar por ellos
  anchorPlacement: 'top-bottom', // define qué posición del elemento respecto a la ventana debe activar la animación

});

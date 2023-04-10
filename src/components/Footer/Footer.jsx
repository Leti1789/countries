import style from "./Footer.module.css";
function Footer() {
  return (
    <span className={style.footer}>
      <p className={style.contenido}> {"<"}Developed by Leticia A. Dimotta/{">"} </p>
      <span className={style.containerLinks}>
      <a href='https://github.com/Leti1789' className={style.link} target="_blanck"><i class="fi fi-brands-github"></i></a>
        <a href="https://www.linkedin.com/" className={style.link} target="_blanck"><i class="fi fi-brands-linkedin"></i></a>
      </span>
    </span>
  );
}

export default Footer;
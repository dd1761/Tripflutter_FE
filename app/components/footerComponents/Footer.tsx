import style from "../../styles/headerFooter.module.css";

const Footer: React.FC = () => {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerContents}>
        <p>© 2024 Trip-Flutter. All rights reserved.</p>
        <div className={style.termsContainer}>
          <p>개인정보처리방침</p>
          <p>이용 약관</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

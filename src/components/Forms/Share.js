import { useState } from 'react';
import '../../stylesheets/layout/Forms/Share.scss';

const Share = (props) => {
  const [twitter] = useState(
    encodeURIComponent(
      'He creado una tarjeta de visita gracias a las Skriptonitas'
    )
  );
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    setIsHidden(false);
    props.handleShareClick();
  };

  return (
    <div className="share__section js-share__section">
      <button
        onClick={handleClick}
        disabled={props.isClickable ? false : true}
        className={
          props.isClickable ? 'share__button--create' : 'share__button js__btn'
        }
      >
        <i className="far fa-address-card share__button--icon"></i>
        <p className="share__button--text">Crear tarjeta</p>
      </button>
      <div
        className={
          isHidden
            ? 'share__finish js__share__finish js__finish-hidden'
            : 'share__finish js__share__finish'
        }
      >
        {props.apiCardUrl ? (
          <>
            <h3 className="share__finish--title">La tarjeta ha sido creada:</h3>
            <a
              href={props.apiCardUrl}
              title="card Link"
              rel="noreferrer"
              target="_blank"
              className="card-link"
            >
              {props.apiCardUrl}
            </a>
          </>
        ) : (
          <>
            <h3 className="share__finish--title">Error:</h3>
            <p className="card-link">{props.apiError}</p>
          </>
        )}

        <p className="share__finish--text"></p>
        <a
          className="share__finish--anchor"
          href={`https://twitter.com/intent/tweet?text=${twitter}&url=${props.apiCardUrl}`}
          target="blank"
        >
          <i className="fab fa-twitter anchor-icon"></i>
          <p className="anchor-text">Compartir en twitter</p>
        </a>
      </div>
    </div>
  );
};

export default Share;

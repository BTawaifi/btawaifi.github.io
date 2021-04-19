import React from 'react';
import PropTypes from 'prop-types';
import './InfiniteCarousel.css';

function InfiniteCarouselArrow({ carouselName, next, onClick }) {
  const arrowClassName = 'InfiniteCarouselArrow';
  let typeClassName;
  if (next) {
    typeClassName = 'InfiniteCarouselArrowNext';
  } else {
    typeClassName = 'InfiniteCarouselArrowPrev';
  }

  /*const iconClassName = 'InfiniteCarouselArrowIcon';
  let iconTypeClassName;
  if (next) {
    iconTypeClassName = 'InfiniteCarouselArrowNextIcon';
  } else {
   iconTypeClassName = 'InfiniteCarouselArrowPrevIcon';
  }
*/
  const className = `${arrowClassName} ${typeClassName}`;
  //const classNameIcon = `${iconClassName} ${iconTypeClassName}`;
  const buttonName = `${carouselName}-button-${next ? 'next' : 'previous'}`;

  return (
    <button
      name={buttonName}
      data-testid={buttonName}
      className={className}
      onClick={onClick}
      type="button"
    >
    {next ?       
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#555" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
      </svg>
       : <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#555" className="bi bi-caret-left-fill" viewBox="0 0 16 16" filecrx="">
  <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg>
}

      {/*<i className={classNameIcon} />*/}
    </button>
  );
}

InfiniteCarouselArrow.propTypes = {
  carouselName: PropTypes.string.isRequired,
  next: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

InfiniteCarouselArrow.defaultProps = {
  next: true,
};

export default InfiniteCarouselArrow;

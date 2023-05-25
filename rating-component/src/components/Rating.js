import React, {useState, Fragment} from 'react';
import { ReactComponent as Star } from '../assets/icon-star.svg';
import { ReactComponent as ThankYou } from '../assets/illustration-thank-you.svg';
 
function Rating() {

  const [submitted, setSubmitted] = useState('');
  const [selected, setSelected] = useState('');

  const onClick = (e) => {
    setSelected(e.target.value);
    console.log(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
  }

  var rating1ClassName = selected == "1" ? 'rating-option-button rating-option-button-selected' : 'rating-option-button';
  var rating2ClassName = selected == "2" ? 'rating-option-button rating-option-button-selected' : 'rating-option-button';
  var rating3ClassName = selected == "3" ? 'rating-option-button rating-option-button-selected' : 'rating-option-button';
  var rating4ClassName = selected == "4" ? 'rating-option-button rating-option-button-selected' : 'rating-option-button';
  var rating5ClassName = selected == "5" ? 'rating-option-button rating-option-button-selected' : 'rating-option-button';

  const formVisible = () => (
    <Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col-1">
            <div className="star-box">
              <Star className="star"></Star>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <h3 className="rating-header">How did we do?</h3>
        </div>

        <div className="row mt-2">
          <p className="rating-text">
            Please let us know how we did with your support request.
            All feedback is appreciated to help us improve our offering!
          </p>
        </div>

        <form onSubmit={e => onSubmit(e)}>
          <div className="row mt-2">
            <div className="form-group ratings-row">
              <button 
                className={rating1ClassName} 
                type="button" 
                name="1"
                value="1"
                onClick={e => onClick(e)}
              >1</button>
              <button 
                className={rating2ClassName}
                type="button" 
                name="2"
                value="2"
                onClick={e => onClick(e)}
              >2</button>
              <button 
                className={rating3ClassName}
                type="button" 
                name="3"
                value="3"
                onClick={e => onClick(e)}
              >3</button>
              <button 
                className={rating4ClassName} 
                type="button" 
                name="4"
                value="4"
                onClick={e => onClick(e)}
              >4</button>
              <button 
                className={rating5ClassName} 
                type="button" 
                name="5"
                value="5"
                onClick={e => onClick(e)}
              >5</button>
            </div>
          </div>
          <div className="row mt-4">
            <div className="form-group">
              <button 
                className="rating-submit-button" 
                type="submit"
              >SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );

  const formSubmitted = () => (
    <Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="thank-you">
            <ThankYou className="thank-you"></ThankYou>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="rating-result-box">
              <p className="rating-result">You selected {selected} out of 5.</p>
            </div>
          </div>
          <div className="col-1"></div>
        </div>

        <div className="row mt-4">
          <h3 className="rating-header-result">Thank you!</h3>
        </div>

        <div className="row mt-3">
          <p className="rating-text-result">
            We appreciate your taking the time to leave a rating.
            If you ever need more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </Fragment>
  );

  return (
  <div id="rating">
    { submitted ? formSubmitted() : formVisible() }
  </div>
  )
}

export default Rating;
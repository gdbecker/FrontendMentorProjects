import React, { useState, useEffect } from 'react';
import { ReactComponent as Submit } from '../assets/icon-arrow.svg';

function AgeCalculator() {

  const [formData, setFormData] = useState({
    day: '--',
    month: '--',
    year: '--',
  });
  const { day, month, year } = formData;

  const [resultsData, setResultsData] = useState({
    dayResult: '',
    monthResult: '',
    yearResult: '',
    submitted: ''
  });

  const [formErrors, setFormErrors] = useState({
    dayError: '',
    monthError: '',
    yearError: '',
    dateError: '',
    hasErrorDay: '',
    hasErrorMonth: '',
    hasErrorYear: ''
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setResultsData({ ...resultsData, submitted: false });
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    var today = new Date();
    var currentYear = new Date().getFullYear();
    setFormData({
      day: parseInt(day),
      month: parseInt(month),
      year: parseInt(year)
    });

    var dateInput = new Date(year, month-1, day);
    var dayValid = day >= 1 && day <= 31;
    var monthValid = month >= 1 && month <= 12;
    var yearValid = year <= currentYear && year > 0 && dateInput <= today;
    var dateValid = false;
    var dayMessage = '';
    var monthMessage = '';
    var yearMessage = '';
    var dateMessage = '';
    var errorPresentDay = false;
    var errorPresentMonth = false;
    var errorPresentYear = false;
    var formSubmitted = false;

    if (dayValid == false) {
      dayMessage = "Day must in the range 1-31"
    } else if (dayValid == true) {
      dayMessage = '';
    }

    if (!monthValid) {
      monthMessage = "Month must in the range 1-12"
    } else if (monthValid) {
      monthMessage = '';
    }

    if (!yearValid) {
      yearMessage = "Date cannot be in the future or negative."
    } else if (yearValid) {
      yearMessage = '';
    }

    var daysAllowed = 0;
    if (dayValid && monthValid && yearValid) {
      
      switch(parseInt(month)) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
          daysAllowed = 31;
          break;
        case 2:
          daysAllowed = 29;
          break;
        case 4: case 6: case 9: case 11:
          daysAllowed = 30;
          break;
      }
      
      if (formData.day > daysAllowed) {
        dateValid = false;
        dateMessage = 'Date must be a day that exists';
      } else {
        dateValid = true;
      }
    }

    if (!dayValid) {
      errorPresentDay = true;
    }

    if (!monthValid) {
      errorPresentMonth = true;
    }

    if (!yearValid) {
      errorPresentYear = true;
    }

    setFormErrors({
      dayError: dayMessage,
      monthError: monthMessage,
      yearError: yearMessage,
      dateError: dateMessage,
      hasErrorDay: errorPresentDay,
      hasErrorMonth: errorPresentMonth,
      hasErrorYear: errorPresentYear,
    })


    if (dayValid && monthValid && yearValid && dateValid) {
      setFormErrors({
        dayError: '',
        monthError: '',
        yearError: '',
        dateError: '',
        hasErrorDay: false,
        hasErrorMonth: false,
        hasErrorYear: false
      });

      var totalDays = Math.floor((today - dateInput)/(24*3600*1000))
      var numYears = Math.floor(totalDays / 365);
      totalDays -= (numYears * 365)
      var numMonths = Math.floor(totalDays / 30);
      totalDays -= (numMonths * 30)
      formSubmitted = true;

      setResultsData({
        dayResult: totalDays,
        monthResult: numMonths,
        yearResult: numYears,
        submitted: formSubmitted,
      });
    } else {
      setResultsData({
        dayResult: '',
        monthResult: '',
        yearResult: '',
        submitted: false
      });
    }
  }

  var dayClassName = formErrors.hasErrorDay ? 'calc-form calc-label-error' : 'calf-form calc-label';
  var monthClassName = formErrors.hasErrorMonth ? 'calc-form calc-label-error' : 'calf-form calc-label';
  var yearClassName = formErrors.hasErrorYear ? 'calc-form calc-label-error' : 'calf-form calc-label';
  var calcResultClassName = resultsData.submitted ? 'calc-value-animation' : 'calc-value';

  return (
    <div id="age-calculator">
      <div className="container mt-3">
        <form onSubmit={e => onSubmit(e)}>
          <div className="row">
            <div className="col-xs-12 col-md-9">
              
                <div className="row g-4">

                  <div className="col-4">
                    <div className="form-group">
                      <label className={dayClassName} htmlFor="day">DAY</label>
                      <input
                        className='calc-form calc-box form-control'
                        type='number'
                        placeholder='DAY'
                        id="day"
                        name='day'
                        value={formData.day}
                        onChange={e => onChange(e)}
                        required
                      />
                      <label className='calc-form calc-error' htmlFor="day">{formErrors.dayError}</label>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="form-group">
                      <label className={monthClassName} htmlFor="month">MONTH</label>
                      <input
                        className='calc-form calc-box form-control'
                        type='number'
                        placeholder='MONTH'
                        id="month"
                        name='month'
                        value={formData.month}
                        onChange={e => onChange(e)}
                        required
                      />
                      <label className='calc-form calc-error' htmlFor="month">{formErrors.monthError}</label>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="form-group">
                      <label className={yearClassName} htmlFor="year">YEAR</label>
                      <input
                        className='calc-form calc-box form-control'
                        type='number'
                        placeholder='YEAR'
                        id="year"
                        name='year'
                        value={formData.year}
                        onChange={e => onChange(e)}
                        required
                      />
                      <label className='calc-form calc-error' htmlFor="year">{formErrors.yearError}</label>
                    </div>
                  </div>

                </div>
                <p className='calc-form calc-error'>{formErrors.dateError}</p>
              
            </div>
            <div className="col-lg-3">
              
            </div>
          </div>

          <div className="row">
            <div className="calc-divider">
              <span>
                <div className="form-group">
                  <button className="calc-button" type="submit"><Submit></Submit></button>
                </div>
              </span>
            </div>
            
          </div>
        </form>

        <div className="row">
          <div className="col-12">
            

            <h1 className="calc-results"><span className={calcResultClassName}>{resultsData.yearResult}</span> years</h1>
            <h1 className="calc-results"><span className={calcResultClassName}>{resultsData.monthResult}</span> months</h1>
            <h1 className="calc-results"><span className={calcResultClassName}>{resultsData.dayResult}</span> days</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgeCalculator;
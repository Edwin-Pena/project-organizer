import { useState } from 'react';
import './Welcome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const Welcome = () => {
  const [userName, setUserName] = useState('');
  const [invalidUserName, setInvalidUserName] = useState(false);

  const handleSaveUserName = () => {
    if (/^[a-zA-ZáéíóúÁÉÍÓÚ ]{4,20}$/.test(userName)) {
      console.log('valid Username');
    } else {
      setInvalidUserName(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveUserName();
    }
  };

  return (
    <section className='welcome'>
      <div className='welcome__container'>
        <h1 className='welcome__title'>Welcome</h1>
        <h2 className='welcome__subtitle'>To our project-organizer app</h2>
        <p className='welcome__desc'>
          To continue and have a better experience please type your name
        </p>
        <div className='name-container'>
          <div className='input'>
            <input
              id='username'
              type='text'
              className={`input__name ${invalidUserName ? 'error' : ''}`}
              autoComplete='off'
              required
              onChange={(e) => setUserName(e.target.value)}
              onKeyDown={handleKeyDown}
              value={userName}
            />
            <div
              className={`input__label-line ${invalidUserName ? 'error' : ''}`}
            >
              Enter your name
            </div>
          </div>
          <div className='continue'>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className='continue__btn'
              onClick={handleSaveUserName}
            />
          </div>
          <p
            className={`name__error ${invalidUserName ? 'visible' : 'hidden'}`}
          >
            Please enter a valid name with 4 to 20 letters, no numbers or
            special characters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Welcome;

import './Home.css'
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from "../modal/modal";
import dragonHead from '../../assets/dragon head.png';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(({ auth }) => auth.user);
  console.log('KKKKKKKKKKKKKKKKKKKKKKKKK', user)
  const handleWorkout = (props) => {
    console.log(props)
  }

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Home">
      <div className="header">
        <img src={dragonHead} alt="dragon head image" />
        <div className="nav">
          <button>Contact</button>
          { user === null ? <button onClick={handleShowModal}>Login</button> : <button>{user.name}</button>}
        </div>
      </div>
      <div className="body">
        <div className="title">Workout Generator</div>
        <div className="generator">
          <div className="button_container">
            <button onClick={() => handleWorkout('1')}>Bodybuilding</button>
            <button onClick={() => handleWorkout('2')}>Powerlifting</button>
            <button onClick={() => handleWorkout('3')}>Cardio</button>
          </div>
          <div className="table_container">Table</div>
        </div>
      </div>
      {showModal && <Modal handleClose={handleCloseModal} />}
    </div>
  );
};

export default Home;
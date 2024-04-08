import './Home.css'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWorkouts } from '../../store/actions/workoutsActions';
import Modal from "../modal/modal";
import dragonHead from '../../assets/dragon head.png';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(({ auth }) => auth.user);

  const dispatch = useDispatch();

  const handleWorkout = (tableName) => {
        dispatch(fetchWorkouts(tableName));
    };

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
          <button onClick={() => handleWorkout('bodybuilding')}>Bodybuilding</button>
          <button onClick={() => handleWorkout('powerlifting')}>Powerlifting</button>
          <button onClick={() => handleWorkout('cardio')}>Cardio</button>
          </div>
          <div className="table_container">Table</div>
        </div>
      </div>
      {showModal && <Modal handleClose={handleCloseModal} />}
    </div>
  );
};

export default Home;
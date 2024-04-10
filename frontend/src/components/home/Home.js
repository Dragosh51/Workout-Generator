import './Home.css'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWorkouts } from '../../store/actions/workoutsActions';
import Modal from "../modal/modal";
import dragonHead from '../../assets/dragon head.png';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(({ auth }) => auth.user);
  const power = useSelector(({ workouts }) => workouts.workouts);
  console.log(power)

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
          {user === null ? <button onClick={handleShowModal}>Login</button> : <button>{user.name}</button>}
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
          <div className="table_container">
  <table>
    <thead>
      <tr>
        <th>Day</th>
        <th>Exercise</th>
        <th>Sets</th>
        <th>Reps</th>
        <th>Intensity</th>
        <th>RIR</th>
      </tr>
    </thead>
    <tbody>
      {power.map((list, index) => (
        <tr key={index}>
          <td>{list.day}</td>
          <td>{list.exercise}</td>
          <td>{list.sets}</td>
          <td>{list.reps}</td>
          <td>{list.intensity}</td>
          <td>{list.rir}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        </div>
      </div>
      {showModal && <Modal handleClose={handleCloseModal} />}
    </div>
  );
};

export default Home;
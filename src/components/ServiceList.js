import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { removeService, fetchServices } from '../actions/actionCreators';
import { Spinner, Alert } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function ServiceList(props) {
  const {items, loading, error} = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServices())
  }, [dispatch])

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  if (loading) {
    return <Spinner animation="border" role="status">
    <span className="sr-only">Загрузка...</span>
  </Spinner>;
  }

  if (error) {
    return <Alert variant={'danger'}>
   Ошибка
  </Alert>;
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleRemove(o.id)}>✕</button>
          <Link to={`/services/${o.id}`}>Редактировать</Link>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList

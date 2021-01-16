import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import { fetchServiceItem } from '../actions/actionCreators';
import { changeServiceEditField, saveEditedServiceItem, changeServiceClear } from '../actions/actionCreators';
import { Spinner, Alert, Form, Button } from 'react-bootstrap';


function ServiceItem({match}) {
    const {item, loading, error} = useSelector(state => state.serviceItem);
    const {saved} = useSelector(state => state.serviceSaveItemEdited);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServiceItem(match.params.id))
        return () => {
          dispatch(changeServiceClear());
        }
      }, [dispatch])

      const handleChange = evt => {
        const {name, value} = evt.target;
        dispatch(changeServiceEditField(name, value));
      };

      const handleSubmit = evt => {
        evt.preventDefault();
        dispatch(saveEditedServiceItem(item));
      }


      if (loading) {
        return <Spinner animation="border" role="status">
        <span className="sr-only">Загрузка...</span>
      </Spinner>;
      }

      if (saved) {
        console.log('Сохранено');
        return <Redirect to="/services"/>
      }

      if (error) {
        return <Alert variant={'danger'}>
       Ошибка
      </Alert>;
      }


    return (
        <div>
         
      <Form onSubmit={handleSubmit} >
            <Form.Group controlId="formBasicName">
                <Form.Label>Название{saved}</Form.Label>
                <Form.Control type="text" name='name' value={item.name} onChange={handleChange} placeholder="Название" />
            </Form.Group>
            <Form.Group controlId="formBasicPrice">
                <Form.Label>Стоимость</Form.Label>
                <Form.Control type="text" name='price' value={item.price} onChange={handleChange} placeholder="Стоимость" />
            </Form.Group>
            <Form.Group controlId="formBasicAbout">
                <Form.Label>Описание</Form.Label>
                <Form.Control type="text" name='content' value={item.content} onChange={handleChange} placeholder="Описание" />
            </Form.Group>


            <Button variant="primary" type="submit">
                Сохранить
            </Button>
            <Link to={'/services'}>Отмена</Link>    
            
    </Form>
        </div>
    );
  }

  export default ServiceItem;
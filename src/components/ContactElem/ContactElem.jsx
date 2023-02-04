import PropTypes from 'prop-types';
import style from './ContactElem.module.scss';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { deleteContact } from '../../servise/fetchContacts';
import { useDispatch } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';

export const ContactElem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  // const [params, setParams] = useSearchParams();
  // console.log(params);
  const deleteContactId = () => dispatch(deleteContact(id));

  return (
    <ul className={style.ulElem}>
      <li className={style.liElem}>
        <p>Name : {name}</p>
        <p>Telephone Number : {number}</p>
        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            style={{ color: '#f0ffff', borderColor: '#f0ffff' }}
            onClick={deleteContactId}
          >
            Delete
          </Button>
        </Stack>
      </li>
    </ul>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

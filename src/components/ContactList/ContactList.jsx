// import { Children } from 'react';
import { ContactElem } from 'components/ContactElem/ContactElem';
import { selectFilterContact } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from 'servise/fetchContacts';
import { useDispatch } from 'react-redux';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilterContact);
  const dispatch = useDispatch();
  console.log(filterContacts, 222);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return filterContacts.map(({ id, name, number }) => (
    <ContactElem key={id} id={id} name={name} number={number} />
  ));
};

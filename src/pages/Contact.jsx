import { ContactForm } from '../components/ContactForm/ContacForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from 'servise/fetchContacts';
import { selectisLoading } from '../redux/selectors';
import { useSelector } from 'react-redux';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const Contact = () => {
  const isLoading = useSelector(selectisLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(isLoading);
    dispatch(getContacts());
  }, [dispatch, isLoading]);
  return (
    <>
      <ContactForm />
      <Filter />
      <Box sx={{ width: '100%' }}>
        <Stack spacing={2}>
          <Item>
            {isLoading ? <p>OOOOOOOOOOOOOOOOOOOOOOOOOOOO</p> : <ContactList />}
          </Item>
        </Stack>
      </Box>
    </>
  );
};

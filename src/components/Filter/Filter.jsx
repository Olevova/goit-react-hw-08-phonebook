import style from './Filter.module.scss';
import { selectFilter } from '../../redux/selectors';
import { filteradd } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = ev => {
    dispatch(filteradd(ev.currentTarget.value));
  };

  return (
    <label className={style.filterEl}>
      Find Contacts by name
      <input
        className={style.inputEl}
        type="text"
        value={filter}
        onChange={onFilter}
      ></input>
    </label>
  );
};

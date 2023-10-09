import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import toast from 'react-hot-toast';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { Section } from 'components/Section/Section';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';
import { NoContactsText } from './Contacts.styled';
import { Error } from 'components/Error/Error';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      toast.remove();
    };
  }, []);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      {!error ? (
        <Section title="Contacts">
          {contacts.length > 0 ? (
            <>
              <Filter />
              <ContactsList />
            </>
          ) : (
            <NoContactsText>No contacts</NoContactsText>
          )}

          {isLoading && <Loader />}
        </Section>
      ) : (
        <Error />
      )}
    </main>
  );
};

export default Contacts;

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { selectIsLoading } from 'redux/selectors';
import { Section } from 'components/Section/Section';
import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    return () => {
      toast.remove();
    };
  }, []);

  return (
    <main>
      <Section title="Phonebook">
        <AddContactForm />
      </Section>

      {isLoading && <Loader />}
    </main>
  );
};

export default Home;

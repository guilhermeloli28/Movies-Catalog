import { Container } from './styles';
import { BiCameraMovie } from 'react-icons/bi';
import Search from '../Search';
import SelectOption from '../SelectOption/Search';
import { ReactNode } from 'react';

export default function NavBar({ children }: { children: ReactNode }) {
  return (
    <Container>
      <div>
        <BiCameraMovie size={30} />
        <h1>Movies</h1>
      </div>
      {children}
    </Container>
  );
}

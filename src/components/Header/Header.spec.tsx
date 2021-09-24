import { render,screen } from '@testing-library/react';
import { debug } from 'console';
import { Header } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/'
      }
    }
  }
})

jest.mock('next-auth/client', () => {
  return{
    useSession(){
      return[null,false] // null é que nao tem sessao, false é que nao está carregando
    }
  }
})

describe('Header component', () => {

  it('renders correctly', () => {
    render(
      <Header/>
    )
    expect(screen.getByText('Home')).toBeInTheDocument()
  })


})
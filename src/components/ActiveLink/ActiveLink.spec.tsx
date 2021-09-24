import { render } from '@testing-library/react';
import { debug } from 'console';
import { ActiveLink  } from '.';

jest.mock('next/router',()=>{
  return{
    useRouter(){
      return{
        asPath: '/'
      }
    }
  }
})

describe('ActiveLink component',() => {

  it('renders correctly',() =>{
    const { getByText } = render(
      <ActiveLink href="/" activeClassName='active'>
        <a>Home</a>
      </ActiveLink>
    )
    // debug() é como se fosse o console.log
    expect(getByText('Home')).toBeInTheDocument()
  })

  it('adds active class if the link is currently active',()=>{
    const { getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
    expect(getByText('Home')).toHaveClass('active')
  })

})
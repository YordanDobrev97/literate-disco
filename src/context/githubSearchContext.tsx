import { createContext } from 'react'

const SearchContext = createContext({
  user: {
    name: '',
    image: '',
    repos: 0,
    following: 0,
    followers: 0
  },
  setUser: (value: 
    {name: string,
    image: string,
    repos: number,
    following: number,
    followers: number
  }) => {}
})
export default SearchContext
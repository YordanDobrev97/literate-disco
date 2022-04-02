import { createContext } from 'react'

const SearchContext = createContext({
  user: {
    name: '',
    image: '',
    repos: 0,
    following: 0,
    followers: 0,
    bio: '',
    blog: '',
    created_at: '',
    twitter_username: '',
    location: '',
  },
  setUser: (value: 
    {name: string,
    image: string,
    repos: number,
    following: number,
    followers: number,
    bio: string,
    blog: string,
    created_at: string,
    twitter_username: string,
    location: string,
  }) => {}
})
export default SearchContext
import { GithubAPI } from '../utils/api'

const SearchUser = async (username: string) => {
  const jsonRes = await fetch(`${GithubAPI}${username}`)
  const res = await jsonRes.json()
  return res.items[0]
}

export default SearchUser
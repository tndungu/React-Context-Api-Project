import { useContext } from 'react'
import { LoginContext } from '../Context/LoginContext'

export const useLoginContext = () => {
  return useContext(LoginContext)
}
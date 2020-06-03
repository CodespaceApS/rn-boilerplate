import React from 'react';
const Auth = React.createContext()

const AuthProvider = ({children}) => {
  const [state, setState] = React.useState()
  return (
  <Auth.Provider value={[state, setState]} >{children}</Auth.Provider>
  )
}

export default {
  Provider: ({children}) => (
    <AuthProvider>
      {children}
    </AuthProvider>
  ),
  Auth
}
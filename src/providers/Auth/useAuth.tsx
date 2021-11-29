import React from 'react'

import { AuthContext } from '.'



export function useAuth () {
    const context = React.useContext(AuthContext)
    return context
}

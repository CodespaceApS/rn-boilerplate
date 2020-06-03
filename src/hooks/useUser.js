import React from 'react'
import {buildGetAll,buildAdd,buildRemove,buildUpdate,buildGetById} from 'react-apollo-helper'


export default {
  useAll: buildGetAll('users', 'id, name'),
}
import dayjs from 'dayjs'
import React, { useMemo } from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import { Activity } from '@sage-bionetworks/synapse-types'
import { Tooltip, Typography } from '@mui/material'
import { UserBadge } from '../UserCard/UserBadge'

export const ActivityNodeLabel = (data: Activity) => {
  const friendlyModifiedOn = formatDate(dayjs(data.modifiedOn))
  const { name, description } = data
  return useMemo(
    () => (
      <>
        {name && (
          <Tooltip title={name} placement="top" enterNextDelay={200}>
            <span>
              <Typography variant="smallText1" className="name">
                {name}
              </Typography>
            </span>
          </Tooltip>
        )}
        {description && (
          <Tooltip title={description} placement="top" enterNextDelay={200}>
            <span>
              <Typography variant="smallText1" className="description">
                {description}
              </Typography>
            </span>
          </Tooltip>
        )}
        <UserBadge userId={data.modifiedBy} />
        <div>{friendlyModifiedOn}</div>
      </>
    ),
    [name, description, data.modifiedBy, friendlyModifiedOn],
  )
}

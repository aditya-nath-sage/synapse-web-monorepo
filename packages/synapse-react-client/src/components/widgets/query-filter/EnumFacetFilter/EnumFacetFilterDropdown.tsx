import { Dropdown } from 'react-bootstrap'
import React, { useState } from 'react'
import { Fade, IconButton, Menu, Tooltip } from '@mui/material'
import IconSvg from '../../../IconSvg'

export type EnumFacetFilterDropdownProps = React.PropsWithChildren<{
  menuText: string
  hasSelection: boolean
  dropdownType?: 'Icon' | 'SelectBox'
}>

function EnumFacetFilterSelectBox(
  props: Omit<EnumFacetFilterDropdownProps, 'dropdownType'>,
) {
  const { menuText, children } = props

  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false)
  const onToggle = () => setIsShowDropdown(!isShowDropdown)

  return (
    <Dropdown
      className={'EnumFacetFilter EnumFacetFilterSelect'}
      show={isShowDropdown}
      onToggle={onToggle}
    >
      <Dropdown.Toggle className="secondary-caret" variant="gray-select">
        {menuText}
      </Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  )
}

function EnumFacetFilterIconDropdown(
  props: Omit<EnumFacetFilterDropdownProps, 'dropdownType'>,
) {
  const { children, hasSelection } = props

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleClickDropdownIcon = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return (
    <div className="EnumFacetFilter">
      <Tooltip title={'Filter by specific facet'}>
        <IconButton onClick={handleClickDropdownIcon} size={'small'}>
          <IconSvg
            icon={'filter'}
            wrap={false}
            sx={{
              color: hasSelection ? 'primary.main' : 'grey.700',
              fontSize: '20px',
            }}
          />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        TransitionComponent={Fade}
      >
        {children}
      </Menu>
    </div>
  )
}

export default function EnumFacetFilterDropdown(
  props: EnumFacetFilterDropdownProps,
) {
  const { dropdownType } = props
  if (dropdownType === 'SelectBox') {
    return <EnumFacetFilterSelectBox {...props} />
  } else {
    return <EnumFacetFilterIconDropdown {...props} />
  }
}

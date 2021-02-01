import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import isEqual from 'react-fast-compare'

import FuseAnimate from '@fuse/core/FuseAnimate'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useParams } from 'react-router'
import { ROUTES } from 'app/constants'

const Header = () => {
  const params = useParams()
  const { productId } = params
  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex items-center">
        <FuseAnimate animation="transition.slideLeftIn" delay={300}>
          <Typography
            className="hidden sm:flex mx-0 sm:mx-12"
            variant="h6"
            data-cy="cy-product-title"
          >
            {productId === 'new' ? 'New' : 'Update'} Product
          </Typography>
        </FuseAnimate>
      </div>

      <FuseAnimate animation="transition.slideRightIn" delay={300}>
        <Button
          component={Link}
          to={ROUTES.products}
          className="whitespace-no-wrap normal-case"
          variant="contained"
          color="secondary"
          data-cy="cy-product-back-button"
        >
          <span className="flex">Back</span>
        </Button>
      </FuseAnimate>
    </div>
  )
}

export default memo(Header, isEqual)

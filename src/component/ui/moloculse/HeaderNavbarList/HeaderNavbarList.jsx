import React from 'react'
import Button from '../../atoms/Button/Button'
import Icon from '../../atoms/Icon/Icon'

function HeaderNavbarList() {
    return (
        <div className="">
            <Button className="w-[24px] h-[24px] flex items-center justify-center ">
                <Icon name="treeDash" />
            </Button>
        </div>
    )
}

export default HeaderNavbarList

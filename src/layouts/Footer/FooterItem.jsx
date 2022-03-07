import { Box, Circle } from "@chakra-ui/react";
import React from "react";
import { connect, useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { setMenu, selectMenu } from '../../features/propan/propanSlice';

const FooterItem = ({ Icon, link, ...props }) => {
  const menu = useSelector(selectMenu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleClick() {
    dispatch(setMenu(link));
    navigate(link);
  }

  const active = menu === link;
  let wh = active ? 6 : 5;
  
  const isNew = link === '/addnew';
  if(isNew)
    wh = 12;

  return (
    <Box px="12px" onClick={() => handleClick()} 
          align="center" color={active ? "menu.active" : "menu.inactive"}>
      <Icon width={wh} height={wh} />
      <Circle
        bgColor={active ? (isNew?"red":"menu.active") : "transparent"}
        w="3px"
        h="3px"
        mt="5px"
      />
    </Box>
  );
};

const mapStateToProps = state => ({
  menu: state.propan.menu,
})

export default connect(mapStateToProps)(FooterItem)
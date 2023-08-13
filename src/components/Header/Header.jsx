/*
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import { selectIsLoading } from 'redux/reviews/selectors';
import { fetchReviewById } from 'redux/reviews/operations';
import { selectUser } from 'redux/auth/selectors';

import { FeedbackModal } from 'components/FeedbackModal/FeedbackModal';
import Spinner from 'components/Spinner/spinner';
import Box from 'components/Box/Box';

import { useAdaptiveImage } from 'hooks/useAdaptiveImage';

import gooseTask from 'images/goose-task.svg';

import { UserInfo } from './UserInfo/UserInfo';
import { ThemeToggler } from './ThemeToggler/ThemeToggler';

import {
  Container,
  Menu,
  Title,
  BurgerButton,
  BurgerIcon,
  ButtonFeedback,
  GooseTask,
  MotivationTask,
} from './Header.styled';

export const Header = ({ onSidebarShow }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const [showModal, setShowModal] = useState(false);
  const { isTablet, isMobile } = useAdaptiveImage();
  const TabletOrMobile = isTablet || isMobile;

  const { pathname } = useLocation();
  const currentPath = pathname;

  const isCalendarPage = currentPath.startsWith('/calendar/day');

  let pageTitle = '';

  const words = pathname.split('/');
  const title = words.find(
    word => word === 'calendar' || word === 'account' || word === 'statistics'
  );

  switch (title) {
    case 'calendar':
      pageTitle = 'Calendar';
      break;
    case 'account':
      pageTitle = 'User Profile';
      break;
    case 'statistics':
      pageTitle = 'Statistics';
      break;
    default:
      pageTitle = '';
      break;
  }

  const openModal = () => {
    dispatch(fetchReviewById(user.id));

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <Box display="flex" alignItems="center" gap="8px">
          {isCalendarPage && <GooseTask src={gooseTask} alt="goose" />}
          <div>
            <Title>{pageTitle}</Title>

            {isCalendarPage && (
              <MotivationTask>
                Let go of the past and focus on the present!
              </MotivationTask>
            )}
          </div>
          {TabletOrMobile && (
            <BurgerButton type="button" onClick={() => onSidebarShow()}>
              <BurgerIcon />
            </BurgerButton>
          )}
        </Box>
        <Menu>
          <ButtonFeedback type="button" onClick={openModal}>
            Feedback
          </ButtonFeedback>
          <ThemeToggler></ThemeToggler>
          <Link to="/account">
            <UserInfo />
          </Link>
        </Menu>
        {isLoading && <Spinner />}
        {showModal && !isLoading && <FeedbackModal onClose={closeModal} />}
      </Container>
    </>
  );
};
*/
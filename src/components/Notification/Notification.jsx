import PropTypes from 'prop-types';

import { NotificationMsg } from "./Notifiction.styled"


export const Notification =({message})=>(
    <NotificationMsg>{message}</NotificationMsg>
)

Notification.propTypes = {
    message:PropTypes.string.isRequired,

   };

import React from 'react';
import './SideNav.css';
import SideLink from './SideLink';
import {
  FaHome,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPowerOff
} from 'react-icons/fa';
import { GiStarSattelites, GiCalendar } from 'react-icons/gi';

const SideNav = () => {
  return (
    <>
      <SideLink
        class="dashboard"
        href="/dashboard"
        icon={<FaHome className="sideNavIcon" />}
        text="Dashboard"
      />

      <SideLink
        class="messages"
        href="/messages"
        icon={<FaRegEnvelope className="sideNavIcon" />}
        text="Messages"
      />

      <SideLink
        class="maps"
        href="/maps"
        icon={<FaMapMarkerAlt className="sideNavIcon" />}
        text="Maps"
      />

      <SideLink
        class="promos"
        href="/promos"
        icon={<GiStarSattelites className="sideNavIcon" />}
        text="Promos"
      />

      <SideLink
        class="schedule"
        href="/schedule"
        icon={<GiCalendar className="sideNavIcon" />}
        text="Schedule"
      />

      <SideLink
        class="feedback"
        href="/feedback"
        icon={<FaPaperPlane className="sideNavIcon" />}
        text="Feedback"
      />

      <SideLink
        class="logout"
        href="/logout"
        icon={<FaPowerOff className="sideNavIcon" />}
        text="Logout"
      />
    </>
  );
};

export default SideNav;

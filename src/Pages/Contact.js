import {
  Box,
  useBreakpointValue,
  Icon,
} from '@chakra-ui/react';
import { useState } from 'react';
import Roles from '../classes/roles';
import OneTwoColumn from '../Components/Column/OneTwoColumn';
import EntryLevelForm from '../Components/Form/Form';
import ContactGraphic from '../Components/Graphic/ContactGraphic';

const investorLogin = () => { console.log('Investor'); }
const startupLogin = () => { console.log('Startup'); }

const data = {
  'Founder': 'future opportunities to get funded and upscale your business!',
  'Investor': 'upcoming startups which need your help!'
}

const Contact = () => {
  const [role, setRole] = useState(Roles.INVESTOR);
  var onSubmit = (e) => {
    e.preventDefault();
    role === Roles.INVESTOR ? investorLogin() : startupLogin();
  }
  const chooseRole = (e) => {
    setRole(e.target.value);
  }

  return (
    <>
      <Box >
        <OneTwoColumn>
          <ContactGraphic role={role} />
          <EntryLevelForm
            title={`Hello there, ${role}`}
            subtitle={`We are glad to see you here! Register with us to get updates on ${data[role]}`}
            chooseRole={chooseRole}
            onSubmit={onSubmit}
          />
        </OneTwoColumn>
      </Box>
    </>
  );
}

export const Blur = (props) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>

    </Icon>
  );
};

export default Contact;
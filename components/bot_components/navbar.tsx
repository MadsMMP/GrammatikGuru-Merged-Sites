import {
  Box, Group, Navbar, Stack, Text, ThemeIcon, UnstyledButton,
} from '@mantine/core';
import {
  IconBrandHipchat, IconBrandPython, IconBulb, IconDatabase, IconEdit,
  IconMoodSmileBeam, IconMovie, IconPig, IconSearch, IconStar,
} from '@tabler/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

// Add your pages here!
const Grammatik = [
  {
    icon: <IconBulb size={16} />,
    label: 'Ret din tekst',
    sublabel: 'GRAMMATIK',
    path: 'chatbotturbo',
  },
  {
    icon: <IconBulb size={16} />,
    label: 'Sprog Oversættelse',
    sublabel: 'GRAMMATIK',
    path: 'retdintekst',
  },
];

const Assistenter = [
  {
    icon: <IconBulb size={16} />,
    label: 'Notetagnings Assistent',
    sublabel: 'ASSISTENT',
    path: 'notetagning',
  },
  {
    icon: <IconBulb size={16} />,
    label: 'Komma Assistent',
    sublabel: 'GRAMMATIK',
    path: 'komma',
  },
  {
    icon: <IconBulb size={16} />,
    label: 'Grammatik Assistent',
    sublabel: 'GRAMMATIK',
    path: 'grammatik',
  },
];

const Vejledning = [
  {
    icon: <IconBulb size={16} />,
    label: 'Studievejledning',
    sublabel: 'VEJLEDNING',
    path: 'studievejledning',
  },
  {
    icon: <IconBulb size={16} />,
    label: 'Karrierevejledning',
    sublabel: 'VEJLEDNING',
    path: 'karrierevejledning',
  },
];

interface MainLinkProps {
  icon: React.ReactNode;
  path: string;
  color?: string;
  label: string;
  sublabel?: string;
}

function MainLink({
  icon, color, label, path, sublabel,
}: MainLinkProps) {
  const router = useRouter();
  const linkPath = `/bot/demos/${path}`;
  const currentPath = router.pathname === linkPath;
  return (
    <Link href={linkPath} passHref>
      <UnstyledButton
        sx={(theme) => ({
          display: 'block',
          width: '100%',
          padding: 6,
          borderRadius: theme.radius.sm,
          color: theme.black,
          backgroundColor: currentPath ? theme.colors.blue[1] : undefined,
          '&:hover': {
            backgroundColor: theme.colors.blue[2],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant="light" size="sm">
            {icon}
          </ThemeIcon>

          <Box>
            <Text size="xs">{label}</Text>
            { sublabel && <Text size={10} color="dimmed" transform="uppercase">{ sublabel }</Text>}
          </Box>
        </Group>
      </UnstyledButton>
    </Link>
  );
}
MainLink.defaultProps = {
  color: undefined,
  sublabel: undefined,
};

export default function AppNavbar() {
  return (
    <Navbar width={{ base: 250 }} height="100%" p={6}>
      <Stack>
        <Box>
          <Text size="sm" weight="bold">GRAMMATIK</Text>
          { Grammatik.map((link) => <MainLink {...link} key={link.label} />) }
        </Box>
        <Box>
          <Text size="sm" weight="bold">ASSISTENTER</Text>
          { Assistenter.map((link) => <MainLink {...link} key={link.label} />) }
        </Box>
        <Box>
          <Text size="sm" weight="bold">VEJLEDNING</Text>
          { Vejledning.map((link) => <MainLink {...link} key={link.label} />) }
        </Box>
      </Stack>
    </Navbar>
  );
}

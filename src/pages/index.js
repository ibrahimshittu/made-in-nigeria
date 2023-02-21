import * as React from 'react';
import { ChakraProvider, SimpleGrid, Container, Center, Box } from '@chakra-ui/react';
import Layout from '../components/layout';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import PrimaryButton from '../components/Buttons/PrimaryButton';
import SecondaryButton from '../components/Buttons/SecondaryButton';
import ArticleCard from '../components/ArticleCard';
import AcceptingContributions from '../components/AcceptingContributions';
import BuiltByNigerians from '../components/BuiltByNigerians';
import BlogNewsletter from '../components/BlogNewsletter';
import TeamCard from '../components/TeamCard';
import BuiltByNigeriansAbout from '../components/BuiltByNigeriansAbout';
import AboutHero from '../components/AboutHero';
import BlogHero from '../components/BlogHero';
import ContributorsHero from '../components/ContributorsHero';
import ProjectsHero from '../components/ProjectsHero';

/*
  Notice: This is going to be the landing page
*/

// markup
const IndexPage = () => {
  return (
    <Layout>
      <ChakraProvider>
        <Hero />
        <Box marginTop={10}>
          <AboutHero />
        </Box>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ sm: 1, md: 3 }}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </SimpleGrid>

          <Center>
            <SecondaryButton text="See All Projects" link="https://madeinnigeria.dev" />
          </Center>

          <Box margin={3} display="flex" justifyContent="center">
            <BuiltByNigerians />
          </Box>

          <SimpleGrid columns={{ sm: 1, md: 3 }}>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </SimpleGrid>

          <Center>
            <PrimaryButton text="Read About Us" link="https://madeinnigeria.dev" />
          </Center>

          <Box display="flex" justifyContent="center" marginBottom={10}>
            <AcceptingContributions />
          </Box>

          <Box display="flex" justifyContent="center" marginBottom={10}>
            <BlogNewsletter />
            <TeamCard />
            <BuiltByNigeriansAbout />
            <BlogHero />
            <ContributorsHero />
          </Box>
          <Box margin={3} display="flex" justifyContent="center">
            <ProjectsHero />
          </Box>
        </Container>
      </ChakraProvider>
    </Layout>
  );
};

export default IndexPage;

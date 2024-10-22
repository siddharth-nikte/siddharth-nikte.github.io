import { useMediaQuery, styled, Typography, Stack, ThemeProvider, Button, IconButton, Divider, Card, CardContent, CardActions, CardActionArea, CardMedia, Box, List, ListItem, ListItemText, ListItemButton, ListItemIcon } from '@mui/material'
import Grid from '@mui/material/Grid2';
import { createTheme } from "@mui/material/styles";
import Github from './assets/github-dark.svg'
import Linkedin from './assets/linkedin.svg'
import JavaScript from './assets/icons8-javascript.svg'
import TypeScript from './assets/icons8-typescript.svg'
import Re from './assets/icons8-react.svg'
import Mui from './assets/mui.svg'
import NodeJS from './assets/icons8-node-js.svg'
import MySql from './assets/icons8-mysql.svg'
import Cplus from './assets/c.svg'
import Java from './assets/icons8-java.svg'
import Python from './assets/python.svg'
import StrikeSS from './assets/StrikeSS.png'
import CET from './assets/CETcombined.png'
import HE from './assets/HE.png'
import CardIcon from './assets/icons8-link-24.png'
import './App.css'

const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

interface SkillItemPro {
  fieldName: string;
  itemName: string[];
  itemIcon: string[];
}

const SkillItems: React.FC<SkillItemPro> = ({ fieldName, itemName, itemIcon}) => {
  return (
    <Grid size={3}>
      <Typography marginTop={2} variant='h5' fontWeight={900}>{fieldName}</Typography>
      <Box marginLeft={6}>
        <nav aria-label={fieldName}>
          <List>
            {itemName.map((name, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <img src={itemIcon[index]} alt={name} height={40} width={40} />
                  </ListItemIcon>
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
      </Box>
    </Grid>
  )
}

const SkillSection = () => {
  return (
    <>
      <SkillItems fieldName='Web' itemName={['React', 'JavaScript', 'TypeScript', 'Material UI']} itemIcon={[Re, JavaScript, TypeScript, Mui]} />
      <SkillItems fieldName='Mobile' itemName={['React Native']} itemIcon={[Re]}  />
      <SkillItems fieldName='BackEnd' itemName={['NodeJS']} itemIcon={[NodeJS]} />
      <SkillItems fieldName='DataBase' itemName={['MySql']} itemIcon={[MySql]}  />
      <SkillItems fieldName='Other' itemName={['C & C++', 'Java', 'Python']} itemIcon={[Cplus, Java, Python]}  />
    </>
)}

interface CardProps {
  imageSrc: string;
  name: string;
  description: string;
  link: string;
  iconSrc: string[];
}

const CustomCard: React.FC<CardProps> = ({ imageSrc, name, description, iconSrc, link }) => {
  return (
    <>
      <Card sx={{ maxWidth: 300, minWidth: 300, marginBottom: 4 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            image={imageSrc}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Grid>
              {iconSrc && iconSrc.map((src, index) => (
                <img key={index} src={src} alt={`icon-${index}`} height={30} width={30} />
              ))}
            </Grid>
            <Typography variant="body1" sx={{ color: 'grey' }}>
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <a href={link} target='_blank'>
              <IconButton aria-label="delete" size="small" sx={{ backgroundColor: '#0d6efd', marginLeft: '10%' }}>
                <img src={CardIcon} />
              </IconButton>
            </a>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  )
}

const BlinkingText = styled(Typography)(() => ({
  animation: 'blinking 5s infinite',
  '@keyframes blinking': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
}));

function App() {
  const isMobile = useMediaQuery('(max-width:1000px)');
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>

        <Grid container spacing={2} alignItems={'center'}>
          <Grid size={12} marginTop={32}>
            <Typography variant='h4' color='#ecb366'>Siddharth Nikte</Typography>
            <BlinkingText variant='h6' color='#c9ebe2'>FullStack Developer | Mobile Developer</BlinkingText>
          </Grid>
          <Grid size={12} marginBottom={30}>
            <a href='https://in.linkedin.com/in/siddharth-nikte-49541b267' target='_blank' rel='linkedin' id='linkedin'><img src={Linkedin} alt="LinkedIn" height={40} width={40} /></a>
            <a href='https://github.com/siddharth-nikte' target='_blank' rel='github'><img src={Github} alt="Github" height={40} width={40} /></a>
          </Grid>
        </Grid>

        {/* About */}
        <Grid container spacing={2} sx={{ backgroundColor: '#004daa' }}>
          <Grid size={12}>
            <Typography marginTop={4} marginBottom={4} variant='h4' fontWeight={900}>ABOUT ME</Typography>
            <Typography variant='body1' marginX={4} marginBottom={4}>Hey, I'm <strong>Siddharth Nikte</strong>, a Computer Science student from India. I love building beautiful Mobile and Web softwares. I thrive on the challenge of transforming ideas into functional and user-friendly products.
              <br /><br />I'm pursuing <strong>B.Tech in Computer Science Engineering with focus on Artificial Intelligence</strong> (2022-2026), where I have taken interest in topics like Operating Systems, Data Structues and Algorithm and Machine Learning.
              <br /><br />At present, I am enhancing my skills in backend technologies, database and improving my competative programming skills.  I actively participate in hackathons and contribute to open source softwares. Additionally, I am gaining practical experience through freelancing, where I develop components and smaller software.
              <br /><br />When I'm not coding, you can find me exploring the latest trends in technology or diving into new programming languages. I'm excited about the future of tech and innovation!
            </Typography>
          </Grid>
          <Grid size={12}>
            <a href='https://drive.google.com/file/d/1JcSUfiXvv3KGs4E_zqDrG5jcJZ8l_K4w/view?usp=drive_link' target='_blank'><Button variant='contained' sx={{ marginBottom: '2%', backgroundColor: '#c7522a' }}>Resume</Button></a>
          </Grid>
        </Grid>

        {/* Skills */}
        <Typography marginTop={4} variant='h4' fontWeight={900}>Skills</Typography>
        {!isMobile && <Stack direction='row' spacing={2} justifyContent={'center'} alignContent={'center'}>
          <SkillSection />
        </Stack>}
        {isMobile && <SkillSection/>}

        {/* Experience */}
        <Divider component="li" />
        <Grid container spacing={2} justifyContent={'center'}>
          <Grid size={12}>
            <Typography marginX={2} marginBottom={2} variant='h4' fontWeight={900} color='#ecb366'>Experience</Typography>
          </Grid>
          <CustomCard imageSrc={CET} name='CET(freelancing)' description='A mobile app designed to calculate CO2 emissions generated during construction demolition. Generate detailed PDF reports and suggest better demolition options' iconSrc={[Re]} link='' />
        </Grid>

        {/* Projects  */}
        <Divider component="li" />
        <Grid container spacing={4} justifyContent={'center'}>
          <Grid size={12}>
            <Typography marginX={2} variant='h4' fontWeight={900} color='#ecb366'> Projects</Typography>
          </Grid>
          <CustomCard imageSrc={HE} name='AudioAid' description='An audio processing android app designed for individuals with hearing difficulties' iconSrc={[Java, Cplus]} link='https://www.amazon.com/dp/B0DK9M6Q2Y/ref=apps_sf_sta' />
          <CustomCard imageSrc={StrikeSS} name='Strike' description='A Website for Content based recommendation system and classifier for websites' iconSrc={[Re, Mui, NodeJS, Python]} link='https://github.com/siddharth-nikte/Strike' />
        </Grid>

        {/* Footer  */}
        <Grid container spacing={2} alignItems={'center'} sx={{ backgroundColor: '#05384f' }}>
          <Grid size={12} marginTop={4}>
            <Typography variant='h4' color='#ecb366'>Siddharth Nikte</Typography>
          </Grid>
          <Grid size={12} marginBottom={4}>
            <a href='https://in.linkedin.com/in/siddharth-nikte-49541b267' target='_blank' rel='linkedin' id='linkedin'><img src={Linkedin} alt="LinkedIn" height={40} width={40} /></a>
            <a href='https://github.com/siddharth-nikte' target='_blank' rel='github'><img src={Github} alt="Github" height={40} width={40} /></a>
          </Grid>
        </Grid>

      </Stack>
    </ThemeProvider>
  )
}

export default App

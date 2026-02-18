import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Projects = () => {
  const cardProjects = [
    {
      title: "HRMS",
      Description:
        "Project is built in React+Vite. Ants is used for components and grid for stylinng tailwind css is used. Project is connected with backend. UI is available and dummy data is shown where api is not working. ",
      link: "https://attendancemanagementsystem.vercel.app/",
    },
    {
      title: "Invest Qatar",
      Description:
        "Project is built in pure html css javascript .Animations are added using js and css animation .Full responsive using media queries",
      link: "https://applab-assesment.vercel.app/",
    },
    {
      title: "Canadian Council of Imams (CCI)",
      Description:
        "Project is built in pure worpdress elementor .Custom design is given so custom css and custom php is used because elementor was free used by client.",
      link: "https://canadiancouncilofimams.com/",
    },
    {
      title: "Forgotten Women Org",
      Description: "Project is built in pure worpdress wp bakery.Custom design is given so mostly css is custom used with drag and drop functionality",
      link: "https://forgottenwomen.org/",
    },
    {
      title: "Tahwul Assement",
      Description:
        "Project build in React js tailwind css antd  with advance react hooks and components .This is Assesment test for a company",
      link: "https://tahwuk-assesment-htv5.vercel.app/",
    },
    {
      title: "Fuchka Xpress",
      Description:
        "Project build in React js tailwind css with advance react hooks and components .This is Client project",
      link: "https://fuchkaexpress-61g7.vercel.app/",
    },
    {
      title: "Sky  Angel Game",
      Description:
        "Project build in Html Css Javascript.Purpose is just to show skills ",
      link: "https://skyangel-game.vercel.app/",
    },
    {
      title: "Online Shopping Store",
      Description:
        "Project build in React js ReduxTool kit and React Icons.Purpose is just to show skills. Data is store on local storage and all data registration annd add to cart functionality working. ",
      link: "https://my-eccommercce-app.vercel.app/",
    },
    {
      title: "Password Generator",
      Description:
        "Project build in React + Vite and Tailwind.I use callback , usememo and useffect hooks.App will generate random password",
      link: "https://password-generator-puce-theta.vercel.app/",
    },
    {
      title: "Todo List",
      Description:
        "Datasaved in local storage .CRUD operations works.Built in Reactjs and Antd",
      link: "https://todo-app-two-eta-58.vercel.app/",
    },
    {
      title: "Go Inspire Client App",
      Description:
        "Project build in Next js Antd.Client Proeject Development is  continue.. Data is store on local storage. ",
      link: "https://goinspire.vercel.app/",
    },
    {
      title: "Koriander Pizza Dellivery Website ",
      Description:
        "Build in next js, antd .Data and images provided by client. Deployed on Hostinger",
      link: "https://korriander.vercel.app/",
    },
    {
      title: "Assement",
      Description:
        "Task for Interview.Build in Html css.Animation task.Deployed on vercel",
      link: "https://assesmentfrontend-sigma.vercel.app/#",
    },
    {
      title: "Verhurun Website",
      Description:
        "Booking Website like booking.com . Built in nextjs, material ui and scss",
      link: "https://verhuren.vercel.app/",
    },
    {
      title: "Apple Aircart",
      Description:
        "Aim to provide tools for customer relationship.  Built in nextjs, material ui",
      link: "https://app-dev.airapplecart.co.uk/super-admin",
    },
    {
      title: "Student Help Squad",
      Description:
        "To guids students in Uk.  Built in nextjs, antd, tailwindcss",
      link: "https://studenthelpsquad.co.uk/",
    },
    {
      title: "AL Meezan AlAhmer",
      Description:
        "For order shop equipments. Bult in html css php mysql and bootstrap",
      link: "https://almeezanalahmer-trqx.vercel.app/",
    },
    {
      title: "Garments Printing",
      Description: "website designed in Deconetwort Cms",
      link: "https://garmentprinting.com.au/",
    },
    {
      title: "Garments Printing Blog",
      Description: "website designed in wordpress Cms",
      link: "https://garmentprinting.com.au/blog",
    },
  ];

  return (
    <>
      <Grid container id="projects">
        <Grid item md={12} xs={12}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            Projects
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: "25px" }}>
        {cardProjects.map((item, index) => {
          return (
            <Grid item md={3} sm={6} xs={12}>
              <Card
                sx={{
                  minHeight: { lg: "180px", xs: "120px" },
                  borderRadius: "20px",
                  boxShadow: "3px 3px 6px #c4cfd4, -3px -3px 6px #fff",
                  key:{index}
                }}
                className="card-hover"
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 600,
                      color: "#272343",
                      textAlign: "center",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 500,
                      color: "#272343",
                      textAlign: "center",
                    }}
                  >
                    {item.Description}
                  </Typography>

                  <Box
                    sx={{
                      textAlign: "center",
                      marginTop: "5px",
                      cursor:"pointer"
                    }}
                  >
                    <a
                      href={item.link}
                      style={{
                        fontSize: "14px",
                        fontFamily: "Montserrat, sans-serif",
                        color: "#77B1D4",
                        fontWeight: 600,
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      Click To View
                    </a>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Projects;
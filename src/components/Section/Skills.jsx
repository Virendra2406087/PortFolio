import React, { useState } from "react";
import { Tabs, Tab, Box, Typography} from "@mui/material";
import skills from "../../ui/skillName";

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`skills-tabpanel-${index}`}
      aria-labelledby={`skills-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function Skills() {
  
  const skillSet = skills

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <section id='skills' className="w-full py-[6rem] dark:bg-gray-950 bg-white flex flex-col gap-8">
      <h1 className='bg-gradient-to-bl from-violet-500 via-pink-500 to-violet-500 bg-clip-text text-center text-transparent text-5xl font-bold'>Skills</h1>
      <p className='text-center text-violet-500 dark:text-gray-300 w-[80%] mx-auto md:text-lg'>Skilled in crafting full-stack web applications with modern technologies.
      Focused on writing clean code, building intuitive UIs, and delivering scalable solutions.</p>
      <Box className="w-[90%] md:w-[80%] mx-auto text-black">
        <Tabs
          value={tabValue}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="fullWidth"
          aria-label="skills tabs"
          sx={{
            pb:8,
            
          }}
        >
          {skillSet.map((skill, index) => (
            <Tab
              key={skill.id}
              label={skill.skillName}
              id={`skills-tab-${index}`}
              aria-controls={`skills-tabpanel-${index}`}
              sx={{
                color: "#6B6D68", 
                '&.Mui-selected': {
                  fontWeight: "bold",
                },
              }}
            />
          ))}
        </Tabs>

        {skillSet.map((skill, index) => (
          <TabPanel key={skill.id} value={tabValue} index={index}>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                justifyContent: "center",
                color: "white",
                borderRadius: 5,
              }}
              className='lg:w-[90%] dark:px-5 w-full mx-auto lg:px-20 lg:py-16 dark:py-8 pb-8 dark:bg-gray-800 dark:shadow-sm shadow-gray-700'
            >
              {skill.icons.map((icon, i) => {
                const IconTag = icon.iconName;

                const [hovered, setHovered] = useState(false);
                return (
                    <div 
                    key={i}
                    className={`dark:bg-gray-900 bg-purple-200 py-3 px-4 rounded-xl transition-all duration-500 
                      shadow-xl/30
                      ${hovered ? "-translate-y-1" : ""}
                    `}

                    style={{
                      boxShadow: hovered
                        ? `1px 4px 4px ${icon.color}`
                        : "0 1px 5px gray"
                    }}
                         onMouseEnter={() => setHovered(true)}
                         onMouseLeave={() => setHovered(false)}
                    >
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: 80,
                      gap : 1,
                    }}
                  >
                    <div className='rounded-full max-w-fit py-2'>
                        <IconTag 
                        size={50} 
                        color={icon.color}
                        />
                    </div>
                    
                    <Typography 
                    variant="caption" 
                    mt={1} 
                    fontSize={18}
                    className={`dark:text-gray-300 text-black`}
                    textAlign="center">
                      {icon.name}
                    </Typography>
                  </Box>
                  </div>
                );
              })}
            </Box>
          </TabPanel>
        ))}
      </Box>
    </section>
  );
}

export default Skills;

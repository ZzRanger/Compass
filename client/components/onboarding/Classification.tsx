import { Box, Button, FormControl, Grid, Input, InputLabel, makeStyles, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Classification() {
    const [studyLevel, setStudyLevel] = useState("");
    const [major, setMajor] = useState("");

    const handleStudyLevel = (event: SelectChangeEvent) => {
        setStudyLevel(event.target.value as string);
    };

    const handleMajor = (event: SelectChangeEvent) => {
        setMajor(event.target.value as string);
    };

    return (
        <div style = {{height: "calc(100vh - 64px)"}} className="flex flex-col justify-center items-center">
            <Box sx = {{ backgroundColor: "#EDE2D1", borderTopLeftRadius: 10, borderTopRightRadius: 10}} width="600px" height="90px" display="flex" justifyContent="center" alignItems="center">
                <Typography fontWeight="bold" fontSize="25px" color="#6D4C71" fontFamily="Rajdhani">
                    CLASSIFICATION
                </Typography>
            </Box>
            <Box height="10px"/>
            <Box
            className="flex flex-col justify-center items-center"
            width="600px"
            height="500px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{  background: "linear-gradient(to right, rgba(209, 170, 104, 0.3), rgba(61, 34, 137, 0.15))" }}
            >
               
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                width="450px"
                height= "200px"
                style={{  backgroundColor: "white", borderRadius: 10 }}
                >
                    <div>
                        <Grid item sx = {{width: "350px"}}>
                            <Typography fontFamily="Rajdhani" fontSize="18px" >
                                Have you had an internship before, are you currently an intern, or do you have an internship lined up?
                            </Typography>
                        </Grid>
                        <div className="flex flex-row space-between" style={{width: "350px", paddingTop: "15px"}}>
                            <Box sx={{width: "300px"}}/>
                            <Box sx={{width: "200px"}}>
                                <div className="flex flex-row justify-between">
                                    <Button size="small" variant="contained" style = {{width: "50px", backgroundColor: "#EDE2D1", borderRadius: 10}}>
                                        <Typography sx={{textTransform: "none"}} fontFamily="Rajdhani" color="black">
                                            Yes
                                        </Typography>
                                    </Button>
                                    <Button size="small" variant="contained" style = {{width: "50px", backgroundColor: "#EDE2D1", borderRadius: 10,}}>
                                        <Typography sx={{textTransform: "none"}} fontFamily="Rajdhani" color="black">
                                            No
                                        </Typography>
                                    </Button>
                                </div>
                            </Box>
                        </div>
                    </div>
                </Grid>
                <div style = {{width: "550px"}} className="flex justify-end pt-5 pr-12">
                    <Button variant="contained" style = {{backgroundColor: "#6D4C71", borderRadius: 10}}>
                        <Typography sx={{textTransform: "none"}} fontFamily="Rajdhani">
                            Next
                        </Typography>
                    </Button>
                </div>
            </Box>
        </div>
        
    );
}
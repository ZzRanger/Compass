import { Box, Button, FormControl, Grid, Input, InputLabel, makeStyles, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function CreateAccount() {
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
                    CREATE AN ACCOUNT
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
                direction="column"
                alignItems="center"
                justifyContent="center"
                width="450px"
                height="400px"
                style={{  backgroundColor: "white", borderRadius: 10 }}
                >
                    <div style = {{height: "400px"}} className="flex flex-col justify-evenly">
                        <Grid item sx={{width: "400px"}}>
                            <div className = "flex flex-row justify-evenly">
                                <Box>
                                    <Typography color="#6D4C71" className="font-Rajdhani" sx = {{fontSize: "18px"}}>
                                        First Name
                                    </Typography>
                                    <TextField InputLabelProps={{ style: {fontSize: 14, fontFamily: "Rajdhani"}}}  inputProps={{ style: {fontSize: 14, fontFamily: "Rajdhani"}}}  sx={{width: "150px", "& .MuiInputLabel-root": {color: '#D1AA68'}, "& .MuiOutlinedInput-root": {"& > fieldset": { borderColor: "#D1AA68" },'&:hover fieldset': {borderColor: '#D1AA68',},'&.Mui-focused fieldset': {borderColor: '#D1AA68',},}}} size="small" placeholder="Enter your first name" />
                                </Box>
                                <Box>
                                    <Typography color="#6D4C71" className="font-Rajdhani" sx = {{fontSize: "18px"}}>
                                        Last Name
                                    </Typography>
                                    <TextField InputLabelProps={{style: {fontSize: 14, fontFamily: "Rajdhani"}}}  inputProps={{ style: {fontSize: 14, fontFamily: "Rajdhani"}}}  sx={{width: "150px","& .MuiInputLabel-root": {color: '#D1AA68'}, "& .MuiOutlinedInput-root": {"& > fieldset": { borderColor: "#D1AA68" },'&:hover fieldset': {borderColor: '#D1AA68',},'&.Mui-focused fieldset': {borderColor: '#D1AA68',},}}} size="small" placeholder="Enter your last name" />
                                </Box>
                            </div>
                        </Grid>
                        <Grid item>
                            <div className = "flex flex-row pl-8">
                                <Box>
                                    <Typography color="#6D4C71" className="font-Rajdhani" sx = {{fontSize: "18px"}}>
                                        Email
                                    </Typography>
                                    <TextField InputLabelProps={{style: {fontSize: 14, fontFamily: "Rajdhani"}}}  inputProps={{style: {fontSize: 14, fontFamily: "Rajdhani"}}}  sx={{width: "300px", fontSize: "12px", "& .MuiInputLabel-root": {color: '#D1AA68'}, "& .MuiOutlinedInput-root": {"& > fieldset": { borderColor: "#D1AA68" },'&:hover fieldset': {borderColor: '#D1AA68',},'&.Mui-focused fieldset': {borderColor: '#D1AA68',},  }}} size="small" placeholder="Enter your email" />
                                </Box>
                            </div>
                        </Grid>
                        <Grid item sx={{width: "400px"}}>
                            <div className = "flex flex-row justify-evenly">
                                <Box>
                                    <Typography color="#6D4C71" className="font-Rajdhani" sx = {{fontSize: "18px"}}>
                                        Level of Study
                                    </Typography>
                                    <FormControl size="small">
                                        <Select
                                        onChange={handleStudyLevel}
                                        sx={{width: "150px", backgroundColor: "#EDE2D1", fontFamily: "Rajdhani"}}
                                        MenuProps={{
                                            PaperProps: {
                                                style: {
                                                    backgroundColor: "#EDE2D1"
                                                }
                                            },
                                          }
                                        }
                                        value={studyLevel}
                                        >
                                            
                                            <MenuItem sx={{fontFamily: "Rajdhani"}} value={"Freshman"}>Freshman</MenuItem>
                                            <MenuItem sx={{fontFamily: "Rajdhani"}} value={"Sophomore"}>Sophomore</MenuItem>
                                            <MenuItem sx={{fontFamily: "Rajdhani"}} value={"Junior"}>Junior</MenuItem>
                                            <MenuItem sx={{fontFamily: "Rajdhani"}} value={"Senior"}>Senior</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <Typography color="#6D4C71" className="font-Rajdhani" sx = {{fontSize: "18px"}}>
                                        Major
                                    </Typography>
                                    <FormControl size="small">
                                        <Select
                                        onChange={handleMajor}
                                        sx={{width: "150px", backgroundColor: "#EDE2D1", fontFamily: "Rajdhani"}}
                                        MenuProps={{
                                            PaperProps: {
                                                style: {
                                                    backgroundColor: "#EDE2D1",
                                                }
                                            },
                                          }
                                        }
                                        value={major}
                                          
                                        >
                                            <MenuItem sx={{fontFamily: "Rajdhani"}} value={"Actuarial Science"}>Actuarial Science</MenuItem>
                                            <MenuItem sx={{fontFamily: "Rajdhani"}} value={"Computer Science"}>Computer Science</MenuItem>
                                            <MenuItem sx={{fontFamily: "Rajdhani"}} value={"Marketing"}>Marketing</MenuItem>
                                            <MenuItem sx={{fontFamily: "Rajdhani"}} value={"Psychology"}>Psychology</MenuItem>
                                            <MenuItem sx={{fontFamily: "Rajdhani"}} value={"Statistics"}>Statistics</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                        </Grid>
                    </div>
                </Grid>
                <div style = {{width: "550px"}} className="flex justify-end pt-5 pr-12">
                    <Button variant="contained" style = {{backgroundColor: "#6D4C71", borderRadius: 10}}>
                        <Typography sx={{textTransform: "none"}} fontFamily="Rajdhani">
                            Create
                        </Typography>
                    </Button>
                </div>
            </Box>
        </div>
        
    );
}
import { Circle } from "@mui/icons-material";
import { Box, Button, FormControl, Grid, Input, InputLabel, List, ListItem, ListItemText, ListSubheader, makeStyles, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function Password() {
    const [studyLevel, setStudyLevel] = useState("");
    const [major, setMajor] = useState("");
    const [dense] = useState(true);

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
                    PASSWORD
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
                height= "350px"
                style={{  backgroundColor: "white", borderRadius: 10 }}
                >
                    <div style={{height: "300px"}}>
                        <Grid item sx={{width: "350px"}}>
                            <Typography color="#6D4C71" fontFamily="Rajdhani" fontSize="20px">
                            Create a strong password at least 8 characters long with the minimum:
                                <List disablePadding dense={dense} sx={{ listStyleType: 'disc' }}>
                                    <Box sx={{pl:4}}>
                                        <ListItem disablePadding disableGutters={true} sx={{ display: 'list-item' }}>
                                            1 letter
                                        </ListItem>
                                        <ListItem disablePadding disableGutters={true} sx={{ display: 'list-item' }}>1 number</ListItem>
                                        <ListItem disablePadding disableGutters={true} sx={{ display: 'list-item' }}>1 special character</ListItem>
                                    </Box>
                                </List>
                            </Typography>
                        </Grid>
                        <Grid item sx={{width: "350px"}}>
                            <div style={{height: "150px"}} className = "flex flex-col justify-evenly">
                                <Box>
                                    <TextField InputLabelProps={{ style: {fontSize: 14, fontFamily: "Rajdhani"}}}  inputProps={{ style: {fontSize: 14, fontFamily: "Rajdhani"}}}  sx={{width: "300px", "& .MuiInputLabel-root": {color: '#D1AA68'}, "& .MuiOutlinedInput-root": {"& > fieldset": { borderColor: "#D1AA68" },'&:hover fieldset': {borderColor: '#D1AA68',},'&.Mui-focused fieldset': {borderColor: '#D1AA68',},}}} size="small" placeholder="Type your password" />
                                </Box>
                                <Box>
                                    <TextField InputLabelProps={{style: {fontSize: 14, fontFamily: "Rajdhani"}}}  inputProps={{ style: {fontSize: 14, fontFamily: "Rajdhani"}}}  sx={{width: "300px","& .MuiInputLabel-root": {color: '#D1AA68'}, "& .MuiOutlinedInput-root": {"& > fieldset": { borderColor: "#D1AA68" },'&:hover fieldset': {borderColor: '#D1AA68',},'&.Mui-focused fieldset': {borderColor: '#D1AA68',},}}} size="small" placeholder="Confirm your password" />
                                </Box>
                            </div>
                        </Grid>
                    </div>
                </Grid>
                <div style = {{width: "550px"}} className="flex justify-end pt-5 pr-12">
                    <Button variant="contained" style = {{backgroundColor: "#6D4C71", borderRadius: 10}}>
                        <Typography sx={{textTransform: "none"}} fontFamily="Rajdhani">
                            Finish
                        </Typography>
                    </Button>
                </div>
                
            </Box>
        </div>
        
    );
}
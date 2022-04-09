// @mui material components
import { createTheme } from "@mui/material/styles";
// import Fade from "@mui/material/Fade";

import colors from "./base/colors";

import appBar from "./components/appBar";

export default createTheme({
    palette: { ...colors },
    components:{
        NonnaAppBar: { ...appBar },
    }
});
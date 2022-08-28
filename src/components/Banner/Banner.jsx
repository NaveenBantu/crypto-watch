// import Carousel from "./Carousel";
import { Container, Typography, styled } from "@mui/material";

const CustomBanner = styled('div')(({ theme }) => ({
    backgroundImage: "url(./banner2.jpg)",
}))

const ContainerBanner = styled(Container)(({ theme }) => ({
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
}))

const TagLine = styled('div')(({ theme }) => ({
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
}))

//   carousel: {
//     height: "50%",
//     display: "flex",
//     alignItems: "center",
//   },

function Banner() {
    return (
        <CustomBanner>
            <ContainerBanner>
                <TagLine>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                        }}
                    >
                        Crypto Watch
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Get all the Info regarding your favorite Crypto Currency
                    </Typography>
                </TagLine>
                {/* <Carousel /> */}
            </ContainerBanner>
        </CustomBanner>
    );
}

export default Banner;
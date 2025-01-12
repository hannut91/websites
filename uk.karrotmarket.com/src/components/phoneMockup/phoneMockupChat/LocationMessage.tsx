import { styled } from "@src/gatsby-theme-stitches/stitches.config";
import { motion } from "framer-motion";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { em } from "polished";
import { messageMotionOption } from "./_config";

const Pin = () => (
    <svg width={em(46)} height={em(46)} viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M26.5418 40.6874C35.898 39.0154 43 30.8371 43 21C43 9.9543 34.0457 1 23 1C11.9543 1 3 9.9543 3 21C3 30.8371 10.1019 39.0154 19.4582 40.6874L22.1679 44.55C22.5638 45.1437 23.4362 45.1437 23.832 44.55L26.5418 40.6874Z"
            fill="#FF7E36"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23 12C18.5706 12 15 15.7608 15 20.3743C15 23.4528 16.7349 26.1933 18.4711 28.1795C20.223 30.1838 22.0783 31.5359 22.5207 31.8469C22.8111 32.051 23.1889 32.051 23.4793 31.8469C23.9217 31.5359 25.777 30.1838 27.5289 28.1795C29.2651 26.1933 31 23.4528 31 20.3743C31 15.7608 27.4294 12 23 12ZM23 23C24.6569 23 26 21.6569 26 20C26 18.3431 24.6569 17 23 17C21.3431 17 20 18.3431 20 20C20 21.6569 21.3431 23 23 23Z"
            fill="white"
        />
    </svg>
);

const Container = styled("div", {
    border: `${em(1)} solid $gray200`,
    borderRadius: em(16),
    overflow: "hidden",
    marginBottom: em(14),
    position: "relative",
});
const Image = styled("img", {
    width: em(226),
    height: em(130),
    verticalAlign: "middle",
});
const Button = styled("div", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: em(42),
    width: "100%",
    fontSize: em(16),
    color: "$gray700",
});

const Wrapper = styled(motion.div, {
    display: "flex",
    variants: {
        userType: {
            sender: {
                justifyContent: "flex-end",
            },
            receiver: {
                justifyContent: "flex-start",
            },
        },
    },
});
const CenterContainer = styled("div", {
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%,-50%)",
});

interface LocationMessageProps {
    buttonText: string;
    userType?: "sender" | "receiver";
    image?: string;
}

const LocationMessage: React.FC<LocationMessageProps> = ({ buttonText, image, userType }) => {
    return (
        <Wrapper userType={userType} {...messageMotionOption}>
            <Container>
                <Image src={image} />
                <Button>{buttonText}</Button>
                <CenterContainer>
                    <Pin></Pin>
                </CenterContainer>
            </Container>
        </Wrapper>
    );
};

export default LocationMessage;

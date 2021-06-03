import React from "react";
import { rem } from "polished";
import { graphql } from "gatsby";
import { styled } from "gatsby-theme-stitches/src/stitches.config";

import { Html } from "@src/components/Html";
import { Flex } from "@src/components/Flex";
import { Space } from "@src/components/Space";
import AppLink from "@src/components/AppLink";
import Image from "../Image";

type HeroSectionProps = {
    content: GatsbyTypes.PrismicGlobalContentsBodyHeroSection;
};

export const query = graphql`
    fragment HeroSection_content on PrismicGlobalContentsBodyHeroSection {
        primary {
            title {
                text
                html
            }
            background_image {
                url
            }
            side_image {
                url
                dimensions {
                    width
                    height
                }
                alt
                thumbnails {
                    mobile {
                        url
                        dimensions {
                            width
                            height
                        }
                    }
                }
            }
        }
    }
`;

const Section = styled("section", {
    height: "582px",
    width: "100%",
    backgroundPosition: "bottom 0px right -70px;",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    "@md": {
        height: "780px",
        backgroundPosition: "center",
    },
});

const Container = styled("div", {
    height: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    textAlign: "center",
    "@md": {
        width: "$maxContent",
        flexDirection: "row",
        textAlign: "left",
        justifyContent: "initial",
        alignItems: "initial",
    },
});

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
    if (!content.primary) return <></>;

    const { title, background_image, side_image } = content.primary;

    return (
        <Section css={{ backgroundImage: `url(${background_image?.url})` }}>
            <Container>
                <Flex colCenterY>
                    <Html html={title?.html} />
                    <Space h={{ "@i": 0, "@md": 36 }}></Space>
                    <AppLink theme="dark" type="desktop"></AppLink>
                </Flex>

                <Flex ai="flex-end">
                    <Image
                        src={side_image?.url}
                        alt={side_image?.alt}
                        width={{ "@i": side_image?.thumbnails?.mobile?.dimensions?.width, "@md": side_image?.dimensions?.width }}
                        height={{ "@i": side_image?.thumbnails?.mobile?.dimensions?.height, "@md": side_image?.dimensions?.height }}
                    ></Image>
                </Flex>
            </Container>
        </Section>
    );
};

export default HeroSection;
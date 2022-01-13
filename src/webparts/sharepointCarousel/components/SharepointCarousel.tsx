import styled from 'styled-components';
import * as React from 'react';
import { ISharepointCarouselProps } from './ISharepointCarouselProps';


export default class SharepointCarousel extends React.Component<ISharepointCarouselProps, {}> {
	public render(): React.ReactElement<ISharepointCarouselProps> {
		return (
			<BannerContainer>
				<BannerCore>
					<ImageContainer>
						<Image src='https://globalvale.sharepoint.com/teams/PortalEngenharia/SiteAssets/images/Banners/ArteFundo.png'></Image>
						<BannerContent>
							<BannerTitle>Valendo!</BannerTitle>
							<BannerText>
								Compartilhe conosco sua experiência de aprendizado e ajude outras pessoas a aprenderem com seus erros
							</BannerText>
							<BannerButton>
								<span>Acessar</span>
								<div>{'>'}</div>
							</BannerButton>
						</BannerContent>
					</ImageContainer>
				</BannerCore>
				<DotsContainer>
					<Dot></Dot>
					<DotActive></DotActive>
					<Dot></Dot>
					<Dot></Dot>
				</DotsContainer>
			</BannerContainer>
		);
	}
}

export const BannerContainer = styled.div`
	position: relative;
	margin:0;
	padding:0;
`

export const BannerCore = styled.div`
	display: block;
    height: 300px;
    position: relative;
`

export const DotsContainer = styled.div`
	position: absolute;
    bottom: 10px;
    right: 28px;
`

export const Dot = styled.div`
	float: left;
    margin: 12px;
    border-radius: 100%;
    width: 12px;
    height: 12px;
    background: 0 0;
    border: 1px solid #fff;
    cursor: pointer;
`
export const DotActive = styled.div`
    background: #fff 0 0 no-repeat padding-box;
	float: left;
    margin: 12px;
    border-radius: 100%;
    width: 12px;
    height: 12px;
    background: 0 0;
    border: 1px solid #fff;
    cursor: pointer;
`

export const ImageContainer = styled.div`
	position: relative;
    width: 100%;
    height: 100%;
    float: right;
    overflow: hidden;
`

export const Image = styled.img`
	position: absolute;
    width:100%;
    height: 100%;
    top: 0;
    right: 0;
`

export const BannerContent = styled.div`
	top: 0;
    position: absolute;
    height: calc(100% - 80px);
    width: calc(50% - 80px);
    left: 0;
    padding: 40px;
    background: #edb111;
    border-color: transparent transparent #edb111;
`
export const BannerTitle = styled.h3`
	color: #007e7a;
    display: inline-block;
    font-size: 27px;
    margin: 0;
    font-family: CaeciliaLTStd-Roman;
`
export const BannerText = styled.p`	
	margin: 15px 0;
    color: #fff;
    font-size: 15px;
`

export const BannerButton = styled.a`
	background: #007e7a 0 0 no-repeat padding-box;
    border-radius: 4px;
    padding: 10px 15px;
    width: 97px;
    display: flex;
    justify-content: space-evenly;
    color: #fff;
    text-decoration: none;
`

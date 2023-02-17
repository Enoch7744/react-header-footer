import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background-color: #3b5998;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 16px;
`;

const ShareButton = () => {
  const handleShare = (platform) => {
    // Define the URL you want to share
    const shareUrl = "https://www.your-website.com";

    switch (platform) {
      case "whatsapp":
        window.open(`whatsapp://send?text=${encodeURIComponent(shareUrl)}`);
        break;
      case "pinterest":
        window.open(`http://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}`);
        break;
      case "telegram":
        window.open(`https://telegram.me/share/url?url=${encodeURIComponent(shareUrl)}`);
        break;
      case "discord":
        window.open(`https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify%20email%20connections%20guilds.join&state=STATE`);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Button onClick={() => handleShare("whatsapp")}>Share on WhatsApp</Button>
      <Button onClick={() => handleShare("pinterest")}>Share on Pinterest</Button>
      <Button onClick={() => handleShare("telegram")}>Share on Telegram</Button>
      <Button onClick={() => handleShare("discord")}>Share on Discord</Button>
    </div>
  );
};

export default ShareButton;

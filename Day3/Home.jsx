import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NavBar from '../NavBar';

import './Home.css'
import { WhatsappShareButton } from 'react-share';
import SharedState from './SharedState';

const Home = () => {
  const baseUrl = 'https://www.tn.gov.in/scheme/data_view'; // Replace this with the actual base URL
  const shareText = 'Check out to Various Scheme to get benificial!!';
  const shareUrl = `${baseUrl}?text=${encodeURIComponent(shareText)}`;
  const handleShareClick = () => {
    console.log("dfdf");
    SharedState.setSharedContent('Hi');
    window.location.href = '/loan'; 
  };
  return (
    <div className='nn'style={{backgroundImage: 'url("https://img.freepik.com/free-vector/pink-watercolor-abstract-background_52683-73541.jpg?size=626&ext=jpg")', backgroundSize: 'cover', minHeight: '100vh',height:'1000px',paddingLeft:'20px'}}>
      <NavBar />
      <br/><br/>
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>

        <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://www.shutterstock.com/image-vector/background-wheat-field-tractor-harvester-600nw-2199822123.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The sprint campaign of <a>Kisan Credit Card</a> (KCC) saturation drive, titled as Kisan Bhagidari Prathmikta Humaari (KBPH),from April 24 to May 1
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'red' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
         <Button style={{ color: 'red' }} size="small" onClick={handleShareClick}>
          Apply
        </Button>
        </CardActions>
      </Card>

      
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://cdni.iconscout.com/illustration/premium/thumb/farming-4737480-3937444.png"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A Special Drive has been undertaken by the Department for providing all dairy farmers of Milk Cooperatives and Milk Producer Companies with Kisan Credit Cards (KCC).
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'red' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://breezeagro.com/public/storage/images/1621003191.jpg"
          title="red iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Sponsored By: Central
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Nationwide AHDF KCC Campaign from 15th November 2021 to 15th February 2022, for providing Kisan Credit Card facility to all eligible Animal Husbandry and Fishery Farmers.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'red' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
        
        </CardActions>
      </Card>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOp3212dpUiYs6BCOmZfcToOJxSCmSuf7leQ&usqp=CAU"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          50% of the cost of the seed subject to a maximum of Rs.1200/-per Quintal whichever is less
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'red' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'red'}} href="https://www.tn.gov.in/scheme/data_view/6853" size="small">Learn More</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://image.slidesdocs.com/responsive-images/background/farm-cartoon-illustration-powerpoint-background_bc1f14220e__960_540.jpg"
          title="red iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Soil health card will be distributed to all the farmers who have offered the soil sample for testing by paying prescribed fee of Rs.5/- each for Macro and Micro nutrient testing

          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'red' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'red'}}  href="https://www.tn.gov.in/scheme/data_view/6849" size="small">Learn More</Button>
        </CardActions>
      </Card>
      
      <Card sx={{ maxWidth: 345, marginRight: '10px', marginBottom: '20px' }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://cm-cdn.creditmantri.com/community/article/how-to-get-agriculture-loans-in-india.jpg"
          title="red iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          Sponsored By: State
          </Typography>
          <Typography variant="body2" color="text.secondary">
          20% on power consumption charges for 36 months from Date of Commence -ment of Production or date of power connection whichever is later.
          </Typography>
        </CardContent>
        <CardActions>
        <WhatsappShareButton url={shareUrl} title="Check out the Scheme to get Benificial for EveryOne!">
          <Button style={{ color: 'red' }} size="small">
            Share
          </Button>
         </WhatsappShareButton>
          <Button style={{color:'red'}}href="https://www.tn.gov.in/scheme/data_view/19670" size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
    </div>
  );
}
export default Home;
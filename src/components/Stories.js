import React from "react";
import foto from "../assets/img/testefoto.jpg";
import dog from "../assets/img/foto-perfil-dog.webp";
import foto2 from "../assets/img/foto-perfil-2.png";
import foto3 from "../assets/img/foto-perfil-3.png";
import foto4 from "../assets/img/foto-perfil-4.jpg";
import { Swiper, SwiperSlide } from 'swiper/react'; /* npm i swiper */

import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stories />
  );
}
class Stories extends React.Component {
    render() {
        return(
            <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
        )
    }
    
  
}
// class Stories extends React.Component {
    

    

//       render() {
//         return (
//             <div className="Stories-Container">
//                 <Swiper slidesPerView={16} spaceBetween={1}
//                     pagination={{ clickable: true }}
//                     className="mySwiper"
//                 // modules={[Pagination]} 
//                 >
//                     <SwiperSlide onClick={() => setModalShow(true)}><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto3} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto2} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={dog} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto4} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto3} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto2} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto3} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={dog} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={dog} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto4} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={dog} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={dog} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto4} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto2} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto3} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto2} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={dog} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto3} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={foto} alt="foto-perfil" /></SwiperSlide>
//                     <SwiperSlide><img className="Storie" src={dog} alt="foto-perfil" /></SwiperSlide>
//                 </Swiper>

                
//             </div>
//         )
//     }

// }

// export default Stories;
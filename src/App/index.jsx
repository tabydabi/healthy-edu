import React from 'react'

import Navbar from '@/components/NavBar'
import InputPage from '@/components/Input'
import TableStats from '@/components/Stats'
import Hero from '@/components/Image'
import LeftSide from '@/components/LeftSide'
import { urlencoded } from 'body-parser'

// export default () => (
//   <React.Fragment>
//     <div style={{ background: '#ebf1ff' }}>
//       <Navbar />
//       <div>
//         <p>Booking of doctor’s appointment</p>
//         <p>
//           Don’t Miss Our
//           <br /> Exclusive Patient
//           <br /> Special
//         </p>
//         <p>
//           We want to make sure that everyone has access to
//           natural
//           <br /> and effective care. With our special,
//           you’ll receive a <br /> consultation and a digital
//           posture assesment.
//         </p>
//         <InputPage />
//         <Stats />
//       </div>
//     </div>
//   </React.Fragment>
// )

// export default () => (
//   <React.Fragment>
//     <div
//       style={{
//         backgroundColor: '#EBF1FF',
//         height: '100vh',
//         width: '100wh',
//       }}>
//       <Navbar />
//       <div
//         style={{
//           display: 'flex',
//           width: '100%',
//           height: '400px',
//           backgroundImage:
//             'url(https://i.ibb.co/5jfRX6F/Hero-Image.png)',
//           backgroundRepeat: 'no-repeat',
//           backgroundPosition: 'center right ',
//           backgroundSize: '27%',
//         }}>
//         <div style={{ width: '50%', height: '500px' }}>
//           <p>Booking of doctor’s appointment</p>
//           <p>
//             Don’t Miss Our
//             <br /> Exclusive Patient
//             <br /> Special
//           </p>
//           <p>
//             We want to make sure that everyone has access to
//             natural <br /> and effective care. With our
//             special, you’ll receive a <br /> consultation
//             and a digital posture assesment.
//           </p>
//           <InputPage />
//           <TableStats />
//         </div>
//       </div>
//     </div>
//   </React.Fragment>
// )

export default () => (
  <React.Fragment>
    <div
      style={{
        backgroundColor: '#EBF1FF',
        height: '100vh',
        width: '100wh',
      }}>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: '50%',
            height: '100%',
            padding: '0.2rem calc((100vw - 1000px) / 2)',
          }}>
          <p style={{ fontSize: '14px', color: '#215EE9' }}>
            Booking of doctor’s appointment
          </p>
          <p style={{}}>
            Don’t Miss Our
            <br /> Exclusive Patient
            <br /> Special
          </p>
          <p>
            We want to make sure that everyone has access to
            natural <br /> and effective care. With our
            special, you’ll receive a <br /> consultation
            and a digital posture assesment.
          </p>
          <InputPage />
          <TableStats />
        </div>
        <div
          style={{
            width: '100%',
            height: '400px',
            backgroundImage:
              'url(https://i.ibb.co/5jfRX6F/Hero-Image.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: '70%',
          }}>
          {/* <img
            src="https://i.ibb.co/5jfRX6F/Hero-Image.png"
            style={{
              width: '60%',
            }}></img> */}
        </div>
      </div>
    </div>
  </React.Fragment>
)

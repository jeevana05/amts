// const ticket=()=>
// {
//     return(
//         <div>Ticket Booking</div>
//     )
// }
// export default ticket

// "use client";
// import React, { useState } from 'react';
// import styles from './ticket.module.css';

// const TicketBooking = () => {
//   const [direction, setDirection] = useState('Jammalamadugu to Kadapa');

//   const handleDirectionChange = () => {
//     setDirection(direction === 'Jammalamadugu to Kadapa' ? 'Kadapa to Jammalamadugu' : 'Jammalamadugu to Kadapa');
//   };

//   return (
//     <div>
//       <div>
//         <input type="text" value={direction} readOnly className={styles.directionInput} />
//       </div>
//       <div>
//         <button className={styles.button} onClick={handleDirectionChange}>Ticket Booking</button>
//         <button className={styles.button}>Ticket Booking</button>
//       </div>
//     </div>
//   );
// };

// export default TicketBooking;

// import Image from 'next/image';
// import styles from './ticket.module.css';

// const Ticket = () => {
//     return (
//         <div>
//             <h2>Ticket Booking</h2>
//             <div className={styles.buttonContainer}>
//                 <div className={styles.ticketOption}>
//                     <Image src="/pic1.jpg" alt="Metro Ticket 1" layout="fill" className={styles.ticketImage} />
//                     <p className={styles.ticketText}>JMD to KDP</p>
//                     <button className={styles.bookButton}>Book Now</button>
//                 </div>
//                 <div className={styles.ticketOption}>
//                     <Image src="/pic2.jpg" alt="Metro Ticket 2" layout="fill" className={styles.ticketImage} />
//                     <p className={styles.ticketText}>KDP to JMD</p>
//                     <button className={styles.bookButton}>Book Now</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Ticket;




import Image from 'next/image';
import styles from './ticket.module.css';

const Ticket = () => {
    return (
        <div className={styles.pageContainer}>
            <Image 
                src="/vintageback.jpg" // Path to your background image
                alt="Background Image"
                layout="fill" // Makes the image fill the parent container
                objectFit="cover" // Cover the entire area
                className={styles.backgroundImage} // Custom class for additional styles if needed
            />
            <div className={styles.content}>
                <h2>Ticket Booking</h2>
                <div className={styles.buttonContainer}>
                    <div className={styles.ticketOption}>
                        <Image 
                            src="/pic1.jpg" 
                            alt="Metro Ticket 1" 
                            layout="fill" 
                            className={styles.ticketImage} 
                        />
                        <p className={styles.ticketText}>JMD to KDP</p>
                        <button className={styles.bookButton}>Book Now</button>
                    </div>
                    <div className={styles.ticketOption}>
                        <Image 
                            src="/pic2.jpg" 
                            alt="Metro Ticket 2" 
                            layout="fill" 
                            className={styles.ticketImage} 
                        />
                        <p className={styles.ticketText}>KDP to JMD</p>
                        <button className={styles.bookButton}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ticket;




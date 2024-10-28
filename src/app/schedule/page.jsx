// import Image from "next/image";
// import styles from './schedule.module.css';
// const schedule = () => {
//     return (
//         <div classname={styles.scheduleimg}>
//             <Image src="/jmdkdp.png" alt="Bus Schedule from Kadapa to Jammalamadugu" className="scheduleimg" width={900} height={800} />
//             <Image src="/kdpjmd.png" className="scheduleimg" width={900} height={800} />
            
//         </div>
//     );
// };

// export default schedule;


import Image from "next/image";
import styles from './schedule.module.css';

const Schedule = () => {
    return (
        <div className={styles.scheduleContainer}>
            <Image src="/jmdkdp.png" alt="Bus Schedule from Kadapa to Jammalamadugu" className={styles.scheduleImg} width={650} height={600} />
            <Image src="/kdpjmd.png" alt="Bus Schedule from Jammalamadugu to Kadapa" className={styles.scheduleImg} width={650} height={600} />
        </div>
    );
};

export default Schedule;

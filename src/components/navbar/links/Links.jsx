"use client";
import Link from "next/link"; 
import styles from "./links.module.css"
import NavLink from "./navlink/navlink";
import { useState } from "react";
// import { link } from "fs";

const links =[


    {
        title:"Homepage",
        path:"/",
    },
    {
        title:"About",
        path:"/about",
    },
    {
        title:"Ticket Booking",
        path:"/ticket",
    },
    
    {
        title:"Schedule",
        path:"/schedule",
    },
    
];

const Links =()=>
{
    const [open,setOpen]=useState(false)
    const session=true
    const isAdmin=true
    // return(
    //     <div className={styles.links} >
    //         {links.map((link=>(
    //             <Link href={link.path} key={link.title}>{link.title}</Link>
    //            //<navlink item={link} key={link.title}/>
    //         )))}
    //     </div>
    // )

    return(
        <div className={styles.container}>
            <div className={styles.links} >
                {links.map((link=>(
                    
                    <NavLink item={link} key={link.title}/>
                )))}{
                    session ? (
                        <>
                        
                        {
                            isAdmin && (
                                <NavLink item={{title:"Admin",path:"/admin"}}/>
                            )
                        }
                        <button className={styles.logout}>Logout</button>
                        </>
                    ):(
                        <NavLink item={{title:"Login",path:"/login"}}/>
                    )
                }
            </div>
            <button className={styles.menuButton} onClick={()=>setOpen((prev)=>!prev)}>Menu</button>
            {
                open &&(<div className={styles.mobileLinks}>
                    {links.map((link)=>(
                       <NavLink item= {link} key={link.title}/>
                    ))}
                    </div>
            )}
        </div>
        
    );
};
export default Links
// homepage,booking,schedule,login(user,admin
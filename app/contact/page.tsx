import styles from "../contact/contact.module.css";

import Link from 'next/link'


const ContactPage = () => {
  return (
    <div className= {styles.container}>

       <h1 className= {styles.header}>This is Contact Page</h1>

       <ul>

<li><Link href="/">Go to Home Page</Link></li>

<li><Link href="/about">Go to About Page</Link></li>

<li><Link href="/service">Go to Service Page</Link></li> 
 
 
 </ul> 
    </div>
  )
}

export default ContactPage
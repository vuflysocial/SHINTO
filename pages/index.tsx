import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"
import { ConnectWallet } from "@thirdweb-dev/react"; // import ConnectWallet component
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useMemo } from 'react';

import { faTwitter } from "@fortawesome/free-brands-svg-icons";


const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const textArray = useMemo(() => ["SHINTO!", "LIQUIDITY CONTROL!"], []);

  const deletionSpeed = 50;

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % textArray.length;
      const fullText = textArray[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(
        isDeleting ? deletionSpeed : text.length === fullText.length ? 1000 : 150
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typeTimer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(typeTimer);
  }, [text, isDeleting, typingSpeed, loopNum, textArray]);

  return (
    <div className={styles.container}>
      <Head>
  <title style={{ borderRadius: '5px' }}>THE KAMI SHINTO</title>
  <link rel="icon" href="/BINK.png" />
</Head>



      <header className={styles.header}>
      <Image src="/BINK.png" alt="BINK Logo" width="200" height="100" />

        <h1 className={styles.title}>THE KAMI SHINTO</h1>
        <ConnectWallet /> {/* Render ConnectWallet component here */}
        <button style={{ fontSize: '20px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#FF0000', color: 'white' }} onClick={() => window.location.href='https://www.example.com'}>
    Chart
  </button>
      </header>
    <div>
    
      <div className={styles.container}>
        <main className={styles.main}>
          <Image src="/BINK.png" alt="" className={styles.logo} width={500} height={500}/>
          <h2 className={styles.heading}>{text}</h2>
          <p className={styles.content}>
            <div style={{ textAlign: 'center' }}>
            
             
            </div>
            <div>
            <script src="https://kit.fontawesome.com/2a5c24989c.js" async></script>
<a href="https://twitter.com/meloinu" target="_blank" rel="noopener noreferrer">
  <i className="fab fa-twitter" style={{ color: '#ff1100', width: '5em', height: '5em' }}></i>
</a>

</div>
           
  <div>
    
  <h1>The concept of kami is hard to explain.</h1>
<p>Shintoist&amp;s would say that this is because human beings are simply incapable of forming a true understanding of the nature of kami. To make understanding easier, kami are often described as divine beings, as spirits or gods. But kami are not much like the gods of other faiths:</p>
<ul>
  <li><h5>Kami are not divine like the transcendent and omnipotent deities found in many religions.</h5></li>
  <li><h5>Kami are not omnipotent.</h5></li>
  <li><h5>Kami are not perfect; they sometimes make mistakes and behave badly.</h5></li>
  <li><h5>Kami are not inherently different in kind from human beings or nature; they are just a higher manifestation of the life energy, an extraordinary or awesome version.</h5></li>
  <li><h5>Kami don&apos;t exist in a supernatural universe - they live in the same world as human beings and the world of nature. Kami include the gods that created the universe, but can also include:</h5></li>
  <ul>
    <li><h5>The spirits that inhabit many living beings.</h5></li>
    <li><h5>Some beings themselves.</h5></li>
    <li><h5>Elements of the landscape, like mountains and lakes.</h5></li>
    <li><h5>Powerful forces of nature, like storms and earthquakes.</h5></li>
  </ul>
</ul>
</div>
          </p>
          <button style={{ fontSize: '20px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#FF0000', color: 'white' }} onClick={() => window.location.href='https://www.example.com'}>
    Click me
  </button>
        </main>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image src="/R.gif" alt="your-image-description" width={500} height={500} />

  </div>

      <div>

  <div style={{ textAlign: 'center' }}>
    <h1>Tokenomics</h1>
    
    
    <ul>
      <h5>Name: THE KAMI SHINTO</h5>
      <h5>Symbol: SHINTO</h5>
      <h5>Total Supply: 1000000000</h5>
    </ul>

    <h2>Liquidity</h2>
    <p>Locked for 8 Months</p>

    <h2>TAX</h2>
    <p>The token will be distributed as follows:</p>
    <div>
      <h5>10% - Buy Tax</h5>
      <h5>20% - Sale Tax</h5>
    </div>
  
  </div>
</div>
</div>
    </div>
    
  );
}

export default Home;

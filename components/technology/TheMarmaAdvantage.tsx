"use client";

import React from "react";
import HighlightedText from "../global/HighlightedText";

const MoleculeIcon = () => (
  <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.07068 20.1322C4.40003 17.8028 6.67893 15.2773 9.46881 13.0416C12.2587 10.8058 15.3624 9.01793 18.1826 8.02193C21.0027 7.02597 23.3401 6.8923 24.7447 7.64666C26.1494 8.40104 26.5223 9.99011 25.7914 12.1081C25.0604 14.2261 23.2773 16.7233 20.7855 19.1191C18.2937 21.5149 15.2691 23.64 12.2938 25.0854C9.31858 26.5308 6.60291 27.1943 4.66948 26.9483C2.73609 26.7023 1.72154 25.5641 1.82115 23.7528" stroke="#FF0000" stroke-width="1.2" />
    <path d="M12.2686 1.48946C13.5113 0.166486 14.8678 0.326593 16.0748 1.93863C17.2818 3.5507 18.2532 6.49984 18.8007 10.2139C19.3482 13.9279 19.4326 18.1421 19.0377 22.0388C18.6427 25.9356 17.7965 29.2372 16.6632 31.3031C15.5299 33.3687 14.1904 34.0515 12.9044 33.219C11.6184 32.3862 10.4777 30.0976 9.70354 26.7967C8.9294 23.4958 8.57702 19.4182 8.71478 15.3549C8.85252 11.2916 9.47056 7.53226 10.449 4.80623" stroke="#FF0000" stroke-width="1.2" />
    <path d="M25.2121 26.2034C26.3586 25.2546 26.4654 23.5258 25.5122 21.3422C24.559 19.1585 22.6118 16.6705 20.0367 14.346C17.4616 12.0216 14.4361 10.0209 11.5293 8.72041C8.62253 7.41988 6.03476 6.90905 4.25274 7.28406C2.47071 7.65906 1.61727 8.89401 1.85289 10.7566C2.08851 12.6193 3.397 14.9812 5.53222 17.3982C7.66744 19.8152 10.4823 22.1207 13.4472 23.881C16.4121 25.6413 19.3229 26.7352 21.632 26.9568" stroke="#FF0000" stroke-width="1.2" />
    <path d="M23.4662 24.8231C24.3903 24.8231 25.1395 25.7266 25.1395 26.8412C25.1395 27.9558 24.3903 28.8594 23.4662 28.8594C22.5421 28.8594 21.793 27.9558 21.793 26.8412C21.793 25.7266 22.5421 24.8231 23.4662 24.8231Z" stroke="#FF0000" stroke-width="1.2" />
    <path d="M11.1947 1.26837C12.1189 1.26837 12.868 2.17193 12.868 3.28653C12.868 4.40113 12.1189 5.30469 11.1947 5.30469C10.2706 5.30469 9.52148 4.40113 9.52148 3.28653C9.52148 2.17193 10.2706 1.26837 11.1947 1.26837Z" stroke="#FF0000" stroke-width="1.2" />
    <path d="M2.27287 19.7762C3.19698 19.7762 3.94613 20.6797 3.94613 21.7943C3.94613 22.9089 3.19698 23.8125 2.27287 23.8125C1.34875 23.8125 0.599609 22.9089 0.599609 21.7943C0.599609 20.6797 1.34875 19.7762 2.27287 19.7762Z" stroke="#FF0000" stroke-width="1.2" />
  </svg>

);

const advantages = [
  {
    title: "PhishBlock",
    desc: "Phishing is any attempt by a cybercriminal to pretend to be a legitimate institution to trick internet users into providing sensitive information. In fact, up to 40% of modern cyber-attacks are carried out through phishing attempts. Marma's PhishBlock monitors network traffic to detect and flag phishing attempts so you can browse the internet with more confidence.",
  },
  {
    title: "NetImmunity",
    desc: "Cybercriminals use various techniques like DDoS (Distributed Denial of Service), Brute Force, and Device Vulnerability attacks to overwhelm and take control of network devices. Marma's NetImmunity monitors your network for suspicious activity and blocks attempts at these network-based attacks.",
  },
  {
    title: "MalwareGuard",
    desc: "Malware is any software that is designed to damage network-connected devices such as computers or servers. Marma's MalwareGuard monitors the traffic moving into and through your network to look for Malware and effectively block it from damaging your computers or other network devices.",
  },
  {
    title: "NetStealth",
    desc: "Cybercriminals use automated bots and other means to scan your network and learn deeper characteristics about your network devices. They can then use device and network info to identify vulnerabilities on your network to exploit. NetStealth technology maintains a stealth posture for your network so that cybercriminals cannot infiltrate your network or learn more about its vulnerabilities.",
  },
  {
    title: "RansomGuard",
    desc: "Ransomware is a specific form of malicious software that forcefully encrypts files on computers to block a user from accessing the files. It then demands that the user pay a ransom in order to restore access to those files. Ransomware attacks can wreak havoc on small businesses that rely on storing and accessing sensitive data safely. Marma's platform monitors network traffic to identify and block Ransomware from damaging devices on your network.",
  },
  {
    title: "SafeID",
    desc: "Identity theft results in billions of dollars of damage to Americans every year. Marma's SafeID technology monitors network traffic to scan for identity theft attempts and protect your home or business from identity theft.",
  },
  {
    title: "SafeDevices",
    desc: "While antiviruses and VPNs can prevent some cyberattacks that target computers and phones, they cannot effectively protect IoT (Internet of Things) devices like smart doorbells, smart TVs, security cameras, smart thermostats, etc. Cybercriminals can infiltrate these devices to steal user data or use them to attack other devices on your network. Marma's SafeDevices feature monitors traffic to up to 128 connected devices on your network and prevents device infiltrations so you can feel safe when using your connected devices.",
  },
  {
    title: "ScamGuard",
    desc: "Cybercriminals constantly create new scam methods that trick even the most sophisticated internet users into providing sensitive information. Marma's Scamguard learns from the FBI's cyber crime database, internet-published attack models, and other Marma devices to detect and stay up-to-date on the latest cyber scam methods. ScamGuard monitors network data to identify and flag scams so you can worry less when browsing the internet.",
  },
];

export default function TheMarmaAdvantage() {
  return (
    <section className="w-full bg-[var(--color-bg-white)] pt-16 md:pt-24 pb-12 md:pb-20 relative z-0">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-10 md:mb-16">
          <h2 className="fl2-1 mb-6">
            The Marma{" "}
            <HighlightedText
              text="Advantage"
              className="font-bold text-text-dark"
              imageClassName="bottom-[-10px] md:bottom-[-15px] left-0 w-full"
            />
          </h2>
          <p className="fl4-2 opacity-80 max-w-[800px]">
            Marma Security's products use enterprise-grade Firewall, Intrusion Prevention, DNS Security, Content Filtering and AI-powered security software to deliver comprehensive protection from cyberattacks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="bg-[#FAFAFA] rounded-[16px] md:rounded-[20px] p-6 md:p-8 flex flex-col h-full hover:shadow-[0px_4px_24px_-1px_#0000001A] transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex-shrink-0 text-brand-red flex items-center justify-center">
                  <MoleculeIcon />
                </div>
                <h3 className="fl3-3 !leading-none">
                  {adv.title}
                </h3>
              </div>
              <p className="fl4 opacity-80 text-center flex-grow">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import React from 'react'
import Card from './Card'

function Cyber() {
    const data = [
        {
            title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
            di:"In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
            date:"15 December 2024"  
        },
        {
            title:"What Is Hacking? Types of Hacking & More",
            di:"Have you ever wondered what hacking is all about? It’s a big deal in today’s",
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
            date:"15 September 2024"
        },
        {
            title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
            di:'Cybersecurity & Ethical hacking and have been key in making sure that your data online',
            img:'https://tse1.mm.bing.net/th?id=OIP.rS_xiDy4DkJqmCreTYvkowHaEK&pid=Api&P=0&h=180',
            date:'15 August 2024'
        },
        {
            title:'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
            di:'Cybersecurity is the practice of protecting systems, networks, and technologies from malicious',
            img:'https://tse4.mm.bing.net/th?id=OIP.LGQ0Eja_NrJ-XswAs-tqEQHaEo&pid=Api&P=0&h=180',
            date:'15 July 2024'
        },
        {
            title:'8 Different Types of Cybersecurity and Threats Involved',
            di:'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from',
            img:'https://tse2.mm.bing.net/th?id=OIP.vQ37kvNs-VLuvH-WnVLwKgHaEo&pid=Api&P=0&h=180',
            date:'15 June 2024'
        },
        {
            title:'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
            di:'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,',
            img:'https://tse3.mm.bing.net/th?id=OIP.phLZlAzMBIeP9zeULcEAPgHaFt&pid=Api&P=0&h=180',
            date:'15 May 2024'
        }
    ]
  return (
    <div className='container'>
    <div className='row'>
    {
        data.map((e,i)=>{
          return <Card cardData={e} key={i}/>
        })
      }
    </div>
 </div>
  )
}

export default Cyber
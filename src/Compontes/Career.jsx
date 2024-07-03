
import React from 'react'
import Card from './Card'

function Career() {
    const data = [
         {
            title:'Non-Coding Jobs in Cybersecurity: A Comprehensive Guide',
            di:'In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills',
            img:'https://tse2.mm.bing.net/th?id=OIP.I7RID6djf_qDaXu7-dUmwgAAAA&pid=Api&P=0&h=180',
            date:'12 Oct 2024',
         },
         {
            title:'Top IT Jobs for Commerce Students: A Lucrative Career Path',
            di:'With the rapid advancement of technology, the demand for IT professionals has soared in recent',
            img:'https://gondwana.university/wp-content/uploads/2023/05/d57d6efb-highest-salary-jobs-for-commerce-students.jpg',
            date:'10 Oct 2024',
         },
         {
            title:'Automation Test Engineer Resume: 10 Important Things To Consider',
            di:'The world is moving towards automating the testing of products in order to increase work',
            img:'https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-Automation-Test-Engineer-Roles-and-Responsibilities.webp',
            date:'15 September 2024',
         },
         {
            title:'Machine Learning Engineer Resume Guide: 11 Important Things To Include!',
            di:'The current technological era is full of competition and those who have profound skillset are',
            img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/mgd-copy_2x-1200x571.webp',
            date:'15 August 2024',
         },
         {
            title:'Horizontal vs Vertical Scaling for Efficient System Design',
            di:'In the world of system design, envision a digital skyscraper a multifaceted structure built',
            img:'https://tse4.mm.bing.net/th?id=OIP.7R3pXXNsIcqUJqknqN2_egAAAA&pid=Api&P=0&h=180',
            date:'12 August 2024',
         },
         {
            title:"Professional Civil Engineer Resume: A Guide To Attract Employers in 2024",
            di:"The world is moving towards modernization leading to an increase in the popularity of civil",
            img:"https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-3-2048x1072.webp",
            date:"15 July 2024"
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

export default Career
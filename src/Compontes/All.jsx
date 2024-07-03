import React from 'react'
import Card from './Card'

function All() {
    const data = [
        {
            title:'Top Differences: Full Stack Developer vs Software Engineer 2024',
            img:'https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development.webp',
            di:'A Full Stack Developer is a tech all-rounder. They work on both the front and',
            date:'15 November 2024',
        },
        {
           title:'Top Ways to Assess Soft Skills in Full Stack Developers in 2024',
           di:'Are you interested in becoming a full-stack developer but not sure where to start? In this blog',
           img:'https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp',
           date:'3 November 2024',
        },
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
            title:'Top 10 High Paying Non-Coding Jobs in Data Science in 2024',
            di:'Are you someone who’s not interested in coding, but wants to get placed in tech',
            img:'https://tse2.mm.bing.net/th?id=OIP.qyrzaFtNQClriYc0lbYcUQHaDh&pid=Api&P=0&h=180',
            date:'12 September 2024',
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
            title:'Top 10 Product-Based Companies for Full-Stack Developers [2024]',
            di:'In the dynamic landscape of technology, full-stack developers are the architects of the digital world',
            img:'https://tse3.mm.bing.net/th?id=OIP.oFmp5puliIjZNequBoXYwAHaEo&pid=Api&P=0&h=180',
            date:'15 July 2024',
        },
        {
            title:'7 Best Full-Stack Development Online Courses [2024]',
            di:'Today’s world is rapidly evolving into a technological landscape. Owing to these dynamics, the demand',
            img:'https://www.guvi.io/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp',
            date:'12 July 2024',
        },
        {
            title:'Best Data Science Books to Learn in 2024',
            di:'Today, we’re going to talk about something really cool: data science. It’s all about using',
            img:'https://tse3.mm.bing.net/th?id=OIP.VB0aKBfzeaOTb4wfCZOvJAHaEo&pid=Api&P=0&h=180',
            date:'15 June 2024',
        },
        {
            title:'Top 8 Product-based Companies for UI/UX Designers [Freshers]',
            di:'As product-based companies continually innovate and strive to stay ahead of the competition, they seek',
            img:'https://tse3.mm.bing.net/th?id=OIP.WUOHs7xYljdUBkay6I2gnQHaEo&pid=Api&P=0&h=180',
            date:'12 June 2024',
        },
        {
            title:'Impact of Certification Programs on Hiring Data Scientists',
            di:'Data scientists are the creators behind transforming the raw data into edible data insights. These',
            img:'https://www.guvi.in/blog/wp-content/uploads/2023/11/In-Article-Image-1-1200x600.webp',
            date:'15 May 2024',
        },
        {
            title:'Best Books to Learn Full-Stack Development',
            di:'Are you interested in becoming a full-stack developer but not sure where to start? In',
            img:'https://tse2.mm.bing.net/th?id=OIP.6NEqeSkxgEjYiHYUAkdZXwHaEK&pid=Api&P=0&h=180',
            date:'12 May 2024',
        },
        {
            title:'What is the Difference between Data Science and Data Engineering?',
            di:'India has been making some serious waves in the world of data. Just like the',
            img:'https://www.guvi.io/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp',
            date:'15 April 2024',
        },
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

export default All